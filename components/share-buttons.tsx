"use client";

import { Share2, Link as LinkIcon, Mail } from "lucide-react";
import { useState } from "react";

export function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  function popup(url: string) { window.open(url, "share", "width=720,height=540,noreferrer"); }
  async function copy() { await navigator.clipboard.writeText(window.location.href); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
  return <div className="share-row"><span>Share</span><button type="button" aria-label="Share on LinkedIn" onClick={() => popup(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`)}><Share2 size={17} /></button><a aria-label="Share by email" href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent("I thought you might find this useful: ")}`}><Mail size={17} /></a><button type="button" onClick={copy} aria-label="Copy article link"><LinkIcon size={17} /></button>{copied && <small role="status">Copied</small>}</div>;
}
