export default function Contact() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <h1 className="text-5xl md:text-7xl text-primary mb-12">Nous Joindre</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Map & Address */}
          <div className="space-y-8">
            <div className="aspect-video rounded-xl overflow-hidden bg-surface-container-high">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.456!2d-73.712!3d45.577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sfr!2sca!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studios Prestige - Google Maps"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-xl mb-2">Adresse</h3>
                <p className="text-on-surface-variant">
                  1774 Boulevard des Laurentides<br />
                  Laval, QC H7M 2P6, Canada
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Téléphone</h3>
                <a href="tel:450-490-4104" className="text-primary hover:underline">450-490-4104</a>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Courriel</h3>
                <a href="mailto:ecole_de_danse_prestige@hotmail.com" className="text-primary hover:underline">
                  ecole_de_danse_prestige@hotmail.com
                </a>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Heures du bureau H2026</h3>
                <div className="text-on-surface-variant space-y-1">
                  <p>Lundi: 18h00-21h00</p>
                  <p>Mercredi: 18h00-21h30</p>
                  <p>Jeudi: 17h30-19h30</p>
                  <p>Samedi: 9h00-15h00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-on-surface-variant mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-surface-container-high text-on-surface focus:bg-surface-bright focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-on-surface-variant mb-2">
                    Courriel
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-high text-on-surface focus:bg-surface-bright focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-on-surface-variant mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-high text-on-surface focus:bg-surface-bright focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-on-surface-variant mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-surface-container-high text-on-surface focus:bg-surface-bright focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-on-primary px-8 py-4 rounded-full font-bold hover:scale-[1.02] active:scale-95 transition-all"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
