// src/app/[locale]/page.tsx
import Link from "next/link";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: "ja" | "en" }>;
}) {
  const { locale } = await params;

  const t =
    locale === "ja"
      ? {
          kicker: "SRM SaaS Portal",
          title: "SRM SaaS Portal",
          desc: "SRMが提供するプロダクト一覧と、各プロダクトの概要・Pricing（モデル/プラン）を確認できます。",
          btn1: "Browse Products",
        }
      : {
          kicker: "SRM SaaS Portal",
          title: "SRM SaaS Portal",
          desc: "Browse SRM products and view overview + pricing model/plans on each product page.",
          btn1: "Browse Products",
        };

  return (
    <div className="container">
      <section className="hero">
        <div className="heroKicker">{t.kicker}</div>
        <h1 className="heroTitle">{t.title}</h1>
        <p className="heroDesc">{t.desc}</p>

        <div className="heroActions">
          <Link className="btn btnPrimary" href={`/${locale}/products`}>
            {t.btn1}
          </Link>
        </div>

        <div className="heroNote">
          {locale === "ja"
            ? "Pricingは各Productページ内で解説します（共通Pricingページは作りません）。"
            : "Pricing is explained within each product page (no shared pricing page)."}
        </div>
      </section>
    </div>
  );
}
