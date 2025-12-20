/**
 * @file PrivacyPolicy.tsx
 * @description Página de política de privacidad obligatoria para cumplimiento legal y anuncios.
 */

import React, { useEffect } from 'react'
import { Link } from 'react-router'
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText } from 'lucide-react'
import { motion } from 'motion/react'

export default function PrivacyPolicy() {
  // Desplazar al inicio al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-emerald-500/30">
      {/* Header simple de navegación */}
      <nav className="sticky top-0 z-50 border-b border-slate-900 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al Inicio
          </Link>
          <div className="flex items-center gap-2 text-slate-500">
            <ShieldCheck className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Privacidad Segura</span>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Título */}
          <header className="space-y-4 border-b border-slate-900 pb-12">
            <h1 className="text-4xl font-bold text-slate-50 sm:text-5xl">Política de Privacidad</h1>
            <p className="text-slate-500">Última actualización: 20 de Mayo, 2024</p>
          </header>

          {/* Secciones */}
          <section className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-emerald-400">
                <Lock className="h-5 w-5" />
                <h2 className="text-xl font-bold text-slate-100">1. Recolección de Información</h2>
              </div>
              <p className="leading-relaxed">
                En <strong>Smart Prompt Consulting</strong>, recolectamos información personal que usted nos proporciona voluntariamente a través de nuestros formularios de contacto, solicitudes de demo y chats de WhatsApp. Esto incluye nombre, correo electrónico y detalles sobre su negocio.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-emerald-400">
                <Eye className="h-5 w-5" />
                <h2 className="text-xl font-bold text-slate-100">2. Uso de los Datos</h2>
              </div>
              <p className="leading-relaxed">
                Utilizamos su información exclusivamente para:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Personalizar nuestras propuestas de agentes de IA.</li>
                <li>Agendar llamadas de consultoría solicitadas por usted.</li>
                <li>Enviar actualizaciones relevantes sobre nuestros servicios (con opción de baja).</li>
                <li>Mejorar la experiencia de usuario en nuestro sitio web.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-emerald-400">
                <FileText className="h-5 w-5" />
                <h2 className="text-xl font-bold text-slate-100">3. Protección de Información</h2>
              </div>
              <p className="leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra acceso no autorizado, alteración o divulgación. No vendemos ni compartimos sus datos con terceros con fines comerciales.
              </p>
            </div>

            <div className="space-y-4 border-t border-slate-900 pt-10">
              <h2 className="text-xl font-bold text-slate-100">4. Contacto</h2>
              <p className="leading-relaxed">
                Si tiene preguntas sobre esta política o desea ejercer sus derechos de acceso, rectificación o eliminación de datos, puede contactarnos directamente vía WhatsApp o al correo de soporte indicado en su proceso de contratación.
              </p>
            </div>
          </section>

          {/* Footer de la página de privacidad */}
          <footer className="pt-12 text-center text-sm text-slate-600">
            <p>&copy; {new Date().getFullYear()} Smart Prompt Consulting. Todos los derechos reservados.</p>
          </footer>
        </motion.div>
      </main>
    </div>
  )
}