import AdminChatClient from "@/components/admin/AdminChatClient";
import AdminShell from "@/components/admin/AdminShell";
import { getCurrentAdmin } from "@/lib/currentAdmin";
import { getAdminChatConversations } from "@/lib/chatStore";

export const runtime = "nodejs";

export default async function AdminProjectsChatPage() {
  const admin = await getCurrentAdmin();
  const conversations = await getAdminChatConversations("PROJECTS");

  return (
    <AdminShell activePath="/admin/projects-chat" admin={admin} eyebrow="Patricia · Projects" title="Projects Chat">
      <AdminChatClient initialConversations={conversations} initialChannel="PROJECTS" />
    </AdminShell>
  );
}
