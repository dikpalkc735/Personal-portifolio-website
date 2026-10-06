import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnalyticsEvents } from "@/components/analytics";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: `${siteConfig.brand} | AI Marketing Expert`, template: `%s | ${siteConfig.brand}` },
  description: "AI-powered digital marketing, automation, advertising, and strategy for small and medium-sized businesses.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", title: `${siteConfig.brand} | AI Marketing Expert`, description: "Practical AI-powered marketing to generate better leads, improve sales, and save time.", url: "/" },
  twitter: { card: "summary", title: `${siteConfig.brand} | AI Marketing Expert`, description: "Practical AI-powered marketing for ambitious small and medium-sized businesses." },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const structuredData = [
  { "@context": "https://schema.org", "@type": "Person", name: siteConfig.name, alternateName: siteConfig.brand, jobTitle: siteConfig.role, url: siteConfig.siteUrl, sameAs: Object.values(siteConfig.socials).filter(Boolean) },
  { "@context": "https://schema.org", "@type": "ProfessionalService", name: siteConfig.brand, description: "AI-powered digital marketing, strategy, advertising, email, and automation for small and medium-sized businesses.", url: siteConfig.siteUrl, founder: { "@type": "Person", name: siteConfig.name } },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><AnalyticsEvents /><Header />{children}<Footer /></body></html>; }
