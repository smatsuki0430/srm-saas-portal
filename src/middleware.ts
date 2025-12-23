// src/middleware.ts
import { NextRequest, NextResponse } from "next/server";

const DEFAULT_LOCALE = "jp" as const;

/**
 * SRM SaaS Portal - URL Canonicalization Middleware
 *
 * Goals:
 * - www.srm-llc.biz -> srm-llc.biz (301)
 * - / -> /jp (301)  ※ 現状の運用に合わせて /jp をデフォルトに固定
 * - /products... (locale無し) -> /jp/products... (301)
 * - /ja... -> /jp... (301)  ※ 既に /ja が使われる可能性に備えて安全に吸収
 *
 * Plus:
 * - Downstream(Server Components)向けに x-srm-locale-path を付与
 */
export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = (req.headers.get("host") ?? "").toLowerCase();
  const pathname = url.pathname;

  // Ignore Next internal assets and common static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  // 1) Canonical host: www -> apex
  if (host.startsWith("www.")) {
    const redirectUrl = new URL(req.url);
    redirectUrl.host = host.replace(/^www\./i, "");
    return NextResponse.redirect(redirectUrl, 301);
  }

  // 2) Default locale: / -> /jp
  if (pathname === "/" || pathname === "") {
    url.pathname = `/${DEFAULT_LOCALE}`;
    return NextResponse.redirect(url, 301);
  }

  // 3) Absorb /ja -> /jp (keep rest path)
  if (pathname === "/ja" || pathname.startsWith("/ja/")) {
    url.pathname = pathname.replace(/^\/ja(\/|$)/, `/${DEFAULT_LOCALE}$1`);
    return NextResponse.redirect(url, 301);
  }

  // 4) Locale-less /products -> /jp/products
  if (pathname === "/products" || pathname.startsWith("/products/")) {
    url.pathname = pathname.replace(
      /^\/products(\/|$)/,
      `/${DEFAULT_LOCALE}/products$1`,
    );
    return NextResponse.redirect(url, 301);
  }

  // ---- Downstreamへ localePath を渡す（/jp or /en を判定）----
  const seg1 = pathname.split("/")[1];
  const localePath = seg1 === "en" ? "en" : "jp";

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-srm-locale-path", localePath);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

/**
 * Apply middleware to all routes except:
 * - /_next/*
 * - static files with extensions (e.g. .png, .css, .js, .map, .ico, etc.)
 * - /api/*
 */
export const config = {
  matcher: ["/((?!api/|_next/|.*\\..*).*)"],
};