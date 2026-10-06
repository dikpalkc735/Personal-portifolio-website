import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="hero-visual"><div className="visual-glow" /><div className="hero-image-frame"><Image src="/images/ai-marketing-system.png" alt="AI marketing system connecting customer insights, email, automation, and business growth" width={1680} height={944} priority sizes="(max-width: 980px) 92vw, 48vw" /></div><div className="visual-note"><strong>Strategy + systems</strong><span>Built around your business</span></div></div>
  );
}
