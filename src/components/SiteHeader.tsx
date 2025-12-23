// src/components/SiteHeader.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSelect from "@/components/LanguageSelect";
import { normalizeLocalePath, toLang } from "@/lib/locale";

export default function SiteHeader() {
  const pathname = usePathname();
  const seg1 = pathname.split("/")[1];
  const localePath = normalizeLocalePath(seg1);
  const lang = toLang(localePath);

  return (
    <header className="header">
      <div className="headerInner">
        <Link className="brand" href={`/${localePath}`}>
          <span className="brandWrap">
            <img
              src="/brand/srm.png"
              alt="SRM"
              className="brandLogo"
              loading="eager"
            />
            <span className="brandText">SRM</span>
          </span>
        </Link>

        <nav className="nav">
          <Link className="navLink" href={`/${localePath}/products`}>
            {lang === "ja" ? "プロダクト" : "Products"}
          </Link>
        </nav>

        <div className="navCta">
          <Link className="btn btnPrimary" href={`/${localePath}/products`}>
            {lang === "ja" ? "はじめる" : "Get started"}
          </Link>

          <LanguageSelect />
        </div>
      </div>
    </header>
  );
}