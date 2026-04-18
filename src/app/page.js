import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import balades from '@/data/balades.json';
import presse from '@/data/presse.json';
import styles from './home.module.css';

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const day = d.getDate();
  const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
  const month = months[d.getMonth()];
  return { day, month };
}

function formatDateLong(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function Home() {
  const upcomingBalades = balades
    .filter((b) => b.statut === 'a-venir')
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);

  return (
    <>
      <Header />
      <ScrollReveal />
      <main>
        {/* ═══════════════ BLOC 1 — HERO ═══════════════ */}
        <section className={styles.hero} id="hero">
          {/* Decorative background elements */}
          <div className={styles.heroDecoBlob1} />
          <div className={styles.heroDecoBlob2} />
          <div className={styles.heroDecoBlob3} />

          <div className={`container ${styles.heroInner}`}>
            {/* Left — Text */}
            <div className={styles.heroText}>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgeDot} />
                Association solidaire · Haguenau, Alsace
              </div>
              <h1 className={styles.heroTitle}>
                Respirer, marcher,<br />
                se reconnecter<br />
                <em>pas après pas</em>
              </h1>
              <p className={styles.heroSub}>
                Des balades solidaires en pleine nature avec des ânes et des lamas,
                pensées pour les personnes touchées par le cancer.
                Retrouvez du souffle et reconnectez-vous à la vie.
              </p>
              <div className={`btn-group ${styles.heroBtns}`}>
                <Link href="/agenda" className="btn btn--primary btn--lg">
                  🌿 Voir les prochaines balades
                </Link>
                <Link href="/a-propos" className="btn btn--secondary btn--lg">
                  Découvrir l&apos;association
                </Link>
              </div>

              {/* Floating stats */}
              <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <span className={styles.heroStatValue}>🏆</span>
                  <span className={styles.heroStatLabel}>Prix Engagement<br />Associatif 2025</span>
                </div>
                <div className={styles.heroStatDivider} />
                <div className={styles.heroStat}>
                  <span className={styles.heroStatValue}>🫏 🦙</span>
                  <span className={styles.heroStatLabel}>Balades avec<br />ânes et lamas</span>
                </div>
                <div className={styles.heroStatDivider} />
                <div className={styles.heroStat}>
                  <span className={styles.heroStatValue}>🌿</span>
                  <span className={styles.heroStatLabel}>Haguenau<br />Alsace</span>
                </div>
              </div>
            </div>

            {/* Right — Bento image mosaic */}
            <div className={styles.heroMosaic}>
              <div className={styles.mosaicMain}>
                <Image
                  src="/img/generated/hero-forest.png"
                  alt="Sentier forestier vosgien baigné de lumière dorée"
                  width={500}
                  height={600}
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className={styles.mosaicSmall1}>
                <Image
                  src="/img/generated/balade-anes.png"
                  alt="Un âne paisible sur un sentier forestier"
                  width={240}
                  height={240}
                  priority
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
              <div className={styles.mosaicSmall2}>
                <Image
                  src="/img/generated/balade-lamas.png"
                  alt="Un lama amical en balade nature"
                  width={240}
                  height={240}
                  priority
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
              <div className={styles.mosaicLogo}>
                <Image
                  src="/img/LOGO sans fond.png"
                  alt="Logo 1 2 3 Cigognes"
                  width={110}
                  height={110}
                  priority
                />
              </div>
              {/* Floating handwritten quote */}
              <div className={styles.mosaicQuote}>
                <p>« Un pas après l&apos;autre dans la lutte contre le cancer »</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ BLOC 2 — QUI SOMMES-NOUS ═══════════════ */}
        <section className="section" id="qui-sommes-nous">
          <div className="container">
            <div className={styles.whoGrid}>
              <div className={`${styles.whoImage} reveal`}>
                <Image
                  src="/img/article DNA 08062024.jpg"
                  alt="Les fondatrices de 1 2 3 Cigognes : Sophie Buchi-Dossing et Emmanuelle Colinet lors d'un événement associatif"
                  width={600}
                  height={450}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={`${styles.whoText} reveal reveal-delay-2`}>
                <p className={styles.whoLabel}>✨ Notre histoire</p>
                <h2>Trois amies, un même combat, une même envie d&apos;avancer</h2>
                <p>
                  <strong>1 2 3 Cigognes </strong>  est née de l&apos;amitié entre trois femmes — dont Emmanuelle et Sophie
                  — unies par la résilience face au cancer. Après un trek solidaire au Portugal
                  en octobre 2024, où elles ont parcouru ensemble le chemin de Lisbonne à Faro, elles ont
                  décidé de transformer leur énergie en action utile.
                </p>
                <p>
                  Basée à Haguenau en Alsace, l&apos;association propose des balades solidaires en pleine nature
                  pour offrir un moment de bien-être, de lien et d&apos;espoir aux personnes touchées par la maladie.
                </p>
                <Link href="/a-propos" className="btn btn--outline" style={{ marginTop: 'var(--space-lg)' }}>
                  En savoir plus sur notre histoire →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ BLOC 3 — BALADE ZEN & OXYGÈNE ═══════════════ */}
        <section className={`section section--vert ${styles.zenSection}`} id="balade-zen">
          <div className={styles.zenBg} />
          <div className="container">
            <div className={styles.zenGrid}>
              <div className={`reveal`}>
                <p className={styles.whoLabel}>🫏 Notre action phare</p>
                <h2>Balade Zen &amp; Oxygène</h2>
                <p style={{ fontSize: 'var(--fs-body-lg)', color: 'var(--texte-leger)', marginTop: 'var(--space-md)' }}>
                  Une parenthèse de bien-être en pleine nature. Des journées d&apos;évasion douce dans
                  les Vosges, accompagnés d&apos;ânes ou de lamas, pensées pour les personnes
                  touchées par le cancer.
                </p>
                <p style={{ color: 'var(--texte-leger)' }}>
                  Le rythme est doux, adapté à chacun. L&apos;important n&apos;est pas la distance
                  parcourue, mais le souffle retrouvé, le lien tissé et la nature qui apaise.
                </p>
                <div className={styles.zenFeatures}>
                  <div className={styles.zenFeature}>
                    <span className={styles.zenFeatureIcon}>🌲</span>
                    <span>Marche en pleine nature, forêts et sentiers</span>
                  </div>
                  <div className={styles.zenFeature}>
                    <span className={styles.zenFeatureIcon}>🫏</span>
                    <span>Accompagnés d&apos;ânes ou de lamas</span>
                  </div>
                  <div className={styles.zenFeature}>
                    <span className={styles.zenFeatureIcon}>💚</span>
                    <span>Rythme doux et adapté à chacun</span>
                  </div>
                  <div className={styles.zenFeature}>
                    <span className={styles.zenFeatureIcon}>🤝</span>
                    <span>Moments de partage et de solidarité</span>
                  </div>
                </div>
              </div>
              <div className={`${styles.zenImageWrap} reveal reveal-delay-2`}>
                <div className={styles.zenImage}>
                  <Image
                    src="/img/generated/balade-anes.png"
                    alt="Un âne paisible sur un sentier forestier ensoleillé dans les Vosges"
                    width={500}
                    height={667}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className={styles.zenFloatCard}>
                  <p>« Marcher à son rythme, respirer, se reconnecter à soi. » 🌿</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ BLOC 4 — PROCHAINES BALADES ═══════════════ */}
        <section className="section" id="prochaines-balades">
          <div className="container">
            <div className="section-header reveal">
              <h2>Prochaines balades</h2>
              <p>Découvrez nos prochaines sorties nature et inscrivez-vous pour un moment de ressourcement.</p>
              <span className="accent-line" />
            </div>
            <div className={styles.baladesGrid}>
              {upcomingBalades.map((balade, i) => {
                const { day, month } = formatDate(balade.date);
                return (
                  <article key={balade.id} className={`${styles.baladeCard} reveal reveal-delay-${i + 1}`}>
                    <div className={styles.baladeImageWrap}>
                      <Image
                        src={balade.visuel}
                        alt={`${balade.titre} — ${balade.animal} sur un sentier nature`}
                        width={600}
                        height={375}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className={styles.baladeDateBadge}>
                        <span className={styles.baladeDateDay}>{day}</span>
                        <span className={styles.baladeDateMonth}>{month}</span>
                      </div>
                    </div>
                    <div className={styles.baladeBody}>
                      <span className={styles.baladeAnimal}>{balade.animalEmoji} {balade.animal}</span>
                      <h3 className={styles.baladeTitle}>{balade.titre}</h3>
                      <div className={styles.baladeMeta}>
                        <span>📍 {balade.secteur}</span>
                        <span>⏱ {balade.duree}</span>
                        <span>📏 {balade.distance}</span>
                      </div>
                      <p className={styles.baladeDesc}>{balade.description}</p>
                      <Link href="/agenda" className="btn btn--outline btn--sm">
                        En savoir plus →
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }} className="reveal">
              <Link href="/agenda" className="btn btn--primary">
                Voir tout l&apos;agenda →
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════ BLOC 5 — PRIX & RECONNAISSANCE ═══════════════ */}
        <section className="section section--rose" id="prix">
          <div className="container">
            <div className={styles.prixGrid}>
              <div className={`${styles.prixImage} reveal`}>
                <Image
                  src="/img/lolo prix engagement associatif.JPG"
                  alt="Visuel du Prix de l'Engagement Associatif 2025 remis à 1 2 3 Cigognes"
                  width={800}
                  height={320}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="reveal reveal-delay-2">
                <p className={styles.prixBadge}>🏆 Reconnaissance</p>
                <h2>Prix de l&apos;Engagement Associatif 2025</h2>
                <p style={{ fontSize: 'var(--fs-body-lg)', color: 'var(--texte-leger)', marginTop: 'var(--space-lg)' }}>
                  1 2 3 Cigognes a été récompensée par le <strong>Prix de l&apos;Engagement Associatif 2025</strong>,
                  une reconnaissance qui témoigne de la valeur et de l&apos;impact de nos actions auprès
                  des personnes touchées par le cancer dans notre territoire.
                </p>
                <p style={{ color: 'var(--texte-leger)' }}>
                  Ce prix nous encourage à poursuivre notre mission avec encore plus de conviction
                  et d&apos;énergie, pour offrir des moments de bien-être et d&apos;espoir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ BLOC 6 — VIDÉO ═══════════════ */}
        <section className="section" id="video">
          <div className="container">
            <div className="section-header reveal">
              <h2>Vidéo de remise de prix</h2>
              <p>Revivez le moment de la remise du Prix de l&apos;Engagement Associatif 2025.</p>
              <span className="accent-line" />
            </div>
            <div className={`${styles.videoWrap} reveal`}>
              <div className={styles.videoPlayer}>
                <video 
                  src="/img/VIDEO  1.2.3.CIGOGNES  - FLOUTAGE.mp4" 
                  controls 
                  preload="metadata"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                >
                  Votre navigateur ne prend pas en charge la lecture de vidéos.
                </video>
              </div>
              <p className={styles.videoCaption}>
                Cérémonie de remise du Prix de l&apos;Engagement Associatif 2025
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════ BLOC 7 — ILS PARLENT DE NOUS ═══════════════ */}
        <section className="section section--mauve" id="presse">
          <div className="container">
            <div className="section-header reveal">
              <h2>Ils parlent de nous</h2>
              <p>La presse locale suit notre aventure et nos actions solidaires.</p>
              <span className="accent-line" />
            </div>
            <div className={styles.presseGrid}>
              {presse.map((article, i) => (
                <article key={article.id} className={`${styles.presseCard} reveal reveal-delay-${i + 1}`}>
                  <div className={styles.presseImageWrap}>
                    <Image
                      src={article.visuel}
                      alt={`Article ${article.media} : ${article.titre}`}
                      width={500}
                      height={340}
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <div className={styles.presseBody}>
                    <div className={styles.presseMeta}>
                      <span className={styles.presseSource}>{article.media}</span>
                      <span>·</span>
                      <span>{formatDateLong(article.date)}</span>
                    </div>
                    <h3 className={styles.presseTitle}>{article.titre}</h3>
                    <p className={styles.presseResume}>{article.resume}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ BLOC 8 — GALERIE ═══════════════ */}
        <section className="section" id="galerie">
          <div className="container">
            <div className="section-header reveal">
              <h2>En images</h2>
              <p>Des moments de partage, de nature et de solidarité.</p>
              <span className="accent-line" />
            </div>
            <div className={`${styles.galerieGrid} reveal`}>
              <div className={styles.galerieItem}>
                <Image
                  src="/img/Article DNA 03122024.jpeg"
                  alt="Les fondatrices de 1 2 3 Cigognes au marché de Noël de Drusenheim"
                  width={600}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={styles.galerieItem}>
                <Image
                  src="/img/generated/balade-anes.png"
                  alt="Âne paisible sur un sentier forestier"
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className={styles.galerieItem}>
                <Image
                  src="/img/generated/balade-lamas.png"
                  alt="Lama amical en balade nature"
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className={styles.galerieItem}>
                <Image
                  src="/img/Affiche balades.png"
                  alt="Affiche Balade Zen et Oxygène par 1 2 3 Cigognes"
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className={styles.galerieItem}>
                <Image
                  src="/img/generated/hero-forest.png"
                  alt="Sentier forestier vosgien baigné de lumière"
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ BLOC 9 — CTA FINAL ═══════════════ */}
        <section className={`section section--rose ${styles.ctaSection}`} id="soutenir">
          <div className={styles.ctaBlob} />
          <div className={`container ${styles.ctaContent}`}>
            <div className="reveal">
              <h2>Envie de nous rejoindre&nbsp;?</h2>
              <p>
                Que vous souhaitiez participer à une balade, adhérer, faire un don ou simplement
                nous soutenir, chaque geste compte.
              </p>
              <div className={styles.ctaLinks}>
                <Link href="/agenda" className="btn btn--primary btn--lg">
                  🌿 Prochaines balades
                </Link>
                <a
                  href="https://www.helloasso.com/associations/1-2-3-cigognes/adhesions/adhesion-a-1-2-3-cigognes-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--vert btn--lg"
                >
                  Adhérer à l&apos;association
                </a>
                <a
                  href="https://www.helloasso.com/associations/1-2-3-cigognes/formulaires/2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary btn--lg"
                >
                  ❤️ Faire un don
                </a>
                <Link href="/contact" className="btn btn--outline btn--lg">
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
