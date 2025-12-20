
/**
 * @file UpworkSection.tsx: Muestra las credenciales de experto verificado en plataformas internacionales.
 */

import React from 'react'
import { motion } from 'motion/react'
import { Star, Award, CheckCircle, Globe, Users } from 'lucide-react'

/**
 * Componente que resalta el estatus de Top Rated y métricas de éxito en Upwork/Clutch.
 */
export const UpworkSection = () => {
  return (
    <section className="relative py-12 px-6 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Perfil Verificado</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Consultoría de <span className="text-emerald-400">Clase Mundial</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            No solo implementamos IA, somos expertos reconocidos internacionalmente en la mayor plataforma de talento del mundo, manteniendo estándares de calidad excepcionales.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-white flex items-center gap-2">
                100% <CheckCircle className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-sm text-slate-500">Job Success Score</p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-white flex items-center gap-2">
                Top Rated <Star className="w-5 h-5 fill-emerald-400 text-emerald-400" />
              </div>
              <p className="text-sm text-slate-500">Estatus de Élite</p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-white flex items-center gap-2">
                +50 <Users className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-sm text-slate-500">Clientes Globales</p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-white flex items-center gap-2">
                USA/MX <Globe className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-sm text-slate-500">Presencia Bilingüe</p>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm shadow-2xl">
          <div className="flex flex-col items-center text-center">
            {/* Logo de Upwork Simulado o Badge */}
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Top Rated Plus</h3>
            <p className="text-emerald-400 text-sm font-medium mb-4 italic">El 1% superior de expertos en IA</p>
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
              ))}
            </div>
            <div className="w-full h-px bg-slate-800 mb-6" />
            <p className="text-slate-400 text-sm max-w-[200px]">
              "Calidad excepcional y dominio técnico total en automatización."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
