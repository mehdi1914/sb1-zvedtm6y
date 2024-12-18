import React from 'react';
import Container from '@/components/ui/Container';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

export default function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-purple-950/20 to-black">
      <BackgroundEffects />
      <Container className="relative pt-32 pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </div>
  );
}

function BackgroundEffects() {
  return (
    <>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>
    </>
  );
}