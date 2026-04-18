import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import presse from '@/data/presse.json';
import styles from './about.module.css';

export const metadata = {
  title: 'À propos',
  description:
    'Découvrez l\'histoire de l\'association 1 2 3 Cigognes, fondée par trois amies survivantes du cancer. Notre mission : offrir des balades solidaires en pleine nature à Haguenau, en Alsace.',
};

function formatDateLong(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

const valeurs = [
  { icon: '💛', label: 'Bienveillance', desc: "Accueillir chacun avec douceur et sans jugement." },
  { icon: '🤝', label: 'Solidarité', desc: "Avancer ensemble, s'entraider, se soutenir." },
  { icon: '🌱', label: 'Espoir', desc: "Croire que la vie reprend le dessus, pas après pas." },
  { icon: '😊', label: 'Joie', desc: "Cultiver les sourires, la légèreté et les rires." },
  { icon: '🕊️', label: 'Respect', desc: "Respecter le rythme et l'histoire de chacun." },
  { icon: '✨', label: 'Simplicité', desc: "L'essentiel est dans les gestes simples et vrais." },
  { icon: '💚', label: 'Humanité', desc: "Placer le lien humain au cœur de chaque action." },
];

export default function AProposPage() {
  return (
    <>
      <Header />
      <ScrollReveal />
      <main>
        {/* Hero */}
        <section className={styles.heroBanner}>
          <div className={styles.heroBannerBg} />
          <div className={`container ${styles.heroBannerContent}`}>
            <h1>À propos de 1 2 3 Cigognes</h1>
            <p>
              Trois amies, un même combat, une même envie de transformer l&apos;épreuve en élan solidaire.
            </p>
          </div>
        </section>

        {/* Section 1 — Notre histoire */}
        <section className="section" id="notre-histoire">
          <div className="container">
            <div className={styles.storyGrid}>
              <div className={`${styles.storyText} reveal`}>
                <p className={styles.storyLabel}>📖 Notre histoire</p>
                <h2>De la résilience à l&apos;action</h2>
                <p>
                  Tout commence par l&apos;amitié entre trois femmes de la région de Haguenau -
                  dont <strong>Emmanuelle Colinet</strong> et <strong>Sophie Buchi-Dossing</strong> -
                  toutes touchées par le cancer.
                </p>
                <p>
                  En 2019, Emmanuelle reçoit un diagnostic de cancer du sein. Deux opérations,
                  six chimiothérapies, 33 séances de radiothérapie. Mais Emmanuelle est une
                  battante : <em>« Le mot cancer n&apos;est pas un tabou, une vie existe après la maladie. »</em>
                </p>
                <p>
                  L&apos;association <strong>1 2 3 Cigognes </strong> voit le jour en août 2023, avec une vision
                  claire : montrer que la vie après le cancer peut encore porter des défis,
                  de l&apos;espoir et de l&apos;action.
                </p>
              </div>
              <div className={`${styles.storyImageStack} reveal reveal-delay-2`}>
                <div className={styles.storyImage1}>
                  <Image
                    src="/img/article DNA 08062024.jpg"
                    alt="Les fondatrices : Sophie Buchi-Dossing et Emmanuelle Colinet"
                    width={500}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className={styles.storyFloatQuote}>
                  <p>« Battez-vous et avancez ! »</p>
                  <span>— Emmanuelle Colinet</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trek Portugal */}
        <section className="section section--mauve" id="trek">
          <div className="container">
            <div className={styles.trekGrid}>
              <div className={`${styles.trekImage} reveal`}>
                <Image
                  src="/img/Article Maxi Flash 04112024.JPG"
                  alt="Article Maxi Flash : Le trek en rose — 1 2 3 Cigognes au Portugal"
                  width={600}
                  height={500}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={`${styles.trekText} reveal reveal-delay-2`}>
                <p className={styles.storyLabel}>🇵🇹 Le trek fondateur</p>
                <h2>Le Trek en Rose au Portugal</h2>
                <p>
                  En octobre 2024, les amies relèvent un défi personnel et solidaire : un
                  trek de six jours sur la <strong>Rota Vicentina</strong>, de Lisbonne à Faro, au Portugal.
                </p>
                <p>
                  Près de 20 kilomètres par jour, pendant une semaine. À leur rythme, sans pression,
                  solidaires quand il y avait des coups de mou. Un véritable voyage symbolique
                  de persévérance, de solidarité et d&apos;engagement.
                </p>
                <blockquote className={styles.blockquote}>
                  « On a avancé tranquillement, en étant solidaires quand il y avait des coups de mou.
                  La résistance au stress n&apos;est plus la même qu&apos;avant. Ce voyage m&apos;a permis de reprendre pied. »
                </blockquote>
                <p>
                  Ce trek a marqué un tournant : l&apos;association passe de l&apos;histoire personnelle
                  à l&apos;action collective, avec la volonté d&apos;offrir à d&apos;autres cette
                  même expérience de ressourcement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Notre mission */}
        <section className="section" id="notre-mission">
          <div className="container container--narrow">
            <div className={`${styles.missionBlock} reveal`}>
              <p className={styles.storyLabel}>🎯 Notre mission</p>
              <h2>Pourquoi 1 2 3 Cigognes agit</h2>
              <p className={styles.missionLead}>
                Parce que face au cancer, il ne faut pas rester seul. Parce que la nature apaise,
                les animaux réconfortent, et le mouvement libère.
              </p>
              <p>
                Notre mission est simple : proposer des <strong>balades solidaires en pleine nature</strong>,
                accompagnées d&apos;ânes ou de lamas, pour offrir aux personnes touchées par le cancer
                un moment de <strong>bien-être, de lien et d&apos;espoir</strong>.
              </p>
              <p>
                Nous voulons montrer qu&apos;après la maladie, la vie reprend. Qu&apos;on peut marcher
                à son rythme, retrouver du souffle, et se reconnecter à soi. Nos balades sont
                une <em>« bouffée d&apos;oxygène »</em>, comparable à ce que les trois fondatrices
                ont vécu au Portugal.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 — Nos valeurs */}
        <section className="section section--rose" id="nos-valeurs">
          <div className="container">
            <div className="section-header reveal">
              <h2>Nos valeurs</h2>
              <p>Les principes qui guident chacune de nos actions.</p>
              <span className="accent-line" />
            </div>
            <div className={styles.valeursGrid}>
              {valeurs.map((v, i) => (
                <div key={v.label} className={`${styles.valeurCard} reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                  <span className={styles.valeurIcon}>{v.icon}</span>
                  <h3 className={styles.valeurLabel}>{v.label}</h3>
                  <p className={styles.valeurDesc}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — Nos actions */}
        <section className="section" id="nos-actions">
          <div className="container">
            <div className="section-header reveal">
              <h2>Nos actions</h2>
              <p>Ce que nous faisons concrètement pour accompagner les personnes touchées par le cancer.</p>
              <span className="accent-line" />
            </div>
            <div className={styles.actionsGrid}>
              <div className={`${styles.actionCard} reveal reveal-delay-1`}>
                <div className={styles.actionIcon}>🫏</div>
                <h3>Balades avec les ânes</h3>
                <p>
                  Des sorties en forêt de Haguenau avec des ânes bienveillants. Un rythme doux,
                  un contact apaisant avec l&apos;animal, et la sérénité de la nature vosgienne.
                </p>
              </div>
              <div className={`${styles.actionCard} reveal reveal-delay-2`}>
                <div className={styles.actionIcon}>🦙</div>
                <h3>Balades avec les lamas</h3>
                <p>
                  Des rencontres uniques avec les lamas, animaux doux et curieux. Marcher à
                  leur côté apaise et reconnecte à l&apos;essentiel.
                </p>
              </div>
              <div className={`${styles.actionCard} reveal reveal-delay-3`}>
                <div className={styles.actionIcon}>💚</div>
                <h3>Moments de partage</h3>
                <p>
                  Au-delà de la marche, nos balades sont des temps d&apos;échange, de rencontre et
                  de soutien mutuel. Un espace bienveillant où l&apos;on peut souffler.
                </p>
              </div>
              <div className={`${styles.actionCard} reveal reveal-delay-4`}>
                <div className={styles.actionIcon}>🌟</div>
                <h3>Projets à venir</h3>
                <p>
                  Nous préparons de nouvelles actions bien-être : ateliers de relaxation,
                  rencontres thématiques et nouvelles destinations de balades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — Partenaires */}
        <section className="section section--vert" id="partenaires">
          <div className="container">
            <div className="section-header reveal">
              <h2>Nos soutiens</h2>
              <p>Les structures et associations qui nous accompagnent.</p>
              <span className="accent-line" />
            </div>
            <div className={`${styles.partnerShowcase} reveal`}>
              <div className={styles.partnerCard}>
                <Image
                  src="/img/Logo Haguenauvienne 2026 (1).jpg"
                  alt="La Haguenauvienne — Bien-être et cancer du sein"
                  width={200}
                  height={60}
                  className={styles.partnerImg}
                />
                <h3>La Haguenauvienne</h3>
                <p>Bien-être et cancer du sein — Un partenaire engagé à nos côtés.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 — Presse */}
        <section className="section" id="presse">
          <div className="container">
            <div className="section-header reveal">
              <h2>Presse &amp; reconnaissance</h2>
              <p>La presse locale suit notre aventure solidaire.</p>
              <span className="accent-line" />
            </div>

            {/* Prix */}
            <div className={`${styles.prixBanner} reveal`}>
              <Image
                src="/img/lolo prix engagement associatif.JPG"
                alt="Prix de l'Engagement Associatif 2025"
                width={800}
                height={300}
                className={styles.prixBannerImg}
              />
              <div className={styles.prixBannerText}>
                <h3>🏆 Prix de l&apos;Engagement Associatif 2025</h3>
                <p>
                  1 2 3 Cigognes a été récompensée par le Prix de l&apos;Engagement Associatif 2025,
                  témoignant de l&apos;impact et de la crédibilité de nos actions locales.
                </p>
              </div>
            </div>

            {/* Articles */}
            <div className={styles.presseList}>
              {presse.map((article, i) => (
                <article key={article.id} className={`${styles.presseItem} reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                  <div className={styles.presseItemImage}>
                    <Image
                      src={article.visuel}
                      alt={`Article ${article.media} : ${article.titre}`}
                      width={300}
                      height={200}
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>
                  <div className={styles.presseItemText}>
                    <div className={styles.presseMeta}>
                      <span className={styles.presseSource}>{article.media}</span>
                      <span className={styles.presseDate}>{formatDateLong(article.date)}</span>
                    </div>
                    <h3>{article.titre}</h3>
                    <p>{article.resume}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7 — CTA */}
        <section className="section section--prune" style={{ textAlign: 'center' }}>
          <div className="container reveal">
            <h2>Rejoignez l&apos;aventure</h2>
            <p style={{ fontSize: 'var(--fs-body-lg)', opacity: 0.85, maxWidth: '550px', margin: 'var(--space-md) auto var(--space-2xl)' }}>
              Que vous souhaitiez participer, adhérer, soutenir ou simplement en savoir plus,
              nous serions ravis de vous accueillir.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-md)' }}>
              <Link href="/agenda" className="btn btn--primary btn--lg">
                🌿 Prochaines balades
              </Link>
              <a
                href="https://www.helloasso.com/associations/1-2-3-cigognes/adhesions/adhesion-a-1-2-3-cigognes-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--vert btn--lg"
              >
                Adhérer
              </a>
              <a
                href="https://www.helloasso.com/associations/1-2-3-cigognes/formulaires/2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary btn--lg"
              >
                ❤️ Faire un don
              </a>
              <Link href="/contact" className="btn btn--outline btn--lg" style={{ color: 'var(--rose-poudre)', borderColor: 'var(--rose-poudre)' }}>
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
