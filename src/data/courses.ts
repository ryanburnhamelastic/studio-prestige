export interface Course {
  name: string
  ageRange: string
  description: string
  icon: string
}

const coursesFr: Course[] = [
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
    description: "Le ballet jazz est une fusion contemporaine du vocabulaire technique du ballet classique et les éléments de style du danse jazz. Elle est aussi ouverte à l'improvisation et à la création de ses propres mouvements, exprimant l'émotion que le danseur souhaite faire passer.",
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

const coursesEn: Course[] = [
  {
    name: 'Classical Ballet',
    ageRange: 'Classes offered for children ages 7-12. Level: beginner',
    description: 'Classical ballet is the foundation of all dance forms, developing grace, discipline and fundamental technique.',
    icon: 'balance',
  },
  {
    name: 'Contemporary',
    ageRange: 'Classes offered for children ages 8 and up',
    description: 'Contemporary dance explores the full movement potential of the body. It is characterized by freer expression and movement.',
    icon: 'air',
  },
  {
    name: 'Ballet-Jazz',
    ageRange: 'Classes offered from age 2 and up',
    description: 'Ballet jazz is a contemporary fusion of classical ballet technique and jazz dance style. It is open to improvisation and creating one\'s own movements, expressing the emotion the dancer wishes to convey.',
    icon: 'music_note',
  },
  {
    name: 'Formation',
    ageRange: 'Classes offered from age 7 and up',
    description: 'Our "pre-competitive" classes — Formation groups train in a variety of technical styles (ballet, jazz, tap, contemporary) and present several choreographies at year-end.',
    icon: 'auto_awesome',
  },
  {
    name: 'Hip Hop',
    ageRange: 'Classes offered for children ages 4 and up',
    description: 'Hip-hop dance refers to several street dance forms performed primarily to hip-hop music. More than a dance, hip-hop is a movement, an attitude, a state of mind.',
    icon: 'headphones',
  },
  {
    name: 'Acro',
    ageRange: 'Classes offered for children ages 6 and up',
    description: 'A fusion of traditional dance and acrobatic movement, with a focus on stretching technique.',
    icon: 'fitness_center',
  },
  {
    name: 'Performance & Competitive Groups',
    ageRange: 'Classes offered for children and adults by AUDITION only',
    description: 'Our competitive groups participate in several competitions on the circuit and in end-of-session shows.',
    icon: 'emoji_events',
  },
  {
    name: 'Pre-Competitive',
    ageRange: 'Classes offered for children ages 8-11',
    description: 'For all dancers interested in competition but wanting additional training. *They will participate in one circuit competition as well as all shows.',
    icon: 'star',
  },
  {
    name: 'Private Lessons',
    ageRange: 'Classes offered based on teacher availability',
    description: 'Available for all age groups, levels and styles.',
    icon: 'person',
  },
]

export const courses = { fr: coursesFr, en: coursesEn }
