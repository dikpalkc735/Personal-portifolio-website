import type { AnchorHTMLAttributes } from "react";

type SiteLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  scroll?: boolean;
  prefetch?: boolean;
};

export default function SiteLink({ href, scroll: _scroll, prefetch: _prefetch, ...props }: SiteLinkProps) {
  void _scroll;
  void _prefetch;
  return <a href={href} {...props} />;
}
