import { NextResponse } from "next/server";
import {
  CHAT_VISITOR_COOKIE,
  PROJECTS_CHAT_VISITOR_COOKIE,
  addVisitorMessage,
  createChatVisitorToken,
  getVisitorMessages
} from "@/lib/chatStore";

export const runtime = "nodejs";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 90;

function getChannel(request) {
  return request.nextUrl.searchParams.get("channel") === "PROJECTS" ? "PROJECTS" : "MAIN";
}

function getCookieName(channel) {
  return channel === "PROJECTS" ? PROJECTS_CHAT_VISITOR_COOKIE : CHAT_VISITOR_COOKIE;
}

function setVisitorCookie(response, visitorToken, cookieName) {
  response.cookies.set({
    name: cookieName,
    value: visitorToken,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: COOKIE_MAX_AGE
  });
}

export async function GET(request) {
  const channel = getChannel(request);
  const cookieName = getCookieName(channel);
  let visitorToken = request.cookies.get(cookieName)?.value;

  if (!visitorToken) {
    visitorToken = createChatVisitorToken();
    const response = NextResponse.json({ messages: [] });

    setVisitorCookie(response, visitorToken, cookieName);

    return response;
  }

  const { messages } = await getVisitorMessages(visitorToken, channel);
  const response = NextResponse.json({ messages });

  setVisitorCookie(response, visitorToken, cookieName);

  return response;
}

export async function POST(request) {
  const channel = getChannel(request);
  const cookieName = getCookieName(channel);
  const body = await request.json();
  const result = await addVisitorMessage(request.cookies.get(cookieName)?.value, body.message, channel);

  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const response = NextResponse.json({ ok: true, message: result.message });

  setVisitorCookie(response, result.visitorToken, cookieName);

  return response;
}
