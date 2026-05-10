import { createI18n } from 'vue-i18n';
import es from './locales/es/index';

export type SupportedLocale = 'es' | 'en';
export const supportedLocales: SupportedLocale[] = ['es', 'en'];

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'es',
  messages: { es },
});

export async function loadLocaleMessages(locale: SupportedLocale): Promise<void> {
  const global = i18n.global as any;
  if (!global.availableLocales.includes(locale)) {
    const messages = await import(`./locales/${locale}/index.ts`);
    global.setLocaleMessage(locale, messages.default);
  }
  global.locale.value = locale;
  localStorage.setItem('locale', locale);
}

export default i18n;
