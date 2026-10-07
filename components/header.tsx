"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => { const onScroll = () => setCompact(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return (
    <header className={`site-header ${compact ? "is-compact" : ""}`}>
      <div className="shell nav-wrap">
        <Link href="/" className="brand" aria-label="Digital Dikpal home">
          <Image className="brand-logo" src="/images/digital-dikpal-logo.png" width={1194} height={198} alt="Digital Dikpal" priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
        <Link className="button button-small desktop-cta" href="/book-consultation" data-event="consultation_cta_click">Book a Free Call</Link>
        <button className="menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      </div>
      {open && <div className="mobile-menu"><nav aria-label="Mobile navigation">{navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link className="button" href="/book-consultation" onClick={() => setOpen(false)} data-event="consultation_cta_click">Book a Free Consultation Call</Link></nav></div>}
    </header>
  );
}
