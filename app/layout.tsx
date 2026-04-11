import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "やわらか大学",
  description: "やわらかな知性で、世界をひらく。",
  icons: { icon: "/ywrksalad.png" },
  openGraph: {
    title: "やわらか大学",
    description: "やわらかな知性で、世界をひらく。",
    url: "https://ywrk.org",
    siteName: "やわらか大学",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
