import { useLanguage } from '../contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <>
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1 rounded-full bg-tertiary-container text-on-tertiary-container text-sm font-semibold mb-6">
              {t.about.badge}
            </span>
            <h1 className="text-5xl md:text-7xl leading-tight mb-8">
              {t.home.heroTitle} <span className="text-primary italic">{t.home.heroTitleAccent}</span> {t.home.heroTitleEnd}
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              {t.home.ourStudiosDesc}
            </p>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed mt-4">
              {t.home.ctaDescription}
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl">
              <img
                src="/ballet-pointe.jpg"
                alt="Chaussons de pointe de ballet sur plancher de bois dans un studio de danse"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notre Equipe */}
      <section className="bg-surface-container-low py-24 mb-32 rounded-xl mx-4">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4">{t.about.teamTitle}</h2>
            <p className="text-tertiary italic text-xl">{t.about.teamSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-ambient">
              <img
                src="/teachers.jpg"
                alt="L'équipe de professeurs de Studios Prestige"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              {t.home.ourTeamDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Studios Gallery */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="mb-16">
          <h2 className="text-4xl mb-4">{t.about.studiosTitle}</h2>
          <p className="text-on-surface-variant max-w-2xl">
            {t.about.studiosDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-video rounded-xl overflow-hidden bg-surface-container-high flex items-center justify-center">
            <span className="text-on-surface-variant text-sm">Photo Studio A</span>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden bg-surface-container-high flex items-center justify-center">
            <span className="text-on-surface-variant text-sm">Photo Studio B</span>
          </div>
        </div>
      </section>
    </>
  )
}
