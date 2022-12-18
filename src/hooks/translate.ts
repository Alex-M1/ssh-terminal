import { useTranslation } from 'next-i18next';
import trKey from '../assets/locales/en/common.json';

type TranslationsKeys = keyof typeof trKey

export const useApptranslate = () => {
  const { t } = useTranslation();
  let translate: TranslationsKeys;

  return t;
};
