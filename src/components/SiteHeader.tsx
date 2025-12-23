// src/components/SiteHeader.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSelect from "@/components/LanguageSelect";

function getLocaleFromPath(pathname: string) {
  const seg = pathname.split("/")[1];
  return seg === "en" ? "en" : "ja";
}

export default function SiteHeader() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);

  return (
    <header className="header">
      <div className="headerInner">
        <Link className="brand" href={`/${locale}`}>
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
          <Link className="navLink" href={`/${locale}/products`}>
            Products
          </Link>
        </nav>

        <div className="navCta">
          <Link className="btn btnPrimary" href={`/${locale}/products`}>
            Get started
          </Link>

          {/* Get started の右隣 */}
          <LanguageSelect />
        </div>
      </div>
    </header>
  );
}
