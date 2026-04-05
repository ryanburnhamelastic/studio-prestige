export default function SportsEtudes() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <h1 className="text-5xl md:text-7xl text-primary mb-8">Sports-Études</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-high flex items-center justify-center">
            <span className="text-on-surface-variant text-sm">Photo Sports-Études</span>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl text-primary">Laval Junior Academy - Danse Études</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Le Studio Prestige offre en partenariat avec l'École Secondaire Laval Junior Academy
            </p>
            <a
              href="https://lavaljunior.com/en/specialized/sportsetude/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-primary font-semibold underline decoration-primary/30 hover:decoration-primary"
            >
              POUR PLUS D'INFOS, CLIQUEZ ICI
            </a>
            <div>
              <h3 className="font-bold text-xl mb-2">Mission</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Nous voulons donner aux élèves un enseignement de qualité et diversifié afin de les
                préparer pour le monde
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Cours offerts</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Ballet, Contemporaine, Danse Urbaine, Jazz, Lyrique, Création & Interprétation,
                Mis en forme & flexibilité
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 px-8 mb-24 rounded-xl mx-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8">Le programme de DANSE-ÉTUDES PRESTIGE, c'est:</h2>
          <ul className="space-y-4 text-on-surface-variant text-lg">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
              8h d'entraînement minimum par semaine
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
              Participation à plusieurs compétitions au printemps
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
              Participation aux spectacles de fin de session de l'école de danse
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
              Chorégraphes de renoms invités à faire des ateliers
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
              Approfondissement du vocabulaire de la danse et apprentissages connexes à la danse
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
              Professeurs hautement qualifiés et passionnés
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
              Un sentiment d'appartenance à toutes épreuves et une évolution marquée chez tous les danseurs
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
