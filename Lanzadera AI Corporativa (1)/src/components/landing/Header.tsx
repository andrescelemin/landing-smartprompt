
/**
 * @file Header minimalista para landing page de alta conversión.
 */

import React from 'react'
import { Send } from 'lucide-react'

/**
 * Encabezado simplificado: Logo a la izquierda y CTA único a la derecha.
 * El enlace apunta directamente al formulario de n8n.
 */
export const Header: React.FC = () => {
  const FORM_URL = "https://smart-n8n.0ss8w4.easypanel.host/form/4baaef16-e9c0-4530-856e-98c7f278eace";

  /**
   * Registra el evento Lead en Meta Pixel al hacer clic.
   */
  const handleDemoClick = () => {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Lead', { content_name: 'Header Demo Button' });
    }
  }

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        {/* Logo y Branding */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 font-bold text-slate-950 shadow-lg shadow-emerald-500/20">
            SP
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight text-slate-50 sm:text-base">
              Smart Prompt Consulting
            </span>
            <span className="text-[0.65rem] font-medium uppercase tracking-widest text-emerald-400/80 sm:text-[0.7rem]">
              AI Agents & Workflows
            </span>
          </div>
        </div>

        {/* CTA Principal Único */}
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDemoClick}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-bold text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95 sm:px-6 sm:py-2.5 sm:text-sm"
        >
          <Send className="hidden h-4 w-4 sm:block" />
          Solicitar Demo
        </a>
      </div>
    </header>
  )
}
