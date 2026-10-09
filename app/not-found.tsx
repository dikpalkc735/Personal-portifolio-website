import Link from "@/components/site-link";
import { Compass } from "lucide-react";

export default function NotFound() { return <main className="not-found"><div><Compass size={42} /><p className="eyebrow">404 · Page not found</p><h1>This path doesn&apos;t lead anywhere useful.</h1><p>The page may have moved, or the address may be incorrect. Let&apos;s get you back to practical marketing resources.</p><div><Link className="button" href="/">Go to homepage</Link><Link className="button button-outline" href="/services">Explore services</Link></div></div></main>; }
