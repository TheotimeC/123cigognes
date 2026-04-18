import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact',
  description:
    'Contactez l\'association 1 2 3 Cigognes par email ou téléphone. Renseignements sur les balades solidaires, adhésions, dons et partenariats. Haguenau, Alsace.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <ScrollReveal />
      <main>
        {/* Hero */}
        <section className={styles.heroBanner}>
          <div className={styles.heroBannerBg} />
          <div className={`container ${styles.heroBannerContent}`}>
            <h1>Nous contacter</h1>
            <p>
              Une question, une envie de participer, un projet de partenariat&nbsp;?
              N&apos;hésitez pas à nous écrire ou nous appeler, nous vous répondrons avec plaisir.
            </p>
          </div>
        </section>

        {/* Contact cards */}
        <section className="section">
          <div className="container">
            <div className={styles.welcomeText + ' reveal'}>
              <p className={styles.welcomeQuote}>
                « Chaque message compte, chaque lien créé est précieux. »
              </p>
              <p>
                Que vous soyez une personne concernée par le cancer, un proche, un professionnel
                de santé, un partenaire potentiel, un bénévole ou simplement curieux de notre
                démarche — vous êtes les bienvenus.
              </p>
            </div>

            <div className={styles.cardsGrid}>
              {/* Email */}
              <a href="mailto:undeuxtroiscigognes@gmail.com" className={`${styles.contactCard} reveal reveal-delay-1`}>
                <div className={styles.cardIcon}>✉️</div>
                <h3>Par email</h3>
                <p className={styles.cardValue}>undeuxtroiscigognes@gmail.com</p>
                <p className={styles.cardHint}>Nous vous répondons sous 48h</p>
              </a>

              {/* Téléphone */}
              <a href="tel:+33695947907" className={`${styles.contactCard} reveal reveal-delay-2`}>
                <div className={styles.cardIcon}>📞</div>
                <h3>Par téléphone</h3>
                <p className={styles.cardValue}>06 95 94 79 07</p>
                <p className={styles.cardHint}>Du lundi au samedi</p>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/p/123-Cigognes-100093365425948/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactCard} reveal reveal-delay-3`}
              >
                <div className={styles.cardIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--prune)"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <h3>Facebook</h3>
                <p className={styles.cardValue}>123 Cigognes</p>
                <p className={styles.cardHint}>Suivez notre actualité</p>
              </a>

              {/* HelloAsso */}
              <a
                href="https://www.helloasso.com/associations/1-2-3-cigognes"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactCard} reveal reveal-delay-4`}
              >
                <div className={styles.cardIcon}>❤️</div>
                <h3>HelloAsso</h3>
                <p className={styles.cardValue}>1 2 3 Cigognes</p>
                <p className={styles.cardHint}>Adhésions et dons en ligne</p>
              </a>
            </div>
          </div>
        </section>

        {/* Suivez-nous & Soutenir */}
        <section className="section section--vert">
          <div className="container">
            <div className={styles.twoCol}>
              <div className={`${styles.followBlock} reveal`}>
                <h2>Suivez-nous</h2>
                <p>
                  Retrouvez-nous sur Facebook pour suivre nos actualités, nos balades
                  et nos moments de partage.
                </p>
                <a
                  href="https://www.facebook.com/p/123-Cigognes-100093365425948/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 8 }}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Suivre sur Facebook
                </a>
              </div>

              <div className={`${styles.supportBlock} reveal reveal-delay-2`}>
                <h2>Soutenir l&apos;association</h2>
                <p>
                  Votre soutien nous permet de continuer à proposer des balades solidaires
                  gratuites ou à prix réduit. Chaque geste compte.
                </p>
                <div className="btn-group">
                  <a
                    href="https://www.helloasso.com/associations/1-2-3-cigognes/adhesions/adhesion-a-1-2-3-cigognes-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--vert"
                  >
                    Adhérer
                  </a>
                  <a
                    href="https://www.helloasso.com/associations/1-2-3-cigognes/formulaires/2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--secondary"
                  >
                    ❤️ Faire un don
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reassurance */}
        <section className="section" style={{ textAlign: 'center' }}>
          <div className="container container--narrow reveal">
            <p className={styles.reassurance}>
              🌿 <strong>1 2 3 Cigognes</strong> est une association loi 1901 basée à Haguenau, Alsace.
              Nous sommes joignables par email et téléphone pour toute question concernant
              nos balades, les adhésions, les dons, les partenariats ou les demandes presse.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
