// src/lib/products.ts

export type ProductPlan = {
  name: string;
  priceLabel: string;
  note?: string;
  bullets: string[];
};

export type Product = {
  slug: string; // URL用。必ず小文字・ハイフン推奨
  name: string; // 表示名
  badge: string; // 右上のバッジ文言
  tagline: string; // 1行キャッチ
  overview: string; // 概要本文
  features: string[]; // 箇条書き
  pricingIntro: string; // Pricing説明（共通Pricingページは作らない方針）
  plans: ProductPlan[]; // 各プロダクト内のプラン
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
    pricingIntro:
      "年額/ユーザー課金を想定。プランは「使えるフレームワークの範囲」と「出力/共有/統制」で差分を設計します。",
    plans: [
      {
        name: "Starter",
        priceLabel: "Per user / year",
        bullets: ["ICP/Segmentation", "3C", "SWOT", "Evidence", "PPTX export"],
      },
      {
        name: "Pro",
        priceLabel: "Per user / year",
        bullets: ["Starterの全て", "5 Forces", "PESTEL", "2x2 Builder"],
      },
      {
        name: "Advance",
        priceLabel: "Per user / year",
        bullets: [
          "Proの全て",
          "Positioning Map",
          "Strategy Option Comparison",
          "North Star Metric / KPI Tree",
          "Risk Register",
        ],
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
      "録画/議事録から要点を抽出し、決定事項とアクションに落とし込みます。社内共有しやすいテンプレ出力により、記録→実行のタイムラグを減らします。",
    features: [
      "要約・決定事項・アクションの自動生成",
      "テンプレ出力（社内共有にそのまま貼れる）",
      "検索・タグ・履歴（予定）",
    ],
    pricingIntro:
      "年額/ユーザー課金を想定。保存期間や高度な出力・統制を上位プランで提供します。",
    plans: [
      {
        name: "Starter",
        priceLabel: "Per user / year",
        bullets: ["基本要約", "決定事項/アクション抽出", "標準テンプレ出力"],
      },
      {
        name: "Pro",
        priceLabel: "Per user / year",
        bullets: ["Starterの全て", "高度テンプレ", "検索・タグ", "共有リンク"],
      },
      {
        name: "Advance",
        priceLabel: "Per user / year",
        bullets: ["Proの全て", "監査/保持ポリシー（予定）", "組織向け管理（予定）"],
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
      "Decision Summary と実行トラッキングを一体化し、Owner/Due を明確化。チームの抜け漏れ・停滞を減らします。",
    features: ["Decision Summary", "Owner/Dueの明確化", "進捗の見える化（予定）"],
    pricingIntro:
      "年額/ユーザー課金を想定。テンプレ、権限、監査、連携を上位プランで拡張します。",
    plans: [
      {
        name: "Starter",
        priceLabel: "Per user / year",
        bullets: ["Decision Summary", "Owner/Due", "基本ボード"],
      },
      {
        name: "Pro",
        priceLabel: "Per user / year",
        bullets: ["Starterの全て", "高度テンプレ", "チーム共有・履歴"],
      },
      {
        name: "Advance",
        priceLabel: "Per user / year",
        bullets: ["Proの全て", "統制/監査（予定）", "連携（予定）"],
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
      "クリップした情報を出典付きで整理し、再利用可能なCitation/Sourceとして蓄積。後から検証できる状態で残します。",
    features: ["Web clipping", "Citation/Source管理", "保持・削除ポリシー設計（予定）"],
    pricingIntro:
      "年額/ユーザー課金を想定。保持/削除、監査、組織管理を上位プランで提供します。",
    plans: [
      {
        name: "Starter",
        priceLabel: "Per user / year",
        bullets: ["基本クリップ", "出典メタデータ", "基本検索"],
      },
      {
        name: "Pro",
        priceLabel: "Per user / year",
        bullets: ["Starterの全て", "構造化テンプレ", "共有・タグ"],
      },
      {
        name: "Advance",
        priceLabel: "Per user / year",
        bullets: ["Proの全て", "保持/削除ポリシー（予定）", "監査（予定）"],
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
      "Salesforceネイティブを前提に、Permission Set中心のSKU/権限モデル、監査ログ、エクスポートを整備し、業務統制とスケールを両立します。",
    features: ["Salesforce Native（Managed Package想定）", "SKU/権限（Permission Set）設計", "監査/エクスポート（planned）"],
    pricingIntro:
      "年額/ユーザー課金を想定。Small/MediumはAppExchange、Enterpriseは直販等の設計余地があります。",
    plans: [
      {
        name: "Small",
        priceLabel: "Per user / year",
        bullets: ["基本OS機能（想定）", "標準権限セット（想定）"],
      },
      {
        name: "Medium",
        priceLabel: "Per user / year",
        bullets: ["Smallの全て", "拡張権限セット（想定）", "追加統制（想定）"],
      },
      {
        name: "Enterprise",
        priceLabel: "Contact sales",
        bullets: ["個別要件", "直販/契約運用", "拡張・統合（想定）"],
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
