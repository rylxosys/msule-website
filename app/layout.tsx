import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/common/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Msule — Product Engineering Company",
  description:
    "Msule helps businesses design, build, modernize, and scale software products. Your long-term technology partner.",
  metadataBase: new URL("https://msule.com"),
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Msule — Product Engineering Company",
    description: "Engineering software that moves business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Msule",
            url: "https://msule.com",
            description:
              "Msule is a product engineering company helping businesses design, build, modernize, and scale software products.",
            sameAs: [
              "https://linkedin.com/company/msule",
              "https://twitter.com/msule",
            ],
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
