
/**
 * @file RoiSection.tsx: Calculadora interactiva de Retorno de Inversión.
 */

import React, { useState, useMemo } from 'react'
import { motion } from 'motion/react'
import { Slider } from '../ui/slider'
import { Card } from '../ui/card'
import { TrendingUp, Clock, DollarSign, Zap } from 'lucide-react'

/**
 * Componente que calcula y muestra el beneficio económico de la IA.
 */
export function RoiSection() {
  const [leads, setLeads] = useState([500])
  const [costPerLead, setCostPerLead] = useState([15])
  
  // Cálculos lógicos
  const currentCost = useMemo(() => leads[0] * costPerLead[0], [leads, costPerLead])
  const aiCostEstimate = useMemo(() => currentCost * 0.2, [currentCost]) // Estimación de ahorro del 80%
  const monthlySavings = currentCost - aiCostEstimate
  const hoursSaved = useMemo(() => leads[0] * 0.5, [leads]) // Estimando 30 min por lead manual

  return (
    <section id="roi" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Calcula tu Retorno de Inversión
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Descubre cuánto dinero y tiempo puedes recuperar automatizando tu atención al cliente y ventas con nuestros agentes de IA.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Controles de la calculadora */}
        <div className="space-y-10 bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                Leads mensuales
              </label>
              <span className="text-2xl font-bold text-emerald-400">{leads[0]}</span>
            </div>
            <Slider 
              value={leads} 
              onValueChange={setLeads} 
              max={5000} 
              step={50} 
              className="py-4"
            />
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                Costo actual por lead ($)
              </label>
              <span className="text-2xl font-bold text-emerald-400">${costPerLead[0]}</span>
            </div>
            <Slider 
              value={costPerLead} 
              onValueChange={setCostPerLead} 
              max={100} 
              step={1} 
              className="py-4"
            />
          </div>

          <div className="pt-6 border-t border-slate-800">
            <p className="text-xs text-slate-500 italic">
              * Basado en costos promedio de personal, herramientas y pérdida por demora en respuesta.
            </p>
          </div>
        </div>

        {/* Resultados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-slate-900/80 border-slate-800 p-6 flex flex-col items-center justify-center text-center space-y-2 hover:border-emerald-500/50 transition-colors">
            <div className="p-3 bg-emerald-500/10 rounded-full mb-2">
              <DollarSign className="w-6 h-6 text-emerald-400" />
            </div>
            <p className="text-slate-400 text-sm uppercase tracking-wider font-semibold">Ahorro Mensual</p>
            <h3 className="text-3xl font-bold text-white">${monthlySavings.toLocaleString()}</h3>
            <p className="text-xs text-emerald-400/80">Reducción del 80% en costos</p>
          </Card>

          <Card className="bg-slate-900/80 border-slate-800 p-6 flex flex-col items-center justify-center text-center space-y-2 hover:border-emerald-500/50 transition-colors">
            <div className="p-3 bg-emerald-500/10 rounded-full mb-2">
              <Clock className="w-6 h-6 text-emerald-400" />
            </div>
            <p className="text-slate-400 text-sm uppercase tracking-wider font-semibold">Tiempo Recuperado</p>
            <h3 className="text-3xl font-bold text-white">{hoursSaved.toLocaleString()}h</h3>
            <p className="text-xs text-emerald-400/80">Mensuales para tu equipo</p>
          </Card>

          <Card className="md:col-span-2 bg-gradient-to-br from-emerald-600/20 to-slate-900 border-emerald-500/30 p-8 flex flex-col items-center justify-center text-center space-y-4">
            <div className="p-3 bg-emerald-500/20 rounded-full">
              <Zap className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest">Ahorro Anual Proyectado</p>
              <h3 className="text-5xl font-extrabold text-white mt-2">
                ${(monthlySavings * 12).toLocaleString()}
              </h3>
            </div>
            <button className="mt-4 px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/20">
              Implementar este ahorro ahora
            </button>
          </Card>
        </div>
      </div>
    </section>
  )
}
