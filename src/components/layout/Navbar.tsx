import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/programmes', label: 'Programmes' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/competitif', label: 'Compétitif' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-4">
          <div className="bg-[#fffcf7]/90 backdrop-blur-xl rounded-full shadow-ambient flex justify-between items-center px-8 py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="font-headline text-xl text-primary font-bold">Studios Prestige</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-headline text-lg leading-relaxed hover:scale-105 transition-transform duration-300 ${
                    location.pathname === link.to
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-tertiary hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-full font-semibold hover:scale-105 active:scale-95 transition-all"
            >
              S'inscrire
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              <span className={`w-6 h-0.5 bg-on-surface transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-on-surface transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-on-surface transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg pt-24">
          <nav className="flex flex-col items-center space-y-8 pt-12">
            {[
              ...navLinks,
              { to: '/horaire', label: 'Horaire' },
              { to: '/sports-etudes', label: 'Sports-Études' },
              { to: '/parents', label: 'Parents' },
              { to: '/boutique', label: 'Boutique' },
              { to: '/location', label: 'Location' },
              { to: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="font-headline text-2xl text-on-surface hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-primary text-on-primary px-8 py-3 rounded-full font-semibold text-lg mt-4"
            >
              S'inscrire
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
