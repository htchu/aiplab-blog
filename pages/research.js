import Layout from '../components/Layout';
import { useTranslation } from '../lib/i18n';
import styles from '../styles/Research.module.css';

export default function Research() {
  const { t } = useTranslation();
  const researchAreas = t('research.areas', { returnObjects: true });

  return (
    <Layout title={`AIPLab - ${t('nav.research')}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('research.title')}</h1>
        
        <section className={styles.overview}>
          <h2>{t('research.overview.title')}</h2>
          <p>{t('research.overview.content')}</p>
        </section>

        <section className={styles.areas}>
          <h2>{t('research.areasTitle')}</h2>
          <div className={styles.areasGrid}>
            {researchAreas.map((area, index) => (
              <div key={index} className={styles.areaCard}>
                <h3>{area.title}</h3>
                <p className={styles.description}>{area.description}</p>
                
                <div className={styles.subsection}>
                  <h4>{t('research.currentProjects')}</h4>
                  <ul className={styles.projectsList}>
                    {area.projects.map((project, projIndex) => (
                      <li key={projIndex}>{project}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.subsection}>
                  <h4>{t('research.keyTechniques')}</h4>
                  <div className={styles.techniques}>
                    {area.techniques.map((technique, techIndex) => (
                      <span key={techIndex} className={styles.technique}>
                        {technique}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.funding}>
                  <strong>{t('research.funding')}</strong> {area.funding}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>{t('research.facilities.title')}</h2>
          <div className={styles.facilities}>
            <div className={styles.facilityItem}>
              <h4>{t('research.facilities.equipment.title')}</h4>
              <p>{t('research.facilities.equipment.description')}</p>
            </div>
            <div className={styles.facilityItem}>
              <h4>{t('research.facilities.computational.title')}</h4>
              <p>{t('research.facilities.computational.description')}</p>
            </div>
            <div className={styles.facilityItem}>
              <h4>{t('research.facilities.tools.title')}</h4>
              <p>{t('research.facilities.tools.description')}</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>{t('research.collaborations.title')}</h2>
          <p>{t('research.collaborations.description')}</p>
          <div className={styles.collaborations}>
            <div className={styles.collaboration}>
              <h4>{t('research.collaborations.academic.title')}</h4>
              <p>{t('research.collaborations.academic.description')}</p>
            </div>
            <div className={styles.collaboration}>
              <h4>{t('research.collaborations.industry.title')}</h4>
              <p>{t('research.collaborations.industry.description')}</p>
            </div>
            <div className={styles.collaboration}>
              <h4>{t('research.collaborations.international.title')}</h4>
              <p>{t('research.collaborations.international.description')}</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}