// src/components/LanguageSelect.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  type LocalePath,
  normalizeLocalePath,
  replaceLocaleInPath,
} from "@/lib/locale";

export default function LanguageSelect() {
  const router = useRouter();
  const pathname = usePathname();

  const seg1 = pathname.split("/")[1];
  const current: LocalePath = normalizeLocalePath(seg1);

  const onChange = (nextLocale: LocalePath) => {
    const nextPath = replaceLocaleInPath(pathname, nextLocale);
    router.push(nextPath);
  };

  return (
    <select
      className="langSelect"
      value={current}
      onChange={(e) => onChange(e.target.value as LocalePath)}
      aria-label="Language"
    >
      <option value="jp">日本語</option>
      <option value="en">English</option>
    </select>
  );
}