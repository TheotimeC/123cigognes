import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './legal.module.css';

export const metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site de l\'association 1 2 3 Cigognes.',
};

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.legalPage}>
          <div className="container container--narrow">
            <h1>Mentions légales</h1>

            <h2>Éditeur du site</h2>
            <p>
              <strong>Association 1 2 3 Cigognes</strong><br />
              Association loi 1901<br />
              Siège social : Haguenau, Alsace, France<br />
              Email : <a href="mailto:undeuxtroiscigognes@gmail.com">undeuxtroiscigognes@gmail.com</a><br />
              Téléphone : <a href="tel:+33695947907">06 95 94 79 07</a>
            </p>

            <h2>Directrice de la publication</h2>
            <p>Emmanuelle Colinet, Présidente de l&apos;association 1 2 3 Cigognes.</p>

            <h2>Hébergement</h2>
            <p>
              Le site est hébergé par :<br />
              <em>[À compléter — nom, adresse et coordonnées de l&apos;hébergeur]</em>
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu du site (textes, images, logo, vidéos) est la propriété
              de l&apos;association 1 2 3 Cigognes ou de ses partenaires, sauf mention contraire.
              Toute reproduction, même partielle, est interdite sans autorisation préalable.
            </p>

            <h2>Crédits photographiques</h2>
            <p>
              Photos : Association 1 2 3 Cigognes, presse locale (DNA, Maxi Flash).<br />
              Les articles de presse reproduits le sont à titre informatif et dans le respect
              du droit de courte citation.
            </p>

            <h2>Responsabilité</h2>
            <p>
              L&apos;association s&apos;efforce de fournir des informations exactes et à jour.
              Toutefois, elle ne saurait être tenue responsable d&apos;erreurs, d&apos;omissions
              ou de l&apos;indisponibilité temporaire du site.
            </p>

            <h2>Liens externes</h2>
            <p>
              Le site peut contenir des liens vers des sites tiers (HelloAsso, Facebook).
              L&apos;association ne saurait être responsable du contenu de ces sites.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
