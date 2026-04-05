import { useState } from 'react'
import { schedule, pricing, discounts } from '../data/schedule'
import { useLanguage } from '../contexts/LanguageContext'

const categories = [...new Set(schedule.map(s => s.category))]

export default function Schedule() {
  const [filter, setFilter] = useState<string>('all')
  const { t } = useLanguage()

  const filtered = filter === 'all' ? schedule : schedule.filter(s => s.category === filter)

  return (
    <>
      {/* Session Header */}
      <section className="max-w-7xl mx-auto px-8 mb-16">
        <div className="text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-primary text-on-primary text-sm font-semibold mb-6">
            {t.home.sessionTitle}
          </span>
          <h1 className="text-5xl md:text-6xl mb-4">{t.schedule.title}</h1>
          <p className="text-2xl text-primary font-bold">{t.home.sessionDates}</p>
        </div>
      </section>

      {/* Registration Info */}
      <section className="max-w-4xl mx-auto px-8 mb-16">
        <div className="bg-surface-container-low rounded-xl p-8 space-y-4 text-center">
          <p className="text-on-surface-variant">
            Les PRÉ-INSCRIPTIONS pour tous les membres de la famille Prestige commencent
            VENDREDI le 28 NOVEMBRE À 10H!
          </p>
          <p className="text-on-surface-variant">
            (Le lien pour le fichier d'inscription a été envoyé par courriel)
          </p>
          <p className="text-on-surface-variant">
            Les inscriptions générales débuteront le 2 DÉCEMBRE, 2025 (en ligne seulement)
          </p>
          <p className="text-on-surface-variant">
            Nous confirmerons votre inscription (ainsi que le montant à payer) par courriel dans les plus brefs délais.
          </p>
          <p className="text-sm text-on-surface-variant">
            *Les places sont limitées<br />
            **Un frais d'inscription unique de $35 sera appliqué à chaque nouveau inscription
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="max-w-7xl mx-auto px-8 mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === 'all'
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
            }`}
          >
            {t.schedule.all}
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Schedule Table */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-container-high">
                  <th className="text-left px-6 py-4 font-semibold text-on-surface">{t.schedule.category}</th>
                  <th className="text-left px-6 py-4 font-semibold text-on-surface">{t.schedule.age}</th>
                  <th className="text-left px-6 py-4 font-semibold text-on-surface">{t.schedule.level}</th>
                  <th className="text-left px-6 py-4 font-semibold text-on-surface">{t.schedule.name}</th>
                  <th className="text-left px-6 py-4 font-semibold text-on-surface">{t.schedule.day}</th>
                  <th className="text-left px-6 py-4 font-semibold text-on-surface">{t.schedule.time}</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((entry, i) => (
                  <tr
                    key={i}
                    className="border-t border-outline-variant/10 hover:bg-surface-container-low transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-primary">{entry.category}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{entry.age}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{entry.level}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{entry.name || '—'}</td>
                    <td className="px-6 py-4 text-on-surface-variant capitalize">{entry.day}</td>
                    <td className="px-6 py-4 text-on-surface font-medium">{entry.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="px-6 py-4 text-xs text-on-surface-variant border-t border-outline-variant/10">
            {t.schedule.privateNote}
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-8 mb-32">
        <h2 className="text-4xl mb-8 text-center">{t.schedule.pricingTitle}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {pricing.map((p) => (
            <div key={p.duration} className="bg-surface-container-lowest rounded-xl p-6 text-center shadow-ambient">
              <p className="text-sm text-tertiary font-medium mb-2">{t.schedule.courseOf} {p.duration}</p>
              <p className="text-2xl font-bold text-primary">{p.price}</p>
            </div>
          ))}
        </div>
        <div className="bg-surface-container-low rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">{t.schedule.discountsTitle}</h3>
          {discounts.map((d, i) => (
            <p key={i} className="text-on-surface-variant italic">{d}</p>
          ))}
        </div>
      </section>
    </>
  )
}
