import { Link } from 'react-router-dom'

export default function Competitive() {
  return (
    <>
      {/* Hero */}
      <header className="max-w-7xl mx-auto px-8 mb-24">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-5/12 space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-tertiary-container text-on-tertiary-container rounded-full text-sm font-medium">
              <span className="material-symbols-outlined text-sm">workspace_premium</span>
              Groupes Compétitifs
            </span>
            <h1 className="font-headline text-5xl md:text-7xl text-primary leading-[1.1] font-bold">
              La Poursuite de la Grâce d'Élite.
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-md">
              Cours offerts pour les enfants et adultes par AUDITION seulement.
              Nos groupes compétitifs participent à plusieurs compétitions sur le circuit
              et aux spectacles de fin de session.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="bg-primary text-on-primary px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition-all"
              >
                Informations d'audition
              </Link>
            </div>
          </div>
          <div className="md:w-7/12 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-surface-container-high flex items-center justify-center">
              <span className="text-on-surface-variant text-sm">Photo compétition</span>
            </div>
          </div>
        </div>
      </header>

      {/* Pre-Competitifs */}
      <section className="bg-surface-container-low py-24 px-8 mb-24 rounded-xl mx-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-4xl text-primary mb-8">Pré-Compétitifs</h2>
          <div className="max-w-2xl">
            <p className="text-on-surface-variant text-lg mb-4">
              Cours offerts pour les enfants de 8-11 ans.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Pour tous les danseurs intéressés par la compétition, mais souhaitant un
              entraînement supplémentaire. *Ils participeront à une compétition sur le
              circuit, ainsi qu'à tous les spectacles.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-8 mb-32">
        <div className="bg-primary rounded-xl p-16 text-center text-on-primary relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl mb-6">Prêt pour le prochain pas?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-10">
              Contactez-nous pour en savoir plus sur les auditions et les groupes compétitifs.
            </p>
            <Link
              to="/contact"
              className="bg-surface-bright text-primary px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform inline-block"
            >
              Nous joindre
            </Link>
          </div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
      </section>
    </>
  )
}
