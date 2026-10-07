import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnalyticsEvents } from "@/components/analytics";
import { ScrollExperience } from "@/components/scroll-experience";
import { MobileQuickNav } from "@/components/mobile-quick-nav";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: `${siteConfig.brand} | AI Marketing Expert`, template: `%s | ${siteConfig.brand}` },
  description: "AI-powered digital marketing for small and medium-sized businesses that want more customers, better marketing, and sustainable revenue growth.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", title: `${siteConfig.brand} | AI Marketing Expert`, description: "Grow your business with AI-powered digital marketing, clear strategy, automation, and practical recommendations.", url: "/" },
  twitter: { card: "summary", title: `${siteConfig.brand} | AI Marketing Expert`, description: "AI-powered digital marketing to attract customers, improve marketing, and grow revenue." },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const structuredData = [
  { "@context": "https://schema.org", "@type": "Person", name: siteConfig.name, alternateName: siteConfig.brand, jobTitle: siteConfig.role, url: siteConfig.siteUrl, sameAs: Object.values(siteConfig.socials).filter(Boolean) },
  { "@context": "https://schema.org", "@type": "ProfessionalService", name: siteConfig.brand, description: "AI-powered digital marketing that helps small and medium-sized businesses attract customers, improve marketing, save time, and grow revenue.", url: siteConfig.siteUrl, founder: { "@type": "Person", name: siteConfig.name } },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><AnalyticsEvents /><ScrollExperience /><Header />{children}<Footer /><MobileQuickNav /></body></html>; }
