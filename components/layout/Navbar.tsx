"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { label: "About", href: "/#hero" },
  { label: "Projects", href: "/#projects" },
  { label: "Resume", href: "/#resume" },
  { label: "Contact", href: "/#contact" },
];

const externalLinks = [{ label: "Fiction", href: "/fiction" }];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border-b border-neutral-100 dark:border-neutral-800 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <a
            href="/#hero"
            className="font-semibold text-neutral-900 dark:text-white hover:text-accent transition-colors"
          >
            {siteConfig.name}
          </a>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-accent dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
              >
                {label}
              </a>
            ))}
            {externalLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-accent dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
              >
                {label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile: toggle + hamburger */}
          <div className="sm:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-accent hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <nav className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-accent px-3 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                {label}
              </a>
            ))}
            {externalLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-accent px-3 py-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
