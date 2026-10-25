import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function ContactMap() {
  return (
    <section className="py-20 bg-brand-paper" id="contact-localisation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
                06 / CONTACT &amp; LOCALISATION
              </span>
              <span className="w-8 h-[1px] bg-brand-red"></span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-ink mb-6">
              Échangeons sur votre <em className="font-serif italic font-normal text-brand-red">chantier.</em>
            </h2>

            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-8">
              Vous avez des plans d’architecte, des photos ou souhaitez faire déplacer un technicien sur votre site ? Nous sommes disponibles du lundi au samedi.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="tel:+212777077468"
                className="flex items-center gap-4 p-4 bg-brand-paperCard border border-brand-line rounded-lg hover:border-brand-red transition-all group"
              >
                <div className="w-10 h-10 rounded bg-brand-red/10 text-brand-red flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-brand-muted uppercase">Téléphone Direct</span>
                  <strong className="text-sm sm:text-base font-extrabold text-brand-ink">+212 777 077 468</strong>
                </div>
              </a>

              <a
                href="https://wa.me/212777077468"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-brand-paperCard border border-brand-line rounded-lg hover:border-emerald-500 transition-all group"
              >
                <div className="w-10 h-10 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-emerald-700 uppercase">WhatsApp Instantané</span>
                  <strong className="text-sm sm:text-base font-extrabold text-brand-ink">Envoyer photos &amp; plans ↗</strong>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-brand-paperCard border border-brand-line rounded-lg">
                <div className="w-10 h-10 rounded bg-brand-ink/10 text-brand-ink flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-brand-muted uppercase">Zone Principale d’Intervention</span>
                  <p className="text-xs font-semibold text-brand-ink">Tanger, Tétouan, Martil, Fnideq, Kénitra, Rabat, Casablanca et tout le Maroc.</p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-between gap-3 bg-brand-ink hover:bg-brand-red text-white px-6 py-3.5 rounded-sm text-xs font-bold transition-all"
            >
              <span>Accéder au formulaire de contact complet</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Map Embed / Architectural Location Frame */}
          <div className="lg:col-span-7">
            <div className="relative h-[420px] rounded-lg overflow-hidden border border-brand-line shadow-apple bg-gray-100">
              <iframe
                title="Carte Tanger & Région Nord Cristalu Nord"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103598.05831637785!2d-5.892404099999999!3d35.7594651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf04c132d%3A0x76bfc57111e3041c!2sTangier%2C%20Morocco!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125"
              />

              {/* Map floating card */}
              <div className="absolute top-4 left-4 bg-brand-paperCard/95 backdrop-blur-md p-3.5 rounded-sm border border-brand-line shadow-apple text-xs max-w-xs">
                <strong className="block text-brand-ink font-heading font-bold mb-0.5">CRISTALU NORD</strong>
                <p className="text-[11px] text-brand-muted">Intervention sur site pour prise de cotes et pose dans toute la région Nord et villes du Royaume.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
