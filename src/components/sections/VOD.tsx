'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

interface StreamingService {
  name: string;
  logo: string;
  description: string;
  features: string[];
}

const streamingServices: StreamingService[] = [
  {
    name: "Netflix",
    logo: "/logos/streaming/netflix.png",
    description: "Le leader mondial du streaming",
    features: ["Films et séries exclusifs", "4K HDR", "Téléchargement hors-ligne"]
  },
  {
    name: "Disney+",
    logo: "/logos/streaming/disney.png",
    description: "L&apos;univers Disney, Marvel et Star Wars",
    features: ["Contenus familiaux", "IMAX Enhanced", "4 écrans simultanés"]
  },
  {
    name: "Prime Video",
    logo: "/logos/streaming/prime.png",
    description: "Le meilleur d&apos;Amazon",
    features: ["Sports en direct", "X-Ray", "HDR10+"]
  },
  {
    name: "Canal+",
    logo: "/logos/streaming/canalplus.png",
    description: "Le cinéma français en avant-première",
    features: ["Films récents", "Séries Canal+", "Sport en direct"]
  },
  {
    name: "Apple TV+",
    logo: "/logos/streaming/appletv.png",
    description: "Des productions originales primées",
    features: ["Dolby Vision", "Qualité 4K", "Audio spatial"]
  },
  {
    name: "Paramount+",
    logo: "/logos/streaming/paramount.png",
    description: "Le catalogue Paramount",
    features: ["CBS", "Showtime", "MTV"]
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

export default function VOD() {
  return (
    <section className="bg-[#0A0A0B] py-24 relative overflow-hidden">
      {/* Effets de fond Web3.0 */}
      <div className="absolute inset-0">
        {/* Motif de points */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 2px, transparent 2px)`,
            backgroundSize: '24px 24px'
          }}
        ></div>

        {/* Gradient moderne */}
        <div className="absolute inset-0 bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-zinc-900 via-[#13131A] to-zinc-900"></div>

        {/* Effet de néon */}
        <div className="absolute inset-0">
          <div className="absolute top-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"></div>
        </div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          {/* Badge Web3.0 */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-sm rounded-full"></div>
              <span className="relative inline-block px-4 py-1 bg-white/5 rounded-full text-sm font-medium text-zinc-300 backdrop-blur-sm border border-white/10">
                Streaming & VOD
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-blue-200">
              Votre divertissement
            </span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-purple-200">
              sans limites
            </span>
          </h2>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
            Un catalogue complet avec la possibilité de requêter vos contenus préférés
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-24"
        >
          {/* Requêtes VOD Card */}
          <div className="group relative p-8 bg-gradient-to-b from-white/[0.07] to-transparent backdrop-blur-sm border border-white/10 rounded-xl hover:from-white/[0.11] hover:to-white/[0.03] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-xl"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white/80 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors duration-300">Requêtes VOD</h3>
                  <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">Une exclusivité unique</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                  <svg className="w-5 h-5 mr-3 text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Demandez n&apos;importe quel contenu manquant
                </li>
                <li className="flex items-center text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                  <svg className="w-5 h-5 mr-3 text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Bot Discord automatisé pour les requêtes
                </li>
                <li className="flex items-center text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                  <svg className="w-5 h-5 mr-3 text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Traitement rapide et notifications
                </li>
              </ul>
              <div className="mt-6">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5 backdrop-blur-sm border border-white/10 rounded-lg">
                  <span className="text-sm text-zinc-400">💡 Tapez simplement <code className="text-white/90 font-mono">!ajouter Nom du film</code></span>
                </div>
              </div>
            </div>
          </div>

          {/* GrabNWatch Card */}
          <div className="group relative p-8 bg-gradient-to-b from-white/[0.07] to-transparent backdrop-blur-sm border border-white/10 rounded-xl hover:from-white/[0.11] hover:to-white/[0.03] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-xl"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white/80 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors duration-300">GrabNWatch</h3>
                  <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">Téléchargement hors-ligne</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                  <svg className="w-5 h-5 mr-3 text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Téléchargez depuis votre playlist
                </li>
                <li className="flex items-center text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                  <svg className="w-5 h-5 mr-3 text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Interface simple et intuitive
                </li>
                <li className="flex items-center text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                  <svg className="w-5 h-5 mr-3 text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Gestion de la file d&apos;attente
                </li>
              </ul>
              <div className="mt-6">
                <a 
                  href="https://github.com/WatPow/GrabNWatch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 hover:from-purple-500/20 hover:via-blue-500/20 hover:to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-lg text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Télécharger l&apos;application</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Streaming Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {streamingServices.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative p-6 bg-gradient-to-b from-white/[0.07] to-transparent backdrop-blur-sm border border-white/10 rounded-xl hover:from-white/[0.11] hover:to-white/[0.03] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-xl"></div>
              <div className="relative z-10">
                <div className="relative h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={service.logo}
                    alt={service.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-white transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 group-hover:text-zinc-300 transition-colors duration-300">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                      <svg className="w-4 h-4 mr-2 text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 