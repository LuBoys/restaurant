import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Braise & Or | Burgers premium a Paris",
  description:
    "Landing page premium Braise & Or. Burgers signatures, ingredients d'exception et reservation en ligne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
