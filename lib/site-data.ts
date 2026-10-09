import {
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Mail,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  brand: "Digital Dikpal",
  name: "Dikpal K C",
  role: "AI Marketing Expert",
  email: "dikpalkc735@gmail.com",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai-marketing-growth-expert.willparker56.chatgpt.site",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
  socials: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "",
  },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string; title: string; shortTitle: string; description: string;
  benefit: string; idealFor: string; problems: string[]; included: string[];
  benefits: string[]; faqs: { question: string; answer: string }[]; icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "ai-digital-marketing", title: "AI-Powered Digital Marketing", shortTitle: "AI Digital Marketing",
    description: "Use AI and modern digital marketing strategies to reach the right customers, improve your campaigns, save time, and create more opportunities for growth.",
    benefit: "Reach the right customers and improve your marketing more efficiently.", idealFor: "Businesses ready to use AI across several marketing channels.",
    problems: ["Marketing decisions take too long or rely on guesswork", "Content and campaign research consume too much time", "Customer journeys feel generic or disconnected", "Data exists, but it is difficult to turn into action"],
    included: ["AI opportunity audit", "Audience and competitor research workflow", "AI-assisted content and campaign system", "Customer journey improvements", "Analytics and decision-support framework", "Team-ready implementation guidance"],
    benefits: ["Make better-informed marketing decisions", "Move from ideas to campaigns more efficiently", "Create more relevant customer experiences", "Build an AI workflow your team can actually use"],
    faqs: [
      { question: "Do I need to replace my current tools?", answer: "Usually not. I begin with what already works and recommend changes only when they solve a clear business problem." },
      { question: "Will AI replace the human side of our marketing?", answer: "No. AI supports research, production, and analysis while your strategy, judgment, and customer understanding remain central." },
      { question: "Can you work with a small marketing team?", answer: "Yes. The approach is designed to reduce workload and create practical systems that a small team can maintain." },
    ], icon: BrainCircuit,
  },
  {
    slug: "digital-marketing-strategy", title: "Digital Marketing Strategy", shortTitle: "Marketing Strategy",
    description: "Stop guessing what to do next. Get a clear marketing strategy focused on attracting customers, generating leads, improving conversions, and growing your business.",
    benefit: "A clear direction for attracting customers and growing your business.", idealFor: "Businesses that need direction before investing more time or budget.",
    problems: ["Too many disconnected marketing activities", "Unclear customer acquisition priorities", "No reliable way to measure progress", "Budget is spread across channels without a clear role"],
    included: ["Business and marketing audit", "Customer acquisition plan", "Content and channel priorities", "Conversion and retention strategy", "Measurement framework", "90-day action roadmap"],
    benefits: ["Know what to prioritize next", "Use budget more intentionally", "Align marketing with sales goals", "Create a repeatable path for growth"],
    faqs: [
      { question: "What will I receive?", answer: "You receive a focused strategy and prioritized action plan shaped around your goals, customers, resources, and current marketing." },
      { question: "Is this only for businesses starting from scratch?", answer: "No. It is equally useful when marketing is active but fragmented, inconsistent, or difficult to measure." },
      { question: "Can you help implement the plan?", answer: "Yes. We can define the right level of implementation support after the strategy is clear." },
    ], icon: ChartNoAxesCombined,
  },
  {
    slug: "meta-ads", title: "Paid Advertising / Meta Ads", shortTitle: "Meta Ads",
    description: "Reach potential customers through Facebook and Instagram advertising with focused campaigns designed to generate leads, customers, and measurable business results.",
    benefit: "Focused advertising built around leads, customers, and measurable results.", idealFor: "Service businesses and growing brands ready to acquire customers through paid social.",
    problems: ["Campaigns spend without a clear strategy", "Targeting and creative do not work together", "Leads are inconsistent or low quality", "Tracking makes it hard to know what is working"],
    included: ["Campaign strategy", "Audience research", "Campaign setup", "Creative direction", "Lead generation and retargeting", "Optimization and conversion tracking"],
    benefits: ["Reach more relevant prospects", "Create a clearer path from ad to action", "Learn from campaign data", "Improve spend efficiency over time"],
    faqs: [
      { question: "Do you create the ad creative?", answer: "I provide creative strategy and can define the production scope based on the assets and resources you already have." },
      { question: "Is there a minimum ad budget?", answer: "The right budget depends on your offer, market, and goals. We will discuss a realistic test budget during the consultation." },
      { question: "Can you fix existing campaigns?", answer: "Yes. I can audit current account structure, creative, targeting, tracking, and follow-up before recommending changes." },
    ], icon: Megaphone,
  },
  {
    slug: "email-marketing", title: "Email Marketing", shortTitle: "Email Marketing",
    description: "Turn leads into customers and keep your audience engaged with strategic email campaigns and automated follow-up.",
    benefit: "Stay connected with leads and create more opportunities to turn them into customers.", idealFor: "Businesses with leads or customers who need better follow-up.",
    problems: ["Leads go cold after the first enquiry", "Email communication is irregular", "Every follow-up is done manually", "The same message is sent to everyone"],
    included: ["Email strategy", "Lead nurture sequences", "Newsletter framework", "Sales campaigns", "Segmentation plan", "Email automation and follow-up"],
    benefits: ["Stay relevant after the first interaction", "Nurture leads consistently", "Save time on routine follow-up", "Create more opportunities from your audience"],
    faqs: [
      { question: "Can you work with my current email platform?", answer: "In most cases, yes. I review your current platform first and only recommend a change when there is a practical reason." },
      { question: "Do you write the emails?", answer: "Copywriting and sequence creation can be included in the agreed scope, alongside strategy and automation." },
      { question: "Can you help clean up an old list?", answer: "Yes. List health, segmentation, consent, and re-engagement can be part of the plan." },
    ], icon: Mail,
  },
  {
    slug: "ai-marketing-automation", title: "AI Marketing Automation", shortTitle: "AI Automation",
    description: "Save time and make your marketing more efficient by using AI and automation for repetitive marketing tasks, lead nurturing, follow-up, and customer communication.",
    benefit: "Save time and make lead follow-up and customer communication more consistent.", idealFor: "Busy teams losing time to repetitive marketing tasks and manual handoffs.",
    problems: ["Leads wait too long for a response", "Marketing tasks depend on manual reminders", "Customer information is scattered", "The team repeats the same work every week"],
    included: ["Workflow audit", "Automation opportunity map", "Lead follow-up workflows", "Email and CRM sequences", "AI-assisted content processes", "Testing, documentation, and handover"],
    benefits: ["Respond to leads more consistently", "Reduce repetitive work", "Improve handoffs between tools and people", "Give your team more time for high-value work"],
    faqs: [
      { question: "What can be automated first?", answer: "The best starting points are repetitive, rules-based tasks such as lead routing, reminders, follow-up, and content preparation." },
      { question: "Will the automations feel impersonal?", answer: "They should not. Good automation handles timing and consistency while preserving human review where judgment matters." },
      { question: "How do you prevent unreliable workflows?", answer: "I define clear triggers, approval points, fallbacks, and tests, then document how the workflow should be monitored." },
    ], icon: Bot,
  },
];

export const benefits = [
  { title: "Generate Better Leads", text: "Reach prospects who are a stronger fit for your offer." },
  { title: "Increase Sales & Revenue", text: "Improve the journey from first click to customer conversation." },
  { title: "Automate Your Marketing", text: "Remove repetitive work without losing the human touch." },
  { title: "Make Smarter Decisions", text: "Turn marketing data into focused, practical next steps." },
];

export type BlogPost = {
  slug: string; title: string; category: string; excerpt: string; date: string;
  readingTime: string; featured?: boolean; sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "practical-ai-marketing-plan-small-business", title: "A Practical AI Marketing Plan for Small Businesses", category: "AI Marketing", date: "2026-09-24", readingTime: "7 min read", featured: true,
    excerpt: "A grounded way to choose useful AI opportunities, protect quality, and turn experimentation into a repeatable marketing system.",
    sections: [
      { heading: "Start with the bottleneck, not the tool", paragraphs: ["The most useful AI project begins with a business problem. Look for slow lead response, inconsistent content, scattered customer information, or decisions that take too long.", "A clear bottleneck gives you a useful success measure and prevents the team from collecting tools without changing results."], bullets: ["Name one recurring marketing problem", "Estimate the time or opportunity it currently costs", "Decide what better performance would look like"] },
      { heading: "Choose one workflow to improve", paragraphs: ["Map the current workflow from trigger to outcome. Then decide where AI can help with research, drafting, classification, analysis, or personalization while keeping people in the decisions that require judgment."] },
      { heading: "Build in review and measurement", paragraphs: ["Document inputs, approval points, and fallbacks. Track both efficiency and business quality: faster work is only valuable when the result remains accurate, useful, and on-brand."], bullets: ["Define who reviews the output", "Record exceptions and edge cases", "Compare lead quality, response time, and conversion behavior"] },
    ],
  },
  {
    slug: "why-leads-go-cold-and-how-to-fix-follow-up", title: "Why Leads Go Cold—and How to Fix Your Follow-Up", category: "Lead Generation", date: "2026-09-10", readingTime: "6 min read",
    excerpt: "A simple follow-up structure that helps service businesses respond faster and keep good prospects moving.",
    sections: [
      { heading: "Speed creates momentum", paragraphs: ["A prospect who has just completed a form is actively thinking about the problem you solve. A clear confirmation and timely human response protect that momentum."] },
      { heading: "Create a helpful sequence", paragraphs: ["Good follow-up answers the next question, removes uncertainty, and gives the prospect an easy next step. It should feel useful rather than relentless."], bullets: ["Confirm the enquiry", "Set expectations for the next response", "Share one relevant resource", "Offer a clear way to book or reply"] },
      { heading: "Automate the routine, keep judgment human", paragraphs: ["Automation can handle timing, routing, reminders, and basic personalization. Your team should still own nuanced questions, qualification, and the relationship." ] },
    ],
  },
  {
    slug: "meta-ads-before-increasing-budget", title: "What to Check Before Increasing Your Meta Ads Budget", category: "Meta Ads", date: "2026-08-28", readingTime: "8 min read",
    excerpt: "A decision checklist for improving offer clarity, tracking, creative, and follow-up before spending more.",
    sections: [
      { heading: "Validate the path after the click", paragraphs: ["More ad spend cannot repair a weak offer or confusing next step. Review the landing experience, form, confirmation, and follow-up before scaling traffic."] },
      { heading: "Read the whole funnel", paragraphs: ["Platform metrics are useful, but the business outcome matters most. Compare creative response, lead quality, booked conversations, and sales feedback together."], bullets: ["Is the campaign reaching the intended audience?", "Does the creative make the offer clear?", "Can you trace qualified leads to a campaign?", "Are leads contacted quickly?"] },
      { heading: "Scale learning, not only spend", paragraphs: ["Increase budget when you understand what is working and have a plan to monitor quality. Keep testing creative and message angles so the campaign does not rely on one idea." ] },
    ],
  },
  {
    slug: "email-automation-that-still-feels-human", title: "Email Automation That Still Feels Human", category: "Email Marketing", date: "2026-08-12", readingTime: "5 min read",
    excerpt: "How to design timely, relevant email journeys without turning every customer into a generic segment.",
    sections: [
      { heading: "Use context, not cleverness", paragraphs: ["A useful automated email reflects what the reader did, what they likely need next, and how your business can help. Clear relevance matters more than complex personalization." ] },
      { heading: "Design around moments", paragraphs: ["Map the moments that deserve a response: a new enquiry, a downloaded resource, an unfinished booking, a purchase, or a period of inactivity."], bullets: ["Send the right confirmation", "Answer the next likely question", "Invite a sensible next step", "Stop or change the sequence when behavior changes"] },
      { heading: "Keep a human route open", paragraphs: ["Make it easy to reply, ask a question, or talk to a person. Automation should make the relationship easier to manage—not harder to enter." ] },
    ],
  },
];

export const processSteps = [
  { title: "Understand Your Business", text: "We look at your business, customers, current marketing, goals, and challenges." },
  { title: "Find Growth Opportunities", text: "I identify areas where AI and digital marketing can help you attract more customers and improve your results." },
  { title: "Create Your Customized Plan", text: "You receive a practical Digital Marketing Plan designed specifically for your business." },
  { title: "Start Taking Action", text: "You’ll leave with clear recommendations and actions you can start implementing immediately." },
];

export const testimonialPlaceholders = [
  { outcome: "Lead follow-up system", quote: "Replace this with an approved client comment describing the experience and business impact.", name: "[Client Name]", company: "[Company / Industry]" },
  { outcome: "Clearer growth strategy", quote: "Replace this with an approved client comment about clarity, practical recommendations, or implementation support.", name: "[Client Name]", company: "[Company / Industry]" },
  { outcome: "More efficient marketing", quote: "Replace this with an approved client comment about time saved, improved workflow, or better decisions.", name: "[Client Name]", company: "[Company / Industry]" },
];
