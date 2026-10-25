'use client';

import React from 'react';
import { Ruler, Maximize2, Shield, SunMedium, Wind } from 'lucide-react';
import { MaterialType } from '@/types';

interface BlueprintProps {
  widthMm: number;
  heightMm: number;
  material: MaterialType;
  windowType: 'coulissant' | 'battant' | 'fixe' | 'porte';
  colorHex?: string;
  colorName?: string;
  glassType?: string;
}

export default function ArchitecturalWindowBlueprint({
  widthMm = 2000,
  heightMm = 2150,
  material = 'aluminium',
  windowType = 'coulissant',
  colorHex = '#22252a',
  colorName = 'Gris Anthracite RAL 7016',
  glassType = 'Double vitrage 28mm Argon',
}: BlueprintProps) {
  const surfaceM2 = ((widthMm * heightMm) / 1000000).toFixed(2);
  const perimeterM = (((widthMm + heightMm) * 2) / 1000).toFixed(2);

  // Normalized aspect ratio for SVG viewport
  const maxDim = Math.max(widthMm, heightMm, 1200);
  const svgWidth = Math.max(260, Math.min(380, (widthMm / maxDim) * 380));
  const svgHeight = Math.max(220, Math.min(320, (heightMm / maxDim) * 320));

  return (
    <div className="bg-[#0b0d11] text-white rounded-xl border border-white/15 p-6 shadow-apple-lg flex flex-col justify-between relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
          <span className="font-mono text-xs font-bold text-gray-300 uppercase tracking-wider">
            SCHÉMA CAO EN TEMPS RÉEL
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-gray-400">
          ÉCHELLE PROPORTIONNELLE
        </span>
      </div>

      {/* Center 2D SVG Blueprint */}
      <div className="relative z-10 py-4 flex flex-col items-center justify-center min-h-[280px]">
        {/* Width Dimension Indicator Top */}
        <div className="flex items-center justify-center gap-2 w-full max-w-[380px] mb-2 text-xs font-mono text-brand-red font-bold">
          <span className="text-gray-500">◀</span>
          <span className="bg-brand-ink/90 px-2 py-0.5 rounded border border-brand-red/40 shadow-sm">
            {widthMm} mm ({((widthMm / 1000)).toFixed(2)} m)
          </span>
          <span className="text-gray-500">▶</span>
        </div>

        <div className="flex items-center justify-center gap-3">
          {/* Height Dimension Indicator Left */}
          <div className="flex flex-col items-center justify-center text-xs font-mono text-brand-red font-bold h-[220px]">
            <span className="text-gray-500">▲</span>
            <span className="bg-brand-ink/90 px-1.5 py-1 rounded border border-brand-red/40 [writing-mode:vertical-lr] rotate-180 my-auto text-center shadow-sm">
              {heightMm} mm
            </span>
            <span className="text-gray-500">▼</span>
          </div>

          {/* SVG Frame Drawing */}
          <div className="relative p-2 bg-black/40 rounded-lg border border-white/10 shadow-2xl flex items-center justify-center">
            <svg
              width={svgWidth}
              height={svgHeight}
              viewBox="0 0 200 180"
              className="transition-all duration-300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Frame Profile */}
              <rect
                x="4"
                y="4"
                width="192"
                height="172"
                rx="2"
                fill={colorHex}
                stroke="#ffffff"
                strokeOpacity="0.3"
                strokeWidth="2"
              />

              {/* Sub-frame inner cut */}
              <rect x="14" y="14" width="172" height="152" fill="#0d141e" />

              {/* Window Panes depending on type */}
              {windowType === 'coulissant' ? (
                <>
                  {/* Left Sash */}
                  <rect
                    x="18"
                    y="18"
                    width="84"
                    height="144"
                    fill={colorHex}
                    stroke="#ffffff"
                    strokeOpacity="0.2"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="24"
                    y="24"
                    width="72"
                    height="132"
                    fill="#38bdf8"
                    fillOpacity="0.25"
                    stroke="#0284c7"
                    strokeWidth="1"
                  />
                  {/* Opening arrow left to right */}
                  <path d="M 40 90 L 75 90 M 68 83 L 75 90 L 68 97" stroke="#ffffff" strokeWidth="2" />

                  {/* Right Sash (Slightly overlapping) */}
                  <rect
                    x="98"
                    y="18"
                    width="84"
                    height="144"
                    fill={colorHex}
                    stroke="#ffffff"
                    strokeOpacity="0.2"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="104"
                    y="24"
                    width="72"
                    height="132"
                    fill="#38bdf8"
                    fillOpacity="0.25"
                    stroke="#0284c7"
                    strokeWidth="1"
                  />
                  {/* Opening arrow right to left */}
                  <path d="M 160 90 L 125 90 M 132 83 L 125 90 L 132 97" stroke="#ffffff" strokeWidth="2" />

                  {/* Handles */}
                  <rect x="94" y="80" width="3" height="20" rx="1.5" fill="#ffffff" />
                  <rect x="103" y="80" width="3" height="20" rx="1.5" fill="#ffffff" />
                </>
              ) : windowType === 'battant' ? (
                <>
                  {/* Left Casement */}
                  <rect
                    x="18"
                    y="18"
                    width="78"
                    height="144"
                    fill={colorHex}
                    stroke="#ffffff"
                    strokeOpacity="0.2"
                    strokeWidth="1.5"
                  />
                  <rect x="24" y="24" width="66" height="132" fill="#38bdf8" fillOpacity="0.25" stroke="#0284c7" strokeWidth="1" />
                  {/* Casement swing dashed triangle */}
                  <path d="M 24 24 L 90 90 L 24 156" stroke="#ffffff" strokeDasharray="3 3" strokeWidth="1.5" fill="none" />

                  {/* Right Casement */}
                  <rect
                    x="104"
                    y="18"
                    width="78"
                    height="144"
                    fill={colorHex}
                    stroke="#ffffff"
                    strokeOpacity="0.2"
                    strokeWidth="1.5"
                  />
                  <rect x="110" y="24" width="66" height="132" fill="#38bdf8" fillOpacity="0.25" stroke="#0284c7" strokeWidth="1" />
                  {/* Casement swing dashed triangle */}
                  <path d="M 176 24 L 110 90 L 176 156" stroke="#ffffff" strokeDasharray="3 3" strokeWidth="1.5" fill="none" />

                  {/* Central Handle */}
                  <rect x="98" y="82" width="4" height="16" rx="2" fill="#ffffff" />
                </>
              ) : windowType === 'porte' ? (
                <>
                  {/* Door Leaf */}
                  <rect
                    x="18"
                    y="18"
                    width="164"
                    height="144"
                    fill={colorHex}
                    stroke="#ffffff"
                    strokeOpacity="0.2"
                    strokeWidth="1.5"
                  />
                  {/* Top glass pane */}
                  <rect x="28" y="28" width="144" height="80" fill="#38bdf8" fillOpacity="0.3" stroke="#0284c7" strokeWidth="1" />
                  {/* Bottom solid panel */}
                  <rect x="28" y="116" width="144" height="36" fill={colorHex} stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1" />
                  {/* Door Handle & Lock */}
                  <circle cx="158" cy="98" r="4" fill="#ffffff" />
                  <rect x="150" y="96" width="12" height="4" rx="2" fill="#ffffff" />
                </>
              ) : (
                /* Fixe Panoramique */
                <rect x="18" y="18" width="164" height="144" fill="#38bdf8" fillOpacity="0.3" stroke="#0284c7" strokeWidth="1" />
              )}

              {/* Glass reflection diagonal sheen */}
              <line x1="30" y1="30" x2="80" y2="150" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>

      {/* Dynamic Calculated Specs */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
        <div className="bg-white/5 p-2.5 rounded-lg border border-white/10 text-center">
          <span className="text-[10px] text-gray-400 block font-mono">SURFACE VITRÉE</span>
          <strong className="text-sm font-bold text-white font-mono">{surfaceM2} m²</strong>
        </div>

        <div className="bg-white/5 p-2.5 rounded-lg border border-white/10 text-center">
          <span className="text-[10px] text-gray-400 block font-mono">PÉRIMÈTRE CADRE</span>
          <strong className="text-sm font-bold text-white font-mono">{perimeterM} m</strong>
        </div>

        <div className="bg-white/5 p-2.5 rounded-lg border border-white/10 text-center">
          <span className="text-[10px] text-gray-400 block font-mono">ISOLATION (Uw)</span>
          <strong className="text-sm font-bold text-emerald-400 font-mono">
            {material === 'aluminium' ? '1.3 W/m²K' : material === 'pvc' ? '1.1 W/m²K' : '1.2 W/m²K'}
          </strong>
        </div>

        <div className="bg-white/5 p-2.5 rounded-lg border border-white/10 text-center">
          <span className="text-[10px] text-gray-400 block font-mono">FINITION SÉLECTIONNÉE</span>
          <div className="flex items-center justify-center gap-1.5 mt-0.5">
            <span className="w-2.5 h-2.5 rounded-full border border-white/40" style={{ backgroundColor: colorHex }} />
            <strong className="text-xs font-bold text-white truncate max-w-[80px]" title={colorName}>
              {colorName}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
