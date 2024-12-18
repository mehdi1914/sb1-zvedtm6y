import React from 'react';
import Container from '@/components/ui/Container';
import HeroContent from './HeroContent';
import BackgroundEffects from './BackgroundEffects';

export default function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-purple-950/10 to-black">
      <BackgroundEffects />
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent h-32 pointer-events-none" />
      <Container className="relative pt-32 pb-24">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)]">
          <HeroContent />
        </div>
      </Container>
    </div>
  );
}