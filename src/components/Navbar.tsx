import { useState, useEffect } from 'react'
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from '@heroui/react'
import PixelLogo from './PixelLogo'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

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
    <HeroNavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`bg-deep/80 backdrop-blur-md fixed top-0 z-50 transition-all duration-300 border-b border-pixel-orange/10 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      maxWidth="full"
      height="5rem"
      isBlurred={false}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-16">
        <NavbarContent className="gap-4">
          {/* Mobile menu toggle */}
          <button
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden text-pixel-orange p-2 hover:bg-card/50 transition-colors"
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
          <NavbarBrand>
            <Link href="#" className="flex items-center">
              <div className="sm:hidden">
                <PixelLogo variant="compact" size={3} />
              </div>
              <div className="hidden sm:block">
                <PixelLogo variant="full" size={4} />
              </div>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-1" justify="center">
          {menuItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                href={item.href}
                className="text-text-dim hover:text-pixel-orange transition-colors font-pixel text-[10px] px-4 py-2 tracking-wider hover:bg-card/50"
              >
                {item.label.toUpperCase()}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </div>

      <NavbarMenu className="pt-6 bg-deep/95 backdrop-blur-xl border-t border-pixel-orange/10">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              href={item.href}
              className="w-full text-text-dim hover:text-pixel-orange font-pixel text-xs py-4 px-4 tracking-wider hover:bg-card/50 block"
              onPress={() => setIsMenuOpen(false)}
            >
              {item.label.toUpperCase()}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  )
}

export default Navbar
