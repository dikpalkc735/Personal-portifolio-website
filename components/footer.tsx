import Image from "next/image";
import Link from "next/link";
import { navigation, services, siteConfig } from "@/lib/site-data";

export function Footer() {
  const socials = Object.entries(siteConfig.socials).filter(([, url]) => Boolean(url));
  return (
    <footer className="footer"><div className="shell footer-grid"><div className="footer-brand"><Link href="/" className="brand brand-light" aria-label="Digital Dikpal home"><Image className="brand-logo" src="/images/digital-dikpal-logo.png" width={1194} height={198} alt="Digital Dikpal" /></Link><p>AI-powered digital marketing that helps small and medium-sized businesses attract customers, improve marketing, and grow revenue.</p>{socials.length > 0 && <div className="social-links">{socials.map(([name, url]) => <a href={url} key={name} target="_blank" rel="noreferrer">{name}</a>)}</div>}</div>
      <div><h2>Quick links</h2>{navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</div>
      <div><h2>Services</h2>{services.map((service) => <Link href={`/services/${service.slug}`} key={service.slug}>{service.shortTitle}</Link>)}</div>
      <div><h2>Resources</h2><Link href="/blog">Blog</Link><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms">Terms & Conditions</Link><Link href="/book-consultation">Free Consultation</Link></div>
    </div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.</span><span>Built to make smarter growth feel practical.</span></div></footer>
  );
}
