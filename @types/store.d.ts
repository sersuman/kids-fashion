export interface IStatus {
  initialLoad: boolean;
  setInitialLoad: (value: boolean) => void;
}

export type Languages = 'en' | 'es' | 'np';
export interface ILanguage {
  lang: Language;
  setLang: (lang: Languages) => void;
}
