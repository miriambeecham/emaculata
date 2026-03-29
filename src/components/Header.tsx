"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white text-gray-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo/logo-500.png"
              alt="Emaculata"
              width={200}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
            <Link
              href="/"
              className="hover:text-forest transition-colors"
            >
              Climate
            </Link>
            <Link
              href="/about"
              className="hover:text-forest transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-forest transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-forest-light text-dark-bg px-5 py-2 rounded-lg font-semibold hover:bg-forest hover:text-white transition-colors"
            >
              Book Appointment
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200 pt-4 flex flex-col gap-4 text-sm uppercase tracking-wider">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-forest transition-colors"
            >
              Climate
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-forest transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-forest transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-forest-light text-dark-bg px-5 py-2 rounded-lg font-semibold hover:bg-forest hover:text-white transition-colors text-center"
            >
              Book Appointment
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
