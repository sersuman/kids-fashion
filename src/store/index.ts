import {IStatus} from 'types/store';
import {create, StateCreator} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

import {zustandStorage} from './storage';

const createInitialLoad: StateCreator<IStatus> = set => ({
  initialLoad: false,
  setInitialLoad(status) {
    set({initialLoad: status});
  },
});

interface Store extends IStatus {}

export const useStore = create<Store, [['zustand/persist', Store]]>(
  persist(
    (...methods) => ({
      ...createInitialLoad(...methods),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
