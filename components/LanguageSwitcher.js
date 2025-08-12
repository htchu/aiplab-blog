import { useLanguage } from '../lib/i18n';
import styles from '../styles/LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const { currentLanguage, changeLanguage, languages } = useLanguage();

  return (
    <div className={styles.languageSwitcher}>
      <select 
        value={currentLanguage} 
        onChange={(e) => changeLanguage(e.target.value)}
        className={styles.languageSelect}
      >
        {Object.entries(languages).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}