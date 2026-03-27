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
    <header className="relative bg-white border-b border-purple-100 overflow-hidden">
      {/* Ghosted logo figure — right side, top-cropped */}
      <div
        className="absolute right-8 top-0 pointer-events-none select-none"
        aria-hidden="true"
        style={{ height: "100%" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt=""
          style={{
            height: "260px",
            width: "auto",
            mixBlendMode: "multiply",
            opacity: 0.13,
            marginTop: "-20px",
            objectFit: "contain",
            objectPosition: "top",
          }}
        />
      </div>

      {/* Single unified row: nav links left, CTA right */}
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
