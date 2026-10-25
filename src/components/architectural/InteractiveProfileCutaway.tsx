'use client';

import React, { useState } from 'react';
import { Layers, ShieldCheck, Thermometer, Volume2, Sparkles, Check, Info } from 'lucide-react';

interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  badge: string;
  description: string;
  specs: string;
  category: 'isolation' | 'structure' | 'etancheite' | 'securite';
}

export default function InteractiveProfileCutaway() {
  const [activeHotspot, setActiveHotspot] = useState<string>('polyamide');
  const [activeSystem, setActiveSystem] = useState<'rpt' | 'pvc'>('rpt');

  const hotspotsRPT: Hotspot[] = [
    {
      id: 'alu-exterieur',
      x: 18,
      y: 28,
      title: 'Profilé Aluminium Extérieur Alliage 6060 T6',
      badge: 'Aluminium Primaire',
      description: 'Extrusion de haute pureté traitée thermiquement pour une rigidité structurelle maximale face aux rafales de vent côtier et aux contraintes mécaniques.',
      specs: 'Épaisseur nominale : 1.8 mm - 2.2 mm · Finition Qualicoat 80µm',
      category: 'structure',
    },
    {
      id: 'polyamide',
      x: 48,
      y: 35,
      title: 'Barrette Isolante Polyamide PA66 GF25 (34mm)',
      badge: 'Rupture de Pont Thermique',
      description: 'Barrette tubulaire renforcée de 25% de fibre de verre sertie hydrauliquement entre les profilés intérieurs et extérieurs, éliminant tout transfert calorifique.',
      specs: 'Conductivité λ = 0.30 W/m.K · Conforme RTCM Maroc',
      category: 'isolation',
    },
    {
      id: 'vitrage-isolant',
      x: 78,
      y: 22,
      title: 'Double Vitrage Basse Émissivité 28mm (6/16/6)',
      badge: 'Contrôle Solaire & Argon',
      description: 'Composé d’un verre feuilleté acoustique, d’une lame de 16mm remplie à 90% de gaz argon et d’une couche Planitherm 4 saisons.',
      specs: 'Ug = 1.1 W/m²K · Atténuation acoustique Rw = 42 dB',
      category: 'isolation',
    },
    {
      id: 'joints-epdm',
      x: 35,
      y: 65,
      title: 'Triple Barrière de Joints EPDM Vulcanisés',
      badge: 'Étanchéité AEV Maximale',
      description: 'Joint central à chambre de décompression associé aux joints de battement intérieurs et extérieurs pour une étanchéité parfaite à l’air, à l’eau et au vent.',
      specs: 'Classement AEV : A*4 E*9A V*C5 · Résistance marine',
      category: 'etancheite',
    },
    {
      id: 'verrouillage',
      x: 82,
      y: 75,
      title: 'Gâche & Ferrure de Sécurité Multipoints RC2',
      badge: 'Anti-Effraction',
      description: 'Système de verrouillage périmétrique en acier inoxydable avec gâches de sécurité en têtière trempée anti-soulèvement.',
      specs: 'Norme EN 1627 classe RC2 / RC3 · Poignée à clé sécurisée',
      category: 'securite',
    },
  ];

  const currentHotspots = hotspotsRPT;
  const selected = currentHotspots.find((h) => h.id === activeHotspot) || currentHotspots[0];

  return (
    <div className="bg-brand-ink text-white rounded-2xl border border-brand-lineDark overflow-hidden shadow-apple-lg">
      {/* Header bar */}
      <div className="p-6 sm:p-8 border-b border-brand-lineDark flex flex-col md:flex-row md:items-center justify-between gap-4 bg-brand-ink/90">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-brand-red/20 border border-brand-red/30 text-red-400 text-[11px] font-mono font-bold uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>COUPE TECHNIQUE ÉCORCHÉE · CAO 1:1</span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
            Anatomie d’un Châssis Haute Performance
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Cliquez sur les points interactifs pour explorer la technologie interne et l’ingénierie Cristalu Nord.
          </p>
        </div>

        {/* System toggle */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10 self-start md:self-auto">
          <button
            onClick={() => {
              setActiveSystem('rpt');
              setActiveHotspot('polyamide');
            }}
            className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
              activeSystem === 'rpt'
                ? 'bg-brand-red text-white shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Aluminium RPT 70mm
          </button>
          <button
            onClick={() => {
              setActiveSystem('pvc');
              setActiveHotspot('polyamide');
            }}
            className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
              activeSystem === 'pvc'
                ? 'bg-brand-red text-white shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            PVC 6 Chambres
          </button>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Schematic Blueprint Canvas */}
        <div className="lg:col-span-7 p-6 sm:p-8 bg-[#08090a] relative flex items-center justify-center border-b lg:border-b-0 lg:border-r border-brand-lineDark">
          {/* Blueprint Grid pattern */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Technical Drawing Blueprint Mock */}
          <div className="relative w-full max-w-[420px] aspect-[4/3] bg-gradient-to-br from-brand-paperCard/10 via-brand-paperCard/5 to-transparent rounded-xl border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-inner">
            {/* Technical Header inside schematic */}
            <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 border-b border-white/10 pb-2">
              <span>CRISTALU-NORD // SYS-70-RPT</span>
              <span>ECHELLE 1:1</span>
              <span>DWG-2026.10</span>
            </div>

            {/* Stylized Cross-section Profile SVG */}
            <svg
              viewBox="0 0 400 260"
              className="w-full h-auto drop-shadow-2xl"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Wall Reference */}
              <rect x="10" y="20" width="40" height="220" fill="url(#hatch)" stroke="#374151" strokeWidth="1" />

              {/* Outer Alu Profile */}
              <path
                d="M 60 40 L 150 40 L 150 70 L 120 70 L 120 180 L 150 180 L 150 210 L 60 210 Z"
                fill="#1f2937"
                stroke="#60a5fa"
                strokeWidth="2"
              />
              <path d="M 70 50 L 140 50 L 140 60 L 110 60 L 110 190 L 140 190 L 140 200 L 70 200 Z" fill="#111827" />

              {/* Polyamide Thermal Break Bars (Red striped) */}
              <rect x="150" y="55" width="60" height="20" fill="#dc2626" rx="2" stroke="#ef4444" strokeWidth="1.5" />
              <rect x="150" y="175" width="60" height="20" fill="#dc2626" rx="2" stroke="#ef4444" strokeWidth="1.5" />
              <line x1="165" y1="55" x2="165" y2="75" stroke="#fca5a5" strokeWidth="1" />
              <line x1="180" y1="55" x2="180" y2="75" stroke="#fca5a5" strokeWidth="1" />
              <line x1="195" y1="55" x2="195" y2="75" stroke="#fca5a5" strokeWidth="1" />
              <line x1="165" y1="175" x2="165" y2="195" stroke="#fca5a5" strokeWidth="1" />
              <line x1="180" y1="175" x2="180" y2="195" stroke="#fca5a5" strokeWidth="1" />
              <line x1="195" y1="175" x2="195" y2="195" stroke="#fca5a5" strokeWidth="1" />

              {/* Inner Alu Profile */}
              <path
                d="M 210 40 L 290 40 L 290 100 L 260 100 L 260 150 L 290 150 L 290 210 L 210 210 Z"
                fill="#1f2937"
                stroke="#60a5fa"
                strokeWidth="2"
              />
              <path d="M 220 50 L 280 50 L 280 90 L 250 90 L 250 160 L 280 160 L 280 200 L 220 200 Z" fill="#111827" />

              {/* EPDM Gaskets (Dark Teal) */}
              <rect x="135" y="90" width="16" height="30" fill="#10b981" rx="3" />
              <rect x="245" y="90" width="16" height="30" fill="#10b981" rx="3" />
              <circle cx="180" cy="125" r="10" fill="#059669" stroke="#34d399" strokeWidth="1.5" />

              {/* Double Glazing Unit */}
              <rect x="300" y="25" width="12" height="200" fill="#38bdf8" fillOpacity="0.4" stroke="#0284c7" strokeWidth="1.5" rx="1" />
              <rect x="312" y="25" width="24" height="200" fill="#0284c7" fillOpacity="0.1" stroke="#0284c7" strokeDasharray="3 3" strokeWidth="1" />
              <rect x="336" y="25" width="12" height="200" fill="#38bdf8" fillOpacity="0.4" stroke="#0284c7" strokeWidth="1.5" rx="1" />

              {/* Warm Edge Spacer */}
              <rect x="312" y="195" width="24" height="22" fill="#475569" stroke="#94a3b8" strokeWidth="1" />

              {/* Locking hardware */}
              <circle cx="370" cy="180" r="12" fill="#e11d48" stroke="#f43f5e" strokeWidth="2" />
              <path d="M 365 180 L 375 180 M 370 175 L 370 185" stroke="#ffffff" strokeWidth="2" />

              <defs>
                <pattern id="hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="0" y2="8" stroke="#4b5563" strokeWidth="1" />
                </pattern>
              </defs>
            </svg>

            {/* Clickable Hotspot Pins */}
            {currentHotspots.map((hotspot) => {
              const isActive = hotspot.id === activeHotspot;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setActiveHotspot(hotspot.id)}
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                  aria-label={hotspot.title}
                >
                  <span className="relative flex h-6 w-6 items-center justify-center">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        isActive ? 'bg-brand-red' : 'bg-blue-400 group-hover:bg-brand-red'
                      }`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-5 w-5 items-center justify-center text-[10px] font-bold text-white shadow-lg transition-transform ${
                        isActive
                          ? 'bg-brand-red ring-4 ring-brand-red/30 scale-110'
                          : 'bg-brand-paperCard border border-white/40 group-hover:scale-110 group-hover:bg-brand-red'
                      }`}
                    >
                      {hotspot.id === 'polyamide' ? '1' : hotspot.id === 'alu-exterieur' ? '2' : hotspot.id === 'vitrage-isolant' ? '3' : hotspot.id === 'joints-epdm' ? '4' : '5'}
                    </span>
                  </span>
                </button>
              );
            })}

            {/* Blueprint Footer */}
            <div className="flex items-center justify-between text-[9px] font-mono text-gray-500 pt-2 border-t border-white/10">
              <span>QUALICOAT CLASSE 2 CERTIFIÉ</span>
              <span className="text-red-400">RUPTURE THERMIQUE ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Detail Panel */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#0f1115] to-[#0a0c0e]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand-red/20 text-brand-red font-mono text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{selected.badge}</span>
              </span>
              <span className="text-xs font-mono text-gray-500">Composant n°{selected.id}</span>
            </div>

            <h4 className="font-heading text-lg sm:text-xl font-bold text-white mb-3">
              {selected.title}
            </h4>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
              {selected.description}
            </p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-3.5 mb-6">
              <span className="text-[10px] font-mono uppercase text-gray-400 font-bold block mb-1">
                Fiche &amp; Spécifications de Fabrication :
              </span>
              <p className="text-xs font-mono text-emerald-400 font-semibold">
                {selected.specs}
              </p>
            </div>

            {/* Quick hotlist */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                Sélectionnez un point d’analyse :
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentHotspots.map((h, i) => (
                  <button
                    key={h.id}
                    onClick={() => setActiveHotspot(h.id)}
                    className={`text-left px-3 py-2 rounded text-xs transition-all flex items-center justify-between border ${
                      h.id === activeHotspot
                        ? 'bg-brand-red/20 border-brand-red text-white font-bold'
                        : 'bg-white/[0.02] border-white/10 text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="truncate">{i + 1}. {h.badge}</span>
                    {h.id === activeHotspot && <Check className="w-3.5 h-3.5 text-brand-red" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
            <span>Certification RTCM Maroc</span>
            <span className="text-white font-bold">Garantie 10 Ans Cristalu</span>
          </div>
        </div>
      </div>
    </div>
  );
}
