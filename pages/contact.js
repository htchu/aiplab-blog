import Layout from '../components/Layout';
import { useTranslation } from '../lib/i18n';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const { t } = useTranslation();
  
  return (
    <Layout title={`AIPLab - ${t('nav.contact')}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('contact.title')}</h1>
        
        <div className={styles.contactGrid}>
          <section className={styles.primaryContact}>
            <div className={styles.contactCard}>
              <h2>Assoc. Prof. Hsueh-Ting Chu</h2>
              <p className={styles.title}>{t('contact.professor.title')}</p>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <strong>{t('contact.professor.email')}</strong>
                  <a href="mailto:htchu2@pu.edu.tw">htchu2@pu.edu.tw</a>
                </div>
                
                <div className={styles.contactItem}>
                  <strong>{t('contact.professor.office')}</strong>
                  <span>主顧樓584室 (Providence Hall, Room 584)</span>
                </div>
                
                <div className={styles.contactItem}>
                  <strong>{t('contact.professor.officeHours')}</strong>
                  <span>週一至週五下午1:00-5:00 或預約<br/>Monday-Friday 1:00-5:00 PM or by appointment</span>
                </div>
              </div>
              
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>
                  <span>ORCID</span>
                </a>
                <a href="#" className={styles.socialLink}>
                  <span>Google Scholar</span>
                </a>
                <a href="#" className={styles.socialLink}>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </section>

          <section className={styles.labContact}>
            <div className={styles.contactCard}>
              <h3>{t('contact.lab.title')}</h3>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <strong>{t('contact.lab.location')}</strong>
                  <span>Providence Hall, Room 501</span>
                </div>
                
                <div className={styles.contactItem}>
                  <strong>{t('contact.lab.department')}</strong>
                  <span>Department of Computer Science and Information Engineering</span>
                </div>
                
                <div className={styles.contactItem}>
                  <strong>{t('contact.lab.institution')}</strong>
                  <span>Providence University (靜宜大學)</span>
                </div>
                
                <div className={styles.contactItem}>
                  <strong>Department Phone:</strong>
                  <a href="tel:+886-4-26328001">04-26328001 ext. 18021-18025</a>
                </div>
                
                <div className={styles.contactItem}>
                  <strong>Department Email:</strong>
                  <a href="mailto:pu20720@pu.edu.tw">pu20720@pu.edu.tw</a>
                </div>
                
                <div className={styles.contactItem}>
                  <strong>{t('contact.lab.mailingAddress')}</strong>
                  <span>
                    Department of Computer Science and Information Engineering<br />
                    Providence University<br />
                    No. 200, Sec. 7, Taiwan Boulevard, Shalu District<br />
                    Taichung 43301, Taiwan<br />
                    R.O.C.
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className={styles.mapSection}>
          <h2>Location</h2>
          <div className={styles.mapContainer}>
            <div className={styles.locationImage}>
              <img src="/images/ProvidenceHall.jpg" alt="Providence Hall" className={styles.locationImg} />
            </div>
            <div className={styles.mapPlaceholder}>
              <p>Providence University Campus</p>
              <p>Providence Hall - Room 501</p>
              <p>Taichung, Taiwan</p>
            </div>
          </div>
          
          <div className={styles.directions}>
            <h3>Directions</h3>
            <div className={styles.directionsGrid}>
              <div className={styles.directionCard}>
                <h4>Address</h4>
                <p>
                  No. 200, Sec. 7, Taiwan Boulevard, Shalu District, Taichung 43301, Taiwan
                </p>
              </div>
              <div className={styles.directionCard}>
                <h4>Department Office Hours</h4>
                <p>
                  Monday - Friday: 8:00 AM - 5:00 PM<br/>
                  Location: Providence Hall, Room 501
                </p>
              </div>
              <div className={styles.directionCard}>
                <h4>Contact</h4>
                <p>
                  Phone: 04-26328001 ext. 18021-18025<br/>
                  Fax: 04-26530042<br/>
                  Email: pu20720@pu.edu.tw
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.opportunitiesSection}>
          <h2>Opportunities</h2>
          <p>
            We welcome applications from motivated individuals who are passionate about research 
            and interested in contributing to our scientific mission. Our laboratory provides 
            an inclusive and supportive environment for professional and academic growth.
          </p>
          
          <div className={styles.positionsList}>
            <div className={styles.positionCard}>
              <h3>Graduate Research Assistant (Ph.D.)</h3>
              <div className={styles.positionMeta}>
                <span className={styles.positionType}>PhD</span>
                <span className={styles.positionStatus}>Open</span>
              </div>
              <p>
                We are recruiting motivated Ph.D. students interested in pursuing research in 
                AI, deep learning, bioinformatics, and medical informatics. Successful candidates 
                will work on cutting-edge projects.
              </p>
              <div className={styles.requirements}>
                <strong>Requirements:</strong>
                <ul>
                  <li>Bachelor's or Master's degree in Computer Science or related field</li>
                  <li>Strong academic record (GPA &gt; 3.5)</li>
                  <li>Programming skills in Python, Java, or C++ preferred</li>
                  <li>Strong analytical and problem-solving skills</li>
                </ul>
              </div>
            </div>
            
            <div className={styles.positionCard}>
              <h3>Master's Research Assistant</h3>
              <div className={styles.positionMeta}>
                <span className={styles.positionType}>Masters</span>
                <span className={styles.positionStatus}>Open</span>
              </div>
              <p>
                We offer opportunities for Master's students to participate in research projects 
                and gain hands-on experience with advanced AI and data analysis techniques.
              </p>
              <div className={styles.requirements}>
                <strong>Requirements:</strong>
                <ul>
                  <li>Bachelor's degree in Computer Science or related field</li>
                  <li>Interest in AI and machine learning research</li>
                  <li>Ability to work independently and as part of a team</li>
                  <li>Basic programming knowledge</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={styles.applicationInfo}>
            <h3>How to Apply</h3>
            <p>
              Send your complete application materials including CV, cover letter, transcripts, 
              and contact information for references to Prof. Chu at 
              <strong> htchu2@pu.edu.tw</strong> with the position title in the subject line.
            </p>
            <p>
              We encourage prospective applicants to reach out early to discuss research 
              interests and potential fits within our laboratory.
            </p>
          </div>
        </section>

        <section className={styles.inquiriesSection}>
          <h2>General Inquiries</h2>
          <div className={styles.inquiriesGrid}>
            <div className={styles.inquiryCard}>
              <h4>Research Collaboration</h4>
              <p>
                Interested in collaborating on research projects? 
                Please email Prof. Chu with details about your research interests 
                and potential collaboration opportunities.
              </p>
              <a href="mailto:htchu2@pu.edu.tw?subject=Research Collaboration Inquiry" 
                 className={styles.contactButton}>
                Contact for Collaboration
              </a>
            </div>
            
            <div className={styles.inquiryCard}>
              <h4>Prospective Students</h4>
              <p>
                If you're interested in joining our research group as a graduate student, 
                please review the opportunities above and send your CV along with a 
                research statement.
              </p>
              <a href="mailto:htchu2@pu.edu.tw?subject=Graduate Student Inquiry" 
                 className={styles.contactButton}>
                Student Inquiries
              </a>
            </div>
            
            <div className={styles.inquiryCard}>
              <h4>Media & Press</h4>
              <p>
                For media inquiries, press releases, or interview requests, 
                please contact Prof. Chu directly.
              </p>
              <a href="mailto:htchu2@pu.edu.tw?subject=Media Inquiry" 
                 className={styles.contactButton}>
                Media Contact
              </a>
            </div>
          </div>
        </section>

        <section className={styles.emergencySection}>
          <h3>Important Contacts</h3>
          <div className={styles.emergencyInfo}>
            <div className={styles.emergencyItem}>
              <strong>Department Office:</strong>
              <a href="tel:+886-4-26328001">04-26328001 ext. 18021-18025</a>
            </div>
            <div className={styles.emergencyItem}>
              <strong>University Main Line:</strong>
              <a href="tel:+886-4-26328001">04-26328001</a>
            </div>
            <div className={styles.emergencyItem}>
              <strong>Department Email:</strong>
              <a href="mailto:pu20720@pu.edu.tw">pu20720@pu.edu.tw</a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}