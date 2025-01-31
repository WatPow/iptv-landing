'use client';

import { motion } from 'framer-motion';
import React from 'react';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Multi-écrans",
    description: "2 écrans simultanés inclus avec chaque abonnement"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Multi-appareils",
    description: "TV, smartphone, tablette, ordinateur..."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Installation facile",
    description: "Box TV préconfigurée avec TiviMate Premium"
  }
];

export default function Hero() {
  return (
    <section className="bg-[#0A0A0B] min-h-screen flex items-center relative overflow-hidden py-20">
      {/* Image de fond Stremio */}
      <div className="absolute left-0 w-1/3 h-full">
        <div 
          className="absolute inset-0 bg-cover bg-left"
          style={{ 
            backgroundImage: 'url("/posters-perspective-home.png")',
            filter: 'brightness(0.25)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0A0A0B] via-transparent to-transparent" />
      </div>

      {/* Effets de fond Web3.0 */}
      <div className="absolute inset-0">
        {/* Spectre lumineux */}
        <div className="absolute top-0 left-0 right-0 h-[800px] flex items-start justify-center">
          <motion.div
            animate={{
              y: [0, -30, 0],
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-[600px] h-[600px]"
          >
            {/* Corps principal du spectre */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent blur-[100px] transform -rotate-12"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/30 to-transparent blur-[100px] transform rotate-12"></div>
            
            {/* Aura centrale */}
            <div className="absolute inset-10 bg-gradient-to-r from-purple-500/20 via-blue-500/30 to-purple-500/20 blur-[80px] rounded-full"></div>
            
            {/* Points lumineux */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/60 rounded-full blur-md"></div>
            <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-white/60 rounded-full blur-md"></div>
            <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-white/60 rounded-full blur-md"></div>
          </motion.div>
        </div>

        {/* Motif de points */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{ 
            backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 2px, transparent 2px)`,
            backgroundSize: '24px 24px'
          }}
        ></div>

        {/* Effet de néon */}
        <div className="absolute inset-0">
          <div className="absolute top-20 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-20 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"></div>
        </div>

        {/* Effet de particules flottantes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] z-20">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-full h-full"
          >
            {/* Cercles lumineux */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20 * (Math.sin(i * 0.7) + 1), 0],
                  x: [0, 15 * (Math.cos(i * 0.9) * (i % 3 - 1)), 0],
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{
                  duration: 4 + i % 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
                className="absolute rounded-full"
                style={{
                  width: `${15 + i * 2}px`,
                  height: `${15 + i * 2}px`,
                  left: `${Math.sin(i * 1.2) * 200 + 250}px`,
                  top: `${Math.cos(i * 1.4) * 200 + 250}px`,
                  background: i % 2 
                    ? 'radial-gradient(circle at center, rgba(168, 85, 247, 0.4), rgba(59, 130, 246, 0.2))'
                    : 'radial-gradient(circle at center, rgba(59, 130, 246, 0.4), rgba(168, 85, 247, 0.2))',
                  filter: 'blur(4px)',
                }}
              />
            ))}

            {/* Aura globale */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-transparent blur-2xl"></div>
          </motion.div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 relative"
          >
            {/* Badge Web3.0 */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-sm rounded-full"></div>
                <span className="relative inline-block px-4 py-1 bg-white/5 rounded-full text-sm font-medium text-zinc-300 backdrop-blur-sm border border-white/10">
                  Service Premium IPTV
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-blue-200">
                Serveur IPTV
              </span>
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-purple-200">
                100% privé
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
              Accédez à des centaines de chaînes TV et plateformes de streaming en haute qualité
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 hover:from-purple-500/20 hover:via-blue-500/20 hover:to-purple-500/20 border border-white/10 rounded-xl transition-all duration-300 backdrop-blur-sm">
                <a href="https://cryptanalytica.space/price/index.php?rp=/store/abonnement" className="relative z-10 flex items-center gap-2">
                  <span className="text-white font-medium">Découvrir nos offres</span>
                  <svg className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-xl"></div>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="group relative p-6 bg-gradient-to-b from-white/[0.07] to-transparent backdrop-blur-sm border border-white/10 rounded-xl hover:from-white/[0.11] hover:to-white/[0.03] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-4 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white/80 group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium text-zinc-400">Installation en moins de 5 minutes</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 