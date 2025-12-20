/**
 * @file HeroSection.tsx
 * @description Primera impresión enfocada en resultados con animaciones de entrada y CTAs principales (Demo + WhatsApp).
 */

import React from 'react'
import { Send, ShieldCheck, MessageCircle } from 'lucide-react'
import { motion } from 'motion/react'

/**
 * Sección Hero optimizada para conversión inmediata con efectos de revelado.
 */
export const HeroSection: React.FC = () => {
  /** URL del formulario de demo. */
  const FORM_URL =
    'https://smart-n8n.0ss8w4.easypanel.host/form/4baaef16-e9c0-4530-856e-98c7f278eace'

  /** URL de WhatsApp con mensaje predefinido. */
  const WHATSAPP_URL =
    'https://wa.me/16404005688?text=Hola!%20Vengo%20de%20la%20web%20y%20me%20gustaría%20información%20sobre%20los%20agentes%20de%20IA.'

  /**
   * Maneja el clic en el botón de demo y dispara evento al píxel de Meta si existe.
   */
  const handleDemoClick = () => {
    if (typeof (window as any).fbq === 'function') {
      ;(window as any).fbq('track', 'Lead', { content_name: 'Hero Demo Button' })
    }
  }

  /**
   * Abre WhatsApp y registra el evento en Meta Pixel si está disponible.
   */
  const handleWhatsappClick = () => {
    if (typeof (window as any).fbq === 'function') {
      ;(window as any).fbq('track', 'Contact', { content_name: 'Hero WhatsApp Button' })
    }
    window.open(WHATSAPP_URL, '_blank')
  }

  return (
    <section className="flex flex-col gap-12 pb-16 pt-12 sm:pt-20 lg:flex-row lg:items-center lg:gap-16 overflow-hidden">
      {/* Columna de texto y CTAs */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex-1 space-y-8"
      >
        {/* Badge superior */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/5 px-4 py-1.5 text-xs font-semibold text-emerald-300"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span>Soluciones de IA para Empresas</span>
        </motion.div>

        {/* Título y subtítulo */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-balance text-4xl font-bold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
          >
            Escala tu negocio con{' '}
            <span className="text-emerald-400">Agentes de IA</span> personalizados
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-xl text-pretty text-lg text-slate-400"
          >
            Diseñamos flujos de trabajo inteligentes que capturan leads, agendan citas y
            responden a sus clientes 24/7.{' '}
            <strong className="text-slate-200">
              Eficiencia real para dueños de negocios.
            </strong>
          </motion.p>
        </div>

        {/* CTAs principales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-4">
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleDemoClick}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-emerald-500/30 transition-all hover:-translate-y-0.5 hover:bg-emerald-400"
                >
                  <Send className="h-5 w-5" />
                  Solicitar Demo Gratis
                </a>

                <button
                  type="button"
                  onClick={handleWhatsappClick}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/50 bg-transparent px-8 py-3.5 text-base font-bold text-emerald-400 transition-all hover:bg-emerald-500/10 hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Directo
                </button>
              </div>
              <p className="px-2 text-[0.7rem] font-medium uppercase tracking-wider text-slate-500">
                Evaluación personalizada · Sin compromiso · Respuesta &lt; 24h
              </p>
            </div>

            <div className="flex items-center gap-3 px-2 text-sm text-slate-400 sm:mb-8">
              <ShieldCheck className="h-5 w-5 text-emerald-500" />
              <span>Contratación segura vía Upwork</span>
            </div>
          </div>
        </motion.div>

        {/* Métricas rápidas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="flex items-center gap-8 pt-4"
        >
          <div>
            <p className="text-2xl font-bold text-slate-50">48h</p>
            <p className="text-[0.65rem] uppercase tracking-wider text-slate-500">
              Implementación rápida
            </p>
          </div>
          <div className="h-10 w-px bg-slate-800" />
          <div>
            <p className="text-2xl font-bold text-slate-50">24/7</p>
            <p className="text-[0.65rem] uppercase tracking-wider text-slate-500">
              Disponibilidad Total
            </p>
          </div>
          <div className="h-10 w-px bg-slate-800" />
          <div>
            <p className="text-2xl font-bold text-slate-50">100%</p>
            <p className="text-[0.65rem] uppercase tracking-wider text-slate-500">
              Garantía Upwork
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Columna visual con tarjeta e imagen */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex-1 lg:block"
      >
        <div className="relative mx-auto max-w-md">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/50 to-emerald-400/20 blur opacity-20" />
          <div className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-xl">
            <img
              src="https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/69455a2570d0214b990115a0/resource/54bc9226-d384-453e-9723-0e5cd11faebe.jpg"
              alt="AI Dashboard"
              loading="eager"
              decoding="async"
              className="mb-6 h-48 w-full rounded-xl object-cover shadow-2xl"
              fetchpriority="high"
            />
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg bg-slate-950/50 p-3">
                <span className="text-xs text-slate-400">Consultas resueltas hoy</span>
                <span className="text-sm font-bold text-emerald-400">+142</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-slate-950/50 p-3">
                <span className="text-xs text-slate-400">Leads cualificados</span>
                <span className="text-sm font-bold text-emerald-400">28</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}