// src/app/checkout/page.tsx
import Link from "next/link";

export default function CheckoutPage({
  searchParams,
}: {
  searchParams: { product?: string; plan?: string };
}) {
  const product = searchParams.product ?? "";
  const plan = searchParams.plan ?? "";

  return (
    <div className="container">
      <div className="pageHeader">
        <h1 className="pageTitle">Checkout</h1>
        <p className="pageDesc">
          Stripe Checkout 連携は次のステップで実装します。現在はルーティングの受け皿です。
        </p>
      </div>

      <div className="card">
        <div className="cardTop">
          <div className="cardTitleRow">
            <h2 className="cardTitle">Selected</h2>
            <span className="badge">Stripe（planned）</span>
          </div>
          <p className="cardTagline">
            product: <b>{product}</b> / plan: <b>{plan}</b>
          </p>
        </div>

        <div className="ctaRow">
          <Link className="btn btnPrimary" href="/products">
            Back to Products
          </Link>
          <Link className="btn btnGhost" href="/">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
