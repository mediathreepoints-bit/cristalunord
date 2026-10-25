import React from 'react';
import Hero from '@/components/home/Hero';
import BeforeAfterShowcase from '@/components/home/BeforeAfterShowcase';
import ThermalPerformanceExplorer from '@/components/home/ThermalPerformanceExplorer';
import ColorStudio from '@/components/home/ColorStudio';
import InstitutionalManifesto from '@/components/home/InstitutionalManifesto';
import Presentation from '@/components/home/Presentation';
import Expertises from '@/components/home/Expertises';
import FeaturedWorks from '@/components/home/FeaturedWorks';
import WhyUs from '@/components/home/WhyUs';
import Method from '@/components/home/Method';
import QuoteCTA from '@/components/home/QuoteCTA';
import ContactMap from '@/components/home/ContactMap';

export default function HomePage() {
  return (
    <main id="main" className="overflow-x-hidden">
      {/* 01. Cinematic Luxury Hero */}
      <Hero />

      {/* 02. Institutional Manifesto & Industrial Pillars */}
      <InstitutionalManifesto />

      {/* 03. Atelier & Company Presentation */}
      <Presentation />

      {/* 04. Core Expertises (Aluminium, PVC, Vitrage) */}
      <Expertises />

      {/* 05. Draggable Before/After Façade Renovation Showcase */}
      <BeforeAfterShowcase />

      {/* 06. Interactive Thermal & Acoustic Performance Explorer */}
      <ThermalPerformanceExplorer />

      {/* 07. Interactive Color & Qualicoat Architectural Nuancier */}
      <ColorStudio />

      {/* 08. Featured Project Gallery with Lightbox */}
      <FeaturedWorks />

      {/* 09. Quality Guarantees & RTCM Moroccan Standards */}
      <WhyUs />

      {/* 10. 5-Step Precision Installation Methodology */}
      <Method />

      {/* 11. Quote Configurator CTA */}
      <QuoteCTA />

      {/* 12. Tangier Workshop & Showroom Contact Map */}
      <ContactMap />
    </main>
  );
}
