"use client";

import Link from "next/link";
import Image from "next/image";
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
    <header className="bg-warm-white border-b border-lav-deep/15">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3 border-b border-lav-deep/10">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Prenatal Consulting of Georgia"
              width={220}
              height={68}
              className="h-[96px] w-auto object-contain"
              priority
            />
          </Link>
          <button className="bg-lav-deep text-white rounded-md px-5 py-2.5 text-sm font-medium tracking-wide hover:bg-lav-mid transition-colors cursor-pointer">
            Request Appointment
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex gap-0">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 text-[13px] border-b-2 transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-lav-deep border-lav-deep font-medium"
                    : "text-text-mid border-transparent hover:text-lav-deep hover:border-lav-deep"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
