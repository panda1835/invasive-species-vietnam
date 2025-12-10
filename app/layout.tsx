import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loài Ngoại Lai Xâm Hại ở Việt Nam",
  description:
    "Tra cứu danh mục loài ngoại lai xâm hại (Invasive Alien Species) tại Việt Nam theo Thông tư 35/2018/TT-BTNMT. Bao gồm hình ảnh, tên khoa học và phân loại chi tiết các loài vi sinh vật, động vật và thực vật xâm hại.",
  keywords: [
    "loài ngoại lai xâm hại",
    "invasive alien species",
    "Việt Nam",
    "Thông tư 35/2018",
    "BTNMT",
    "đa dạng sinh học",
    "bảo tồn thiên nhiên",
    "môi trường",
    "sinh vật xâm lấn",
    "bèo tây",
    "ốc bươu vàng",
    "cá tỳ bà",
    "cỏ lào",
  ],
  authors: [{ name: "Phuc Le" }],
  creator: "Phuc Le",
  publisher: "Phuc Le",
  metadataBase: new URL("https://ngoailai.borua.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Loài Ngoại Lai Xâm Hại ở Việt Nam",
    description:
      "Tra cứu danh mục loài ngoại lai xâm hại tại Việt Nam theo Thông tư 35/2018/TT-BTNMT với hình ảnh và thông tin chi tiết.",
    url: "/",
    siteName: "Loài Ngoại Lai Xâm Hại Việt Nam",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Loài ngoại lai xâm hại ở Việt Nam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loài Ngoại Lai Xâm Hại ở Việt Nam",
    description:
      "Tra cứu danh mục loài ngoại lai xâm hại tại Việt Nam với hình ảnh và thông tin chi tiết.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#78350f" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
