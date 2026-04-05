import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  const footerLinks = [
    { to: '/programmes', label: t.nav.programs },
    { to: '/horaire', label: t.footer.scheduleAndPricing },
    { to: '/competitif', label: t.nav.competitive },
    { to: '/sports-etudes', label: t.nav.sportsEtudes },
    { to: '/parents', label: t.footer.parentCorner },
    { to: '/boutique', label: t.nav.boutique },
    { to: '/location', label: t.nav.location },
  ]

  return (
    <footer className="bg-surface-container-low rounded-t-xl mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-12 py-16">
        {/* Brand */}
        <div className="space-y-6">
          <div className="font-headline text-xl text-primary">Studios Prestige</div>
          <p className="font-body text-sm tracking-wide text-secondary leading-relaxed">
            {t.footer.tagline}
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-headline text-lg text-primary">{t.footer.explore}</h4>
          <nav className="flex flex-col space-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-tertiary opacity-80 hover:opacity-100 underline decoration-primary/30 text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="font-headline text-lg text-primary">{t.footer.contactTitle}</h4>
          <div className="space-y-3 text-sm text-secondary">
            <p>1774 boul. des Laurentides<br />Laval, QC H7M 2P6</p>
            <p>
              <a href="tel:450-490-4104" className="hover:text-primary transition-colors">450-490-4104</a>
            </p>
            <p>
              <a href="mailto:ecole_de_danse_prestige@hotmail.com" className="hover:text-primary transition-colors">
                ecole_de_danse_prestige@hotmail.com
              </a>
            </p>
            <div className="pt-2">
              <p className="font-semibold text-on-surface mb-1">{t.footer.officeHours}</p>
              <p>Lundi: 18h00-21h00</p>
              <p>Mercredi: 18h00-21h30</p>
              <p>Jeudi: 17h30-19h30</p>
              <p>Samedi: 9h00-15h00</p>
            </div>
          </div>
          <div className="flex gap-4 pt-2">
            <a
              href="https://www.facebook.com/Studio-Prestige-1578597342395842/?epa=SEARCH_BOX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:text-primary transition-colors text-sm underline decoration-primary/30"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/danseprestige/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:text-primary transition-colors text-sm underline decoration-primary/30"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-12 pb-8 border-t border-outline-variant/10 pt-8 flex flex-col md:flex-row justify-between items-center text-secondary text-xs gap-4">
        <div>&copy; {new Date().getFullYear()} {t.footer.copyright}</div>
        <div className="flex gap-4">
          <Link to="/parents" className="hover:text-primary">{t.footer.policies}</Link>
          <Link to="/contact" className="hover:text-primary">{t.footer.contactUs}</Link>
        </div>
      </div>
    </footer>
  )
}
