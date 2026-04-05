export default function Boutique() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <h1 className="text-5xl md:text-7xl text-primary mb-12">Boutique Prestige</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Certificats Cadeaux */}
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-ambient">
            <div className="w-12 h-12 bg-tertiary-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-tertiary-container">card_giftcard</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Certificats Cadeaux</h2>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              Des certificats-cadeaux sont disponibles dans différents formats (valeur monétaire,
              sessions complètes, etc.). Offrez le cadeau de la danse ! Offrez à vos proches la
              chance de s'épanouir, de s'amuser et de découvrir leur passion.
            </p>
            <p className="font-semibold text-primary">
              VENEZ NOUS VOIR AU BUREAU D'ACCEUIL POUR EN OBTENIR!
            </p>
          </div>

          {/* Marchandise */}
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-ambient">
            <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-primary-container">storefront</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Marchandise</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Envie de représenter le Studio Prestige en dehors des cours? Nous avons quelque
              chose pour tout le monde !!
            </p>
            <div className="space-y-3 text-on-surface mb-8">
              <p>T-Shirt rose: <strong className="text-primary">$25.00-$35.00</strong></p>
              <p>Chandail gris manche longue: <strong className="text-primary">$20.00</strong></p>
              <p>Sweat-shirt Crew Neck: <strong className="text-primary">$35.00-$45.00</strong></p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://docs.google.com/forms/d/1POTVXsiQ0QT4d0tqcxlh1FqowUVyBM3oYaLCNzEgUrw/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold hover:scale-105 active:scale-95 transition-all text-center text-sm"
              >
                Commander ici
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeOFIKhtd0MfeC31mCALKRaaMy6OHEuK79kHhImZpqZZAtMHg/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-full font-bold hover:scale-105 active:scale-95 transition-all text-center text-sm"
              >
                Dance Mom & Dance Dad Merch
              </a>
            </div>
          </div>
        </div>

        {/* Tuques */}
        <div className="mt-8 bg-surface-container-lowest rounded-xl p-8 shadow-ambient flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Tuques</h2>
            <p className="text-on-surface-variant">
              Disponibles en noir, gris ou rose <strong className="text-primary">$25.00</strong>
            </p>
          </div>
          <a
            href="https://docs.google.com/forms/d/1POTVXsiQ0QT4d0tqcxlh1FqowUVyBM3oYaLCNzEgUrw/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold hover:scale-105 active:scale-95 transition-all text-center text-sm whitespace-nowrap"
          >
            Commander ici
          </a>
        </div>
      </section>
    </>
  )
}
