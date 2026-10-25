'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'Produits', href: '/produits' },
    { name: 'Devis en ligne', href: '/devis' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-paper/95 backdrop-blur-md border-b border-brand-line transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center" aria-label="CRISTALU NORD — Accueil">
          <div className="relative h-10 w-48 sm:h-11 sm:w-56">
            <Image
              src="/assets/logo-cristalu-nord.webp"
              alt="CRISTALU NORD — Menuiserie Aluminium & PVC"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          <ul className="flex items-center gap-7 list-none m-0 p-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative py-1 ${
                      isActive ? 'text-brand-red font-semibold' : 'text-brand-ink hover:text-brand-red'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-red rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Button & Admin Link */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 bg-brand-ink text-white px-5 py-2.5 rounded-sm text-xs font-semibold hover:bg-brand-red hover:shadow-apple transition-all"
          >
            <span>Devis Express</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="lg:hidden p-2 text-brand-ink hover:text-brand-red focus:outline-none"
          aria-expanded={isOpen}
          aria-label="Ouvrir le menu de navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-brand-paperCard border-b border-brand-line px-6 py-6 shadow-apple-lg animate-slide-up">
          <ul className="flex flex-col gap-4 list-none m-0 p-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-base font-semibold py-1.5 transition-colors ${
                      isActive ? 'text-brand-red' : 'text-brand-ink hover:text-brand-red'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 pt-6 border-t border-brand-line flex flex-col gap-3">
            <Link
              href="/devis"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-brand-red text-white py-3 rounded-sm text-sm font-bold shadow-md"
            >
              <span>Demander un devis en ligne</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+212777077468"
              className="w-full inline-flex items-center justify-center gap-2 border border-brand-line py-2.5 rounded-sm text-sm font-semibold text-brand-ink"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>+212 777 077 468</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
