"use client";

import Link from "@/components/site-link";
import { BookOpen, Home, Layers3, Mail, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const quickLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: UserRound },
  { label: "Services", href: "/services", icon: Layers3 },
  { label: "Blog", href: "/blog", icon: BookOpen },
  { label: "Contact", href: "/contact", icon: Mail },
];

export function MobileQuickNav() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <nav className="mobile-quick-nav" aria-label="Quick navigation">
      {quickLinks.map((item) => {
        const Icon = item.icon;
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            scroll
            className={active ? "is-active" : ""}
            aria-current={active ? "page" : undefined}
            onClick={() => {
              if (active) window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Icon size={20} strokeWidth={2} aria-hidden="true" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
