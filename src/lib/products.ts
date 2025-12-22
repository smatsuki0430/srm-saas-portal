export type PricingPlan = {
  name: string;
  priceLabel: string; // 例: "$120 / user / year" or "Contact us"
  description: string;
  highlights: string[];
  recommended?: boolean;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  bullets: string[];
  pricing: PricingPlan[];
};

export const products: Product[] = [
  {
    slug: "stratos",
    name: "Stratos",
    tagline: "Strategy analysis web app（ストラトス）",
    summary:
      "ICP/Segmentationから各種フレームワーク、Evidence管理、共有、PPTX出力までを一気通貫で実行できる戦略策定ワークスペース。",
    bullets: [
      "Strategy Workspace（ICP/Segmentation、3C、SWOT、PESTEL、5 Forces など）",
      "Evidence（根拠の貼り付け・整理）と共有",
      "PPTX export（社内・顧客・投資家向け）",
    ],
    pricing: [
      {
        name: "Starter",
        priceLabel: "Per user / year",
        description: "基本フレームワークで戦略立案を最短で開始。",
        highlights: ["ICP/Segmentation", "3C", "SWOT", "PPTX export", "Evidence / Sharing"],
      },
      {
        name: "Pro",
        priceLabel: "Per user / year",
        description: "分析の幅を拡張し、比較検討まで滑らかに。",
        highlights: ["5 Forces", "PESTEL", "2x2 Builder", "Starterの全機能"],
        recommended: true,
      },
      {
        name: "Advance",
        priceLabel: "Per user / year",
        description: "意思決定と実行管理を含む戦略オペレーションへ。",
        highlights: [
          "Positioning Map",
          "Strategy Option Comparison",
          "North Star Metric / KPI Tree",
          "Risk Register",
          "Proの全機能",
        ],
      },
    ],
  },
  {
    slug: "videonotes",
    name: "VideoNotes",
    tagline: "Meeting/Video → Notes → Actions",
    summary:
      "動画・会議の要点抽出、要約、決定事項、次アクションまでを高速生成。運用しやすいテンプレと出力形式で、会議のムダを削減。",
    bullets: [
      "要約・決定事項・アクションの自動生成",
      "テンプレ出力（社内共有にそのまま貼れる）",
      "検索・タグ・履歴（予定）",
    ],
    pricing: [
      {
        name: "Starter",
        priceLabel: "Per user / year",
        description: "個人/小チーム向け。まずは議事録の型を固定化。",
        highlights: ["要約/決定事項/アクション", "テンプレ出力", "基本検索"],
        recommended: true,
      },
      {
        name: "Pro",
        priceLabel: "Per user / year",
        description: "チーム運用を前提に、履歴・タグ・共有を強化。",
        highlights: ["タグ/履歴", "共有リンク", "テンプレ拡張"],
      },
      {
        name: "Enterprise",
        priceLabel: "Contact us",
        description: "権限/監査/保持など組織要件に対応（予定）。",
        highlights: ["RBAC", "監査ログ", "保持/削除ポリシー（予定）"],
      },
    ],
  },
  {
    slug: "doneflow",
    name: "DoneFlow",
    tagline: "Decision & execution flow, simplified",
    summary:
      "意思決定（Decision）→ 実行（Done）を一本化し、責任と進捗を見える化。軽量運用で「やり切る」ことにフォーカス。",
    bullets: ["Decision Summary", "Owner/Dueの明確化", "進捗の見える化（予定）"],
    pricing: [
      {
        name: "Starter",
        priceLabel: "Per user / year",
        description: "個人〜小チームの意思決定を整流化。",
        highlights: ["Decision Summary", "Owner/Due", "基本テンプレ"],
        recommended: true,
      },
      {
        name: "Pro",
        priceLabel: "Per user / year",
        description: "複数案件の運用、状態管理、レビューに強い。",
        highlights: ["ステータス/レビュー運用", "検索/フィルタ", "出力テンプレ"],
      },
      {
        name: "Enterprise",
        priceLabel: "Contact us",
        description: "組織要件（監査/統制/権限）に対応（予定）。",
        highlights: ["RBAC", "監査ログ", "保持/削除ポリシー（予定）"],
      },
    ],
  },
  {
    slug: "citesnap",
    name: "CiteSnap",
    tagline: "Web clipper + structured citations",
    summary:
      "Web情報をワンクリックでクリップし、引用・根拠管理を構造化。調査・提案・意思決定に必要なEvidenceを崩さず保存。",
    bullets: ["Web clipping", "Citation/Source管理", "保持・削除ポリシー設計（予定）"],
    pricing: [
      {
        name: "Starter",
        priceLabel: "Per user / year",
        description: "まずはクリップと引用の型を整える。",
        highlights: ["クリップ", "引用/出典", "基本検索"],
        recommended: true,
      },
      {
        name: "Pro",
        priceLabel: "Per user / year",
        description: "チームでEvidence運用（共有・テンプレ・分類）。",
        highlights: ["共有/分類", "テンプレ", "タグ/履歴（予定）"],
      },
      {
        name: "Enterprise",
        priceLabel: "Contact us",
        description: "保持/削除・監査などコンプラ要件に対応（予定）。",
        highlights: ["保持/削除", "監査ログ", "統制/権限（予定）"],
      },
    ],
  },
  {
    slug: "d2v-os",
    name: "D2V OS",
    tagline: "Salesforce-native Managed Package（planned）",
    summary:
      "Salesforce内で動作するネイティブな業務OS（Managed Package想定）。権限設計、監査、エクスポートまでを標準化し、社内運用と顧客提供を両立。",
    bullets: [
      "Salesforce Native（Managed Package想定）",
      "SKU/権限（Permission Set）設計",
      "監査/エクスポート（planned）",
    ],
    pricing: [
      {
        name: "Small / Medium",
        priceLabel: "Per user / year",
        description: "標準パッケージとして導入しやすく（想定）。",
        highlights: ["Tier別Permission Set", "基本テンプレ", "標準導入フロー"],
        recommended: true,
      },
      {
        name: "Enterprise",
        priceLabel: "Direct sales",
        description: "要件に合わせた設計/移行/統制に対応（想定）。",
        highlights: ["設計支援", "セキュリティ/統制", "監査/エクスポート（planned）"],
      },
    ],
  },
];
