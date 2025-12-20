/**
 * @file BackgroundEffect: Elementos visuales ambientales para una estética tech moderna.
 */

import React from 'react'
import { motion } from 'motion/react'

/**
 * Componente que renderiza un fondo dinámico con orbes animados y malla de cuadrícula.
 */
export const BackgroundEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Patrón de cuadrícula sutil */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.2) 1px, transparent 0)',
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Orbe de luz 1 - Superior Izquierda */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]"
      />

      {/* Orbe de luz 2 - Inferior Derecha */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute -right-[10%] -bottom-[10%] h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[120px]"
      />

      {/* Gradiente de viñeta para enfoque central */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/40" />
    </div>
  )
}
