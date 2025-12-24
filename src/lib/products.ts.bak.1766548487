// src/lib/products.ts

export type Locale = "jp" | "en";

export type Plan = {
  name: string;
  priceNote: string; // e.g. "Per user / year"
  bullets: string[];
  ctaLabel: string; // e.g. "Buy now", "Contact sales"
  ctaHref: string; // e.g. "/checkout?product=videonotes&plan=starter"
};

export type Product = {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  overview: string;
  features: string[];
  plans: Plan[];
};

export const products: Product[] = [
  {
    slug: "stratos",
    name: "Stratos",
    badge: "Strategy analysis web app（ストラトス）",
    tagline:
      "ICP/Segmentationから各種フレームワーク、Evidence管理、共有、PPTX出力までを一気通貫で実行できる戦略策定ワークスペース。",
    overview:
      "市場・競合・自社の仮説をフレームワークで素早く構造化し、根拠（Evidence）とセットで蓄積。意思決定に必要なアウトプットをPPTXとして再利用可能な形で生成します。",
    features: [
      "Strategy Workspace（ICP/Segmentation, 3C, SWOT, PESTEL, 5 Forces など）",
      "Evidence（根拠の貼り付け・整理）と共有",
      "PPTX export（社内・顧客・投資家向け）",
    ],
    // Stratos は Contact Sales
    plans: [
      {
        name: "Starter",
        priceNote: "Per user / year",
        bullets: ["ICP/Segmentation", "3C", "SWOT", "Evidence", "PPTX export"],
        ctaLabel: "Contact sales",
        ctaHref: "/products/stratos",
      },
      {
        name: "Pro",
        priceNote: "Per user / year",
        bullets: ["Starterの全て", "5 Forces", "PESTEL", "2x2 Builder"],
        ctaLabel: "Contact sales",
        ctaHref: "/products/stratos",
      },
      {
        name: "Advance",
        priceNote: "Per user / year",
        bullets: [
          "Proの全て",
          "Positioning Map",
          "Strategy Option Comparison",
          "North Star Metric / KPI Tree",
          "Risk Register",
        ],
        ctaLabel: "Contact sales",
        ctaHref: "/products/stratos",
      },
    ],
  },

  {
    slug: "videonotes",
    name: "VideoNotes",
    badge: "Meeting/Video → Notes → Actions",
    tagline:
      "動画・会議の要点抽出、要約、決定事項、次アクションまでを高速生成。運用しやすいテンプレと出力形式で、会議のムダを削減。",
    overview:
      "会議や動画から、要点・決定事項・次アクションを自動生成し、共有しやすいフォーマットで出力します。",
    features: [
      "要約・決定事項・アクションの自動生成",
      "テンプレ出力（社内共有にそのまま貼れる）",
      "検索・タグ・履歴（予定）",
    ],
    // VideoNotes は Stripe 決済（Contact Sales は出さない）
    plans: [
      {
        name: "Starter",
        priceNote: "Per user / year",
        bullets: ["基本の要約/決定/アクション生成", "テンプレ出力"],
        ctaLabel: "Buy now",
        ctaHref: "/checkout?product=videonotes&plan=starter",
      },
      {
        name: "Pro",
        priceNote: "Per user / year",
        bullets: ["Starterの全て", "高度テンプレ", "履歴/検索の強化（予定）"],
        ctaLabel: "Buy now",
        ctaHref: "/checkout?product=videonotes&plan=pro",
      },
      {
        name: "Advance",
        priceNote: "Per user / year",
        bullets: ["Proの全て", "チーム運用向け機能（予定）"],
        ctaLabel: "Buy now",
        ctaHref: "/checkout?product=videonotes&plan=advance",
      },
    ],
  },

  {
    slug: "doneflow",
    name: "DoneFlow",
    badge: "Decision & execution flow, simplified",
    tagline:
      "意思決定（Decision）→実行（Done）を一本化し、責任と進捗を見える化。軽量運用で「やり切る」ことにフォーカス。",
    overview:
      "意思決定と実行の情報を一つの流れに統合し、Owner/Due を明確化。チームの前進を阻む曖昧さを減らします。",
    features: ["Decision Summary", "Owner/Dueの明確化", "進捗の見える化（予定）"],
    // DoneFlow は Stripe 決済（Contact Sales は出さない）
    plans: [
      {
        name: "Starter",
        priceNote: "Per user / year",
        bullets: ["Decision→Done の基本フロー", "Owner/Due"],
        ctaLabel: "Buy now",
        ctaHref: "/checkout?product=doneflow&plan=starter",
      },
      {
        name: "Pro",
        priceNote: "Per user / year",
        bullets: ["Starterの全て", "運用テンプレ", "軽量レポート"],
        ctaLabel: "Buy now",
        ctaHref: "/checkout?product=doneflow&plan=pro",
      },
      {
        name: "Advance",
        priceNote: "Per user / year",
        bullets: ["Proの全て", "チーム運用（予定）"],
        ctaLabel: "Buy now",
        ctaHref: "/checkout?product=doneflow&plan=advance",
      },
    ],
  },

  {
    slug: "citesnap",
    name: "CiteSnap",
    badge: "Web clipper + structured citations",
    tagline:
      "Web情報をワンクリックでクリップし、引用・根拠管理を構造化。調査・提案・意思決定に必要なEvidenceを崩さず保存。",
    overview:
      "調査時の根拠を“再利用できる形”で保存し、引用や出典管理を一元化します。",
    features: ["Web clipping", "Citation/Source管理", "保持・削除ポリシー設計（予定）"],
    // CiteSnap は Stripe 決済（Contact Sales は出さない）
    plans: [
      {
        name: "Starter",
        priceNote: "Per user / year",
        bullets: ["基本クリップ", "出典情報の保持"],
        ctaLabel: "Buy now",
        ctaHref: "/checkout?product=citesnap&plan=starter",
      },
      {
        name: "Pro",
        priceNote: "Per user / year",
        bullets: ["Starterの全て", "構造化メタデータ", "共有"],
        ctaLabel: "Buy now",
        ctaHref: "/checkout?product=citesnap&plan=pro",
      },
      {
        name: "Advance",
        priceNote: "Per user / year",
        bullets: ["Proの全て", "保持/削除ポリシー（予定）"],
        ctaLabel: "Buy now",
        ctaHref: "/checkout?product=citesnap&plan=advance",
      },
    ],
  },

  {
    slug: "d2v-os",
    name: "D2V OS",
    badge: "Salesforce-native Managed Package（planned）",
    tagline:
      "Salesforce内で動作するネイティブな業務OS（Managed Package想定）。権限設計、監査、エクスポートまでを標準化し、社内運用と顧客提供を両立。",
    overview:
      "Salesforceネイティブの権限・監査・エクスポートを標準化し、運用負荷を抑えながら統制を効かせます。",
    features: [
      "Salesforce Native（Managed Package想定）",
      "SKU/権限（Permission Set）設計",
      "監査/エクスポート（planned）",
    ],
    // D2V OS は Contact Sales
    plans: [
      {
        name: "Starter",
        priceNote: "Per user / year",
        bullets: ["基本権限設計", "初期導入支援（想定）"],
        ctaLabel: "Contact sales",
        ctaHref: "/products/d2v-os",
      },
      {
        name: "Pro",
        priceNote: "Per user / year",
        bullets: ["Starterの全て", "統制機能の拡張（想定）"],
        ctaLabel: "Contact sales",
        ctaHref: "/products/d2v-os",
      },
      {
        name: "Advance",
        priceNote: "Per user / year",
        bullets: ["Proの全て", "監査/エクスポート（planned）"],
        ctaLabel: "Contact sales",
        ctaHref: "/products/d2v-os",
      },
    ],
  },
];

// ✅ locale 側の Products 一覧が import している export を復活
export function getProducts(_locale: Locale) {
  // いまは日本語固定データだが、呼び出し互換のために残す
  return products;
}

// ✅ 互換性のためオーバーロード：slug1引数/locale+slug2引数どちらでも動く
export function getProductBySlug(slug: string): Product | undefined;
export function getProductBySlug(locale: Locale, slug: string): Product | undefined;
export function getProductBySlug(a: string, b?: string): Product | undefined {
  const slug = b ?? a;
  return products.find((p) => p.slug === slug);
}
