import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ywrk",
  description: "全ての人にやわらかい顔つきを",
  icons: { icon: "/ywrksalad.png" },
  openGraph: {
    title: "ywrk",
    description: "全ての人にやわらかい顔つきを",
    url: "https://ywrk.org",
    siteName: "ywrk",
    images: [
      {
        url: "https://ywrk.org/OGP/OGP_1200x630.png",
        width: 1200,
        height: 630,
        alt: "ywrk",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ywrk81",
    title: "ywrk",
    description: "全ての人にやわらかい顔つきを",
    images: ["https://ywrk.org/OGP/OGP_1200x630.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
