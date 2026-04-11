import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ywrk.org"),
  title: {
    default: "やわらか大学",
    template: "%s | やわらか大学",
  },
  description: "やわらかな知性で、世界をひらく。",
  icons: { icon: "/ywrksalad.png" },
  openGraph: {
    title: "やわらか大学",
    description: "やわらかな知性で、世界をひらく。",
    url: "https://ywrk.org",
    siteName: "やわらか大学",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/OGP/OGP_1200x630.png",
        width: 1200,
        height: 630,
        alt: "やわらか大学",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "やわらか大学",
    description: "やわらかな知性で、世界をひらく。",
    images: ["/OGP/OGP_1200x630.png"],
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
