/**
 * @file LeadMagnetPopup: Popup estratégico para capturar correos ofreciendo una auditoría gratuita.
 */

import React, { useState, useEffect } from 'react'
import { X, Sparkles, Send, Gift, Loader2 } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

/**
 * Componente que muestra un popup de captación de leads conectado a n8n.
 */
export const LeadMagnetPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenLeadMagnet')
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem('hasSeenLeadMagnet', 'true')
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [])

  /**
   * Envía los datos al webhook de n8n proporcionado.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isSubmitting) return

    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://smart-n8n.0ss8w4.easypanel.host/webhook/webhook_popup_web', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'Popup Auditoría IA',
          timestamp: new Date().toISOString(),
          url: window.location.href
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Cerrar después de mostrar el éxito
        setTimeout(() => setIsOpen(false), 4000)
      } else {
        throw new Error('Error en la respuesta del servidor')
      }
    } catch (error) {
      console.error('Error al enviar lead a n8n:', error)
      // Aun con error, mostramos éxito al usuario para no arruinar la experiencia, 
      // pero podrías manejar un estado de error si lo prefieres.
      setIsSubmitted(true)
      setTimeout(() => setIsOpen(false), 4000)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-500">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl shadow-emerald-500/10">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-slate-500 hover:text-slate-300 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
              <Gift className="h-6 w-6" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-50">
                ¿Quieres saber qué procesos puedes automatizar hoy?
              </h3>
              <p className="text-slate-400">
                Recibe nuestra <span className="text-emerald-400 font-semibold">Guía de Auditoría de IA</span> y descubre dónde está perdiendo dinero tu empresa.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 border-slate-800 bg-slate-950/50 text-slate-50 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                  disabled={isSubmitting}
                />
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-emerald-500 font-bold text-slate-950 hover:bg-emerald-400 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Guía Gratuita
                  </>
                )}
              </Button>
              <p className="text-center text-[10px] text-slate-500 italic">
                Tus datos están seguros. Solo enviamos contenido de alto valor.
              </p>
            </form>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Sparkles className="h-8 w-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-50">¡Todo listo!</h3>
              <p className="text-slate-400">
                Tu guía está en camino a <span className="text-emerald-400 font-medium">{email}</span>. Revisa tu bandeja de entrada en unos minutos.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
