import { LanguageProvider } from '../lib/i18n';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}