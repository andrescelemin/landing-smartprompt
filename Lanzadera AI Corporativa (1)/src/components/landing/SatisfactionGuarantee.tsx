
/**
 * @file SatisfactionGuarantee.tsx: Sección que refuerza la confianza del cliente mediante garantías explícitas.
 */

import React from 'react'
import { motion } from 'motion/react'
import { ShieldCheck, Award, HeartHandshake, Zap } from 'lucide-react'

/**
 * Componente que muestra los compromisos de calidad de la agencia.
 */
export function SatisfactionGuarantee() {
  const guarantees = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
      title: "Garantía de Rendimiento",
      description: "Si el agente no cumple con los KPIs de precisión establecidos en el contrato, lo ajustamos sin costo adicional hasta lograrlo."
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald-400" />,
      title: "Soporte Prioritario",
      description: "Acceso a nuestro equipo de ingeniería 24/7 durante los primeros 30 días para asegurar una transición perfecta."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-emerald-400" />,
      title: "Transparencia Total",
      description: "Sin letras pequeñas. Tienes propiedad completa sobre los flujos y datos de tu IA desde el primer día."
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 bg-slate-900/40 border border-emerald-500/20 rounded-[40px] p-8 md:p-16 backdrop-blur-sm">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Compromiso de Excelencia
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Tu éxito es nuestra <span className="text-emerald-400">única métrica</span> de valor
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              No somos solo proveedores, somos tu equipo de ingeniería de IA. Nuestra metodología está diseñada para eliminar el riesgo y garantizar que cada dólar invertido retorne en eficiencia.
            </p>
            
            <div className="space-y-8">
              {guarantees.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-500">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <motion.div 
              initial={{ rotate: -5, scale: 0.9 }}
              whileInView={{ rotate: 0, scale: 1 }}
              className="relative w-full max-w-sm"
            >
              {/* Sello de Garantía Visual */}
              <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-950 border-2 border-emerald-500/30 rounded-full flex flex-col items-center justify-center text-center p-10 shadow-[0_0_50px_rgba(16,185,129,0.1)] relative">
                <div className="absolute inset-4 border border-dashed border-emerald-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
                <ShieldCheck className="w-20 h-20 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
                  Satisfacción <br/> Garantizada
                </h3>
                <div className="mt-4 h-[1px] w-12 bg-emerald-500/50" />
                <p className="mt-4 text-emerald-400/80 font-mono text-xs">
                  ISO COMPLIANT & AI CERTIFIED <br/> PROTOCOLS
                </p>
              </div>
              
              {/* Elementos decorativos extra */}
              <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-slate-950 font-bold px-6 py-2 rounded-lg rotate-12 shadow-xl">
                100% SEGURO
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
