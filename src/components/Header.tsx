"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/providers", label: "Providers" },
  { href: "/services", label: "Services & Pricing" },
  { href: "/resources", label: "Patient Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="relative bg-white border-b border-purple-100">
      {/* Top row: horizontal logo lockup */}
      <div className="flex items-center px-10 pt-6 pb-2">
        <a href="/" className="flex items-center gap-0 group" aria-label="Prenatal Consulting of Georgia - Home">
          {/* LEFT: just the mark — crop to the figure area of the logo */}
          <div
            className="relative overflow-hidden flex-shrink-0"
            style={{
              width: '72px',
              height: '72px',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt=""
              aria-hidden="true"
              style={{
                width: '130px',
                maxWidth: 'none',
                position: 'absolute',
                top: '-6px',
                left: '-22px',
              }}
            />
          </div>

          {/* RIGHT: text matching the logo fonts */}
          <div className="flex flex-col justify-center leading-none ml-2">
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '20px',
                fontWeight: '600',
                color: '#3D2F6B',
                lineHeight: '1.1',
                letterSpacing: '-0.01em',
              }}
            >
              Prenatal Consulting
            </span>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '9px',
                fontWeight: '400',
                color: '#9B8CC4',
                letterSpacing: '0.22em',
                textTransform: 'uppercase' as const,
                marginTop: '3px',
              }}
            >
              — of Georgia —
            </span>
          </div>
        </a>
      </div>

      {/* Bottom row: nav links left, CTA right */}
      <div className="relative z-10 flex items-center justify-between px-10 py-4">
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive
                    ? "font-medium text-[#6B5BA8] border-b-2 border-[#6B5BA8] pb-0.5"
                    : "text-[#4A3F6B] hover:text-[#6B5BA8]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="bg-[#6B5BA8] hover:bg-[#5a4a97] text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors"
        >
          Request Appointment
        </Link>
      </div>
    </header>
  );
}
