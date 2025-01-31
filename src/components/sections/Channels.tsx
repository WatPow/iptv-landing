'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

interface ChannelCategory {
  icon: React.ReactNode;
  title: string;
  channels: string;
  logos: string[];
}

const channelCategories: ChannelCategory[] = [
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Chaînes généralistes", 
    channels: "TF1, France 2, M6, CANAL+, C8, W9…",
    logos: ['/logos/tf1.png', '/logos/france2.png', '/logos/m6.png', '/logos/canal.png']
  },
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    title: "Chaînes d'information", 
    channels: "BFM TV, CNews, LCI, Franceinfo, Euronews…",
    logos: ['/logos/bfmtv.png', '/logos/cnews.png', '/logos/lci.png', '/logos/franceinfo.png']
  },
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      </svg>
    ),
    title: "Chaînes sportives", 
    channels: "beIN Sports, CANAL+ Sport, RMC Sport, Eurosport, DAZN…",
    logos: ['/logos/bein.png', '/logos/canalsport.png', '/logos/rmcsport.png', '/logos/eurosport.png']
  },
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
    title: "Chaînes cinéma & séries", 
    channels: "CANAL+ Cinéma, OCS, CINE+, Warner TV, TF1 Séries Films…",
    logos: ['/logos/canalcinema.png', '/logos/ocs.png', '/logos/cineplus.png', '/logos/warner.png']
  },
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Chaînes jeunesse", 
    channels: "Disney Channel, Nickelodeon, Gulli, Cartoon Network, Boomerang…",
    logos: ['/logos/disney.png', '/logos/nickelodeon.png', '/logos/gulli.png', '/logos/cartoon.png']
  },
  { 
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Chaînes documentaires", 
    channels: "National Geographic, PLANETE+, RMC Découverte, Ushuaïa TV…",
    logos: ['/logos/natgeo.png', '/logos/planete.png', '/logos/rmcdecouverte.png', '/logos/ushuaia.png']
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Channels() {
  return (
    <section className="bg-zinc-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-3xl"></div>
      
      <div className="container relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-white/80 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Catalogue de chaînes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            <span className="text-white">Plus de</span>{' '}
            <span className="bg-gradient-to-r from-zinc-300 to-white text-transparent bg-clip-text">150 chaînes</span>{' '}
            <span className="text-white">en direct</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Accédez à un catalogue complet de chaînes TV françaises et internationales en HD
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {channelCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-zinc-800/40 backdrop-blur-xl p-6 rounded-xl hover:bg-zinc-800/50 transition-all duration-300 border border-zinc-700/50"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-zinc-700/50 rounded-lg flex items-center justify-center mr-4">
                  <div className="text-white/90">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              <p className="text-zinc-300 mb-6">
                {category.channels}
              </p>
              <div className="grid grid-cols-4 gap-4">
                {category.logos.map((logo, logoIndex) => (
                  <div 
                    key={logoIndex} 
                    className="relative aspect-video bg-zinc-800/80 rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow border border-zinc-700/50"
                  >
                    <Image
                      src={logo}
                      alt={`Logo ${logoIndex + 1}`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg border border-white/10">
            <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-white/80">Qualité HD 1080p garantie</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 