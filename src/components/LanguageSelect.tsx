// src/components/LanguageSelect.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";

const LOCALES = ["ja", "en"] as const;

function getLocaleFromPath(pathname: string) {
  const seg = pathname.split("/")[1];
  return seg === "en" ? "en" : "ja";
}

export default function LanguageSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const current = getLocaleFromPath(pathname);

  const onChange = (nextLocale: string) => {
    const parts = pathname.split("/");
    const seg1 = parts[1];

    if (LOCALES.includes(seg1 as any)) {
      parts[1] = nextLocale;
    } else {
      // middleware で基本来ない想定だが一応
      parts.splice(1, 0, nextLocale);
    }

    const nextPath = parts.join("/") || "/";
    router.push(nextPath);
  };

  return (
    <select
      className="langSelect"
      value={current}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Language"
    >
      <option value="ja">日本語</option>
      <option value="en">English</option>
    </select>
  );
}
