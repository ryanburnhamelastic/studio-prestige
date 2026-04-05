export default function Location() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <h1 className="text-5xl md:text-7xl text-primary mb-12">Location</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-high flex items-center justify-center">
            <span className="text-on-surface-variant text-sm">Photo du studio à louer</span>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-on-surface-variant leading-relaxed">
              La location comprend l'utilisation partagée de nos salles de bain et notre stationnement.
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Location longue durée est également disponible.
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Veuillez prendre rendez-vous pour visiter nos salles et connaître nos tarifs.
            </p>
            <a
              href="https://www.facebook.com/studiosprestige/?view_public_for=1578597342395842"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-on-primary px-10 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all mt-4"
            >
              Rendez-vous
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
