
/**
 * @file FinalCtaSection: Cierre de la página con el enlace directo al formulario.
 */

import React from 'react'
import { Send, ArrowRight } from 'lucide-react'

export const FinalCtaSection: React.FC = () => {
  const FORM_URL = "https://smart-n8n.0ss8w4.easypanel.host/form/4baaef16-e9c0-4530-856e-98c7f278eace";

  return (
    <section id="final-cta" className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 sm:px-12 sm:py-24">
      {/* Background Decor */}
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
          ¿Listo para automatizar <span className="text-emerald-400">tu crecimiento?</span>
        </h2>
        <p className="mb-10 text-lg text-slate-400">
          No dejes que más leads se pierdan por falta de respuesta. Implementa tu agente de IA en menos de 48 horas.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-lg font-bold text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20 active:scale-95"
          >
            <Send className="h-5 w-5" />
            Solicitar Demo Gratis
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        
        <p className="mt-8 text-sm text-slate-500">
          Únete a las empresas que ya están ahorrando +20h semanales.
        </p>
      </div>
    </section>
  )
}
