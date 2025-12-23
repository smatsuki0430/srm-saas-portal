// src/middleware.ts
import { NextRequest, NextResponse } from "next/server";

const SUPPORTED = ["ja", "en"] as const;
type Locale = (typeof SUPPORTED)[number];

function isAsset(pathname: string) {
  // 拡張子ありは静的ファイル扱い（/brand/srm.png など）
  return /\.[a-zA-Z0-9]+$/.test(pathname);
}

function detectLocale(req: NextRequest): Locale {
  // 1) Cloudflare（将来 Cloudflare 配下なら自動で入る）
  const cf = req.headers.get("cf-ipcountry");
  if (cf) {
    if (cf.toUpperCase() === "JP") return "ja";
    return "en";
  }

  // 2) Accept-Language
  const al = req.headers.get("accept-language") || "";
  if (al.toLowerCase().includes("ja")) return "ja";
  return "en";
}

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  if (isAsset(pathname)) return NextResponse.next();
  if (pathname.startsWith("/_next")) return NextResponse.next();
  if (pathname.startsWith("/api")) return NextResponse.next();

  // 既に /ja または /en なら通す
  const seg1 = pathname.split("/")[1];
  if (SUPPORTED.includes(seg1 as Locale)) return NextResponse.next();

  // locale 無しは locale 付きへ
  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  url.search = search;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
