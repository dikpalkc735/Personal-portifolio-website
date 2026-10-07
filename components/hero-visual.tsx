import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="hero-visual"><div className="visual-glow" /><div className="hero-image-frame hero-portrait-frame"><Image src="/images/dikpal-hero-v2.png" alt="Dikpal K C, AI Marketing Expert, in his office" fill priority sizes="(max-width: 980px) 92vw, 46vw" /></div><div className="visual-note"><strong>Dikpal K C</strong><span>AI Marketing Expert</span></div></div>
  );
}
