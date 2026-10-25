'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare, ShieldCheck, Sparkles, Award, Layers, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative bg-[#0d1010] text-white border-b border-brand-lineDark overflow-hidden" aria-labelledby="hero-title">
      {/* Background Architectural Blueprint Grid & Subtle Lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b2020_1px,transparent_1px),linear-gradient(to_bottom,#1b2020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)] opacity-35" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-red/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-emerald-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column : Institutional Copy & Actions */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <span className="bg-brand-red text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-sm flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3 h-3 text-amber-300" />
                CRISTALU NORD · HAUTE MENUISERIE
              </span>
              <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                Tanger · Tétouan · Maroc
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              id="hero-title"
              variants={itemVariants}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
            >
              L’architecture du verre,<br />
              la maîtrise de <em className="font-serif italic font-normal text-red-500">l’aluminium.</em>
            </motion.h1>

            {/* Subtitle / Intro */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8 max-w-xl font-normal"
            >
              Concepteur, fabricant et installateur de menuiseries aluminium haute performance à rupture de pont thermique (RPT), PVC isolant, murs rideaux vitrés et habillages de façades au Maroc.
            </motion.p>

            {/* CTA Group */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                href="/devis"
                className="group inline-flex items-center gap-3 bg-brand-red hover:bg-brand-redHover text-white px-7 py-4 rounded-sm text-xs sm:text-sm font-bold shadow-apple-lg hover:shadow-glow-red transition-all duration-300"
              >
                <span>Demander un devis sur mesure</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/realisations"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/40 px-6 py-4 rounded-sm text-xs sm:text-sm font-semibold transition-all duration-300"
              >
                <span>Explorer les chantiers</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </Link>

              <a
                href="https://wa.me/212777077468?text=Bonjour%20Cristalu%20Nord%2C%20je%20souhaite%20des%20renseignements%20pour%20un%20projet."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-4 rounded-sm text-xs sm:text-sm font-bold transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </motion.div>

            {/* Trust Markers */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-brand-lineDark flex flex-wrap items-center gap-6 text-xs text-gray-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Usinage 100% sur mesure</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-red" />
                <span>Garantie Décennale &amp; RTCM</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Pose par équipe qualifiée</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column : Interactive Architectural Showcase */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[440px] sm:h-[520px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-gray-900">
              <Image
                src="/assets/facade.webp"
                alt="Chantier de façade vitrée et menuiseries Cristalu Nord"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-white bg-brand-red px-2.5 py-1 rounded">
                    RÉALISATION RÉELLE · TANGER
                  </span>
                  <span className="text-xs text-gray-300 font-mono">35.7595° N, 5.8340° W</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-1">
                  Façade Vitrée &amp; Menuiseries Bâtiment
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Profilés aluminium haute isolation et vitrages à contrôle solaire posés au laser.
                </p>
              </div>

              {/* Floating Architectural Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute top-4 left-4 bg-brand-ink/90 backdrop-blur-md px-3.5 py-2 rounded-md border border-white/10 text-[11px] font-bold text-white flex items-center gap-2 shadow-lg"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Atelier Ouvert · Devis sous 24h</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Institutional KPI Strip */}
      <div className="border-t border-brand-lineDark bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex flex-col border-r border-white/10 pr-4 last:border-none">
              <span className="font-heading text-2xl sm:text-3xl font-extrabold text-white">100%</span>
              <span className="text-[11px] text-gray-400 font-medium">Usinage sur mesure en atelier</span>
            </div>
            <div className="flex flex-col border-r border-white/10 pr-4 last:border-none">
              <span className="font-heading text-2xl sm:text-3xl font-extrabold text-red-500">RPT &amp; PVC</span>
              <span className="text-[11px] text-gray-400 font-medium">Isolation thermique &amp; phonique</span>
            </div>
            <div className="flex flex-col border-r border-white/10 pr-4 last:border-none">
              <span className="font-heading text-2xl sm:text-3xl font-extrabold text-white">10 - 20j</span>
              <span className="text-[11px] text-gray-400 font-medium">Délai moyen de confection</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl sm:text-3xl font-extrabold text-white">Tanger &amp; Nord</span>
              <span className="text-[11px] text-gray-400 font-medium">Intervention sur tout le Maroc</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
