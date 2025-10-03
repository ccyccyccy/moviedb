import { atom } from 'jotai';
import { FilterMovieOption } from '../const';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = createJSONStorage(() => AsyncStorage);

export const categoryFilterAtom = atomWithStorage<
  FilterMovieOption | undefined
>('categoryFilter', undefined, storage);
export const searchFilterAtom = atom('');
