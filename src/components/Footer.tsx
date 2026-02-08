import { Link } from '@heroui/react'
import logo from '../assets/logo.png'

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
    { icon: '𝕏', href: '#', label: 'Twitter' },
    { icon: 'in', href: '#', label: 'LinkedIn' },
    { icon: 'ig', href: '#', label: 'Instagram' },
    { icon: 'fb', href: '#', label: 'Facebook' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-4">
              <img src={logo} alt="Chefriends" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Your AI chef friends, specialized in every cuisine. Free to chat, with optional live classes
              from real professional chefs.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-sm font-bold">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
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
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Chefriends. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>🌐</span>
              <select className="bg-transparent border-none text-gray-400 text-sm focus:outline-none cursor-pointer">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="ca">Català</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
