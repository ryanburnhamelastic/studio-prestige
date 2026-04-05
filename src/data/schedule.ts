export interface ScheduleEntry {
  category: string
  age: string
  level: string
  name?: string
  day: string
  time: string
}

export const schedule: ScheduleEntry[] = [
  // BALLET-JAZZ
  { category: 'Ballet-Jazz', age: '2-3 ANS', level: 'Débutant', day: 'samedi', time: '9H00-9H30' },
  { category: 'Ballet-Jazz', age: '2-3 ANS', level: 'Débutant', day: 'samedi', time: '10h45-11h15' },
  { category: 'Ballet-Jazz', age: '2-3 ANS', level: 'Débutant', day: 'lundi', time: '17H30-18H00' },
  { category: 'Ballet-Jazz', age: '4-6 ANS', level: 'Débutant', day: 'samedi', time: '9H45-10H30' },
  { category: 'Ballet-Jazz', age: '4-6 ANS', level: 'Débutant', day: 'samedi', time: '11H30-12H15' },

  // BALLET CLASSIQUE
  { category: 'Ballet Classique', age: '7-9 ANS', level: 'Débutant-Intermédiaire', day: 'dimanche', time: '10h15-11h15' },

  // FORMATION
  { category: 'Formation (Jazz, Claquette, Hip Hop)', age: '7-9 ANS', level: 'Débutant-Intermédiaire', day: 'samedi', time: '13h00-14h15' },
  { category: 'Formation (Jazz, Claquette, Hip Hop)', age: '13 ANS +', level: 'Débutant-Intermédiaire', day: 'lundi', time: '18h00-19h15' },

  // CONTEMPORAINE
  { category: 'Contemporaine', age: '8-11 ANS', level: 'Débutant-Intermédiaire', day: 'dimanche', time: '11h15-12h15' },
  { category: 'Contemporaine', age: '12 ANS +', level: 'Débutant-Intermédiaire', day: 'dimanche', time: '12h15-13h15' },

  // STYLE LIBRE
  { category: 'Style Libre', age: '14 ANS +', level: 'Intermédiaire', name: '"RELEVE"', day: 'lundi', time: '19h45-21H30' },
  { category: 'Style Libre', age: 'ADULTE', level: 'Intermédiaire-Avancé', name: '"TROUPE JR"', day: 'jeudi', time: '20h00-21h45' },
  { category: 'Style Libre', age: 'ADULTE', level: 'Avancé', name: 'TROUPE', day: 'mercredi', time: '19h30-21h45' },

  // ACRO
  { category: 'Acro', age: '6 ans +', level: 'Débutant-Avancé', day: 'samedi', time: '14H15-15H15' },

  // TECHNIQUE
  { category: 'Technique', age: '', level: 'Intermédiaire-Avancé', day: 'dimanche', time: '10h30-11h45' },

  // HIP HOP
  { category: 'Hip Hop', age: '4-5 ANS', level: 'Débutant', day: 'samedi', time: '9h15-10H00' },
  { category: 'Hip Hop', age: '6-7 ANS', level: 'Débutant', day: 'samedi', time: '10H15-11H00' },
  { category: 'Hip Hop', age: '8-9 ANS', level: 'Débutant', day: 'samedi', time: '11H00-11h45' },
  { category: 'Hip Hop', age: '10-11 ANS', level: 'Débutant-Intermédiaire', day: 'samedi', time: '13H00-14H00' },
  { category: 'Hip Hop', age: '12 ANS+', level: 'Débutant-Intermédiaire', day: 'lundi', time: '19h15-20h15' },
  { category: 'Hip Hop', age: 'ADULTE', level: 'Débutant-Intermédiaire', day: 'lundi', time: '20h15-21h15' },

  // GROUPES COMPÉTITIFS
  { category: 'Groupes Compétitifs', age: '', level: 'Débutant', name: 'PRE-COMP', day: 'samedi', time: '11h45-13h00' },
  { category: 'Groupes Compétitifs', age: '', level: 'Intermédiaire-Avancé', name: 'CONTEMPORAIN', day: 'lundi', time: '18h30-19h45' },
  { category: 'Groupes Compétitifs', age: '', level: 'Intermédiaire-Avancé', name: 'HIP HOP (11 ANS -)', day: 'mardi', time: '18h00-19h15' },
  { category: 'Groupes Compétitifs', age: '', level: 'Intermédiaire-Avancé', name: 'HIP HOP (12 ANS +)', day: 'mardi', time: '19h15-20h45' },
  { category: 'Groupes Compétitifs', age: '', level: 'Intermédiaire-Avancé', name: 'LYRIQUE', day: 'mercredi', time: '18h15-19h30' },
  { category: 'Groupes Compétitifs', age: '', level: 'Intermédiaire-Avancé', name: 'JAZZ', day: 'jeudi', time: '18h45-20h00' },
  { category: 'Groupes Compétitifs', age: '16 ANS +', level: 'Intermédiaire-Avancé', name: 'ALIGN', day: 'dimanche', time: '13h30-15h30' },
]

export const pricing = [
  { duration: '30 mins', price: '$180 +tx' },
  { duration: '45 mins', price: '$200 +tx' },
  { duration: '60 mins', price: '$215 +tx' },
  { duration: '75 mins', price: '$240 +tx' },
  { duration: '90 mins', price: '$275 +tx' },
  { duration: '120 mins', price: '$285 +tx' },
]

export const discounts = [
  '-10% deuxième enfant de la même famille',
  '-20% cours additionnelles',
]
