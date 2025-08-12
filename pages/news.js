import Layout from '../components/Layout';
import styles from '../styles/News.module.css';

export default function News() {
  const newsItems = [
    {
      date: "2025-07-20",
      title: "Participation in ISMB/ECCB 2025",
      category: "Conference",
      content: "Prof. Chu and lab members will participate in the 33rd International Conference on Intelligent Systems for Molecular Biology (ISMB/ECCB 2025) in Liverpool, UK, July 20-24, 2025. This hybrid conference brings together researchers from bioinformatics, computational biology, and related fields to showcase the latest developments in the field.",
      tags: ["Conference", "ISMB", "Bioinformatics", "International"],
      image: "/images/ismb2025.jpg"
    },
    {
      date: "2025-07-16",
      title: "Paper Presentation at IEEE ICCE-TW 2025",
      category: "Conference",
      content: "Our research will be presented at the IEEE International Conference on Consumer Electronics – Taiwan (ICCE-TW) 2025 in Kaohsiung, Taiwan, July 16-18, 2025. This year's theme 'Generative AI in Innovative Consumer Technology' aligns perfectly with our research in AI applications.",
      tags: ["Conference", "IEEE", "Consumer Electronics", "AI", "Taiwan"],
      image: "/images/ICCE-TW2025.jpg"
    },
    {
      date: "2025-02-15",
      title: "BEST PAPER AWARD at IEEE ICEIB 2025",
      category: "Conference",
      content: "Our lab received the prestigious BEST PAPER AWARD at the IEEE International Conference on Electronics, Information, and Biotechnology (ICEIB) 2025. This recognition highlights the excellence of our research in the intersection of electronics and biotechnology and our contribution to the international research community.",
      tags: ["Conference", "IEEE", "Electronics", "Biotechnology", "Award", "Best Paper"],
      image: "/images/best.png"
    },
    {
      date: "2024-12-01",
      title: "Welcome New Lab Members",
      category: "People",
      content: "We are delighted to welcome Edward Cheng (鄭育誠) as a PhD candidate and Chen Sheng-Wei (陳聖瑋) as a Master's student to our research team. Edward brings extensive industry experience in AI and FinTech, while Sheng-Wei will focus on computer science research projects.",
      tags: ["Team", "New Members", "PhD", "Master's"]
    },
    {
      date: "2024-11-15",
      title: "Research Collaboration Expansion",
      category: "Collaboration",
      content: "Our laboratory has established new research collaborations with leading institutions including Simon Fraser University (Canada), National Taiwan University, and China Medical University Hospital. These partnerships will enhance our research capabilities in AI, bioinformatics, and medical informatics.",
      tags: ["Collaboration", "International", "Research", "Partnership"]
    }
  ];

  const upcomingEvents = [
    {
      date: "2025-12-11",
      title: "GIW XXXIV ISCB-Asia 2025",
      type: "International Conference",
      location: "University of Hong Kong, Hong Kong",
      time: "December 11-13, 2025",
      speaker: "Prof. Chu and Lab Members",
      url: "https://www.iscb.org/asia2025/home"
    },
    {
      date: "2025-07-20",
      title: "ISMB/ECCB 2025",
      type: "International Conference",
      location: "ACC Liverpool, UK (Hybrid)",
      time: "July 20-24, 2025",
      speaker: "Prof. Chu and Lab Members",
      url: "https://www.iscb.org/ismbeccb2025/home"
    },
    {
      date: "2025-07-16",
      title: "IEEE ICCE-TW 2025",
      type: "IEEE Conference",
      location: "Kaohsiung, Taiwan",
      time: "July 16-18, 2025",
      speaker: "Research Team",
      url: "https://www.icce-tw.org/index.html"
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <Layout title="AIPLab - News & Events">
      <div className={styles.container}>
        <h1 className={styles.title}>News & Events</h1>
        
        <div className={styles.content}>
          <section className={styles.newsSection}>
            <h2>Latest News</h2>
            <div className={styles.newsList}>
              {newsItems.map((item, index) => (
                <article key={index} className={styles.newsItem}>
                  <div className={styles.newsHeader}>
                    <div className={styles.newsDate}>{formatDate(item.date)}</div>
                    <div className={`${styles.category} ${styles[item.category.toLowerCase()]}`}>
                      {item.category}
                    </div>
                  </div>
                  <h3 className={styles.newsTitle}>{item.title}</h3>
                  {item.image && (
                    <div className={styles.newsImage}>
                      <img src={item.image} alt={item.title} className={styles.newsImg} />
                    </div>
                  )}
                  <p className={styles.newsContent}>{item.content}</p>
                  <div className={styles.tags}>
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className={styles.sidebar}>
            <section className={styles.eventsSection}>
              <h2>Upcoming Events</h2>
              <div className={styles.eventsList}>
                {upcomingEvents.map((event, index) => (
                  <div key={index} className={styles.event}>
                    <div className={styles.eventDate}>{formatDate(event.date)}</div>
                    <div className={styles.eventDetails}>
                      <h4 className={styles.eventTitle}>
                        {event.url ? (
                          <a href={event.url} target="_blank" rel="noopener noreferrer" className={styles.eventLink}>
                            {event.title}
                          </a>
                        ) : (
                          event.title
                        )}
                      </h4>
                      <div className={styles.eventMeta}>
                        <div className={styles.eventType}>{event.type}</div>
                        <div className={styles.eventTime}>{event.time}</div>
                        <div className={styles.eventLocation}>{event.location}</div>
                        {event.speaker && (
                          <div className={styles.eventSpeaker}>Speaker: {event.speaker}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.archiveSection}>
              <h3>News Archive</h3>
              <ul className={styles.archiveList}>
                <li><a href="#">2024</a></li>
                <li><a href="#">2023</a></li>
                <li><a href="#">2022</a></li>
                <li><a href="#">2021</a></li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </Layout>
  );
}