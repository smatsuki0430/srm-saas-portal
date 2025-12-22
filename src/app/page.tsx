import Link from "next/link";

export default function Home() {
  return (
    <div className="hero">
      <div className="heroInner">
        <h1>SRM SaaS Portal</h1>
        <p className="muted heroLead">
          SRMが提供するプロダクト一覧と、各プロダクトの概要・Pricing（モデル/プラン）を確認できます。
        </p>

        <div className="heroActions">
          <Link className="btn btnPrimary" href="/products">
            Browse Products
          </Link>
          <Link className="btn btnGhost" href="/products/stratos">
            View Stratos
          </Link>
        </div>

        <div className="heroNote muted">
          Pricingは各Productページ内で解説します（共通Pricingページは作りません）。
        </div>
      </div>
    </div>
  );
}
