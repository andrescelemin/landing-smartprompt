/**
 * @file Use cases section for the Smart Prompt Consulting landing page.
 */

import React from 'react'
import { FileText, Headphones, LineChart, Package } from 'lucide-react'

/**
 * Single use case item definition.
 */
interface UseCaseItem {
  /** Short title describing the use case. */
  title: string
  /** Description that explains the scenario. */
  description: string
  /** Label for the typical department or area. */
  area: string
}

/**
 * Example use cases where AI agents and workflows add value.
 */
const USE_CASES: UseCaseItem[] = [
  {
    title: 'Soporte de primer nivel automatizado',
    description:
      'Agente que responde FAQs, crea tickets en tu herramienta de soporte y clasifica incidencias para el equipo humano.',
    area: 'Atención al cliente',
  },
  {
    title: 'Pre-cualificación de leads y agenda',
    description:
      'Agente comercial que contacta leads entrantes, hace preguntas clave y reserva reuniones en el calendario del equipo.',
    area: 'Ventas',
  },
  {
    title: 'Reconciliación y reportes financieros',
    description:
      'Workflows que integran datos de bancos, ERP y hojas de cálculo para generar reportes periódicos sin esfuerzo manual.',
    area: 'Finanzas',
  },
  {
    title: 'Seguimiento post-venta automatizado',
    description:
      'Mensajería automatizada para onboarding, encuestas NPS y seguimiento de adopción del producto.',
    area: 'Customer Success',
  },
]

/**
 * Section that lists representative use cases across departments.
 */
export const UseCasesSection: React.FC = () => {
  return (
    <section id="casos-uso" className="border-t border-slate-900/60 py-12 sm:py-16">
      <div className="mb-6 flex items-baseline justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Casos de uso listos para implementar
          </h2>
          <p className="max-w-2xl text-sm text-slate-300">
            Empezamos con casos concretos y medibles. Adaptamos estos escenarios a tu sector,
            herramientas y reglas de negocio.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {USE_CASES.map((useCase) => (
          <article
            key={useCase.title}
            className="flex h-full flex-col gap-2 rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition-colors hover:border-emerald-500/30"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="flex-1 text-sm font-semibold leading-tight text-slate-50">
                {useCase.title}
              </h3>
              <span className="shrink-0 whitespace-nowrap rounded-full border border-slate-800 bg-slate-950/80 px-2 py-0.5 text-[0.65rem] font-medium text-emerald-400">
                {useCase.area}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              {useCase.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-4 text-xs text-slate-400 sm:grid-cols-3">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/10">
            <Headphones className="h-3.5 w-3.5 text-emerald-400" />
          </div>
          <span>Soporte multicanal (web, WhatsApp).</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/10">
            <LineChart className="h-3.5 w-3.5 text-emerald-400" />
          </div>
          <span>Reporting y analítica en tiempo real.</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/10">
            <Package className="h-3.5 w-3.5 text-emerald-400" />
          </div>
          <span>Integración directa con tus sistemas.</span>
        </div>
      </div>
    </section>
  )
}
