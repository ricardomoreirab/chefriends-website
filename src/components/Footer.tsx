import { Link } from '@heroui/react'
import PixelLogo from './PixelLogo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'Meet the Chefs', href: '#meet-the-chefs' },
      { label: 'How It Works', href: '#how-it-works' },
    ],
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press', href: '#' },
    ],
    Support: [
      { label: 'Help Center', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
    Legal: [
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: 'X', href: '#', label: 'Twitter' },
    { icon: 'IN', href: '#', label: 'LinkedIn' },
    { icon: 'IG', href: '#', label: 'Instagram' },
    { icon: 'FB', href: '#', label: 'Facebook' },
  ]

  return (
    <footer className="bg-deep border-t border-pixel-orange/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-4">
              <PixelLogo variant="full" size={3} />
            </div>
            <p className="text-text-dim mb-6 max-w-xs text-sm leading-relaxed">
              Your AI chef friends, specialized in every cuisine. Free to chat, with optional live classes
              from real professional chefs.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 border border-pixel-orange/20 hover:border-pixel-orange/50 flex items-center justify-center text-text-dim hover:text-pixel-orange transition-colors"
                  aria-label={social.label}
                >
                  <span className="font-pixel text-[8px]">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-pixel text-[10px] text-pixel-orange mb-4 tracking-wider">{category.toUpperCase()}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-text-dim hover:text-text-bright transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-pixel-orange/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-dim text-sm">
            &copy; {currentYear} Chefriends. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-text-dim text-sm">
              <span className="font-pixel text-[8px] text-pixel-orange">EN</span>
              <select className="bg-transparent border-none text-text-dim text-sm focus:outline-none cursor-pointer">
                <option value="en">English</option>
                <option value="es">Espanol</option>
                <option value="ca">Catala</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
