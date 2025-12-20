/**
 * @file Solutions section for the Smart Prompt Consulting landing page.
 */

import React from 'react'
import { Building2, Headphones, Workflow } from 'lucide-react'

/**
 * Single solution card data.
 */
interface SolutionItem {
  /** Icon element for the card. */
  icon: React.ReactNode
  /** Title of the solution. */
  title: string
  /** Description of the solution. */
  description: string
}

/**
 * List of core solutions offered by Smart Prompt Consulting.
 */
const SOLUTIONS: SolutionItem[] = [
  {
    icon: <Headphones className="h-5 w-5 text-emerald-400" />,
    title: 'Agentes de atención al cliente',
    description:
      'Bots especializados entrenados con tu documentación, que resuelven incidencias y consultas de forma autónoma en chat, email o WhatsApp.',
  },
  {
    icon: <Workflow className="h-5 w-5 text-emerald-400" />,
    title: 'Workflows entre herramientas',
    description:
      'Automatizamos procesos completos entre CRM, ERP, herramientas internas y canales de comunicación sin cambiar tu stack actual.',
  },
  {
    icon: <Building2 className="h-5 w-5 text-emerald-400" />,
    title: 'Agentes internos para equipos',
    description:
      'Asistentes para equipos de ventas, operaciones o finanzas que preparan reportes, resumen información y sugieren acciones, en segundos.',
  },
]

/**
 * Section that showcases the main AI agent and workflow solutions.
 */
export const SolutionsSection: React.FC = () => {
  return (
    <section id="soluciones" className="border-t border-slate-900/60 py-12 sm:py-16">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Soluciones a medida para tus procesos críticos
        </h2>
        <p className="max-w-2xl text-sm text-slate-300">
          No vendemos un producto genérico. Diseñamos contigo agentes de IA y flujos de trabajo
          que se adaptan a tus procesos actuales, con foco en impacto medible y tiempos de puesta
          en marcha muy cortos.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {SOLUTIONS.map((solution) => (
          <article
            key={solution.title}
            className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
                {solution.icon}
              </div>
              <h3 className="text-sm font-semibold text-slate-50">{solution.title}</h3>
            </div>
            <p className="text-xs text-slate-300">{solution.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
