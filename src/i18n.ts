import { createI18n, type Composer, type I18n } from 'vue-i18n';
import es from './locales/es/index';
import type { LangMessages } from './locales/types';

export type SupportedLocale = 'es' | 'en';
export const supportedLocales: SupportedLocale[] = ['es', 'en'];

const lazyLocaleMessages: Record<string, () => Promise<{ default: LangMessages }>> = {
  en: () => import('./locales/en/index.ts'),
};

const i18n: I18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'es',
  globalInjection: true,
  messages: { es },
});

export async function loadLocaleMessages(locale: SupportedLocale): Promise<void> {
  const global = i18n.global as Composer;

  if (global.availableLocales.includes(locale)) {
    global.locale.value = locale;
    localStorage.setItem('locale', locale);
    return;
  }

  const loader = lazyLocaleMessages[locale];
  if (loader) {
    const messages = await loader();
    global.setLocaleMessage(locale, messages.default);
    global.locale.value = locale;
    localStorage.setItem('locale', locale);
  }
}

export default i18n;
