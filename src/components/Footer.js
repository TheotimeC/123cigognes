import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="site-footer">
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z" fill="var(--prune)" />
        </svg>
      </div>
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Col 1 — Logo & Signature */}
            <div className={styles.col}>
              <Link href="/" className={styles.logoLink}>
                <Image
                  src="/img/LOGO sans fond.png"
                  alt="Logo 1 2 3 Cigognes"
                  width={72}
                  height={72}
                />
              </Link>
              <p className={styles.signature}>
                Un pas après l&apos;autre dans la lutte contre le cancer.
              </p>
              <div className={styles.award}>
                <span className={styles.awardIcon}>🏆</span>
                <span>Prix de l&apos;Engagement Associatif 2025</span>
              </div>
            </div>

            {/* Col 2 — Navigation */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Navigation</h4>
              <ul className={styles.linkList}>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/agenda">Agenda des balades</Link></li>
                <li><Link href="/a-propos">À propos</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Col 3 — Contact */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Contact</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href="mailto:undeuxtroiscigognes@gmail.com">
                    ✉️ undeuxtroiscigognes@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+33695947907">
                    📞 06 95 94 79 07
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4 — Suivez-nous & Soutenir */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Suivez-nous</h4>
              <div className={styles.socialLinks}>
                <a
                  href="https://www.facebook.com/p/123-Cigognes-100093365425948/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Facebook
                </a>
                <a
                  href="https://www.helloasso.com/associations/1-2-3-cigognes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label="HelloAsso"
                >
                  ❤️ HelloAsso
                </a>
              </div>
              <div className={styles.supportLinks}>
                <a
                  href="https://www.helloasso.com/associations/1-2-3-cigognes/adhesions/adhesion-a-1-2-3-cigognes-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn--outline btn--sm ${styles.supportBtn}`}
                >
                  Adhérer
                </a>
                <a
                  href="https://www.helloasso.com/associations/1-2-3-cigognes/formulaires/2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn--outline btn--sm ${styles.supportBtn}`}
                >
                  Faire un don
                </a>
              </div>
            </div>
          </div>

          {/* Partner */}
          <div className={styles.partner}>
            <span className={styles.partnerLabel}>En partenariat avec</span>
            <Image
              src="/img/Logo Haguenauvienne 2026 (1).jpg"
              alt="La Haguenauvienne — Bien-être et cancer du sein"
              width={160}
              height={48}
              className={styles.partnerLogo}
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p>© {new Date().getFullYear()} 1 2 3 Cigognes. Tous droits réservés.</p>
            <div className={styles.legalLinks}>
              <Link href="/mentions-legales">Mentions légales</Link>
              <Link href="/confidentialite">Politique de confidentialité</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
