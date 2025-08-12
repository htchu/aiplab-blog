import Layout from '../components/Layout';
import { useTranslation } from '../lib/i18n';
import styles from '../styles/People.module.css';

export default function People() {
  const { t } = useTranslation();
  const people = [
    {
      name: "Prof. Hsueh-Ting Chu",
      title: "Associate Professor & Principal Investigator",
      education: {
        phd: "Ph.D. in Computer Science, National Tsing Hua University (1997-2002)",
        ms: "M.S. in Computer Science, National Tsing Hua University (1995-1997)", 
        bs: "B.S. in Computer Science, Tunghai University (1987-1991)"
      },
      experience: [
        {
          position: "Associate Professor & Vice Department Chair",
          institution: "Department of Computer Science and Information Engineering, Providence University",
          period: "November 2024 - Present"
        },
        {
          position: "Department Chair",
          institution: "Department of Computer Science and Information Engineering, Asia University", 
          period: "August 2023 - October 2024"
        },
        {
          position: "Group Leader",
          institution: "AI Research Center, Asia University",
          period: "August 2018 - July 2023"
        },
        {
          position: "Associate Professor",
          institution: "Department of Computer Science and Information Engineering, Asia University",
          period: "August 2014 - July 2024"
        },
        {
          position: "Assistant Professor", 
          institution: "Department of Computer Science and Information Engineering, Asia University",
          period: "August 2003 - July 2014"
        },
        {
          position: "Director",
          institution: "Medical Information Center, Cathay General Hospital",
          period: "June 2007 - July 2008"
        },
        {
          position: "Research Committee Member",
          institution: "Kaohsiung City Government Research, Development and Evaluation Commission",
          period: "January 2015 - December 2016"
        }
      ],
      research: "Research interests include Bioinformatics, Artificial Intelligence, Deep Learning, Medical Informatics, Genomics, Cloud Services, and Educational Technology. Professor Chu has been leading innovative research in computational biology and AI applications.",
      email: "htchu2@pu.edu.tw",
      photo: "https://csie.asia.edu.tw/uploads/member_profile/avatar/605071c3063ca28c7a0000ef/ju.jpg"
    },
    {
      name: "KAI CHEN YANG (楊凱辰)",
      title: "Ph.D. Student",
      education: "Ph.D. Student in Computer Science",
      research: "Current Ph.D. student working under the supervision of Prof. Chu.",
      email: "amulet.yang@gmail.com",
      photo: "/images/KAEL_YANG.jpg"
    },
    {
      name: "Edward Cheng (鄭育誠)",
      title: "Ph.D. Candidate in AI",
      education: "Ph.D. Candidate in Artificial Intelligence, Asia University",
      research: "Research focus on Application of LLM Agents for Emergent Decision Intelligence in Adaptive Quantitative Trading. Expert in AI/ML with 25+ years of experience in FinTech, Deep Learning, and Structured Products Analysis. Has published multiple papers on LLM-based Multi-Agent Systems and AI applications in financial trading.",
      email: "idmedward@gmail.com"
    },
    {
      name: "陳聖瑋 (Chen Sheng-Wei)",
      title: "Master's Student",
      education: "B.S. in Computer Science",
      research: "Master's student working on research projects under the supervision of Prof. Chu.",
      email: "A0983076206@gmail.com"
    }
  ];


  return (
    <Layout title={`AIPLab - ${t('nav.people')}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('people.title')}</h1>
        
        <section className={styles.section}>
          <h2>{t('people.currentMembers')}</h2>
          <div className={styles.peopleGrid}>
            {people.map((person, index) => (
              <div key={index} className={styles.personCard}>
                {person.photo && (
                  <div className={styles.personPhoto}>
                    <img src={person.photo} alt={person.name} className={styles.photo} />
                  </div>
                )}
                <div className={styles.personInfo}>
                  <h3>{person.name}</h3>
                  <p className={styles.title}>{person.title}</p>
                  
                  {person.education && typeof person.education === 'object' ? (
                    <div className={styles.education}>
                      <strong>Education:</strong>
                      <ul className={styles.educationList}>
                        <li>{person.education.phd}</li>
                        <li>{person.education.ms}</li>
                        <li>{person.education.bs}</li>
                      </ul>
                    </div>
                  ) : (
                    <p className={styles.education}>{person.education}</p>
                  )}
                  
                  {person.experience && (
                    <div className={styles.experience}>
                      <strong>Professional Experience:</strong>
                      <ul className={styles.experienceList}>
                        {person.experience.map((exp, expIndex) => (
                          <li key={expIndex} className={styles.experienceItem}>
                            <div className={styles.expPosition}>{exp.position}</div>
                            <div className={styles.expInstitution}>{exp.institution}</div>
                            <div className={styles.expPeriod}>{exp.period}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <p className={styles.research}>{person.research}</p>
                  <p className={styles.email}>
                    <strong>Email:</strong> <a href={`mailto:${person.email}`}>{person.email}</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className={styles.section}>
          <h2>{t('people.collaborators')}</h2>
          <p>{t('people.collaboratorsDescription')}</p>
          <div className={styles.collaboratorsGrid}>
            <div className={styles.collaboratorCard}>
              <div className={styles.collaboratorInfo}>
                <h4>Dr. William Hsiao</h4>
                <p className={styles.collaboratorTitle}>Associate Professor, MSHRBC Scholar</p>
                <p className={styles.collaboratorInstitution}>
                  Faculty of Health Sciences<br />
                  Simon Fraser University, Canada
                </p>
                <div className={styles.collaboratorResearch}>
                  <strong>Research Areas:</strong>
                  <ul>
                    <li>Bioinformatics</li>
                    <li>Health Informatics</li>
                    <li>Public Health Infectious Disease Genomics</li>
                    <li>One Health Genomics</li>
                  </ul>
                </div>
                <div className={styles.collaboratorRoles}>
                  <strong>Key Roles:</strong>
                  <ul>
                    <li>PI - Centre for Infectious Disease Genomics and One Health</li>
                    <li>Co-lead - IRIDA Consortium</li>
                    <li>Affiliated Scientist - BC Centre for Disease Control</li>
                    <li>Affiliated Scientist - Michael Smith Genome Sciences Centre</li>
                  </ul>
                </div>
                <p className={styles.collaboratorFocus}>
                  <strong>Collaboration Focus:</strong> Joint research in bioinformatics, genomics data analysis, 
                  and public health applications using computational biology approaches.
                </p>
              </div>
            </div>
            
            <div className={styles.collaboratorCard}>
              <div className={styles.collaboratorInfo}>
                <h4>Prof. Chen Jen-Chih (陳仁治)</h4>
                <p className={styles.collaboratorTitle}>Associate Professor</p>
                <p className={styles.collaboratorInstitution}>
                  Institute of Biotechnology<br />
                  National Taiwan University, Taiwan
                </p>
                <div className={styles.collaboratorResearch}>
                  <strong>Research Areas:</strong>
                  <ul>
                    <li>Plant Defense Mechanisms</li>
                    <li>Molecular Biology</li>
                    <li>Bioenergy Research</li>
                    <li>Virus-induced Gene Silencing</li>
                  </ul>
                </div>
                <p className={styles.collaboratorFocus}>
                  <strong>Collaboration Focus:</strong> Joint research in plant molecular biology, biotechnology applications, 
                  and bioenergy development using computational and molecular approaches.
                </p>
              </div>
            </div>
            
            <div className={styles.collaboratorCard}>
              <div className={styles.collaboratorInfo}>
                <h4>Dr. Liu Ang-Run (劉昂潤)</h4>
                <p className={styles.collaboratorTitle}>Attending Physician</p>
                <p className={styles.collaboratorInstitution}>
                  Traditional Chinese Medicine Department<br />
                  Taiwan National Hospital, Taiwan
                </p>
                <div className={styles.collaboratorResearch}>
                  <strong>Medical Specialties:</strong>
                  <ul>
                    <li>Women's Health & Menopause</li>
                    <li>Pain Management & Neuralgia</li>
                    <li>Chronic Disease Treatment</li>
                    <li>Oncology Support Care</li>
                    <li>Pediatric Allergies & Development</li>
                  </ul>
                </div>
                <p className={styles.collaboratorFocus}>
                  <strong>Collaboration Focus:</strong> Integration of traditional Chinese medicine with modern medical informatics 
                  for personalized healthcare solutions and clinical decision support systems.
                </p>
              </div>
            </div>
            
            <div className={styles.collaboratorCard}>
              <div className={styles.collaboratorInfo}>
                <h4>Dr. Lin Yu-Chun (林幼淳)</h4>
                <p className={styles.collaboratorTitle}>Attending Physician</p>
                <p className={styles.collaboratorInstitution}>
                  Traditional Chinese Medicine Internal Medicine<br />
                  China Medical University Hospital, Taiwan
                </p>
                <div className={styles.collaboratorResearch}>
                  <strong>Medical Specialties:</strong>
                  <ul>
                    <li>Geriatric Medicine</li>
                    <li>Metabolic Diseases</li>
                    <li>Frailty & Muscle Loss</li>
                    <li>Sleep Disorders</li>
                    <li>Traditional Chinese Medicine Diagnostics</li>
                  </ul>
                </div>
                <div className={styles.collaboratorRoles}>
                  <strong>Professional Roles:</strong>
                  <ul>
                    <li>Board Member - Taiwan Traditional Chinese Family Medicine Association</li>
                    <li>Specialist - Chinese Internal Medicine Medical Association</li>
                    <li>Specialist - Osteoporosis Association of Republic of China</li>
                  </ul>
                </div>
                <p className={styles.collaboratorFocus}>
                  <strong>Collaboration Focus:</strong> Development of AI-driven diagnostic tools for traditional Chinese medicine 
                  and integration of TCM practices with modern healthcare informatics.
                </p>
              </div>
            </div>
            
            <div className={styles.collaboratorCard}>
              <div className={styles.collaboratorInfo}>
                <h4>Dr. Ching-Mao Chang (張清貿)</h4>
                <p className={styles.collaboratorTitle}>Director & Assistant Professor</p>
                <p className={styles.collaboratorInstitution}>
                  Division of Integrative Medicine, Taipei Veterans General Hospital<br />
                  Institute of Traditional Medicine, National Yang Ming Chiao Tung University, Taiwan
                </p>
                <div className={styles.collaboratorResearch}>
                  <strong>Medical Specialties:</strong>
                  <ul>
                    <li>Autoimmune Rheumatic Diseases</li>
                    <li>Sjögren's Syndrome</li>
                    <li>Systemic Lupus Erythematosus</li>
                    <li>Dry Eye Syndrome</li>
                    <li>Integrative Medicine</li>
                  </ul>
                </div>
                <div className={styles.collaboratorRoles}>
                  <strong>Professional Roles:</strong>
                  <ul>
                    <li>Associate Editor - Frontiers in Medicine, Rheumatology</li>
                    <li>Ph.D. in Clinical Medicine (Traditional Chinese Medicine)</li>
                    <li>Specialist in TCM Allergy, Immunology, Rheumatology</li>
                  </ul>
                </div>
                <p className={styles.collaboratorFocus}>
                  <strong>Collaboration Focus:</strong> Clinical trials in traditional Chinese medicine, autoimmune disease research, 
                  and development of integrative medical approaches combining TCM with modern medical practices.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}