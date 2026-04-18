'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/agenda', label: 'Agenda' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      id="site-header"
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Accueil 1 2 3 Cigognes">
          <Image
            src="/img/LOGO sans fond.png"
            alt="Logo 1 2 3 Cigognes — cigogne blanche devant un paysage de montagne en teintes roses"
            width={52}
            height={52}
            priority
          />
          <span className={styles.logoText}>
            1.2.3 <span>Cigognes</span>
          </span>
        </Link>

        <nav className={`${styles.nav} ${isMobileOpen ? styles.navOpen : ''}`} id="main-nav">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/agenda" className={`btn btn--primary btn--sm ${styles.navCta}`}>
            🌿 Prochaines balades
          </Link>
          {/* Mobile extra links */}
          <div className={styles.mobileExtra}>
            <Link href="/contact" className={`btn btn--outline btn--sm`}>
              Nous contacter
            </Link>
            <div className={styles.mobileSocial}>
              <a
                href="https://www.facebook.com/p/123-Cigognes-100093365425948/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href="https://www.helloasso.com/associations/1-2-3-cigognes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HelloAsso"
              >
                HelloAsso
              </a>
            </div>
          </div>
        </nav>

        <Link href="/agenda" className={`btn btn--primary btn--sm ${styles.desktopCta}`}>
          🌿 Prochaines balades
        </Link>

        <button
          className={`${styles.burger} ${isMobileOpen ? styles.burgerOpen : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-controls="main-nav"
          aria-label="Menu de navigation"
          id="menu-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
