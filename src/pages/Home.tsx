import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1 rounded-full bg-tertiary-container text-on-tertiary-container text-sm font-semibold mb-6">
              Depuis 1998
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
              Le mouvement avec <span className="text-primary italic">grâce</span> depuis 1998.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Située à Laval, notre école propose deux grands studios équipés de miroirs,
              parfaits pour divers événements et cours de danse pour tous les âges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/programmes"
                className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all text-center"
              >
                Découvrir nos cours
              </Link>
              <Link
                to="/horaire"
                className="bg-surface-container-lowest text-primary px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all border border-outline-variant/15 text-center"
              >
                Voir l'horaire
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl bg-surface-container-high flex items-center justify-center">
              <span className="text-on-surface-variant text-sm">Photo du studio</span>
            </div>
          </div>
        </div>
      </section>

      {/* Session Announcement */}
      <section className="bg-surface-container-low py-16 mb-32 rounded-xl mx-4">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-primary text-on-primary text-sm font-semibold mb-6">
            Inscriptions ouvertes
          </span>
          <h2 className="text-4xl md:text-5xl mb-6">Session Hiver 2026</h2>
          <p className="text-2xl text-primary font-bold mb-4">10 Janvier - 24 Avril</p>
          <div className="max-w-2xl mx-auto space-y-4 text-on-surface-variant text-lg">
            <p>
              Les PRÉ-INSCRIPTIONS pour tous les membres de la famille Prestige commencent
              VENDREDI le 28 NOVEMBRE À 10H!
            </p>
            <p>Les inscriptions générales débuteront le 2 DÉCEMBRE, 2025 (en ligne seulement)</p>
            <p className="text-sm mt-6">
              *Les places sont limitées<br />
              **Un frais d'inscription unique de $35 sera appliqué à chaque nouveau inscription
            </p>
          </div>
          <Link
            to="/horaire"
            className="inline-block bg-primary text-on-primary px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all mt-8"
          >
            Voir l'horaire complet
          </Link>
        </div>
      </section>

      {/* About Quick Summary */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4">À Propos</h2>
          <p className="text-tertiary italic text-xl">Notre passion, votre danse.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Nos Studios */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-ambient">
            <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-primary-container">apartment</span>
            </div>
            <h3 className="text-2xl mb-4">Nos Studios</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Située à Laval, notre école propose deux grands studios équipés de miroirs,
              parfaits pour divers événements. Que ce soit pour des sessions corporatives,
              des cours privés ou des fêtes d'anniversaire, nos espaces sont disponibles
              à la location à l'heure.
            </p>
          </div>

          {/* Notre Equipe */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-ambient">
            <div className="w-12 h-12 bg-tertiary-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-tertiary-container">groups</span>
            </div>
            <h3 className="text-2xl mb-4">Notre Équipe</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Passionnée, dynamique et toujours prête à danser, notre équipe de professeurs
              dévoués est véritablement l'âme de la famille Prestige. Leur enthousiasme et
              leur expertise créent un environnement inspirant où chacun peut s'épanouir et
              développer ses compétences.
            </p>
          </div>

          {/* Nos Cours */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-ambient">
            <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-secondary-container">school</span>
            </div>
            <h3 className="text-2xl mb-4">Nos Cours</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Peu importe votre âge ou votre expérience, notre vaste gamme de cours et nos
              disponibilités flexibles ont de quoi satisfaire tous les danseurs.
              *Cours privés sont également offerts selon nos disponibilités.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-8 mb-32">
        <div className="bg-primary-container rounded-xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl text-on-primary-container mb-6 leading-tight">
              Prêt à commencer votre<br />parcours avec nous?
            </h2>
            <p className="text-on-primary-container/80 mb-10 max-w-md mx-auto">
              N'hésitez pas à nous contacter pour plus d'informations et pour réserver votre créneau !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all"
              >
                Nous joindre
              </Link>
              <Link
                to="/horaire"
                className="bg-surface-container-lowest text-primary px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all"
              >
                Voir l'horaire
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
