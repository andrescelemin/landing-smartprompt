/**
 * @file TestimonialsSection: Sección de casos de éxito y resultados típicos con disclaimer de transparencia.
 */

import React from 'react'
import { CheckCircle2, Star } from 'lucide-react'

/**
 * Componente que muestra casos de éxito y métricas de impacto de forma profesional.
 */
export const TestimonialsSection: React.FC = () => {
  const results = [
    {
      title: "Automatización de Soporte",
      outcome: "Reducción de respuesta inicial de 4 horas a < 10 segundos.",
      description: "Implementación de agente en WhatsApp para filtrado automático de incidencias y resolución de FAQs.",
      tag: "Sector Logística"
    },
    {
      title: "Cualificación de Ventas",
      outcome: "Agenda llena con leads 100% pre-calificados por IA.",
      description: "Workflow que contacta registros nuevos en tiempo real y solo agenda citas con perfiles de alto valor.",
      tag: "Servicios B2B"
    }
  ]

  return (
    <section className="border-t border-slate-900/60 py-16 sm:py-24">
      <div className="mb-12 space-y-4 text-center sm:text-left">
        <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Casos de Éxito y Resultados
        </h2>
        <p className="max-w-2xl text-slate-400">
          Transformamos procesos manuales en flujos de trabajo inteligentes. Estos son ejemplos reales del impacto que la IA genera en nuestros clientes.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {results.map((item, index) => (
          <div 
            key={index} 
            className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/30 p-8 transition-all hover:border-emerald-500/30"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-emerald-400">
                  {item.tag}
                </span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-50 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="flex items-start gap-2 text-lg font-semibold leading-snug text-slate-200">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                  {item.outcome}
                </p>
                <p className="text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl bg-slate-900/10 p-6 text-center border border-dashed border-slate-800">
        <p className="text-xs text-slate-500 italic max-w-2xl mx-auto">
          * Los resultados mencionados representan casos de éxito específicos y ejemplos de lo que es posible lograr. El impacto final depende de la complejidad de los procesos y la calidad de los datos existentes en cada empresa.
        </p>
      </div>
    </section>
  )
}