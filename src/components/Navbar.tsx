import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [hasScrolled, setHasScrolled] = useState(false)

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

  const menuItems = [
    { label: 'Features', href: '#features' },
    { label: 'Chefs', href: '#meet-the-chefs' },
    { label: 'How It Works', href: '#how-it-works' },
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
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
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

        {/* Right: CTA */}
        <div className="hidden sm:block">
          <a
            href="#coming-soon"
            className="bg-forest text-cream px-5 py-2 rounded-pill text-sm font-semibold hover:bg-forest/90 transition-colors"
          >
            Join Waitlist
          </a>
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
            Join Waitlist
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
