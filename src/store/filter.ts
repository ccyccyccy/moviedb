import { atom } from 'jotai';
import { FilterMovieOption, SortMovieCriteria } from '../const';

export const filterAtom = atom(FilterMovieOption.NOW_PLAYING);
export const sortCriteriaAtom = atom<SortMovieCriteria | undefined>(undefined);
