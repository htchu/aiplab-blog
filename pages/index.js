import Layout from '../components/Layout';
import { useTranslation } from '../lib/i18n';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <Layout title={`AIPLab - ${t('nav.home')}`}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>{t('home.title')}</h1>
            <p className={styles.subtitle}>
              {t('home.subtitle')}
            </p>
            <p className={styles.description}>
              {t('home.description')}
            </p>
          </div>
          <div className={styles.heroImage}>
            <img 
              src="https://csie.asia.edu.tw/uploads/member_profile/avatar/605071c3063ca28c7a0000ef/ju.jpg" 
              alt="Professor Hsueh-Ting Chu" 
              className={styles.professorPhoto}
            />
          </div>
        </div>
      </div>

      <section className={styles.highlights}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>{t('home.research.title')}</h3>
            <p>{t('home.research.description')}</p>
          </div>

          <div className={styles.card}>
            <h3>{t('home.publications.title')}</h3>
            <p>{t('home.publications.description')}</p>
          </div>

          <div className={styles.card}>
            <h3>{t('home.team.title')}</h3>
            <p>{t('home.team.description')}</p>
          </div>

          <div className={styles.card}>
            <h3>{t('home.opportunities.title')}</h3>
            <p>{t('home.opportunities.description')}</p>
          </div>
        </div>
      </section>

      <section className={styles.news}>
        <h2>{t('home.news.title')}</h2>
        <div className={styles.newsContent}>
          <div className={styles.newsText}>
            <div className={styles.newsItem}>
              <h4>{t('home.news.welcome.title')}</h4>
              <p>{t('home.news.welcome.content')}</p>
            </div>
          </div>
          <div className={styles.newsImage}>
            <img 
              src="/images/effort.jpg" 
              alt="AIPLab Research Effort" 
              className={styles.effortImage}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
