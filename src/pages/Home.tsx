import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1 rounded-full bg-tertiary-container text-on-tertiary-container text-sm font-semibold mb-6">
              {t.home.badge}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
              {t.home.heroTitle} <span className="text-primary italic">{t.home.heroTitleAccent}</span> {t.home.heroTitleEnd}
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              {t.home.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/programmes"
                className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all text-center"
              >
                {t.home.discoverCourses}
              </Link>
              <Link
                to="/horaire"
                className="bg-surface-container-lowest text-primary px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all border border-outline-variant/15 text-center"
              >
                {t.home.viewSchedule}
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl">
              <img
                src="/hero-shoes.jpg"
                alt="Chaussures de danse - jazz, claquette, pointes et caractère alignées sur des marches de pierre"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Session Announcement */}
      <section className="bg-surface-container-low py-16 mb-32 rounded-xl mx-4">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-primary text-on-primary text-sm font-semibold mb-6">
            {t.home.enrollmentOpen}
          </span>
          <h2 className="text-4xl md:text-5xl mb-6">{t.home.sessionTitle}</h2>
          <p className="text-2xl text-primary font-bold mb-4">{t.home.sessionDates}</p>
          <div className="max-w-2xl mx-auto space-y-4 text-on-surface-variant text-lg">
            <p>{t.home.preRegistration}</p>
            <p>{t.home.generalRegistration}</p>
            <p className="text-sm mt-6">
              {t.home.limitedSpots}<br />
              {t.home.registrationFee}
            </p>
          </div>
          <Link
            to="/horaire"
            className="inline-block bg-primary text-on-primary px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all mt-8"
          >
            {t.home.viewFullSchedule}
          </Link>
        </div>
      </section>

      {/* About Quick Summary */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">{t.home.aboutTitle}</h2>
          <p className="text-tertiary italic text-xl">{t.home.aboutSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Nos Studios */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-ambient">
            <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-primary-container">apartment</span>
            </div>
            <h3 className="text-2xl mb-4">{t.home.ourStudios}</h3>
            <p className="text-on-surface-variant leading-relaxed">
              {t.home.ourStudiosDesc}
            </p>
          </div>

          {/* Notre Equipe */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-ambient">
            <div className="w-12 h-12 bg-tertiary-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-tertiary-container">groups</span>
            </div>
            <h3 className="text-2xl mb-4">{t.home.ourTeam}</h3>
            <p className="text-on-surface-variant leading-relaxed">
              {t.home.ourTeamDesc}
            </p>
          </div>

          {/* Nos Cours */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-ambient">
            <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-secondary-container">school</span>
            </div>
            <h3 className="text-2xl mb-4">{t.home.ourCourses}</h3>
            <p className="text-on-surface-variant leading-relaxed">
              {t.home.ourCoursesDesc}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-8 mb-32">
        <div className="bg-primary-container rounded-xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl text-on-primary-container mb-6 leading-tight">
              {t.home.ctaTitle}<br />{t.home.ctaTitleLine2}
            </h2>
            <p className="text-on-primary-container/80 mb-10 max-w-md mx-auto">
              {t.home.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all"
              >
                {t.home.contactUsBtn}
              </Link>
              <Link
                to="/horaire"
                className="bg-surface-container-lowest text-primary px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all"
              >
                {t.home.viewSchedule}
              </Link>
            </div>
          </div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl" />
        </div>
      </section>
    </>
  )
}
