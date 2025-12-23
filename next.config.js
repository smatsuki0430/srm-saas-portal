/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

// 開発時（Replit Preview）専用の許可リスト
// allowedDevOrigins は「ホスト名（スキーム無し）」で指定します。
const devAllowedOrigins = [
  // いま実際にブロックログに出ていた完全ホスト名（最優先で許可）
  "5cd9e831-38dd-4f5c-94f5-c70d98cf1533-00-y8fzkih2kgag.picard.replit.dev",

  // 予備（環境によってはワイルドカードが効く）
  "*.picard.replit.dev",
  "picard.replit.dev",
  "*.replit.dev",
  "*.replit.app",
  "*.repl.co",
];

const nextConfig = {
  // 本番は空（セキュアに）
  allowedDevOrigins: isProd ? [] : devAllowedOrigins,

  // Firebase App Hosting向け
  output: "standalone",
};

module.exports = nextConfig;
