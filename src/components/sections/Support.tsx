'use client';

import { motion } from 'framer-motion';
import React from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Support() {
  return (
    <section className="bg-zinc-900 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-3xl"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          {/* Discord Support */}
          <div className="bg-zinc-800/40 backdrop-blur-xl p-8 rounded-2xl hover:bg-zinc-800/50 transition-all duration-300 border border-zinc-700/50 relative overflow-hidden mb-8">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-2xl rounded-full -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-zinc-700/50 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white/90" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Support Discord</h3>
                  <p className="text-zinc-400">Assistance 24/7</p>
                </div>
              </div>
              <p className="text-zinc-300 mb-6">
                Rejoignez notre communauté Discord pour une assistance rapide et personnalisée. Notre équipe et nos membres sont là pour vous aider !
              </p>
              <div className="bg-zinc-800/70 p-4 rounded-lg border border-zinc-700/50 mb-6">
                <div className="flex items-center text-zinc-300 mb-2">
                  <svg className="w-5 h-5 mr-2 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Réponse rapide garantie
                </div>
                <div className="flex items-center text-zinc-300">
                  <svg className="w-5 h-5 mr-2 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Support disponible 24/7
                </div>
              </div>
              <a 
                href="https://discord.gg/votre-serveur" 
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg border border-white/10 text-white"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
                <span>Rejoindre le serveur</span>
              </a>
            </div>
          </div>

          {/* Premium Support */}
          <div className="bg-zinc-800/40 backdrop-blur-xl p-8 rounded-2xl hover:bg-zinc-800/50 transition-all duration-300 border border-zinc-700/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-2xl rounded-full -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-zinc-700/50 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Support Premium</h3>
                  <p className="text-zinc-400">Assistance prioritaire</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-zinc-300">
                  <svg className="w-5 h-5 mr-3 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Assistance personnalisée par email
                </li>
                <li className="flex items-center text-zinc-300">
                  <svg className="w-5 h-5 mr-3 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Temps de réponse garanti sous 2h
                </li>
                <li className="flex items-center text-zinc-300">
                  <svg className="w-5 h-5 mr-3 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Support technique dédié
                </li>
              </ul>
              <div className="text-sm text-zinc-400 bg-zinc-800/70 p-3 rounded-lg border border-zinc-700/50">
                💡 Accédez au support premium avec votre abonnement
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 