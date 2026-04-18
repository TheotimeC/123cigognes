import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../mentions-legales/legal.module.css';

export const metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité du site de l\'association 1 2 3 Cigognes.',
};

export default function Confidentialite() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.legalPage}>
          <div className="container container--narrow">
            <h1>Politique de confidentialité</h1>

            <h2>Collecte de données</h2>
            <p>
              Le site de l&apos;association 1 2 3 Cigognes ne collecte aucune donnée personnelle
              de ses visiteurs. Aucun formulaire de contact, aucun cookie de suivi publicitaire,
              aucun outil d&apos;analyse comportementale n&apos;est utilisé.
            </p>

            <h2>Cookies</h2>
            <p>
              Ce site n&apos;utilise pas de cookies à des fins de traçage ou de publicité.
              Seuls des cookies techniques strictement nécessaires au fonctionnement du site
              peuvent être utilisés.
            </p>

            <h2>Liens vers des sites tiers</h2>
            <p>
              Le site contient des liens vers des plateformes tierces (HelloAsso, Facebook).
              Ces sites disposent de leurs propres politiques de confidentialité. Nous vous
              invitons à les consulter lors de votre visite sur ces plateformes.
            </p>

            <h2>Contact par email ou téléphone</h2>
            <p>
              Lorsque vous nous contactez par email ou par téléphone, les informations que
              vous nous communiquez (nom, adresse email, numéro de téléphone) sont utilisées
              uniquement pour répondre à votre demande. Elles ne sont ni stockées dans une
              base de données, ni transmises à des tiers.
            </p>

            <h2>Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD),
              vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression
              de vos données personnelles. Pour exercer ces droits, contactez-nous à :{' '}
              <a href="mailto:undeuxtroiscigognes@gmail.com">undeuxtroiscigognes@gmail.com</a>.
            </p>

            <h2>Mise à jour</h2>
            <p>
              Cette politique de confidentialité peut être mise à jour à tout moment.
              La date de dernière modification est indiquée ci-dessous.
            </p>
            <p><em>Dernière mise à jour : avril 2026</em></p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
