import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from '../lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import styles from '../styles/Layout.module.css';

export default function Layout({ children, title = "AIPLab" }) {
  const { t, currentLanguage } = useTranslation();
  const isRTL = currentLanguage === 'ar';
  
  return (
    <div className={`${styles.container} ${isRTL ? styles.rtl : ''}`} dir={isRTL ? 'rtl' : 'ltr'} lang={currentLanguage}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Professor Hsueh-Ting Chu's Research Lab - Department of Computer Science and Information Engineering, Providence University" />
        <meta name="language" content={currentLanguage} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <h1>AIPLab</h1>
            <p>Professor Hsueh-Ting Chu</p>
          </Link>
          <nav className={styles.nav}>
            <Link href="/about">{t('nav.about')}</Link>
            <Link href="/people">{t('nav.people')}</Link>
            <Link href="/alumni">{t('nav.alumni')}</Link>
            <Link href="/research">{t('nav.research')}</Link>
            <Link href="/publications">{t('nav.publications')}</Link>
            <Link href="/news">{t('nav.news')}</Link>
            <Link href="/contact">{t('nav.contact')}</Link>
          </nav>
          <LanguageSwitcher />
        </div>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>{t('footer.copyright')}</p>
      </footer>
    </div>
  );
}