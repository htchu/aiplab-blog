import Layout from '../components/Layout';
import styles from '../styles/Publications.module.css';

export default function Publications() {
  const publications = [
    {
      year: 2025,
      papers: [
        {
          title: "Upcycling aquaculture waste for textile functional material to facilitate the creation of novel and sustainable jeans",
          authors: "Chi-Shih Huang, Erh-Jen Hou, Yun-Yu Hsieh, Ting-Wei Hsu, Tzong-Huei Lee, Yu-Ye Hou, Ying-Chou Lee, and Hsueh-Ting Chu",
          journal: "Journal of Engineered Fibers and Fabrics",
          volume: "20",
          pages: "1–8",
          type: "Journal Article",
          impact: "SCI; IF=2.2"
        },
        {
          title: "A study of the application of Vision Language Models for shoe industry",
          authors: "Hsin-Ming Tseng, Hsueh-Ting Chu",
          journal: "2025 IEEE 5th International Conference on Electronic Communications, Internet of Things and Big Data, ICEIB 2025",
          type: "Conference Paper"
        }
      ]
    },
    {
      year: 2024,
      papers: [
        {
          title: "Tongue feature dataset construction and realtime detection",
          authors: "Wen-Hsien Chang, Chih-Chieh Chen, Han-Kuei Wu, Po-Chi Hsu, LunChien Lo, Hsueh-Ting Chu, Hen-Hong Chang",
          journal: "PLOS ONE",
          volume: "19(3)",
          pages: "e0296070",
          type: "Journal Article",
          impact: "SCI; IF=2.9"
        },
        {
          title: "Edge AI-Driven Video Analytics: A Mobile Deep Learning Framework for Victim Detection in SAR Robotics",
          authors: "M. Ihsan, K. Trinanda Putra, M. Yusvin Mustar, A. Faiz Setyawan, Hsueh-Ting Chu, H. -C. Chen",
          journal: "2024 FORTEI-International Conference on Electrical Engineering (FORTEI-ICEE)",
          type: "Conference Paper"
        },
        {
          title: "An 8-bit Quantized Globalization Model for Cat Skin Disease Detection Using Convolutional Neural Networks and TensorFlow Lite",
          authors: "K. Trinanda Putra, H. Zidni, R. Turrizka, Hsueh-Ting Chu, D. -T. Vu and Prayitno",
          journal: "2024 International Conference on Information Technology and Computing (ICITCOM)",
          type: "Conference Paper"
        }
      ]
    },
    {
      year: 2022,
      papers: [
        {
          title: "Does Weekends Effect Exist in Asia? Analysis of Endovascular Thrombectomy for Acute Ischemic Stroke in A Medical Center",
          authors: "Chia-Wei Lin, Hung-Yu Huang, Jeng-Hung Guo, Wei-Laing Chen, Hong-Mo Shih, Hsueh-Ting Chu, Charles C N Wang, Tai-Yi Hsu",
          journal: "Current Neurovascular Research",
          volume: "19(2)",
          pages: "225-231",
          type: "Journal Article",
          impact: "SCI; IF=2.0"
        },
        {
          title: "Using the concept of circular economy to reduce the environmental impact of COVID-19 face mask waste",
          authors: "Erh-Jen Hou, Yun-Yu Hsieh, Ting-Wei Hsu, Chi-Shih Huang, Ying-Chou Lee, Yu-San Han, Hsueh-Ting Chu",
          journal: "Sustainable Materials and Technologies",
          volume: "33",
          pages: "e00475",
          type: "Journal Article",
          impact: "SCI; IF=8.7"
        },
        {
          title: "A method for the process of collagen modified polyester from fish scales waste",
          authors: "Erh-Jen Hou, Chi-Shih Huang, Ying-Chou Lee, Yu-San Han, Hsueh-Ting Chu",
          journal: "MethodsX",
          volume: "9",
          pages: "101636",
          type: "Journal Article",
          impact: "Scopus"
        },
        {
          title: "Upcycled aquaculture waste as textile ingredient for promoting circular economy",
          authors: "Erh-Jen Hou, Yun-Yu Hsieh, Ting-Wei Hsu, Chi-Shih Huang, Ying-Chou Lee, Yu-San Han, Hsueh-Ting Chu",
          journal: "Sustainable Materials and Technologies",
          volume: "31",
          pages: "e00336",
          type: "Journal Article",
          impact: "SCI; IF=8.7"
        }
      ]
    },
    {
      year: 2021,
      papers: [
        {
          title: "A system for reporting and evaluating adverse drug reactions of herbal medicine in Taiwan from 1998 to 2016",
          authors: "Hen-Hong Chang, Su-Yin Chiang, Pei-Chun Chen, Chia-Han Tsai, Rong-Chi Yang, Chiu-Lin Tsai, Tsung-hsiu Wu, Yow-Wen Hsieh, Yu-Chun Lin, Yung-Te Kuo, Kuan-Chung Chen & Hsueh-Ting Chu",
          journal: "Scientific Reports",
          volume: "11",
          pages: "21476",
          type: "Journal Article",
          impact: "SCI; IF=3.8"
        },
        {
          title: "Action research on Mobile Learning Strategies for Children's Food and Agriculture Education",
          authors: "Hui-Ping Shen, Hsueh-Ting Chu, Bo-Ling Chen",
          journal: "The 2021 Inter-Ministerial National Conference on School Lunch",
          type: "Conference Paper"
        },
        {
          title: "Fireworks Image Classification with Deep Learning",
          authors: "Chih-Lung Chang, Hsin-Ming Tseng, Hsueh-Ting Chu",
          journal: "The 2021 Conference on Technologies and Applications of Artificial Intelligence, TAAI 2021",
          type: "Conference Paper"
        }
      ]
    },
    {
      year: 2019,
      papers: [
        {
          title: "High-Performance Computing for Measurement of Cancer Gene Signatures",
          authors: "Hsueh-Ting Chu",
          journal: "Cancer Gene Profiling: Methods and Protocols",
          doi: "10.1142/9789811203589_0007",
          type: "Book Chapter"
        },
        {
          title: "Talent Education for Deep Learning-based Automated Optical Inspection",
          authors: "Hsueh-Ting Chu, Cheng-Yuan Ho",
          journal: "The 2019 Conference on Technologies and Applications of Artificial Intelligence, TAAI 2019",
          type: "Conference Paper"
        }
      ]
    },
    {
      year: 2018,
      papers: [
        {
          title: "Analysis of Exercise-Induced Periodic Breathing Using an Autoregressive Model and the Hilbert-Huang Transform",
          authors: "Tieh-Cheng Fu, Chaur-Chin Chen, Ching-Mao Chang, Hen-Hong Chang, Hsueh-Ting Chu",
          journal: "Computational and Mathematical Methods in Medicine",
          volume: "2018",
          type: "Journal Article",
          impact: "SCI; IF=2.8"
        },
        {
          title: "Tongue Fissure Visualization with Deep Learning",
          authors: "Wen-Hsien Chang, Hsueh-Ting Chu, Hen-Hong Chang",
          journal: "The 2018 Conference on Technologies and Applications of Artificial Intelligence, TAAI 2018",
          type: "Conference Paper"
        }
      ]
    }
  ];

  // Note: This is a subset of Prof. Chu's publications from 2018-2025
  // The complete publication list includes 24+ journal papers, 60+ conference papers, and 2 book chapters from 1999-2025
  const stats = {
    totalPublications: "85+", // Based on complete publication list
    journalArticles: "24+",
    conferenceProceedings: "60+",
    bookChapters: "2"
  };

  return (
    <Layout title="AIPLab - Publications">
      <div className={styles.container}>
        <h1 className={styles.title}>Publications</h1>
        
        <section className={styles.stats}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{stats.totalPublications}</div>
            <div className={styles.statLabel}>Total Publications</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{stats.journalArticles}</div>
            <div className={styles.statLabel}>Journal Articles</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{stats.conferenceProceedings}</div>
            <div className={styles.statLabel}>Conference Papers</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{stats.bookChapters}</div>
            <div className={styles.statLabel}>Book Chapters</div>
          </div>
        </section>

        <section className={styles.publicationsSection}>
          <h2>Recent Publications</h2>
          {publications.map((yearData, yearIndex) => (
            <div key={yearIndex} className={styles.yearSection}>
              <h3 className={styles.year}>{yearData.year}</h3>
              <div className={styles.papersList}>
                {yearData.papers.map((paper, paperIndex) => (
                  <div key={paperIndex} className={styles.paper}>
                    <div className={styles.paperType}>{paper.type}</div>
                    <h4 className={styles.paperTitle}>{paper.title}</h4>
                    <p className={styles.authors}>{paper.authors}</p>
                    <div className={styles.journalInfo}>
                      <span className={styles.journal}>{paper.journal}</span>
                      {paper.volume && <span className={styles.volume}>, {paper.volume}</span>}
                      {paper.pages && <span className={styles.pages}>, {paper.pages}</span>}
                    </div>
                    {paper.doi && (
                      <div className={styles.doi}>
                        DOI: <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">
                          {paper.doi}
                        </a>
                      </div>
                    )}
                    {paper.impact && (
                      <div className={styles.impact}>
                        Impact: {paper.impact}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2>Research Areas</h2>
          <div className={styles.metrics}>
            <div className={styles.metric}>
              <h4>Bioinformatics & Genomics</h4>
              <p>RNA-Seq analysis, genome sequencing, computational biology, and genomic data processing with publications in high-impact journals like PLoS ONE and Scientific Reports.</p>
            </div>
            <div className={styles.metric}>
              <h4>Artificial Intelligence & Deep Learning</h4>
              <p>Machine learning applications in bioinformatics, computer vision, medical image analysis, and educational technology with focus on practical AI implementations.</p>
            </div>
            <div className={styles.metric}>
              <h4>Medical Informatics & Digital Health</h4>
              <p>Healthcare data analysis, medical imaging processing, clinical decision support systems, and integration of AI in medical applications.</p>
            </div>
            <div className={styles.metric}>
              <h4>Sustainable Materials & Circular Economy</h4>
              <p>Research on upcycling aquaculture waste, COVID-19 mask waste processing, and sustainable textile materials with high-impact publications (IF up to 8.7).</p>
            </div>
            <div className={styles.metric}>
              <h4>Cloud Services & Educational Technology</h4>
              <p>Development of cloud-based platforms for education, e-learning systems, and technology-enhanced learning environments.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Open Access & Preprints</h2>
          <p>
            We are committed to open science and making our research accessible to the broader community. 
            Many of our publications are available through open access journals, and we regularly share 
            preprints through repositories such as arXiv, bioRxiv, or other relevant platforms.
          </p>
        </section>
      </div>
    </Layout>
  );
}