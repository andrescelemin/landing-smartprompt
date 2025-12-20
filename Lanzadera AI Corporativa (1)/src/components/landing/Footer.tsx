/**
 * @file Footer.tsx
 * @description Pie de página con enlaces legales y redes sociales.
 */

import React from 'react'
import { Link } from 'react-router'
import { Sparkles, Linkedin, Twitter, MessageCircle } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo y Copyright */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="flex items-center gap-2 font-bold text-slate-50">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500">
                <Sparkles className="h-5 w-5 text-slate-950" />
              </div>
              <span>Smart Prompt Consulting</span>
            </div>
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Agentes de Inteligencia Artificial. Todos los derechos reservados.
            </p>
          </div>

          {/* Enlaces y RRSS */}
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <nav className="flex gap-6 text-sm font-medium text-slate-400">
              <Link to="/privacy" className="transition-colors hover:text-emerald-400">
                Política de Privacidad
              </Link>
              <a 
                href="https://wa.me/16404005688" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors hover:text-emerald-400"
              >
                Soporte
              </a>
            </nav>

            <div className="flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition-all hover:border-emerald-500/50 hover:text-emerald-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition-all hover:border-emerald-500/50 hover:text-emerald-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/16404005688" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 text-slate-400 transition-all hover:border-emerald-500/50 hover:text-emerald-400"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}