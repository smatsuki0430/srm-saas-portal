// src/app/layout.tsx
import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import { normalizeLocalePath, toLang } from "@/lib/locale";

export const metadata: Metadata = {
  title: "SRM SaaS Portal",
  description: "SRM portal",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Next.js 16.1+: headers() は Promise
  const h = await headers();

  const localePath = normalizeLocalePath(h.get("x-srm-locale-path"));
  const lang = toLang(localePath);

  return (
    <html lang={lang}>
      <body>
        <SiteHeader />
        <main className="main">{children}</main>

        <footer className="footer">
          <div className="footerInner">
            <div className="muted">© {new Date().getFullYear()} SRM</div>
            <div className="footerLinks">
              <a href="#" aria-disabled="true">
                Privacy
              </a>
              <a href="#" aria-disabled="true">
                Terms
              </a>
              <a href="#" aria-disabled="true">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}