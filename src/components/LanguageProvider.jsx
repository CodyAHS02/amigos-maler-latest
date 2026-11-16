"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { locales, translateMessage } from "@/lib/i18n";

const LanguageContext = createContext(null);

function translateLegacyText(locale) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];

  while (walker.nextNode()) {
    const node = walker.currentNode;
    const parent = node.parentElement;
    if (!parent || parent.closest("script, style, textarea, input, [data-i18n-skip]")) continue;
    nodes.push(node);
  }

  nodes.forEach((node) => {
    const original = node.__amigosI18nOriginal || node.nodeValue;
    node.__amigosI18nOriginal = original;
    const current = node.nodeValue;
    const translated = translateMessage(original.trim(), locale);
    node.nodeValue = translated ? current.replace(current.trim(), translated) : current;
  });
}

function translateLegacyAttributes(locale) {
  document.querySelectorAll("[alt], [title], [aria-label], [placeholder], [data-name]").forEach((element) => {
    ["alt", "title", "aria-label", "placeholder", "data-name"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      element.__amigosI18nOriginalAttributes ||= {};
      element.__amigosI18nOriginalAttributes[attribute] ||= element.getAttribute(attribute);
      const original = element.__amigosI18nOriginalAttributes[attribute];
      const translated = translateMessage(original, locale);
      if (translated) element.setAttribute(attribute, translated);
    });
  });
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

export default function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem("amigos-locale");
    return locales.includes(saved) ? saved : "en";
  });
  const localeRef = useRef(locale);

  useEffect(() => {
    localeRef.current = locale;
    document.documentElement.lang = locale;
    window.localStorage.setItem("amigos-locale", locale);
    translateLegacyText(locale);
    translateLegacyAttributes(locale);
  }, [locale]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      translateLegacyText(localeRef.current);
      translateLegacyAttributes(localeRef.current);
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const value = useMemo(() => ({
    locale,
    setLocale: (nextLocale) => {
      if (locales.includes(nextLocale)) setLocaleState(nextLocale);
    },
    t: (value) => translateMessage(value, locale)
  }), [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
