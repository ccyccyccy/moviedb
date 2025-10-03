import { atom } from 'jotai';
import { FilterMovieOption } from '../const';

export const categoryFilterAtom = atom(FilterMovieOption.NOW_PLAYING);
export const searchFilterAtom = atom('');
