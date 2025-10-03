import { MovieListApiResponse, TMDBConfigurationApiResponse } from './type';

import Config from 'react-native-config';
export const POSTER_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export async function getNowPlayList(): Promise<MovieListApiResponse> {
  const res = await fetch(
    'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Config.BEARER_TOKEN}`,
        Accept: 'application/json',
      },
    },
  );
  return await res.json();
}

export async function getConfiguration(): Promise<TMDBConfigurationApiResponse> {
  const res = await fetch('https://api.themoviedb.org/3/configuration', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${Config.BEARER_TOKEN}`,
      Accept: 'application/json',
    },
  });
  return await res.json();
}
