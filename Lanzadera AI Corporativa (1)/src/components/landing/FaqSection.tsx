
/**
 * @file FaqSection: Sección de preguntas frecuentes para resolver objeciones comunes.
 */

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

/**
 * Lista de preguntas y respuestas estratégicas.
 */
const FAQ_ITEMS = [
  {
    question: "¿Es segura la implementación de IA con mis datos?",
    answer: "Totalmente. Trabajamos bajo protocolos de privacidad estrictos. Los agentes se entrenan con la información específica que tú decidas compartir y no se utilizan para entrenar modelos públicos. Además, la contratación vía Upwork ofrece una capa adicional de seguridad legal y financiera."
  },
  {
    question: "¿Cuánto tiempo toma ver resultados?",
    answer: "Nuestras implementaciones básicas están listas en 48-72 horas. Para flujos complejos de CRM, el proceso suele tomar entre 1 y 2 semanas. Notarás la eficiencia desde el primer día que el agente esté activo."
  },
  {
    question: "¿En qué plataformas pueden trabajar los agentes?",
    answer: "Podemos integrar agentes en WhatsApp, Web (Chatbots), Instagram, Messenger y conectarlos directamente con tu CRM (HubSpot, Salesforce, Pipedrive) o herramientas de gestión como Slack y Google Sheets."
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer: "Ninguno. Nosotros nos encargamos de toda la configuración técnica, el entrenamiento del modelo y la integración. Te entregamos una solución 'llave en mano' lista para funcionar."
  },
  {
    question: "¿Por qué usan Upwork para el pago?",
    answer: "Utilizamos Upwork porque es la plataforma líder mundial en servicios profesionales. Garantiza que tu pago esté protegido mediante Escrow y que solo se libere cuando estés 100% satisfecho con el trabajo entregado."
  }
]

/**
 * Componente de FAQ con estilo acordeón para la landing page.
 */
export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="border-t border-slate-900/60 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-400">
            Todo lo que necesitas saber antes de empezar a transformar tu negocio con IA.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="rounded-xl border border-slate-800 bg-slate-900/20 px-6 transition-colors hover:border-emerald-500/20"
            >
              <AccordionTrigger className="text-left font-semibold text-slate-200 hover:text-emerald-400 hover:no-underline py-6">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 leading-relaxed pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
