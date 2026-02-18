import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import type { Locale, I18nContextType } from './types'

import en from './locales/en.json'
import pt from './locales/pt.json'
import es from './locales/es.json'

const translations: Record<Locale, Record<string, string>> = { en, pt, es }

const STORAGE_KEY = 'chefriends-lang'

function getInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'pt' || stored === 'es') return stored
  } catch {}
  const browserLang = navigator.language.slice(0, 2)
  if (browserLang === 'pt' || browserLang === 'es') return browserLang
  return 'en'
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    try { localStorage.setItem(STORAGE_KEY, newLocale) } catch {}
  }, [])

  const t = useCallback((key: string): string => {
    return translations[locale][key] ?? translations['en'][key] ?? key
  }, [locale])

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = t('meta.title')
    const update = (selector: string, attr: string, key: string) => {
      const el = document.querySelector(selector)
      if (el) el.setAttribute(attr, t(key))
    }
    update('meta[name="description"]', 'content', 'meta.description')
    update('meta[property="og:title"]', 'content', 'meta.title')
    update('meta[property="og:description"]', 'content', 'meta.description')
    update('meta[property="twitter:title"]', 'content', 'meta.title')
    update('meta[property="twitter:description"]', 'content', 'meta.description')
  }, [locale, t])

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
