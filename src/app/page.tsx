'use client';

import React from 'react';
import Hero from '../components/sections/Hero';
import Channels from '../components/sections/Channels';
import VOD from '../components/sections/VOD';
import Support from '../components/sections/Support';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Channels />
      <VOD />
      <Support />
    </main>
  );
}
