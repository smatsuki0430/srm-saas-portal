export type Product = {
  slug: string;
  name: string;
  badge: string;
  oneLiner: string;
  description: string;
  bullets: string[];
  pricing: {
    headline: string;
    model: string;
    plans: { name: string; price: string; note?: string; items: string[] }[];
  };
};

export const PRODUCTS: Product[] = [
  {
    slug: "stratos",
    name: "Stratos",
    badge: "Strategy analysis web app（ストラトス）",
    oneLiner: "ICP/Segmentationから各種フレームワーク、Evidence管理、共有、PPTX出力まで一気通貫の戦略策定WS。",
    description:
      "戦略フレームワークを“作る→根拠を紐づける→比較する→共有する→PPTXで出す”まで、ワークフローとして最短化します。",
    bullets: [
      "Strategy Workspace（ICP/Segmentation, 3C, SWOT, PESTEL, 5 Forces など）",
      "Evidence（根拠の貼り付け・整理）と共有",
      "PPTX export（社内・顧客・投資家向け）",
    ],
    pricing: {
      headline: "Pricing（per user / year）",
      model: "テナント内の混在なし（同一テナントは同一ティア）。Viewerは無料。",
      plans: [
        {
          name: "Starter",
          price: "¥xx,xxx / user / year",
          items: [
            "ICP/Segmentation",
            "3C + SWOT",
            "Evidence + Sharing",
            "PPTX Export",
          ],
        },
        {
          name: "Pro",
          price: "¥xx,xxx / user / year",
          items: ["Starterの全て", "5 Forces", "PESTEL", "2x2 Builder"],
        },
        {
          name: "Advance",
          price: "¥xx,xxx / user / year",
          items: [
            "Proの全て",
            "Positioning Map",
            "Strategy Option Comparison",
            "North Star Metric / KPI Tree",
            "Risk Register",
          ],
        },
      ],
    },
  },
  {
    slug: "videonotes",
    name: "VideoNotes",
    badge: "Meeting/Video → Notes → Actions",
    oneLiner: "動画・会議から要点抽出→要約→決定事項→次アクションまでを高速生成。会議のムダを削減。",
    description:
      "録画/議事録から“読む/まとめる/配る/次を決める”を自動化。運用しやすいテンプレと出力形式で定着を支援します。",
    bullets: [
      "要約・決定事項・アクションの自動生成",
      "テンプレ出力（社内共有にそのまま貼れる）",
      "検索・タグ・履歴（予定）",
    ],
    pricing: {
      headline: "Pricing（per user / year）",
      model: "まずは社内向けの軽量運用を前提に設計（詳細は確定次第更新）。",
      plans: [
        {
          name: "Starter",
          price: "¥xx,xxx / user / year",
          items: ["Notes生成", "Action生成", "テンプレ出力"],
        },
        {
          name: "Pro",
          price: "¥xx,xxx / user / year",
          items: ["Starterの全て", "検索/タグ", "履歴管理"],
        },
      ],
    },
  },
  {
    slug: "doneflow",
    name: "DoneFlow",
    badge: "Decision & execution flow, simplified",
    oneLiner: "意思決定（Decision）→実行（Done）を一本化。責任と進捗を見える化し“やり切る”に集中。",
    description:
      "決定事項が“誰の/いつまで/何を/どこまで”に落ちずに消える問題を解消。軽量に回せる運用設計を重視します。",
    bullets: ["Decision Summary", "Owner/Dueの明確化", "進捗の見える化（予定）"],
    pricing: {
      headline: "Pricing（per user / year）",
      model: "プロジェクト単位でスケールしやすい座席課金を想定。",
      plans: [
        {
          name: "Starter",
          price: "¥xx,xxx / user / year",
          items: ["Decision Summary", "Owner/Due", "基本テンプレ"],
        },
        {
          name: "Pro",
          price: "¥xx,xxx / user / year",
          items: ["Starterの全て", "進捗可視化", "通知/連携（予定）"],
        },
      ],
    },
  },
  {
    slug: "citesnap",
    name: "CiteSnap",
    badge: "Web clipper + structured citations",
    oneLiner: "Web情報をワンクリックでクリップし、引用・根拠管理を構造化。Evidenceを崩さず保存。",
    description:
      "調査の“出典が消える/再現できない”を防ぎ、提案・意思決定に必要な根拠を再利用可能な形で蓄積します。",
    bullets: ["Web clipping", "Citation/Source管理", "保持・削除ポリシー設計（予定）"],
    pricing: {
      headline: "Pricing（per user / year）",
      model: "個人〜小規模チーム導入を起点にPLGで拡大できる設計を想定。",
      plans: [
        {
          name: "Starter",
          price: "¥xx,xxx / user / year",
          items: ["Web clipping", "基本Citation", "エクスポート（予定）"],
        },
        {
          name: "Pro",
          price: "¥xx,xxx / user / year",
          items: ["Starterの全て", "構造化テンプレ", "保持/削除（予定）"],
        },
      ],
    },
  },
  {
    slug: "d2v-os",
    name: "D2V OS",
    badge: "Salesforce-native Managed Package（planned）",
    oneLiner: "Salesforce内で動作するネイティブ業務OS。権限設計・監査・エクスポートを標準化。",
    description:
      "Managed Package想定で、社内運用と顧客提供を両立。SKU/権限（Permission Set）設計を中核にします。",
    bullets: [
      "Salesforce Native（Managed Package想定）",
      "SKU/権限（Permission Set）設計",
      "監査/エクスポート（planned）",
    ],
    pricing: {
      headline: "Pricing（per user / year）",
      model: "Small/MediumはAppExchange、Enterpriseは直販（想定）。詳細は確定次第更新。",
      plans: [
        {
          name: "Small",
          price: "¥xx,xxx / user / year",
          items: ["コア機能", "基本権限セット", "標準設定"],
        },
        {
          name: "Medium",
          price: "¥xx,xxx / user / year",
          items: ["Smallの全て", "拡張権限", "運用テンプレ（予定）"],
        },
        {
          name: "Enterprise",
          price: "要見積",
          items: ["直販", "要件に応じた拡張", "セキュリティ/監査対応（予定）"],
        },
      ],
    },
  },
];

export const PRODUCT_BY_SLUG: Record<string, Product> = Object.fromEntries(
  PRODUCTS.map((p) => [p.slug, p]),
);
