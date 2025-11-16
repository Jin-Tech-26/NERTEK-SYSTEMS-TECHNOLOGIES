"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6 text-sm uppercase tracking-widest">
      {links.map((link) => {
        const isActive = link.href === "/"
          ? pathname === "/"
          : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={
              "relative pb-0.5 transition-colors " +
              (isActive
                ? "text-foreground"
                : "text-foreground/80 hover:text-foreground")
            }
          >
            {link.label}
            {isActive && (
              <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-[2px] bg-accent-500" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
