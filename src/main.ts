import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n, { loadLocaleMessages, type SupportedLocale } from './i18n';
import './index.css';

const app = createApp(App);
app.use(router);
app.use(i18n);

const savedLocale = localStorage.getItem('locale') as SupportedLocale | null;
if (savedLocale && savedLocale !== 'es') {
  loadLocaleMessages(savedLocale).then(() => app.mount('#root'));
} else {
  app.mount('#root');
}
