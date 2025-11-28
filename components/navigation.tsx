"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/stories", label: "Story" },
  { href: "/about", label: "About" }
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-6 text-sm font-medium">
      {navLinks.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              className={`transition hover:text-emerald-300 ${isActive ? "text-emerald-400" : "text-slate-200"}`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
