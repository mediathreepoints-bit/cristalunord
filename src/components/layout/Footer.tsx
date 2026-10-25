import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck, Lock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-gray-300 border-t border-brand-lineDark">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-gray-800">
          {/* Brand Info */}
          <div className="flex flex-col">
            <Link href="/" className="inline-block mb-5" aria-label="CRISTALU NORD">
              <div className="relative h-10 w-48">
                <Image
                  src="/assets/logo-cristalu-nord-blanc.webp"
                  alt="CRISTALU NORD"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              Spécialiste marocain de la menuiserie aluminium haut de gamme, du PVC haute isolation, des façades vitrées continues et de l’habillage Alucobond sur mesure.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium bg-emerald-950/40 border border-emerald-800/40 p-2.5 rounded-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Garantie décennale &amp; conformité RTCM</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Nos Services</Link>
              </li>
              <li>
                <Link href="/realisations" className="hover:text-white transition-colors">Réalisations &amp; Chantiers</Link>
              </li>
              <li>
                <Link href="/produits" className="hover:text-white transition-colors">Catalogue Produits</Link>
              </li>
              <li>
                <Link href="/devis" className="hover:text-white transition-colors text-brand-red font-semibold">Configurateur de Devis</Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-white transition-colors">L’Atelier &amp; L’Équipe</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact &amp; Accès</Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-5">
              Nos Expertises
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link href="/services/menuiserie-aluminium" className="hover:text-white transition-colors">
                  Baies vitrées &amp; Fenêtres Alu RPT
                </Link>
              </li>
              <li>
                <Link href="/services/menuiserie-pvc" className="hover:text-white transition-colors">
                  Fenêtres &amp; Portes PVC Isolantes
                </Link>
              </li>
              <li>
                <Link href="/services/vitrage-facades" className="hover:text-white transition-colors">
                  Façades Vitrées &amp; Murs Rideaux
                </Link>
              </li>
              <li>
                <Link href="/services/vitrage-facades" className="hover:text-white transition-colors">
                  Habillage composite Alucobond
                </Link>
              </li>
              <li>
                <Link href="/services/vitrage-facades" className="hover:text-white transition-colors">
                  Garde-corps en Verre Trempé
                </Link>
              </li>
              <li>
                <Link href="/services/vitrage-facades" className="hover:text-white transition-colors">
                  Verrières intérieures style atelier
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-5">
              Contact &amp; Atelier
            </h4>
            <div className="space-y-3.5 text-xs">
              <a
                href="tel:+212777077468"
                className="flex items-center gap-2 text-white font-bold hover:text-brand-red transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>+212 777 077 468</span>
              </a>

              <a
                href="mailto:contact@cristalunord.ma"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>contact@cristalunord.ma</span>
              </a>

              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <span>Tanger, Région Tanger-Tétouan-Al Hoceïma, Maroc</span>
              </div>

              <div className="flex items-start gap-2 text-gray-400">
                <Clock className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <span>Lundi – Samedi : 08h30 à 18h30</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} CRISTALU NORD SARL. Tous droits réservés.</p>

          <div className="flex items-center gap-6">
            <span>Tanger · Tétouan · Maroc</span>
            <Link
              href="/admin/login"
              className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
            >
              <Lock className="w-3 h-3" />
              <span>Espace Pro / Admin</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
