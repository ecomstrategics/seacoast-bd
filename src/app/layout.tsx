import type { Metadata } from "next";
import { Epilogue, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import "./globals.css";

const epilogue = Epilogue({ subsets: ["latin"], variable: "--font-epilogue", weight: ["600", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Seacoast Building & Design | Southwest Florida Contractor",
  description: "Full-service roofing, exterior renovation, storm repair, and building services across Southwest Florida.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${epilogue.variable} ${inter.variable} font-body antialiased`}><Header /><main>{children}</main><Footer /><MobileBottomBar /></body></html>;
}
