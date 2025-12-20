
/**
 * @file Home.tsx: Página de aterrizaje principal con animaciones de scroll-reveal.
 */

import React from 'react'
import { motion } from 'motion/react'
import { useSeo } from '../hooks/useSeo'
import { Header } from '../components/landing/Header'
import { HeroSection } from '../components/landing/HeroSection'
import { ProblemSection } from '../components/landing/ProblemSection'
import { SolutionsSection } from '../components/landing/SolutionsSection'
import { BenefitsSection } from '../components/landing/BenefitsSection'
import { UseCasesSection } from '../components/landing/UseCasesSection'
import { RoiSection } from '../components/landing/RoiSection'
import { SatisfactionGuarantee } from '../components/landing/SatisfactionGuarantee'
import { TestimonialsSection } from '../components/landing/TestimonialsSection'
import { FaqSection } from '../components/landing/FaqSection'
import { FinalCtaSection } from '../components/landing/FinalCtaSection'
import { Footer } from '../components/landing/Footer'
import { StickyCta } from '../components/landing/StickyCta'
import { LeadMagnetPopup } from '../components/landing/LeadMagnetPopup'
import { FloatingChat } from '../components/landing/FloatingChat'

/**
 * Componente que orquesta la landing con efectos de transición suaves.
 */
export default function Home() {
  useSeo({
    title: 'Agentes de IA para Empresas | Smart Prompt Consulting',
    description: 'Implementamos agentes de IA y automatización para negocios en USA y México. Captura leads, agenda citas y atiende 24/7 con flujos profesionales.'
  })

  // Variante común para el revelado de secciones
  const revealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-emerald-500/30 selection:text-emerald-400">
      <Header />
      <StickyCta />
      <LeadMagnetPopup />
      <FloatingChat />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <HeroSection />
        
        <div className="space-y-32 py-24">
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
          >
            <ProblemSection />
          </motion.section>

          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
          >
            <SolutionsSection />
          </motion.section>

          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
          >
            <BenefitsSection />
          </motion.section>

          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
          >
            <UseCasesSection />
          </motion.section>

          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
          >
            <RoiSection />
          </motion.section>

          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
          >
            <SatisfactionGuarantee />
          </motion.section>

          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
          >
            <TestimonialsSection />
          </motion.section>

          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
          >
            <FaqSection />
          </motion.section>

          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
          >
            <FinalCtaSection />
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
