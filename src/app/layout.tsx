// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "SRM SaaS Portal",
  description: "SRM portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
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
