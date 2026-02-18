export type Locale = 'en' | 'pt' | 'es'

export interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}
