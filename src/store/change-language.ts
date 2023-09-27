import type {StateCreator} from 'zustand';

import {ILanguage} from '../../@types/store';

export const changeLanguage: StateCreator<ILanguage> = set => ({
  lang: 'en',
  setLang(lang) {
    set({lang});
  },
});
