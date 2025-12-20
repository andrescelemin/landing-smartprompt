/**
 * @file SocialProofSection component.
 * Displays a marquee of company logos to build trust and authority.
 */

import { motion } from 'motion/react'

const PARTNERS = [
  { name: 'TechFlow', logo: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/69455a2570d0214b990115a0/resource/e3180270-723b-4f01-be69-c3d90d05085e.jpg' },
  { name: 'Global Logistics', logo: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/69455a2570d0214b990115a0/resource/df579ea4-4e89-4d10-bd9d-3715fc9665a6.jpg' },
  { name: 'Smart Retail', logo: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/69455a2570d0214b990115a0/resource/f76d14b0-8e1b-464a-9050-63806fe4d7e8.jpg' },
  { name: 'HealthCare AI', logo: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/69455a2570d0214b990115a0/resource/53496145-f858-4b22-96c1-386dd775d640.jpg' },
  { name: 'Fintech Solutions', logo: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/69455a2570d0214b990115a0/resource/5ff3914c-c1ae-4d93-9179-93728eb86fba.jpg' },
  { name: 'Real Estate Pro', logo: 'https://pub-cdn.sider.ai/u/U04XH6E0RRN/web-coder/69455a2570d0214b990115a0/resource/69b71981-c545-44f5-8420-5eaeb07b9d67.jpg' },
]

/**
 * SocialProofSection Component
 * Creates a scrolling banner of partner logos.
 */
export function SocialProofSection() {
  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
          Empresas que ya potencian su éxito con nuestra IA
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        {/* First Marquee Set */}
        <motion.div 
          className="flex whitespace-nowrap animate-marquee"
          animate={{ x: [0, -1000] }}
          transition={{ 
            repeat: Infinity, 
            duration: 30, 
            ease: "linear" 
          }}
        >
          {[...PARTNERS, ...PARTNERS].map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center mx-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-8 md:h-10 w-auto object-contain"
              />
              <span className="ml-3 text-lg font-bold text-gray-400">{partner.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
