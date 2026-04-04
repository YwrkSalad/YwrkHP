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
        url: "https://ywrk.org/ywrksalad.png",
        width: 128,
        height: 128,
        alt: "ywrk",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@ywrk81",
    title: "ywrk",
    description: "全ての人にやわらかい顔つきを",
    images: ["https://ywrk.org/ywrksalad.png"],
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
