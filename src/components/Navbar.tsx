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
import logo from '../assets/logo.png'
import icon from '../assets/icon.png'

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
    { label: 'Meet the Chefs', href: '#meet-the-chefs' },
    { label: 'How It Works', href: '#how-it-works' },
  ]

  return (
    <HeroNavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`bg-transparent fixed top-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      maxWidth="full"
      height="5rem"
      isBlurred={false}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-16 pt-4">
        <NavbarContent className="gap-4">
          {/* Custom mobile menu toggle button */}
          <button
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
          <NavbarBrand>
            <Link href="#" className="flex items-center gap-2">
              <img src={icon} alt="Chefriends" className="h-10 w-auto sm:hidden" />
              <span className="sm:hidden font-bold text-xl text-gray-800">Chefriends</span>
              <img src={logo} alt="Chefriends" className="h-16 w-auto hidden sm:block" />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-2" justify="center">
          {menuItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                href={item.href}
                className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium px-5 py-2 rounded-full hover:bg-white/50"
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

      </div>

      <NavbarMenu className="pt-6 bg-white/95 backdrop-blur-xl">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              href={item.href}
              className="w-full text-gray-700 text-lg py-3 px-4 rounded-xl hover:bg-gray-50"
              onPress={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  )
}

export default Navbar
