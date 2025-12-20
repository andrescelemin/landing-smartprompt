
/**
 * @file CookieConsent.tsx
 * @description Banner de consentimiento de cookies para cumplimiento legal.
 */

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Cookie, X } from 'lucide-react'
import { Link } from 'react-router'

/**
 * Componente que muestra un aviso de cookies persistente hasta que el usuario interactúa.
 */
export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Comprobar si el usuario ya dio su consentimiento anteriormente
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  /**
   * Guarda la elección del usuario y oculta el banner.
   * @param choice - 'accepted' o 'declined'
   */
  const handleChoice = (choice: 'accepted' | 'declined') => {
    localStorage.setItem('cookie-consent', choice)
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 z-[100] mx-auto max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-md md:p-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-start gap-4">
                <div className="hidden rounded-full bg-emerald-500/10 p-2 text-emerald-400 sm:block">
                  <Cookie className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-slate-50">Aviso de Privacidad y Cookies</h4>
                  <p className="text-xs leading-relaxed text-slate-400">
                    Utilizamos cookies para optimizar tu experiencia y analizar el tráfico de nuestra web de agentes de IA. Al hacer clic en "Aceptar", consientes el uso de estas tecnologías. Puedes leer más en nuestra{' '}
                    <Link to="/privacy" className="text-emerald-400 underline hover:text-emerald-300">
                      Política de Privacidad
                    </Link>.
                  </p>
                </div>
              </div>

              <div className="flex w-full shrink-0 items-center gap-3 md:w-auto">
                <button
                  onClick={() => handleChoice('declined')}
                  className="flex-1 rounded-full border border-slate-700 bg-transparent px-4 py-2 text-xs font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-200 md:flex-none"
                >
                  Rechazar
                </button>
                <button
                  onClick={() => handleChoice('accepted')}
                  className="flex-1 rounded-full bg-emerald-500 px-6 py-2 text-xs font-bold text-slate-950 transition-all hover:bg-emerald-400 md:flex-none"
                >
                  Aceptar Todo
                </button>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="hidden text-slate-500 hover:text-slate-300 md:block"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
