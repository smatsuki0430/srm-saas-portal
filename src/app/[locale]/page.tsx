// src/app/[locale]/page.tsx
import Link from "next/link";
import { type LocalePath, toLang } from "@/lib/locale";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: LocalePath }>;
}) {
  const { locale } = await params;
  const lang = toLang(locale);

  const t =
    lang === "ja"
      ? {
          kicker: "SRM SaaS Portal",
          title: "SRM SaaS Portal",
          desc: "SRMが提供するプロダクト一覧と、各プロダクトの概要・Pricing（モデル/プラン）を確認できます。",
          btn1: "プロダクトを見る",
          note: "Pricingは各Productページ内で解説します（共通Pricingページは作りません）。",
        }
      : {
          kicker: "SRM SaaS Portal",
          title: "SRM SaaS Portal",
          desc: "Browse SRM products and view overview + pricing model/plans on each product page.",
          btn1: "Browse Products",
          note: "Pricing is explained within each product page (no shared pricing page).",
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

        <div className="heroNote">{t.note}</div>
      </section>
    </div>
  );
}