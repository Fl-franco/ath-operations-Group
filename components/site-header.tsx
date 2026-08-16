"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Values", href: "#values" },
  { label: "Services", href: "#services" },
  { label: "Academy", href: "#academy" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-charcoal/95 backdrop-blur supports-[backdrop-filter]:bg-charcoal/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#top" className="flex items-center">
          <Image
            src="/images/logo-ath.png"
            alt="ATH Operations Group"
            width={60}
            height={60}
            priority
            className="h-auto"
          />
          <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-ivory/80">
            Operations Group
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium uppercase tracking-wide text-ivory/80 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+17033216859"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-charcoal transition-colors hover:bg-champagne"
          >
            <Phone className="h-4 w-4" />
            (703) 321-6859
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-ivory md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-gold/20 bg-charcoal px-4 pb-6 pt-2 md:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium uppercase tracking-wide text-ivory/80 hover:text-gold"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+17033216859"
            className="mt-3 inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-charcoal"
          >
            <Phone className="h-4 w-4" />
            (703) 321-6859
          </a>
        </nav>
      )}
    </header>
  );
}
