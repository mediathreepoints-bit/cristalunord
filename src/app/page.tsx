import React from 'react';
import Hero from '@/components/home/Hero';
import Presentation from '@/components/home/Presentation';
import Expertises from '@/components/home/Expertises';
import FeaturedWorks from '@/components/home/FeaturedWorks';
import WhyUs from '@/components/home/WhyUs';
import Method from '@/components/home/Method';
import QuoteCTA from '@/components/home/QuoteCTA';
import ContactMap from '@/components/home/ContactMap';

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Presentation />
      <Expertises />
      <FeaturedWorks />
      <WhyUs />
      <Method />
      <QuoteCTA />
      <ContactMap />
    </main>
  );
}
