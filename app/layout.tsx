import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ywrk.org"),
  title: {
    default: "やわらか大学",
    template: "%s | やわらか大学",
  },
  description: "やわらかな知性で、世界をひらく。",
  icons: { icon: "/branding/ywrksalad.png" },
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "やわらか大学",
    alternateName: "Yawaraka University",
    url: "https://ywrk.org",
    logo: "https://ywrk.org/branding/logo.png",
    description: "やわらかな知性で、世界をひらく。",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "000-000-0000",
      contactType: "Customer Service",
      email: "info@ywrk.org",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "やわらか町 1-1-1",
      addressLocality: "やわらか市",
      addressRegion: "やわらか県",
      postalCode: "000-0000",
      addressCountry: "JP",
    },
  };

  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
