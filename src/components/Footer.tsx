import { Link } from '@heroui/react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'Meet the Chefs', href: '#meet-the-chefs' },
      { label: 'How It Works', href: '#how-it-works' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
    Support: [
      { label: 'Contact Us', href: 'mailto:hello@chefriendsapp.com' },
    ],
  }

  const socialLinks = [
    {
      label: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
    },
    {
      label: 'X',
      href: '#',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-cream border-t border-border">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="#" className="inline-block mb-4">
              <span className="font-serif text-2xl text-forest">Chefriends</span>
            </Link>
            <p className="text-forest-light mb-6 max-w-xs text-sm leading-relaxed">
              Your AI chef friends, each specialized in a different cuisine. Scan ingredients, pick a
              chef, and cook with confidence.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 border border-border hover:border-forest/30 rounded-full flex items-center justify-center text-forest-muted hover:text-forest transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-forest mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-forest-light hover:text-forest transition-colors text-sm"
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
        <div className="mt-12 pt-6 border-t border-border-light flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-forest-muted text-sm">
            &copy; {currentYear} Chefriends. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
