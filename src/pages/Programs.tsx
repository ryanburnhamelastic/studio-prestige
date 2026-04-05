import { Link } from 'react-router-dom'
import { courses } from '../data/courses'
import { useLanguage } from '../contexts/LanguageContext'

export default function Programs() {
  const { t, locale } = useLanguage()
  const courseList = courses[locale]

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="mb-16">
          <span className="bg-tertiary-container text-on-tertiary-container px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">
            {t.programs.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-on-surface leading-[1.1] mt-6">
            {t.programs.title} <span className="italic text-primary">{t.programs.titleAccent}</span> {t.programs.titleEnd}
          </h1>
          <p className="text-lg text-on-surface-variant max-w-lg mt-6">
            {t.programs.description}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="space-y-32">
          {/* Course Categories */}
          <div>
            <h2 className="text-3xl font-bold mb-2">{t.programs.sectionTitle}</h2>
            <p className="text-on-surface-variant mb-12">{t.programs.sectionSubtitle}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseList.map((course) => (
                <div
                  key={course.name}
                  className="bg-surface-container-lowest rounded-xl p-8 hover:shadow-xl transition-shadow duration-500 border border-outline-variant/10"
                >
                  <div className="w-12 h-12 bg-tertiary-container rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-on-tertiary-container">{course.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{course.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{course.ageRange}</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-8 my-32">
        <div className="bg-primary-container rounded-xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl text-on-primary-container mb-6">
              {t.programs.ctaTitle}
            </h2>
            <p className="text-on-primary-container/80 mb-10 max-w-md mx-auto">
              {t.programs.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/horaire" className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all">
                {t.home.viewSchedule}
              </Link>
              <Link to="/contact" className="bg-surface-container-lowest text-primary px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all">
                {t.footer.contactUs}
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
