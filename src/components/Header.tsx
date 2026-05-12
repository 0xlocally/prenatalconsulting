"use client";

import { useState, useEffect, useRef } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="relative bg-white border-b border-purple-100 z-50">
      {/* ===== DESKTOP HEADER (≥768px) ===== */}
      <div className="hidden md:block">
        {/* Top row: logo */}
        <div className="flex items-center px-10 pt-6 pb-2">
          <a href="/" className="group" aria-label="Prenatal Consulting of Georgia - Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Logo2_rev.png"
              alt="Prenatal Consulting of Georgia"
              style={{ height: "70px", width: "auto" }}
            />
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

          <a
            href="https://prenatalconsulting.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6B5BA8] hover:bg-[#5a4a97] text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors"
          >
            Request Appointment
          </a>
        </div>
      </div>

      {/* ===== MOBILE HEADER (<768px) ===== */}
      <div className="md:hidden flex items-center justify-between px-5 h-[68px]">
        <a href="/" aria-label="Prenatal Consulting of Georgia - Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Logo2_rev.png"
            alt="Prenatal Consulting of Georgia"
            style={{ height: "44px", width: "auto" }}
          />
        </a>

        {/* Hamburger button */}
        <button
          ref={buttonRef}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
        >
          <span
            className={`block w-6 h-[2px] bg-[#6B5BA8] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-[#6B5BA8] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-[#6B5BA8] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* ===== MOBILE MENU PANEL ===== */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col bg-white border-t border-purple-50 px-6 py-4 gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 px-3 text-base rounded-md transition-colors ${
                  isActive
                    ? "font-medium text-[#6B5BA8] bg-purple-50 border-l-3 border-[#6B5BA8]"
                    : "text-[#4A3F6B] hover:text-[#6B5BA8] hover:bg-purple-50/50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href="https://prenatalconsulting.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-3 bg-[#6B5BA8] hover:bg-[#5a4a97] text-white text-base font-medium px-5 py-3 rounded-md transition-colors text-center w-full"
          >
            Request Appointment
          </a>
        </nav>
      </div>
    </header>
  );
}
