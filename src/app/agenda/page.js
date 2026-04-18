'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import baladesData from '@/data/balades.json';
import styles from './agenda.module.css';

function formatDateFull(dateStr) {
  const d = new Date(dateStr);
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  return d.toLocaleDateString('fr-FR', options);
}

function formatDateShort(dateStr) {
  const d = new Date(dateStr);
  const day = d.getDate();
  const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
  return { day, month: months[d.getMonth()] };
}

const statutLabels = {
  'a-venir': '🟢 À venir',
  'complet': '🟠 Complet',
  'passe': '⚪ Passée',
  'reporte': '🟡 Reportée',
  'annule': '🔴 Annulée',
};

const statutClasses = {
  'a-venir': 'badgeAVenir',
  'complet': 'badgeComplet',
  'passe': 'badgePasse',
  'reporte': 'badgeReporte',
  'annule': 'badgeAnnule',
};

export default function AgendaPage() {
  const [openId, setOpenId] = useState(null);

  const upcoming = baladesData
    .filter((b) => b.statut === 'a-venir' || b.statut === 'complet')
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const past = baladesData
    .filter((b) => b.statut === 'passe')
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const toggleDetail = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <Header />
      <ScrollReveal />
      <main>
        {/* Hero banner */}
        <section className={styles.heroBanner}>
          <div className={styles.heroBannerBg} />
          <div className={`container ${styles.heroBannerContent}`}>
            <h1>Agenda des balades</h1>
            <p>
              Retrouvez toutes nos prochaines sorties nature. Chaque balade est un moment
              de douceur, de lien et de ressourcement.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="section">
          <div className="container container--narrow">
            <div className={`${styles.intro} reveal`}>
              <div className={styles.introIcon}>🌿</div>
              <h2>Balade Zen &amp; Oxygène</h2>
              <p>
                Nos balades s&apos;adressent aux personnes touchées par le cancer et à leurs proches.
                Le rythme est doux, adapté à chacun. Accompagnés d&apos;ânes ou de lamas,
                nous marchons en pleine nature pour retrouver du souffle et du bien-être.
              </p>
              <p className={styles.introNote}>
                <strong>Pour s&apos;inscrire ou en savoir plus</strong>, contactez-nous par email
                ou par téléphone. Les places sont limitées pour garantir un moment de qualité.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming walks */}
        <section className="section section--vert" id="prochaines">
          <div className="container">
            <div className="section-header reveal">
              <h2>Prochaines balades</h2>
              <span className="accent-line" />
            </div>

            {upcoming.length === 0 ? (
              <div className={`${styles.emptyState} reveal`}>
                <div className={styles.emptyIcon}>🌱</div>
                <h3>De nouvelles balades arrivent bientôt</h3>
                <p>
                  Notre prochain programme est en préparation. En attendant, n&apos;hésitez pas
                  à nous contacter ou à nous suivre sur Facebook pour être informé(e).
                </p>
                <div className="btn-group" style={{ justifyContent: 'center', marginTop: 'var(--space-lg)' }}>
                  <Link href="/contact" className="btn btn--primary">
                    Nous contacter
                  </Link>
                  <a
                    href="https://www.facebook.com/p/123-Cigognes-100093365425948/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--secondary"
                  >
                    Suivre sur Facebook
                  </a>
                </div>
              </div>
            ) : (
              <div className={styles.baladesList}>
                {upcoming.map((balade, i) => {
                  const { day, month } = formatDateShort(balade.date);
                  const isOpen = openId === balade.id;
                  return (
                    <article
                      key={balade.id}
                      className={`${styles.baladeItem} ${isOpen ? styles.baladeItemOpen : ''}`}
                    >
                      <div className={styles.baladeHeader} onClick={() => toggleDetail(balade.id)}>
                        <div className={styles.baladeDateCol}>
                          <span className={styles.baladeDay}>{day}</span>
                          <span className={styles.baladeMonth}>{month}</span>
                        </div>
                        <div className={styles.baladeImageCol}>
                          <Image
                            src={balade.visuel}
                            alt={`${balade.titre} — ${balade.animal}`}
                            width={120}
                            height={80}
                            className={styles.baladeThumb}
                          />
                        </div>
                        <div className={styles.baladeInfoCol}>
                          <span className={styles.baladeAnimal}>{balade.animalEmoji} {balade.animal}</span>
                          <h3 className={styles.baladeTitle}>{balade.titre}</h3>
                          <div className={styles.baladeMeta}>
                            <span>📍 {balade.secteur}</span>
                            <span>⏱ {balade.duree}</span>
                            <span>📏 {balade.distance}</span>
                          </div>
                        </div>
                        <div className={styles.baladeActions}>
                          <span className={`${styles.badge} ${styles[statutClasses[balade.statut]]}`}>
                            {statutLabels[balade.statut]}
                          </span>
                          <button
                            className={styles.expandBtn}
                            aria-label={isOpen ? 'Fermer les détails' : 'Voir les détails'}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              style={{
                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 300ms ease',
                              }}
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {isOpen && (
                        <div className={styles.baladeDetail}>
                          <div className={styles.detailGrid}>
                            <div className={styles.detailMain}>
                              <h4>À propos de cette balade</h4>
                              <p>{balade.description}</p>

                              <h4>Informations pratiques</h4>
                              <ul className={styles.detailInfoList}>
                                <li><strong>Date :</strong> {formatDateFull(balade.date)}</li>
                                {balade.heure && <li><strong>Heure :</strong> {balade.heure}</li>}
                                <li><strong>Secteur de départ :</strong> {balade.secteur}</li>
                                {balade.destination && <li><strong>Destination :</strong> {balade.destination}</li>}
                                <li><strong>Animal :</strong> {balade.animal}</li>
                                <li><strong>Durée estimée :</strong> {balade.duree}</li>
                                <li><strong>Distance :</strong> {balade.distance}</li>
                                <li><strong>Niveau :</strong> {balade.niveau}</li>
                                {balade.places && <li><strong>Places :</strong> {balade.places} participants</li>}
                                <li><strong>Public :</strong> {balade.public}</li>
                              </ul>
                            </div>
                            <div className={styles.detailSide}>
                              <div className={styles.detailConsignes}>
                                <h4>🎒 Consignes pratiques</h4>
                                <p>{balade.consignes}</p>
                              </div>
                              <div className={styles.detailContact}>
                                <h4>📬 Inscription & contact</h4>
                                <p>Pour vous inscrire ou poser vos questions :</p>
                                <a href={`mailto:${balade.contact}`} className="btn btn--primary btn--sm">
                                  ✉️ {balade.contact}
                                </a>
                                <a href="tel:+33695947907" className="btn btn--secondary btn--sm" style={{ marginTop: 'var(--space-sm)' }}>
                                  📞 06 95 94 79 07
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Past walks archive */}
        {past.length > 0 && (
          <section className="section" id="passees">
            <div className="container">
              <div className="section-header reveal">
                <h2>Balades passées</h2>
                <p>Retour sur nos précédentes sorties.</p>
                <span className="accent-line" />
              </div>
              <div className={styles.pastGrid}>
                {past.map((balade, i) => {
                  const { day, month } = formatDateShort(balade.date);
                  return (
                    <div key={balade.id} className={`${styles.pastCard} reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                      <div className={styles.pastDate}>
                        <span className={styles.pastDay}>{day}</span>
                        <span className={styles.pastMonth}>{month}</span>
                      </div>
                      <div>
                        <span className={styles.pastAnimal}>{balade.animalEmoji} {balade.animal}</span>
                        <h4 className={styles.pastTitle}>{balade.titre}</h4>
                        <span className={styles.pastSecteur}>📍 {balade.secteur}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="section section--rose" style={{ textAlign: 'center' }}>
          <div className="container reveal">
            <h2>Envie de participer ?</h2>
            <p style={{ fontSize: 'var(--fs-body-lg)', color: 'var(--texte-leger)', maxWidth: '500px', margin: 'var(--space-md) auto var(--space-2xl)' }}>
              Contactez-nous pour vous inscrire ou en savoir plus sur nos prochaines balades.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link href="/contact" className="btn btn--primary btn--lg">
                Nous contacter
              </Link>
              <a
                href="https://www.helloasso.com/associations/1-2-3-cigognes/adhesions/adhesion-a-1-2-3-cigognes-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--vert btn--lg"
              >
                Adhérer
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
