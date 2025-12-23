import { NextRequest, NextResponse } from "next/server";

/**
 * SRM SaaS Portal - URL Canonicalization Middleware
 *
 * Goals:
 * - www.srm-llc.biz -> srm-llc.biz (301)
 * - / -> /jp (301)  ※デフォルト言語は /jp に固定
 * - /products... (locale無し) -> /jp/products... (301)
 * - /ja... -> /jp... (301)
 *
 * Notes:
 * - Query string は保持
 * - ループを避ける
 */

const DEFAULT_LOCALE = "jp";

function isPublicFile(pathname: string) {
  // 拡張子ありは静的ファイル扱い（/brand/srm.png など）
  return /\.[a-zA-Z0-9]+$/.test(pathname);
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host") ?? "";
  const pathname = url.pathname;

  // Next内部資産・API・静的ファイルは素通し
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    isPublicFile(pathname)
  ) {
    return NextResponse.next();
  }

  // 1) www -> apex（srm-llc.biz）
  if (host.toLowerCase().startsWith("www.")) {
    const apexHost = host.replace(/^www\./i, "");
    const redirectUrl = new URL(req.url);
    redirectUrl.host = apexHost;
    return NextResponse.redirect(redirectUrl, 301);
  }

  // 2) / -> /jp
  if (pathname === "/" || pathname === "") {
    url.pathname = `/${DEFAULT_LOCALE}`;
    return NextResponse.redirect(url, 301);
  }

  // 3) /ja -> /jp（/ja と /ja/... を吸収）
  if (pathname === "/ja" || pathname.startsWith("/ja/")) {
    url.pathname = pathname.replace(/^\/ja(\/|$)/, `/${DEFAULT_LOCALE}$1`);
    return NextResponse.redirect(url, 301);
  }

  // 4) locale無し /products -> /jp/products
  if (pathname === "/products" || pathname.startsWith("/products/")) {
    url.pathname = pathname.replace(
      /^\/products(\/|$)/,
      `/${DEFAULT_LOCALE}/products$1`
    );
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

/**
 * Apply middleware to all routes except:
 * - /_next/*
 * - /api/*
 * - static files with extensions (e.g. .png, .css, .js, .map, .ico, etc.)
 */
export const config = {
  matcher: ["/((?!api/|_next/|.*\\..*).*)"],
};
