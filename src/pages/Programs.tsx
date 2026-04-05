import { Link } from 'react-router-dom'
import { courses } from '../data/courses'

export default function Programs() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="mb-16">
          <span className="bg-tertiary-container text-on-tertiary-container px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">
            Découverte & Maîtrise
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-on-surface leading-[1.1] mt-6">
            L'Art de la <span className="italic text-primary">Croissance</span> Gracieuse
          </h1>
          <p className="text-lg text-on-surface-variant max-w-lg mt-6">
            Des premiers pas de nos tout-petits à la maîtrise technique avancée, nous accompagnons
            chaque danseur avec intentionnalité et chaleur.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="space-y-32">
          {/* Course Categories */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Nos Cours</h2>
            <p className="text-on-surface-variant mb-12">Une gamme complète pour tous les âges et niveaux.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
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
              Prêt à danser?
            </h2>
            <p className="text-on-primary-container/80 mb-10 max-w-md mx-auto">
              Consultez notre horaire complet et inscrivez-vous dès aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/horaire" className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all">
                Voir l'horaire
              </Link>
              <Link to="/contact" className="bg-surface-container-lowest text-primary px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all">
                Nous joindre
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
