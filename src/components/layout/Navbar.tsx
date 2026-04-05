import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'

type DropdownKey = 'cours' | 'studio' | 'famille' | 'lang' | null

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const { locale, setLocale, t } = useLanguage()

  // Close all dropdowns on outside click
  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
    setMobileExpanded(null)
  }, [location.pathname])

  const toggle = (key: DropdownKey) =>
    setOpenDropdown(prev => (prev === key ? null : key))

  const dropdownGroups = [
    {
      key: 'cours' as DropdownKey,
      label: t.nav.coursesGroup,
      links: [
        { to: '/programmes', label: t.nav.programs },
        { to: '/horaire', label: t.nav.schedule },
        { to: '/competitif', label: t.nav.competitive },
        { to: '/sports-etudes', label: t.nav.sportsEtudes },
      ],
    },
    {
      key: 'studio' as DropdownKey,
      label: t.nav.studioGroup,
      links: [
        { to: '/a-propos', label: t.nav.about },
        { to: '/location', label: t.nav.location },
      ],
    },
    {
      key: 'famille' as DropdownKey,
      label: t.nav.familleGroup,
      links: [
        { to: '/parents', label: t.nav.parents },
        { to: '/boutique', label: t.nav.boutique },
      ],
    },
  ]

  // Flat list for mobile
  const allLinks = [
    { to: '/', label: t.nav.home },
    { to: '/programmes', label: t.nav.programs },
    { to: '/horaire', label: t.nav.schedule },
    { to: '/competitif', label: t.nav.competitive },
    { to: '/sports-etudes', label: t.nav.sportsEtudes },
    { to: '/a-propos', label: t.nav.about },
    { to: '/location', label: t.nav.location },
    { to: '/parents', label: t.nav.parents },
    { to: '/boutique', label: t.nav.boutique },
    { to: '/contact', label: t.nav.contact },
  ]

  const isGroupActive = (group: typeof dropdownGroups[0]) =>
    group.links.some(l => l.to === location.pathname)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" ref={navRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-4">
          <div className="glass-nav rounded-full shadow-ambient flex justify-between items-center px-6 py-2">

            {/* Logo + Name */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img
                src="/logo-ps.png"
                alt="Studios Prestige"
                className="h-10 w-auto object-contain"
              />
              <span className="font-headline text-xl text-primary font-bold hidden sm:inline">
                Studios Prestige
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-1">

              {/* Accueil — direct link */}
              <Link
                to="/"
                className={`px-3 py-2 font-headline text-base leading-relaxed hover:scale-105 transition-transform duration-300 ${
                  location.pathname === '/'
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-tertiary hover:text-primary'
                }`}
              >
                {t.nav.home}
              </Link>

              {/* Dropdown groups */}
              {dropdownGroups.map(group => (
                <div key={group.key} className="relative">
                  <button
                    onClick={() => toggle(group.key)}
                    className={`flex items-center gap-1 px-3 py-2 font-headline text-base leading-relaxed hover:scale-105 transition-transform duration-300 ${
                      isGroupActive(group) || openDropdown === group.key
                        ? 'text-primary'
                        : 'text-tertiary hover:text-primary'
                    }`}
                  >
                    {group.label}
                    <Chevron open={openDropdown === group.key} />
                  </button>

                  {openDropdown === group.key && (
                    <div className="absolute top-full left-0 mt-3 w-48 bg-surface-container-lowest rounded-xl shadow-ambient py-2 z-50">
                      {group.links.map(link => (
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={() => setOpenDropdown(null)}
                          className={`block px-4 py-2.5 text-sm font-body transition-colors ${
                            location.pathname === link.to
                              ? 'text-primary font-semibold bg-primary/5'
                              : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side: language + CTA */}
            <div className="hidden md:flex items-center gap-4 shrink-0">

              {/* Language Switcher */}
              <div className="relative pl-4 border-l border-outline-variant/30">
                <button
                  className="flex items-center gap-1 font-body font-medium text-sm text-on-surface-variant hover:text-primary transition-colors px-2 py-1 rounded"
                  onClick={() => toggle('lang')}
                  aria-expanded={openDropdown === 'lang'}
                  aria-haspopup="true"
                >
                  {locale.toUpperCase()}
                  <Chevron open={openDropdown === 'lang'} />
                </button>

                {openDropdown === 'lang' && (
                  <div className="absolute right-0 mt-2 w-28 bg-surface-container-lowest rounded-lg shadow-ambient z-50 py-1 overflow-hidden">
                    <button
                      className={`block w-full text-left px-4 py-2 text-sm font-body transition-colors ${
                        locale === 'fr'
                          ? 'text-primary font-medium bg-primary/10'
                          : 'text-on-surface-variant hover:bg-surface-container-low'
                      }`}
                      onClick={() => { setLocale('fr'); setOpenDropdown(null) }}
                    >
                      Français
                    </button>
                    <button
                      className={`block w-full text-left px-4 py-2 text-sm font-body transition-colors ${
                        locale === 'en'
                          ? 'text-primary font-medium bg-primary/10'
                          : 'text-on-surface-variant hover:bg-surface-container-low'
                      }`}
                      onClick={() => { setLocale('en'); setOpenDropdown(null) }}
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
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg pt-24 overflow-y-auto">
          <nav className="flex flex-col items-center pt-8 pb-16">

            {/* Mobile groups with accordion */}
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className={`font-headline text-2xl py-3 transition-colors ${
                location.pathname === '/' ? 'text-primary' : 'text-on-surface hover:text-primary'
              }`}
            >
              {t.nav.home}
            </Link>

            {dropdownGroups.map(group => (
              <div key={group.key} className="w-64 text-center">
                <button
                  onClick={() => setMobileExpanded(prev => prev === group.key ? null : group.key as string)}
                  className={`font-headline text-2xl py-3 w-full flex items-center justify-center gap-2 transition-colors ${
                    isGroupActive(group) ? 'text-primary' : 'text-on-surface hover:text-primary'
                  }`}
                >
                  {group.label}
                  <Chevron open={mobileExpanded === group.key} />
                </button>
                {mobileExpanded === group.key && (
                  <div className="flex flex-col items-center gap-1 pb-3">
                    {group.links.map(link => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setMobileOpen(false)}
                        className={`text-lg py-1.5 transition-colors ${
                          location.pathname === link.to
                            ? 'text-primary font-semibold'
                            : 'text-on-surface-variant hover:text-primary'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className={`font-headline text-2xl py-3 transition-colors ${
                location.pathname === '/contact' ? 'text-primary' : 'text-on-surface hover:text-primary'
              }`}
            >
              {t.nav.contact}
            </Link>

            {/* Mobile Language Toggle */}
            <div className="flex gap-3 mt-6 pt-6 border-t border-outline-variant/20 w-48 justify-center">
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
              className="bg-primary text-on-primary px-8 py-3 rounded-full font-body font-semibold uppercase tracking-wide text-sm mt-6"
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
