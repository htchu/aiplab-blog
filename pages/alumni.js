import Layout from '../components/Layout';
import { useTranslation } from '../lib/i18n';
import styles from '../styles/Alumni.module.css';

export default function Alumni() {
  const { t } = useTranslation();
  
  const alumni = [
    {
      name: "曾信銘 (TSENG, HSIN-MING)",
      degree: "Ph.D. 2025",
      currentPosition: "人工智慧博士學位學程",
      thesis: "深度學習模型在光學檢測和品質控制的應用"
    },
    {
      name: "BAKKIREDDYGARI SAI SRAVANTHI",
      degree: "M.S. 2025",
      currentPosition: "資訊工程學系",
      thesis: "Enhanced Cell Tracking via YOLOv8 and an Adaptive Center-Point Matching Algorithm"
    },
    {
      name: "沈韋嘉 (SHEN, WEI-JIA)",
      degree: "M.S. 2024",
      currentPosition: "資訊工程學系",
      thesis: "應用深度學習模型分析老年人語音數據以預測衰弱症"
    },
    {
      name: "莊子賢 (JHUANG, ZIH-SIAN)",
      degree: "M.S. 2024",
      currentPosition: "資訊工程學系",
      thesis: "檢索增強生成(RAG)的評估-以基於LLM的汽車零件報價機器人為例"
    },
    {
      name: "賴霆 (LAI, TING)",
      degree: "M.S. 2023",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "病人預約門診的候診時間預測分析"
    },
    {
      name: "林町穗 (LIN, TINGSUI)",
      degree: "M.S. 2021",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "懷舊音樂APP的開發應用於輕度失智個案的先導性研究"
    },
    {
      name: "許龍哲 (XU, LONG-ZHE)",
      degree: "M.S. 2021",
      currentPosition: "資訊工程學系",
      thesis: "以計程車大數據為基礎之載客熱點預測平台之建置"
    },
    {
      name: "林子茹 (Lin Zih Ru)",
      degree: "M.S. 2021",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "物理治療臨床路徑的個案資訊管理之研究"
    },
    {
      name: "陳麒安 (CHEN, CHI-AN)",
      degree: "M.S. 2021",
      currentPosition: "資訊工程學系",
      thesis: "集成深度學習的自動光學檢測研究"
    },
    {
      name: "沈慧萍 (SHEN, HUI-PING)",
      degree: "M.S. 2021",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "幼兒食農教育的行動學習策略之行動研究"
    },
    {
      name: "胡黃世駿 (HU HUANG, SHIH-CHUN)",
      degree: "M.S. 2021",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "因材網應用在國小數學科自主學習的成效分析"
    },
    {
      name: "趙雪君 (CHAO, HSUEH-CHUN)",
      degree: "M.S. 2021",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "建構智慧客服問答知識庫之研究"
    },
    {
      name: "吳姿樺 (WU, TZY-HUA)",
      degree: "M.S. 2020",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "行動學習應用在國小英語教學設計之研究"
    },
    {
      name: "陳宛萱 (CHEN, WAN-SYUAN)",
      degree: "M.S. 2020",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "應用ASSURE模式設計躲避球運動的數位學習"
    },
    {
      name: "賴明男 (LAI, MING-NAN)",
      degree: "M.S. 2020",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "應用深度神經網路預測國中生之學業成就"
    },
    {
      name: "簡嘉德 (CHIEN, CHIA-TE)",
      degree: "M.S. 2020",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "應用ADDIE模型設計國中生運動訓練的數位學習教材"
    },
    {
      name: "張志隆 (CHANG CHIH-LUNG)",
      degree: "M.S. 2020",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "應用深度學習模型進行煙火影像分類之研究"
    },
    {
      name: "劉怡伶 (LIU, YI-LING)",
      degree: "M.S. 2019",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "行動學習策略應用在國小六年級成語教學之研究"
    },
    {
      name: "鄭育誠 (CHENG, EDWARD YU-CHENG)",
      degree: "M.S. 2019",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "應用TensorRT進行自動光學檢測的深度學習模型效能比較"
    },
    {
      name: "顏名儀 (YEN, MING-YI)",
      degree: "M.S. 2019",
      currentPosition: "生物資訊與醫學工程學系",
      thesis: "癌症轉錄組數據中ECI2異構體的定量分析"
    },
    {
      name: "蔡佳樺 (CAI, JIA-HUA)",
      degree: "M.S. 2019",
      currentPosition: "生物資訊與醫學工程學系",
      thesis: "以轉錄體定序資料分析可能的乳癌驅動基因"
    },
    {
      name: "吳嘉恩 (WU, JIA-EN)",
      degree: "M.S. 2019",
      currentPosition: "資訊工程學系",
      thesis: "利用生成對抗網路生成自動光學檢查之瑕疵影像資料"
    },
    {
      name: "呂嘉銘 (LU, CHIA-MING)",
      degree: "M.S. 2019",
      currentPosition: "資訊工程學系",
      thesis: "不同卷積神經網路應用在自動光學檢測的比較"
    },
    {
      name: "林宇智 (LIN, YOU-ZHI)",
      degree: "M.S. 2019",
      currentPosition: "資訊工程學系",
      thesis: "利用運動心電圖數據預測重大冠狀動脈疾病的機器學習分類算法比較"
    },
    {
      name: "簡宛廷 (Chien, Wan-Ting)",
      degree: "M.S. 2019",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "線上同儕互評應用在小學中年級閱讀心得的學習成效"
    },
    {
      name: "林玟妤 (LIN, WEN-YU)",
      degree: "M.S. 2017",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "利用健保資料庫分析臺灣智能障礙者罹患高血壓之相關性"
    },
    {
      name: "黃珮婷 (HUANG, PEI-TING)",
      degree: "M.S. 2016",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "應用BioDigital平台在暖身課程之研究"
    },
    {
      name: "王陵瑤 (WANG, LING-YAO)",
      degree: "M.S. 2016",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "應用數位學習平台在國中成語教學之研究"
    },
    {
      name: "林育萱 (Lin, Yu-Hsuan)",
      degree: "M.S. 2015",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "互動式多媒體App融入國小英語補教教學之研究"
    },
    {
      name: "蔣杏枝 (Hsing-Chih Chiang)",
      degree: "M.S. 2014",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "應用電子書的測驗功能提升國小低年級課外閱讀的學習"
    },
    {
      name: "莊玲瑜 (Ling-Yu Chuang)",
      degree: "M.S. 2014",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "結合磨課師的雲端學習-以小學三年級數學為例"
    },
    {
      name: "張秋萍 (Chiu-Ping Chang)",
      degree: "M.S. 2014",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "應用ZYGOTE BODY對國小六年級健康教育課程學習成效之研究"
    },
    {
      name: "陳瑞雯 (Chen, Rui-wen)",
      degree: "M.S. 2014",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "遊戲教學電子書融入數學教學之研究 -以國小二年級乘法為例"
    },
    {
      name: "張淑華 (Chang, Shu-Hua)",
      degree: "M.S. 2013",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "應用Google地球對國小二年級生活課程的學習成效研究"
    },
    {
      name: "蘇玲玉 (Su, Ling-Yu)",
      degree: "M.S. 2013",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "運用多媒體電子書對國小學生日記寫作之學習成效"
    },
    {
      name: "蔡維珊 (Tsai,Wei-Shan)",
      degree: "M.S. 2013",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "電子書融入國小低年級英語學習之研究"
    },
    {
      name: "王建智 (Wang, Chien-Chih)",
      degree: "M.S. 2013",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "雲端服務在國小高年級數學教育的應用評估"
    },
    {
      name: "蘇文茜 (Su Wen-Chien)",
      degree: "M.S. 2013",
      currentPosition: "資訊工程學系碩士在職專班",
      thesis: "3D虛擬實境應用於國小低年級防災教育的成效研究"
    },
    {
      name: "黃敦銘 (Huang,Tun-Ming)",
      degree: "M.S. 2012",
      currentPosition: "資訊工程學系碩士班",
      thesis: "台灣企業雲端服務的評估"
    },
    {
      name: "陳思叡 (Sin-Rnei Chen)",
      degree: "M.S. 2010",
      currentPosition: "資訊工程學系碩士班",
      thesis: "電子商務網站國際化方法之研究分析"
    },
    {
      name: "李東帆 (Tung-Fan Li)",
      degree: "M.S. 2009",
      currentPosition: "資訊工程學系碩士班",
      thesis: "服務導向架構(SOA)的病人安全資訊平台"
    },
    {
      name: "王維仁 (Wei-Ren Wang)",
      degree: "M.S. 2009",
      currentPosition: "資訊工程學系碩士班",
      thesis: "醫療事件管理平台的安全性設計"
    },
    {
      name: "莊玉如 (Yu-Ju Chuang)",
      degree: "M.S. 2008",
      currentPosition: "生物資訊學系碩士班",
      thesis: "肝癌疫苗的表位預測"
    },
    {
      name: "Fahri",
      degree: "M.S. 2007",
      currentPosition: "資訊工程學系碩士班",
      thesis: "設計耕地建構評估及管理的地理資訊系統"
    },
    {
      name: "林瑞堂 (lin jui tang)",
      degree: "M.S. 2005",
      currentPosition: "資訊工程學系碩士班",
      thesis: "問題導向的數位學習系統-以寬頻電信網路維修為例"
    },
    {
      name: "陳勇瑞 (Chen, Yung-Jui)",
      degree: "M.S. 2005",
      currentPosition: "生物資訊研究所",
      thesis: "禽流感病毒抑制劑之虛擬藥物篩選"
    },
    {
      name: "林宜親 (Yi-chin, Lin)",
      degree: "M.S. 2005",
      currentPosition: "生物資訊研究所",
      thesis: "初感風寒適用的中藥方劑分析"
    },
    {
      name: "朱富平 (Chu,Fu-Ping)",
      degree: "M.S. 2005",
      currentPosition: "資訊工程學系碩士班",
      thesis: "以自適應共振理論進行中草藥作用的自動化推論"
    },
    {
      name: "洪進興 (Chin-Hsing, Hung)",
      degree: "M.S. 2005",
      currentPosition: "資訊工程學系碩士班",
      thesis: "運用RSS機制之客服追蹤系統"
    },
    {
      name: "林宏陶 (Hung-Tao Lin)",
      degree: "M.S. 2005",
      currentPosition: "資訊科學與應用學系碩士班",
      thesis: "以智慧型手機建構行動圖書資訊系統"
    },
    {
      name: "黃麒昌 (Chir-Chang Huang)",
      degree: "M.S. 2005",
      currentPosition: "生物資訊研究所",
      thesis: "氣喘預警行動服務系統"
    },
    {
      name: "王俊仁 (Chun-Jean Wang)",
      degree: "M.S. 2005",
      currentPosition: "資訊工程學系碩士班",
      thesis: "以智慧型手機建構學生點名系統"
    }
  ];

  // Group alumni by graduation year
  const alumniByYear = alumni.reduce((acc, alum) => {
    const year = alum.degree.split(' ')[1];
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(alum);
    return acc;
  }, {});

  // Sort years in descending order
  const sortedYears = Object.keys(alumniByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <Layout title={`AIPLab - ${t('nav.alumni')}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('alumni.title')}</h1>
        
        <section className={styles.overview}>
          <p className={styles.description}>{t('alumni.description')}</p>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>59</span>
              <span className={styles.statLabel}>{t('alumni.totalGraduates')}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>1</span>
              <span className={styles.statLabel}>{t('alumni.phdGraduates')}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>58</span>
              <span className={styles.statLabel}>{t('alumni.mastersGraduates')}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>20</span>
              <span className={styles.statLabel}>{t('alumni.yearsSpan')}</span>
            </div>
          </div>
        </section>

        {sortedYears.map((year) => (
          <section key={year} className={styles.yearSection}>
            <h2 className={styles.yearTitle}>{year} {t('alumni.graduates')}</h2>
            <div className={styles.alumniGrid}>
              {alumniByYear[year].map((alum, index) => (
                <div key={index} className={styles.alumniCard}>
                  <h4 className={styles.alumniName}>{alum.name}</h4>
                  <p className={styles.alumniDegree}>{alum.degree}</p>
                  <p className={styles.alumniDepartment}>{alum.currentPosition}</p>
                  <p className={styles.alumniThesis}>
                    <strong>{t('alumni.thesis')}:</strong> {alum.thesis}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
}