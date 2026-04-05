import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const langDropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const { locale, setLocale, t } = useLanguage()

  // Close dropdown on outside click
  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/programmes', label: t.nav.programs },
    { to: '/a-propos', label: t.nav.about },
    { to: '/competitif', label: t.nav.competitive },
  ]

  const allLinks = [
    ...navLinks,
    { to: '/horaire', label: t.nav.schedule },
    { to: '/sports-etudes', label: t.nav.sportsEtudes },
    { to: '/parents', label: t.nav.parents },
    { to: '/boutique', label: t.nav.boutique },
    { to: '/location', label: t.nav.location },
    { to: '/contact', label: t.nav.contact },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-4">
          <div className="glass-nav rounded-full shadow-ambient flex justify-between items-center px-6 py-2">

            {/* Logo + Name */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo-ps.png"
                alt="Studios Prestige"
                className="h-10 w-auto object-contain"
              />
              <span className="font-headline text-xl text-primary font-bold hidden sm:inline">
                Studios Prestige
              </span>
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

            {/* Right side: language + CTA */}
            <div className="hidden md:flex items-center gap-4">
              {/* Language Switcher */}
              <div className="relative pl-4 border-l border-outline-variant/30" ref={langDropdownRef}>
                <button
                  className="flex items-center gap-1 font-body font-medium text-sm text-on-surface-variant hover:text-primary transition-colors px-2 py-1 rounded"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  aria-expanded={langDropdownOpen}
                  aria-haspopup="true"
                >
                  {locale.toUpperCase()}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-28 bg-surface-container-lowest rounded-lg shadow-ambient-lg z-50 py-1 overflow-hidden">
                    <button
                      className={`block w-full text-left px-4 py-2 text-sm font-body transition-colors ${
                        locale === 'fr'
                          ? 'text-primary font-medium bg-primary/10'
                          : 'text-on-surface-variant hover:bg-surface-container-low'
                      }`}
                      onClick={() => { setLocale('fr'); setLangDropdownOpen(false) }}
                    >
                      Français
                    </button>
                    <button
                      className={`block w-full text-left px-4 py-2 text-sm font-body transition-colors ${
                        locale === 'en'
                          ? 'text-primary font-medium bg-primary/10'
                          : 'text-on-surface-variant hover:bg-surface-container-low'
                      }`}
                      onClick={() => { setLocale('en'); setLangDropdownOpen(false) }}
                    >
                      English
                    </button>
                  </div>
                )}
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                className="bg-primary text-on-primary px-6 py-2 rounded-full font-body font-semibold uppercase tracking-wide text-sm hover:scale-105 active:scale-95 transition-all"
                style={{ background: 'linear-gradient(135deg, #825b55, #754f49)' }}
              >
                {t.nav.enroll}
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              <span className={`w-6 h-0.5 bg-on-surface transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-on-surface transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-on-surface transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg pt-24">
          <nav className="flex flex-col items-center space-y-6 pt-8">
            {allLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`font-headline text-2xl transition-colors ${
                  location.pathname === link.to ? 'text-primary' : 'text-on-surface hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Language Toggle */}
            <div className="flex gap-3 pt-2 border-t border-outline-variant/20 w-32 justify-center">
              <button
                onClick={() => setLocale('fr')}
                className={`px-4 py-2 rounded-full text-sm font-body font-semibold transition-all ${
                  locale === 'fr'
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLocale('en')}
                className={`px-4 py-2 rounded-full text-sm font-body font-semibold transition-all ${
                  locale === 'en'
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                EN
              </button>
            </div>

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-primary text-on-primary px-8 py-3 rounded-full font-body font-semibold uppercase tracking-wide text-sm mt-2"
              style={{ background: 'linear-gradient(135deg, #825b55, #754f49)' }}
            >
              {t.nav.enroll}
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
