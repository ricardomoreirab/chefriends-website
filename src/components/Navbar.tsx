import { useState, useEffect } from 'react'
import { useI18n, type Locale } from '../i18n'

const languages: { key: Locale; label: string }[] = [
  { key: 'en', label: 'EN' },
  { key: 'pt', label: 'PT' },
  { key: 'es', label: 'ES' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const { locale, setLocale, t } = useI18n()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setHasScrolled(currentScrollY > 10)

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    if (!isLangOpen) return
    const close = () => setIsLangOpen(false)
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [isLangOpen])

  const menuItems = [
    { label: t('navbar.features'), href: '#features' },
    { label: t('navbar.chefs'), href: '#meet-the-chefs' },
    { label: t('navbar.howItWorks'), href: '#how-it-works' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      } ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-20">
        {/* Left: hamburger + brand */}
        <div className="flex items-center gap-4">
          <button
            aria-label={isMenuOpen ? t('navbar.closeMenu') : t('navbar.openMenu')}
            className="sm:hidden text-forest p-2 hover:bg-cream-dark/50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
          <a href="#" className="flex items-center gap-2">
            <span className="font-serif text-2xl text-forest tracking-tight">Chefriends</span>
          </a>
        </div>

        {/* Center: nav links */}
        <div className="hidden sm:flex items-center gap-1">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-forest-light hover:text-forest transition-colors text-sm font-medium px-4 py-2 rounded-pill hover:bg-cream-dark/60"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right: language selector + CTA */}
        <div className="flex items-center gap-2">
          {/* Language selector */}
          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setIsLangOpen(!isLangOpen) }}
              className="text-forest-light hover:text-forest transition-colors text-sm font-medium px-3 py-2 rounded-pill hover:bg-cream-dark/60 flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              {locale.toUpperCase()}
            </button>
            {isLangOpen && (
              <div className="absolute right-0 top-full mt-1 bg-card-white border border-border rounded-xl shadow-soft overflow-hidden min-w-[100px]">
                {languages.map((lang) => (
                  <button
                    key={lang.key}
                    onClick={(e) => { e.stopPropagation(); setLocale(lang.key); setIsLangOpen(false) }}
                    className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      locale === lang.key
                        ? 'bg-accent/15 text-forest font-semibold'
                        : 'text-forest-light hover:bg-cream-dark/60 hover:text-forest'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="hidden sm:block">
            <a
              href="#coming-soon"
              className="bg-forest text-cream px-5 py-2 rounded-pill text-sm font-semibold hover:bg-forest/90 transition-colors"
            >
              {t('navbar.joinWaitlist')}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-cream/95 backdrop-blur-xl border-t border-border px-6 pt-6 pb-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-forest-light hover:text-forest text-base py-3 px-4 rounded-lg hover:bg-cream-dark/60 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#coming-soon"
            className="block bg-forest text-cream px-4 py-3 rounded-pill text-center text-sm font-semibold mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('navbar.joinWaitlist')}
          </a>
          {/* Mobile language selector */}
          <div className="flex justify-center gap-2 mt-4 pt-4 border-t border-border-light">
            {languages.map((lang) => (
              <button
                key={lang.key}
                onClick={() => { setLocale(lang.key); setIsMenuOpen(false) }}
                className={`px-4 py-2 rounded-pill text-sm font-medium transition-colors ${
                  locale === lang.key
                    ? 'bg-forest text-cream'
                    : 'bg-cream-dark text-forest-light hover:text-forest'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
