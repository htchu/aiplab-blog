import Layout from '../components/Layout';
import { useTranslation } from '../lib/i18n';
import styles from '../styles/About.module.css';

export default function About() {
  const { t } = useTranslation();
  
  return (
    <Layout title={`AIPLab - ${t('nav.about')}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('about.title')}</h1>
        
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h2>{t('about.overview.title')}</h2>
              <p>{t('about.overview.content1')}</p>
              <p>{t('about.overview.content2')}</p>
            </div>
            <div className={styles.heroImage}>
              <img 
                src="https://csie.asia.edu.tw/uploads/member_profile/avatar/605071c3063ca28c7a0000ef/ju.jpg" 
                alt="Professor Hsueh-Ting Chu" 
                className={styles.professorPhoto}
              />
              <div className={styles.photoCaption}>
                Professor Hsueh-Ting Chu<br />
                Principal Investigator
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>{t('about.philosophy.title')}</h2>
          <p>{t('about.philosophy.intro')}</p>
          <ul className={styles.list}>
            {t('about.philosophy.points', { returnObjects: true }).map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>{t('about.mission.title')}</h2>
          <p>{t('about.mission.content')}</p>
        </section>

        <section className={styles.section}>
          <h2>{t('about.facilities.title')}</h2>
          <p>{t('about.facilities.content')}</p>
        </section>
      </div>
    </Layout>
  );
}