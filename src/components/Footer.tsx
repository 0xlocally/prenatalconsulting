import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2D2340] py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-2">
        <span className="text-[11px] text-white/45">
          &copy; {new Date().getFullYear()}{" "}Prenatal Consulting of Georgia &middot; All rights reserved
        </span>
        <div className="flex gap-4">
          <Link
            href="/resources#privacy"
            className="text-[11px] text-white/50 underline hover:text-white/80 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/resources#disclaimer"
            className="text-[11px] text-white/50 underline hover:text-white/80 transition-colors"
          >
            Disclaimer
          </Link>
          <Link
            href="/contact"
            className="text-[11px] text-white/50 underline hover:text-white/80 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
