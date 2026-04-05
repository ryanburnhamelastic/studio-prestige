export interface Course {
  name: string
  ageRange: string
  description: string
  icon: string
}

export const courses: Course[] = [
  {
    name: 'Ballet classique',
    ageRange: 'Cours offerts pour les enfants de 7-12 ans. Niveau: débutant',
    description: 'Le ballet classique est la base de toutes les formes de danse, développant la grâce, la discipline et la technique fondamentale.',
    icon: 'balance',
  },
  {
    name: 'Contemporain',
    ageRange: 'Cours offerts pour les enfants de 8 ans et plus',
    description: 'La danse contemporaine explore le plein potentiel de mouvement du corps. Elle est caractérisée par une expression et des mouvements plus libres.',
    icon: 'air',
  },
  {
    name: 'Ballet-Jazz',
    ageRange: 'Cours offerts à partir de 2 ans et plus',
    description: "Le ballet jazz est une fusion contemporaine du vocabulaire technique du ballet classique et les éléments de style du danse jazz. La danse jazz comporte des positions de base et des pas codifiés, comme en danse Classique. Elle est aussi ouverte à l'improvisation et à la création de ses propres mouvements, exprimant l'émotion que le danseur souhaite faire passer.",
    icon: 'music_note',
  },
  {
    name: 'Formation',
    ageRange: 'Cours offerts à partir de 7 ans et plus',
    description: "Nos cours « pré-compétitif », les groupes de Formation s'entrainent dans une variété de styles techniques (ballet, jazz, claquette, contemporaine) en présentent plusieurs chorégraphies à la fin de l'année.",
    icon: 'auto_awesome',
  },
  {
    name: 'Hip Hop',
    ageRange: 'Cours offerts pour les enfants de 4 et plus',
    description: "La danse hip-hop désigne plusieurs formes de street dance principalement effectuées dans la musique hip-hop. Plus qu'une danse, le hip-hop se veut un mouvement, une attitude, un état d'esprit.",
    icon: 'headphones',
  },
  {
    name: 'Acro',
    ageRange: 'Cours offerts pour les enfants de 6 ans et plus',
    description: "Une fusion de danse traditionnelle et les mouvements acrobatique, avec une concentration sur la technique d'étirement.",
    icon: 'fitness_center',
  },
  {
    name: 'Groupes performance et compétitifs',
    ageRange: 'Cours offerts pour les enfants et adultes par AUDITION seulement',
    description: "Nos groupes compétitifs participent à plusieurs compétitions sur le circuit et aux spectacles de fin de session.",
    icon: 'emoji_events',
  },
  {
    name: 'Pré-compétitifs',
    ageRange: 'Cours offerts pour les enfants de 8-11 ans',
    description: "Pour tous les danseurs intéressés par la compétition, mais souhaitant un entraînement supplémentaire. *Ils participeront à une compétition sur le circuit, ainsi qu'à tous les spectacles.",
    icon: 'star',
  },
  {
    name: 'Cours privés',
    ageRange: 'Cours offerts selon les disponibilités des professeurs',
    description: "Cours offerts dans tous les groupes d'âges, niveaux et styles.",
    icon: 'person',
  },
]
