"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "عن المعهد" },
  { href: "#benefits", label: "لماذا فنون الطهي" },
  { href: "#pillars", label: "المحاور الستة" },
  { href: "#initiatives", label: "المبادرات" },
  { href: "#stories", label: "قصص النجاح" },
  { href: "#products", label: "المنتجات" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto max-w-content px-4 sm:px-6 flex items-center justify-between gap-4">
        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-bold transition-colors hover:text-orange ${
                  scrolled ? "text-navy" : "text-navy"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-orange/30 transition hover:bg-amber"
          >
            كن جزءًا من الرحلة
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="القائمة"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`h-0.5 w-6 bg-navy transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-navy transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-navy transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-black/5 shadow-lg">
          <ul className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-navy font-bold border-b border-black/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center rounded-full bg-orange px-5 py-3 font-bold text-white"
              >
                كن جزءًا من الرحلة
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
