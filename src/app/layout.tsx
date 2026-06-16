import type { Metadata } from "next";
import { Epilogue, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { RepBanner } from "@/components/RepBanner";
import { SchemaScript, localBusinessSchema, webSiteSchema } from "@/components/Schema";
import "./globals.css";

const epilogue = Epilogue({ subsets: ["latin"], variable: "--font-epilogue", weight: ["600", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://seacoastbd.com"),
  title: {
    default: "Seacoast Building & Design | Southwest Florida Contractor",
    template: "%s | Seacoast Building & Design",
  },
  description: "Full-service roofing, exterior renovation, storm repair, and building services across Southwest Florida. Licensed & insured. (941) 500-5431",
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: "Seacoast Building & Design",
    locale: "en_US",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "Seacoast Building & Design - Southwest Florida Contractor" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${epilogue.variable} ${inter.variable} font-body antialiased`}><SchemaScript schema={[localBusinessSchema(), webSiteSchema()]} /><RepBanner /><Header /><main>{children}</main><Footer /><MobileBottomBar /></body></html>;
}
