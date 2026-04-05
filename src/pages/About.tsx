export default function About() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1 rounded-full bg-tertiary-container text-on-tertiary-container text-sm font-semibold mb-6">
              Notre histoire
            </span>
            <h1 className="text-5xl md:text-7xl leading-tight mb-8">
              Le mouvement avec <span className="text-primary italic">grâce</span> depuis 1998.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Située à Laval, notre école propose deux grands studios équipés de miroirs,
              parfaits pour divers événements. Que ce soit pour des sessions corporatives,
              des cours privés ou des fêtes d'anniversaire, nos espaces sont disponibles à
              la location à l'heure.
            </p>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed mt-4">
              N'hésitez pas à nous contacter pour plus d'informations et pour réserver votre créneau !
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl bg-surface-container-high flex items-center justify-center">
              <span className="text-on-surface-variant text-sm">Photo du studio</span>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Equipe */}
      <section className="bg-surface-container-low py-24 mb-32 rounded-xl mx-4">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4">Notre Équipe</h2>
            <p className="text-tertiary italic text-xl">L'âme de la famille Prestige.</p>
          </div>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto text-center leading-relaxed">
            Passionnée, dynamique et toujours prête à danser, notre équipe de professeurs
            dévoués est véritablement l'âme de la famille Prestige. Leur enthousiasme et
            leur expertise créent un environnement inspirant où chacun peut s'épanouir et
            développer ses compétences.
          </p>
        </div>
      </section>

      {/* Studios Gallery */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="mb-16">
          <h2 className="text-4xl mb-4">Nos Studios</h2>
          <p className="text-on-surface-variant max-w-2xl">
            Deux grands studios équipés de miroirs, parfaits pour la danse et les événements.
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
