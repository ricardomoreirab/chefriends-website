import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroUIProvider } from '@heroui/react'
import { I18nProvider } from './i18n'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <I18nProvider>
        <App />
      </I18nProvider>
    </HeroUIProvider>
  </StrictMode>,
)
