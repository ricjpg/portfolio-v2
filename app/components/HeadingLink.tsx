import Link from "next/link";
import type { ReactNode } from "react";

interface HeadingLinkProps {
  href: string;
  children: ReactNode;
}

export default function HeadingLink({ href, children }: HeadingLinkProps) {
  return (
    <Link
      href={href}
      className="rounded transition-colors hover:text-blue-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:hover:text-blue-400 dark:focus-visible:outline-blue-400">
      {children}
    </Link>
  );
}
