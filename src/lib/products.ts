// src/lib/products.ts
export type Locale = "ja" | "en";

export type Plan = {
  name: string;
  priceNote: string; // 例: "Per user / year"
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
};

export type ProductI18n = {
  badge: string;
  tagline: string;
  overviewTitle: string;
  overview: string;
  featuresTitle: string;
  features: string[];
  pricingTitle: string;
  pricingNote: string;
  plans: Plan[];
  backLabel: string;
};

export type Product = {
  slug: string;
  name: string;
  logo?: string; // /products/xxx.png など
  i18n: Record<Locale, ProductI18n>;
  purchaseMode: "stripe" | "sales"; // stripe=即購入, sales=問い合わせ
};

export const products: Product[] = [
  {
    slug: "stratos",
    name: "Stratos",
    logo: "/products/stratos.png",
    purchaseMode: "sales",
    i18n: {
      ja: {
        badge: "Strategy analysis web app（ストラトス）",
        tagline:
          "ICP/Segmentationから各種フレームワーク、Evidence管理、共有、PPTX出力までを一気通貫で実行できる戦略策定ワークスペース。",
        overviewTitle: "Overview",
        overview:
          "市場・競合・自社の仮説をフレームワークで素早く構造化し、根拠（Evidence）とセットで蓄積。意思決定に必要なアウトプットをPPTXとして再利用可能な形で生成します。",
        featuresTitle: "Key features",
        features: [
          "Strategy Workspace（ICP/Segmentation, 3C, SWOT, PESTEL, 5 Forces など）",
          "Evidence（根拠の貼り付け・整理）と共有",
          "PPTX export（社内・顧客・投資家向け）",
        ],
        pricingTitle: "Pricing（モデル/プラン）",
        pricingNote:
          "年額/ユーザー課金を想定。プランは「使えるフレームワークの範囲」と「出力/共有/統制」で差分を設計します。",
        plans: [
          {
            name: "Starter",
            priceNote: "Per user / year",
            bullets: ["ICP/Segmentation", "3C", "SWOT", "Evidence", "PPTX export"],
            ctaLabel: "Contact sales",
            ctaHref: "/ja/products/stratos",
          },
          {
            name: "Pro",
            priceNote: "Per user / year",
            bullets: ["Starterの全て", "5 Forces", "PESTEL", "2x2 Builder"],
            ctaLabel: "Contact sales",
            ctaHref: "/ja/products/stratos",
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
            ctaHref: "/ja/products/stratos",
          },
        ],
        backLabel: "Back to Products",
      },
      en: {
        badge: "Strategy analysis web app (Stratos)",
        tagline:
          "An end-to-end strategy workspace from ICP/Segmentation to frameworks, evidence management, collaboration, and PPTX export.",
        overviewTitle: "Overview",
        overview:
          "Rapidly structure market/competitive/company hypotheses using proven frameworks, keep them tied to evidence, and generate decision-ready outputs you can reuse as PPTX.",
        featuresTitle: "Key features",
        features: [
          "Strategy Workspace (ICP/Segmentation, 3C, SWOT, PESTEL, 5 Forces, etc.)",
          "Evidence capture + organization + sharing",
          "PPTX export for internal, customer, and investor use",
        ],
        pricingTitle: "Pricing (model/plans)",
        pricingNote:
          "Assumed per-user annual pricing. Plans differ by framework coverage and governance/sharing/output controls.",
        plans: [
          {
            name: "Starter",
            priceNote: "Per user / year",
            bullets: ["ICP/Segmentation", "3C", "SWOT", "Evidence", "PPTX export"],
            ctaLabel: "Contact sales",
            ctaHref: "/en/products/stratos",
          },
          {
            name: "Pro",
            priceNote: "Per user / year",
            bullets: ["Everything in Starter", "5 Forces", "PESTEL", "2x2 Builder"],
            ctaLabel: "Contact sales",
            ctaHref: "/en/products/stratos",
          },
          {
            name: "Advance",
            priceNote: "Per user / year",
            bullets: [
              "Everything in Pro",
              "Positioning Map",
              "Strategy Option Comparison",
              "North Star Metric / KPI Tree",
              "Risk Register",
            ],
            ctaLabel: "Contact sales",
            ctaHref: "/en/products/stratos",
          },
        ],
        backLabel: "Back to Products",
      },
    },
  },

  {
    slug: "videonotes",
    name: "VideoNotes",
    logo: "/products/videonotes.png",
    purchaseMode: "stripe",
    i18n: {
      ja: {
        badge: "Meeting/Video → Notes → Actions",
        tagline:
          "動画・会議の要点抽出、要約、決定事項、次アクションまでを高速生成。運用しやすいテンプレと出力形式で、会議のムダを削減。",
        overviewTitle: "Overview",
        overview:
          "録画/音声から、議事録・決定事項・ToDoをテンプレ化して自動生成。社内共有にそのまま貼れる形式で出力します。",
        featuresTitle: "Key features",
        features: ["要約・決定事項・アクションの自動生成", "テンプレ出力（社内共有にそのまま貼れる）", "検索・タグ・履歴（予定）"],
        pricingTitle: "Pricing（モデル/プラン）",
        pricingNote:
          "Stripeによるオンライン決済（プラン別）。詳細は購入フロー内で表示します。",
        plans: [
          {
            name: "Standard",
            priceNote: "Subscription",
            bullets: ["基本テンプレ", "書き起こし/要約", "アクション抽出"],
            ctaLabel: "Buy now",
            ctaHref: "/ja/checkout?product=videonotes&plan=standard",
          },
          {
            name: "Pro",
            priceNote: "Subscription",
            bullets: ["Standardの全て", "高度なテンプレ", "共有/履歴強化"],
            ctaLabel: "Buy now",
            ctaHref: "/ja/checkout?product=videonotes&plan=pro",
          },
          {
            name: "Team",
            priceNote: "Subscription",
            bullets: ["Proの全て", "チーム管理", "権限/監査（予定）"],
            ctaLabel: "Buy now",
            ctaHref: "/ja/checkout?product=videonotes&plan=team",
          },
        ],
        backLabel: "Back to Products",
      },
      en: {
        badge: "Meeting/Video → Notes → Actions",
        tagline:
          "Generate key points, summaries, decisions, and next actions from meetings/videos—fast. Templates and output formats that reduce meeting waste.",
        overviewTitle: "Overview",
        overview:
          "Turn recordings into structured notes with decisions and next actions. Export in a format you can paste directly into your internal docs.",
        featuresTitle: "Key features",
        features: ["Auto summary / decisions / next actions", "Template outputs", "Search / tags / history (planned)"],
        pricingTitle: "Pricing (model/plans)",
        pricingNote:
          "Online payment via Stripe (plan-based). Details are shown in the purchase flow.",
        plans: [
          {
            name: "Standard",
            priceNote: "Subscription",
            bullets: ["Core templates", "Transcription & summary", "Action extraction"],
            ctaLabel: "Buy now",
            ctaHref: "/en/checkout?product=videonotes&plan=standard",
          },
          {
            name: "Pro",
            priceNote: "Subscription",
            bullets: ["Everything in Standard", "Advanced templates", "Better sharing/history"],
            ctaLabel: "Buy now",
            ctaHref: "/en/checkout?product=videonotes&plan=pro",
          },
          {
            name: "Team",
            priceNote: "Subscription",
            bullets: ["Everything in Pro", "Team management", "Roles/audit (planned)"],
            ctaLabel: "Buy now",
            ctaHref: "/en/checkout?product=videonotes&plan=team",
          },
        ],
        backLabel: "Back to Products",
      },
    },
  },

  {
    slug: "doneflow",
    name: "DoneFlow",
    logo: "/products/doneflow.png",
    purchaseMode: "stripe",
    i18n: {
      ja: {
        badge: "Decision & execution flow, simplified",
        tagline:
          "意思決定（Decision）→実行（Done）を一本化し、責任と進捗を見える化。軽量運用で「やり切る」ことにフォーカス。",
        overviewTitle: "Overview",
        overview:
          "Decision Summaryを中心に、Owner/Dueを明確化し、実行までを短いサイクルで回します。",
        featuresTitle: "Key features",
        features: ["Decision Summary", "Owner/Dueの明確化", "進捗の見える化（予定）"],
        pricingTitle: "Pricing（モデル/プラン）",
        pricingNote: "Stripeによるオンライン決済（プラン別）。詳細は購入フロー内で表示します。",
        plans: [
          {
            name: "Standard",
            priceNote: "Subscription",
            bullets: ["Decision Summary", "Owner/Due", "通知（基本）"],
            ctaLabel: "Buy now",
            ctaHref: "/ja/checkout?product=doneflow&plan=standard",
          },
          {
            name: "Pro",
            priceNote: "Subscription",
            bullets: ["Standardの全て", "テンプレ強化", "履歴/検索"],
            ctaLabel: "Buy now",
            ctaHref: "/ja/checkout?product=doneflow&plan=pro",
          },
          {
            name: "Team",
            priceNote: "Subscription",
            bullets: ["Proの全て", "チーム運用機能", "権限（予定）"],
            ctaLabel: "Buy now",
            ctaHref: "/ja/checkout?product=doneflow&plan=team",
          },
        ],
        backLabel: "Back to Products",
      },
      en: {
        badge: "Decision & execution flow, simplified",
        tagline:
          "Unify decisions and execution, clarify ownership and due dates, and keep progress visible—so teams actually finish.",
        overviewTitle: "Overview",
        overview:
          "Center your workflow on Decision Summaries, assign Owner/Due, and run short execution cycles.",
        featuresTitle: "Key features",
        features: ["Decision Summary", "Clear Owner/Due", "Progress visibility (planned)"],
        pricingTitle: "Pricing (model/plans)",
        pricingNote: "Online payment via Stripe (plan-based). Details are shown in the purchase flow.",
        plans: [
          {
            name: "Standard",
            priceNote: "Subscription",
            bullets: ["Decision Summary", "Owner/Due", "Basic notifications"],
            ctaLabel: "Buy now",
            ctaHref: "/en/checkout?product=doneflow&plan=standard",
          },
          {
            name: "Pro",
            priceNote: "Subscription",
            bullets: ["Everything in Standard", "Better templates", "History/search"],
            ctaLabel: "Buy now",
            ctaHref: "/en/checkout?product=doneflow&plan=pro",
          },
          {
            name: "Team",
            priceNote: "Subscription",
            bullets: ["Everything in Pro", "Team operations", "Roles (planned)"],
            ctaLabel: "Buy now",
            ctaHref: "/en/checkout?product=doneflow&plan=team",
          },
        ],
        backLabel: "Back to Products",
      },
    },
  },

  {
    slug: "citesnap",
    name: "CiteSnap",
    logo: "/products/citesnap.png",
    purchaseMode: "stripe",
    i18n: {
      ja: {
        badge: "Web clipper + structured citations",
        tagline:
          "Web情報をワンクリックでクリップし、引用・根拠管理を構造化。調査・提案・意思決定に必要なEvidenceを崩さず保存。",
        overviewTitle: "Overview",
        overview:
          "引用（ソース）とメモを構造化して保存。後から検索・再利用しやすい形でEvidenceを蓄積します。",
        featuresTitle: "Key features",
        features: ["Web clipping", "Citation/Source管理", "保持・削除ポリシー設計（予定）"],
        pricingTitle: "Pricing（モデル/プラン）",
        pricingNote: "Stripeによるオンライン決済（プラン別）。詳細は購入フロー内で表示します。",
        plans: [
          {
            name: "Standard",
            priceNote: "Subscription",
            bullets: ["クリップ", "引用管理", "基本検索"],
            ctaLabel: "Buy now",
            ctaHref: "/ja/checkout?product=citesnap&plan=standard",
          },
          {
            name: "Pro",
            priceNote: "Subscription",
            bullets: ["Standardの全て", "タグ/整理強化", "共有"],
            ctaLabel: "Buy now",
            ctaHref: "/ja/checkout?product=citesnap&plan=pro",
          },
          {
            name: "Team",
            priceNote: "Subscription",
            bullets: ["Proの全て", "権限/監査（予定）", "ポリシー強化（予定）"],
            ctaLabel: "Buy now",
            ctaHref: "/ja/checkout?product=citesnap&plan=team",
          },
        ],
        backLabel: "Back to Products",
      },
      en: {
        badge: "Web clipper + structured citations",
        tagline:
          "Clip web content in one click and manage citations as structured evidence—built for research, proposals, and decision-making.",
        overviewTitle: "Overview",
        overview:
          "Store citations and notes in a structured way so evidence remains searchable and reusable over time.",
        featuresTitle: "Key features",
        features: ["Web clipping", "Citation/source management", "Retention & deletion policies (planned)"],
        pricingTitle: "Pricing (model/plans)",
        pricingNote: "Online payment via Stripe (plan-based). Details are shown in the purchase flow.",
        plans: [
          {
            name: "Standard",
            priceNote: "Subscription",
            bullets: ["Clipping", "Citation management", "Basic search"],
            ctaLabel: "Buy now",
            ctaHref: "/en/checkout?product=citesnap&plan=standard",
          },
          {
            name: "Pro",
            priceNote: "Subscription",
            bullets: ["Everything in Standard", "Tags & organization", "Sharing"],
            ctaLabel: "Buy now",
            ctaHref: "/en/checkout?product=citesnap&plan=pro",
          },
          {
            name: "Team",
            priceNote: "Subscription",
            bullets: ["Everything in Pro", "Roles/audit (planned)", "Policy controls (planned)"],
            ctaLabel: "Buy now",
            ctaHref: "/en/checkout?product=citesnap&plan=team",
          },
        ],
        backLabel: "Back to Products",
      },
    },
  },

  {
    slug: "d2v-os",
    name: "D2V OS",
    logo: "/products/d2v-os.png",
    purchaseMode: "sales",
    i18n: {
      ja: {
        badge: "Salesforce-native Managed Package（planned）",
        tagline:
          "Salesforce内で動作するネイティブな業務OS（Managed Package想定）。権限設計、監査、エクスポートまでを標準化し、社内運用と顧客提供を両立。",
        overviewTitle: "Overview",
        overview:
          "Salesforceネイティブで、データ/権限/監査/エクスポートをパッケージ化。運用とコンプライアンスを両立します。",
        featuresTitle: "Key features",
        features: ["Salesforce Native（Managed Package想定）", "SKU/権限（Permission Set）設計", "監査/エクスポート（planned）"],
        pricingTitle: "Pricing（モデル/プラン）",
        pricingNote:
          "基本はContact sales（導入形態・規模・要件により個別見積）。",
        plans: [
          {
            name: "Enterprise",
            priceNote: "Custom",
            bullets: ["Managed Package提供", "権限設計", "監査/エクスポート設計"],
            ctaLabel: "Contact sales",
            ctaHref: "/ja/products/d2v-os",
          },
          {
            name: "Plus",
            priceNote: "Custom",
            bullets: ["Enterpriseの全て", "追加連携/要件対応", "運用設計支援"],
            ctaLabel: "Contact sales",
            ctaHref: "/ja/products/d2v-os",
          },
          {
            name: "Premier",
            priceNote: "Custom",
            bullets: ["Plusの全て", "専任支援", "拡張開発"],
            ctaLabel: "Contact sales",
            ctaHref: "/ja/products/d2v-os",
          },
        ],
        backLabel: "Back to Products",
      },
      en: {
        badge: "Salesforce-native Managed Package (planned)",
        tagline:
          "A Salesforce-native operating layer. Standardize permissions, auditing, and exports for internal operations and customer delivery.",
        overviewTitle: "Overview",
        overview:
          "Package governance and compliance as a Salesforce-native managed solution across data, permissions, audits, and exports.",
        featuresTitle: "Key features",
        features: ["Salesforce native (Managed Package)", "SKU/permission set design", "Audit/export (planned)"],
        pricingTitle: "Pricing (model/plans)",
        pricingNote: "Contact sales (custom quote based on deployment model, scale, and requirements).",
        plans: [
          {
            name: "Enterprise",
            priceNote: "Custom",
            bullets: ["Managed Package delivery", "Permissions design", "Audit/export design"],
            ctaLabel: "Contact sales",
            ctaHref: "/en/products/d2v-os",
          },
          {
            name: "Plus",
            priceNote: "Custom",
            bullets: ["Everything in Enterprise", "Add-ons/integrations", "Ops design support"],
            ctaLabel: "Contact sales",
            ctaHref: "/en/products/d2v-os",
          },
          {
            name: "Premier",
            priceNote: "Custom",
            bullets: ["Everything in Plus", "Dedicated support", "Custom extensions"],
            ctaLabel: "Contact sales",
            ctaHref: "/en/products/d2v-os",
          },
        ],
        backLabel: "Back to Products",
      },
    },
  },
];

export function getProducts(locale: Locale) {
  return products.map((p) => ({
    slug: p.slug,
    name: p.name,
    logo: p.logo,
    purchaseMode: p.purchaseMode,
    ...p.i18n[locale],
  }));
}

export function getProductBySlug(locale: Locale, slug: string) {
  const p = products.find((x) => x.slug === slug);
  if (!p) return null;
  return {
    slug: p.slug,
    name: p.name,
    logo: p.logo,
    purchaseMode: p.purchaseMode,
    ...p.i18n[locale],
  };
}
