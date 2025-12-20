/**
 * @file Benefits section for the Smart Prompt Consulting landing page.
 */

import React from 'react'
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react'

/**
 * Benefit item definition.
 */
interface BenefitItem {
  /** Icon element to visually represent the benefit. */
  icon: React.ReactNode
  /** Short label for the benefit. */
  title: string
  /** Description explaining the benefit. */
  description: string
}

/**
 * Benefits list describing key outcomes for clients.
 */
const BENEFITS: BenefitItem[] = [
  {
    icon: <Zap className="h-4 w-4 text-emerald-400" />,
    title: 'Más velocidad, menos carga manual',
    description:
      'Reducimos tiempo en tareas repetitivas como recopilación de datos, preparación de reportes o clasificación de tickets.',
  },
  {
    icon: <CheckCircle2 className="h-4 w-4 text-emerald-400" />,
    title: 'Mayor calidad y consistencia',
    description:
      'Agentes que siguen reglas, políticas y tono de marca definidos, con trazabilidad de cada interacción.',
  },
  {
    icon: <ShieldCheck className="h-4 w-4 text-emerald-400" />,
    title: 'Arquitectura segura y controlada',
    description:
      'Diseños con control de permisos, logs detallados y posibilidad de revisión humana en los puntos críticos.',
  },
]

/**
 * Section that highlights core business benefits from using AI agents and workflows.
 */
export const BenefitsSection: React.FC = () => {
  return (
    <section id="beneficios" className="border-t border-slate-900/60 py-12 sm:py-16">
      <div className="grid gap-8 sm:grid-cols-[1.1fr_minmax(0,1fr)] sm:items-start">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Beneficios tangibles para tu negocio
          </h2>
          <p className="max-w-xl text-sm text-slate-300">
            Analizamos tus procesos, priorizamos los casos con mayor retorno y diseñamos una
            hoja de ruta pragmática. La tecnología es importante, pero el impacto en negocio lo es
            aún más.
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
              <span>Menos errores humanos en tareas críticas y repetitivas.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
              <span>Equipos liberados para trabajo de mayor valor estratégico.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
              <span>Visibilidad en tiempo real del rendimiento de los agentes y flujos.</span>
            </li>
          </ul>
        </div>

        <div className="space-y-3 rounded-xl border border-emerald-900/60 bg-emerald-500/5 p-4">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className="flex gap-3 rounded-lg bg-slate-950/40 p-3">
              <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xs font-semibold text-emerald-200">{benefit.title}</h3>
                <p className="text-[0.7rem] text-slate-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
