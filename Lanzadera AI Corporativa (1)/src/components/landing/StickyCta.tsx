
/**
 * @file StickyCta: Botón flotante persistente que abre el formulario de n8n.
 */

import React, { useState, useEffect } from 'react'
import { Calendar } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

/**
 * Componente que muestra un CTA flotante cuando el usuario se desplaza hacia abajo.
 */
export const StickyCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const FORM_URL = "https://smart-n8n.0ss8w4.easypanel.host/form/4baaef16-e9c0-4530-856e-98c7f278eace";

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleCtaClick = () => {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Lead', { content_name: 'Sticky CTA Button' });
    }
    window.open(FORM_URL, '_blank', 'noopener,noreferrer');
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:bottom-8 sm:right-8 sm:left-auto sm:p-0"
        >
          <div className="mx-auto max-w-md sm:max-w-none">
            <button
              onClick={handleCtaClick}
              className="group relative flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-emerald-500 px-8 text-lg font-bold text-slate-950 transition-all hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-95 sm:h-12 sm:w-auto sm:text-base"
            >
              <Calendar className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span>Agendar Demo Gratis</span>
              
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
