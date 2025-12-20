/**
 * @file ProblemSection: Identifica los puntos de dolor del cliente.
 */

import React from 'react'
import { AlertCircle, Clock, TrendingDown, Users } from 'lucide-react'

/**
 * Sección que describe los problemas comunes de los negocios sin automatización.
 */
export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <TrendingDown className="h-6 w-6 text-red-400" />,
      title: 'Pérdida de Leads',
      description: 'El 60% de los clientes potenciales se pierden si no reciben respuesta en los primeros 5 minutos.'
    },
    {
      icon: <Clock className="h-6 w-6 text-red-400" />,
      title: 'Respuesta Lenta',
      description: 'Equipos saturados que tardan horas o días en contestar preguntas frecuentes y consultas básicas.'
    },
    {
      icon: <Users className="h-6 w-6 text-red-400" />,
      title: 'Costos Operativos Altos',
      description: 'Contratar personal adicional para tareas repetitivas drena el presupuesto y limita el crecimiento.'
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-red-400" />,
      title: 'Errores Manuales',
      description: 'La carga manual de datos en CRM o ERP genera inconsistencias y pérdida de información crítica.'
    }
  ]

  return (
    <section className="border-t border-slate-900/60 py-16 sm:py-24">
      <div className="space-y-4 text-center mb-16">
        <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          El costo invisible de no automatizar
        </h2>
        <p className="mx-auto max-w-2xl text-slate-400">
          Cada minuto que su empresa pasa gestionando tareas repetitivas manualmente, está perdiendo dinero, tiempo y oportunidades de mercado.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((item, index) => (
          <div key={index} className="relative rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all hover:border-slate-700">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10">
              {item.icon}
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-50">{item.title}</h3>
            <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
