"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  "main .section-heading",
  "main .clarity-heading",
  "main .two-col > *",
  "main .marketing-clarity-grid > *",
  "main .service-card",
  "main .process-grid article",
  "main .blog-card",
  "main .cta-inner > *",
  "main .consultation-agenda > *",
  "main .service-overview-list > article",
  "main .faq-layout > *",
  "main .contact-layout > *",
  "main .booking-grid > *",
  "main .article-header-inner",
  "main .article-layout > *",
].join(",");

export function ScrollExperience() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const available = document.documentElement.scrollHeight - window.innerHeight;
        const progress = available > 0 ? Math.min(window.scrollY / available, 1) : 0;
        root.style.setProperty("--scroll-progress", progress.toString());
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("scroll", updateProgress);
        window.removeEventListener("resize", updateProgress);
      };
    }

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 65}ms`);
    });
    root.classList.add("motion-enhanced");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      elements.forEach((element) => {
        element.classList.remove("scroll-reveal", "is-visible");
        element.style.removeProperty("--reveal-delay");
      });
      root.classList.remove("motion-enhanced");
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden="true" />;
}
