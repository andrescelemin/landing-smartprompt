
/**
 * @file App.tsx
 * @description Configuración de rutas principales y componentes globales.
 */

import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import MetaPixel from './components/analytics/MetaPixel'
import { CookieConsent } from './components/landing/CookieConsent'

export default function App() {
  return (
    <HashRouter>
      {/* Píxel de Meta para tracking de conversiones y eventos */}
      <MetaPixel />
      
      {/* Banner de Cookies global */}
      <CookieConsent />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </HashRouter>
  )
}
