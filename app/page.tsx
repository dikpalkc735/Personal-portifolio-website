import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { HeroVisual } from "@/components/hero-visual";
import { BlogCard } from "@/components/blog-card";
import { CTASection } from "@/components/cta-section";
import { blogPosts, processSteps, services } from "@/lib/site-data";

const marketingChallenges = [
  "Not getting enough qualified leads",
  "Spending money on ads without seeing results",
  "Not knowing which marketing strategy to focus on",
  "Inconsistent sales and customer inquiries",
  "Spending too much time on manual marketing tasks",
  "Feeling overwhelmed by AI and new marketing tools",
];

const reasonsToWorkTogether = [
  "A strategy built around your business",
  "Clear and practical recommendations",
  "AI tools that can save time",
  "Marketing focused on leads and sales",
  "Simple explanations without unnecessary jargon",
  "A clear direction for what to do next",
];

const consultationIncludes = [
  "Business and marketing analysis",
  "Identification of key marketing problems",
  "Growth opportunities",
  "AI and automation recommendations",
  "Customized Digital Marketing Plan",
  "Clear next steps",
];

export default function Home() {
  return <main>
    <section className="hero-section"><div className="shell hero-grid"><div className="hero-copy"><p className="eyebrow">AI-powered digital marketing for growing businesses</p><h1>Grow Your Business with <span>AI-Powered Digital Marketing</span></h1><p className="hero-question">Struggling to get consistent leads, sales, or results from your marketing?</p><p className="hero-lead">I help small and medium-sized businesses use <strong>AI and proven digital marketing strategies</strong> to attract more customers, improve their marketing, and grow revenue.</p><div className="hero-actions"><Link className="button" href="/book-consultation" data-event="consultation_cta_click">Book a Free Consultation</Link></div><p className="micro-proof">Get a customized Digital Marketing Plan you can start implementing immediately.</p></div><HeroVisual /></div></section>

    <section className="section marketing-clarity-section"><div className="shell"><header className="clarity-heading"><p className="eyebrow">A clearer way forward</p><h2>Is Your Marketing Holding Your Business Back?</h2><p className="lead-copy">Running a business is already demanding. Marketing shouldn&apos;t make it harder.</p></header><div className="marketing-clarity-grid"><div className="challenge-panel"><p className="panel-label">You may be struggling with:</p><ul>{marketingChallenges.map((item) => <li key={item}><Check size={17} aria-hidden="true" /><span>{item}</span></li>)}</ul><div className="strategy-note"><span>You don&apos;t need more random tactics.</span><strong>You need a clear strategy built around your business.</strong></div></div><div className="growth-panel"><p className="eyebrow">Smarter marketing, practical growth</p><h2>AI-Powered Marketing Built for Your Business</h2><p className="lead-copy">I combine <strong>AI tools, automation, and digital marketing</strong> to help you create a smarter and more effective way to grow online.</p><p>Instead of using the same strategy for every business, I focus on your goals, customers, challenges, and opportunities.</p><div className="growth-goal"><span>The goal is simple:</span><strong>More effective marketing. More qualified leads. More opportunities to grow your business.</strong></div><Link className="button button-outline" href="/services">Explore My Services</Link></div></div></div></section>

    <section className="section"><div className="shell"><div className="section-heading split-heading"><div><p className="eyebrow">Services</p><h2>Practical marketing support for the areas that matter most.</h2></div><p>Choose the service that matches your current challenge, or use the free consultation to identify the best place to start.</p></div><div className="service-grid">{services.map((service) => { const Icon = service.icon; return <article className="service-card" key={service.slug}><div className="icon-box"><Icon aria-hidden="true" /></div><h3>{service.shortTitle}</h3><p>{service.description}</p><Link href={`/services/${service.slug}`}>Learn More <ArrowUpRight size={16} aria-hidden="true" /></Link></article>; })}</div></div></section>

    <section className="section process-section"><div className="shell"><div className="section-heading"><p className="eyebrow">How It Works</p><h2>A Simple Plan for Better Marketing</h2></div><div className="process-grid">{processSteps.map((step, index) => <article key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div><div className="section-action"><Link className="button" href="/book-consultation" data-event="consultation_cta_click">Book Your Free Consultation</Link></div></div></section>

    <section className="section why-section"><div className="shell two-col align-start"><div><p className="eyebrow eyebrow-light">Why Work With Me?</p><h2>Marketing Should Help Your Business Grow — Not Add More Complexity</h2><p>My approach combines modern AI technology with practical digital marketing strategies.</p><p>You get:</p></div><div className="check-panel">{reasonsToWorkTogether.map((item) => <div key={item}><Check size={18} aria-hidden="true" /><span>{item}</span></div>)}</div></div></section>

    <section className="section about-preview"><div className="shell two-col"><figure className="about-photo-card"><Image src="/images/dikpal-about-v2.png" alt="Dikpal K C at his desk" fill sizes="(max-width: 980px) 92vw, 48vw" /><figcaption><strong>Dikpal K C</strong><small>AI Marketing Expert · Digital Dikpal</small></figcaption></figure><div><p className="eyebrow">About Me</p><h2>Helping Businesses Grow Smarter with AI & Digital Marketing</h2><p className="lead-copy">I&apos;m an AI Marketing Expert helping small and medium-sized business owners grow online using AI tools and proven digital marketing strategies.</p><p>My focus is not on using AI just because it&apos;s new.</p><p>It&apos;s about using the right tools and strategies to solve real business problems, improve marketing performance, save time, and create more opportunities for growth.</p><p>Every business is different, which is why I believe your marketing strategy should be built around your specific goals and customers.</p><Link className="button button-outline" href="/book-consultation" data-event="consultation_cta_click">Book a Free Consultation</Link></div></div></section>

    <section className="section section-muted"><div className="shell consultation-agenda"><div><p className="eyebrow">Free Consultation</p><h2>Not Sure What Your Business Needs?</h2><p className="lead-copy">That&apos;s exactly what the Free Consultation is for.</p><p>During the call, I&apos;ll look at your business, current marketing, challenges, and growth opportunities.</p><p>You&apos;ll get a <strong>customized Digital Marketing Plan</strong> with practical actions you can start implementing immediately.</p><p>No complicated marketing language. Just practical ideas focused on helping your business grow.</p><Link className="button" href="/book-consultation" data-event="consultation_cta_click">Book My Free Consultation</Link></div><ol>{consultationIncludes.map((item, index) => <li key={item}><span>{index + 1}</span><p>{item}</p><Check size={18} aria-hidden="true" /></li>)}</ol></div></section>

    <section className="section"><div className="shell"><div className="section-heading split-heading"><div><p className="eyebrow">Blog</p><h2>Practical Marketing Ideas to Help You Grow</h2><p>Learn how to use AI, digital marketing, advertising, email, automation, and lead generation to grow your business.</p></div><Link className="text-link" href="/blog">Read the Latest Articles <ArrowUpRight size={17} aria-hidden="true" /></Link></div><div className="blog-grid">{blogPosts.slice(0, 3).map((post) => <BlogCard post={post} key={post.slug} />)}</div></div></section>
    <CTASection />
  </main>;
}
