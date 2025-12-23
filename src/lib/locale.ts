// src/lib/locale.ts
export type LocalePath = "jp" | "en";
export type Lang = "ja" | "en";

/**
 * URLの第1セグメント（/jp or /en）を正規化
 * - "en" 以外はすべて "jp" 扱い
 */
export function normalizeLocalePath(seg?: string | null): LocalePath {
  return seg === "en" ? "en" : "jp";
}

/**
 * URL localePath -> 表示言語
 * - jp は日本語表示（ja）
 */
export function toLang(localePath: LocalePath): Lang {
  return localePath === "en" ? "en" : "ja";
}

/**
 * 現在パスの locale を差し替える（/jp/... や /en/... を想定）
 */
export function replaceLocaleInPath(
  pathname: string,
  nextLocale: LocalePath,
): string {
  const parts = pathname.split("/");
  const seg1 = parts[1];

  // 既に /jp or /en の場合は差し替え
  if (seg1 === "jp" || seg1 === "en") {
    parts[1] = nextLocale;
    return parts.join("/") || "/";
  }

  // locale無しのパスは先頭に挿入
  parts.splice(1, 0, nextLocale);
  return parts.join("/") || "/";
}