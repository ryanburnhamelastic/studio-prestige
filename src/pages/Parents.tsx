export default function Parents() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <h1 className="text-5xl md:text-7xl text-primary mb-12">Coin des Parents</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Dates Importantes */}
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-ambient">
            <h2 className="text-2xl font-bold mb-6">Dates Importantes</h2>
            <h3 className="text-lg font-semibold text-primary mb-4">Saison A2025</h3>
            <div className="space-y-3 text-on-surface-variant">
              <p>le 9 janvier: <strong className="text-on-surface">DEBUT DE COURS</strong></p>
              <p>le 7 février: <strong className="text-on-surface">DEBUT DES COURS (2-3 ANS, 4-5 ANS)</strong></p>
            </div>
          </div>

          {/* Heures du Bureau */}
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-ambient">
            <h2 className="text-2xl font-bold mb-6">Heures du Bureau</h2>
            <h3 className="text-lg font-semibold text-primary mb-4">Janvier 2026</h3>
            <div className="space-y-2 text-on-surface-variant">
              <p>Lundi: 18h00-21h00</p>
              <p>Mercredi: 18h00-21h30</p>
              <p>Jeudi: 17h30-19h30</p>
              <p>Samedi: 9h00-15h00</p>
            </div>
            <a
              href="https://www.studiosprestige.com/files/jan-calendar-.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-primary font-semibold underline decoration-primary/30 hover:decoration-primary text-sm"
            >
              Voir le calendrier complet
            </a>
          </div>

          {/* Politiques */}
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-ambient">
            <h2 className="text-2xl font-bold mb-6">Politiques et Code de Danseurs</h2>
            <p className="text-on-surface-variant mb-4">Saison A2025</p>
            <div className="space-y-4">
              <a
                href="https://www.studiosprestige.com/files/politiques--procedures---saison-a2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary font-semibold underline decoration-primary/30 hover:decoration-primary"
              >
                Politiques et Code de Danseurs
              </a>
            </div>
            <h3 className="text-xl font-bold mt-8 mb-4">Code Vestimentaire</h3>
            <a
              href="https://www.studiosprestige.com/files/code-vestimentaire.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary font-semibold underline decoration-primary/30 hover:decoration-primary"
            >
              Code Vestimentaire
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
