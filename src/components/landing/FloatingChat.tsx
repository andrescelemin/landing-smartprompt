
/**
 * @file FloatingChat.tsx: Burbuja de chat simulada para aumentar la conversión y el engagement.
 */

import React, { useState, useEffect } from 'react'
import { MessageCircle, X, Sparkles, MessageSquareText } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

/**
 * Componente que simula un chat de IA activo para invitar al usuario a la acción.
 * Redirige al usuario a WhatsApp para una atención personalizada.
 */
export const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  
  // URL de WhatsApp con mensaje personalizado
  const WHATSAPP_URL = "https://wa.me/51976828556?text=Hola!%20Me%20interesa%20una%20demo%20gratis%20de%20sus%20agentes%20de%20IA."

  useEffect(() => {
    // Mostrar la notificación/mensaje después de 3 segundos para llamar la atención
    const timer = setTimeout(() => {
      setShowNotification(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleOpenChat = () => {
    setIsOpen(true)
    setShowNotification(false)
  }

  /**
   * Abre el enlace de WhatsApp y registra el evento si el píxel de Meta está activo.
   */
  const handleCtaClick = () => {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Contact', { content_name: 'Floating Chat WhatsApp Demo' });
    }
    window.open(WHATSAPP_URL, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4">
      <AnimatePresence>
        {/* Mensaje de notificación inicial (burbuja de texto) */}
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            className="relative max-w-[240px] rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-2xl"
          >
            <button 
              onClick={() => setShowNotification(false)}
              className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-slate-200"
            >
              <X className="h-3 w-3" />
            </button>
            <p className="text-sm text-slate-200">
              ¡Hola! 👋 Soy tu **Asistente de IA**. ¿Te gustaría saber cómo automatizar tus procesos hoy?
            </p>
            <div className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 border-b border-r border-slate-800 bg-slate-900" />
          </motion.div>
        )}

        {/* Ventana de Chat Expandida */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-2 w-[320px] overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl"
          >
            {/* Header del Chat */}
            <div className="bg-emerald-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full bg-slate-950 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-emerald-400" />
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-emerald-500 bg-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Agente Smart</h4>
                  <p className="text-[10px] font-medium text-slate-900/70">En línea ahora</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-950/60 hover:text-slate-950">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Cuerpo del Chat con mensajes simulados */}
            <div className="p-4 space-y-4 max-h-[300px] overflow-y-auto bg-slate-950/50">
              <div className="flex flex-col gap-2">
                <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-slate-800 p-3 text-sm text-slate-200">
                  ¡Hola! Bienvenido a Smart Prompt Consulting.
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-slate-800 p-3 text-sm text-slate-200">
                  Puedo ayudarte a implementar agentes de IA que atiendan a tus clientes y agenden citas automáticamente.
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-slate-800 p-3 text-sm text-slate-200">
                  ¿Te gustaría ver una demo de cómo funcionaría para tu negocio?
                </div>
              </div>
            </div>

            {/* Footer con CTA de WhatsApp */}
            <div className="p-4 bg-slate-900 border-t border-slate-800">
              <button
                onClick={handleCtaClick}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-emerald-400 active:scale-95 shadow-lg shadow-emerald-500/10"
              >
                <MessageSquareText className="h-4 w-4" />
                Sí, quiero una demo gratis
              </button>
              <p className="mt-3 text-center text-[10px] text-slate-500 italic">
                Respuesta instantánea vía WhatsApp.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón Flotante Principal (Círculo) */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={isOpen ? () => setIsOpen(false) : handleOpenChat}
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-colors relative ${
          isOpen ? 'bg-slate-800 text-slate-200' : 'bg-emerald-500 text-slate-950 shadow-emerald-500/20'
        }`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
        {!isOpen && (
          <>
            {/* Notificación de 1 mensaje pendiente */}
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              1
            </span>
            {/* Efecto de pulso para visibilidad */}
            <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20" />
          </>
        )}
      </motion.button>
    </div>
  )
}
