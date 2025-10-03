import { API_BASE_URL, FilterMovieOption } from '../const';
import { MovieListApiResponse, TMDBConfigurationApiResponse } from './type';
import Config from 'react-native-config';

export type GetMovieListOption = {
  variant: FilterMovieOption;
  page: number;
};

export async function getListOfMovies({
  variant,
  page,
}: GetMovieListOption): Promise<MovieListApiResponse> {
  let variantPath = 'now_playing';
  switch (variant) {
    case FilterMovieOption.NOW_PLAYING:
      variantPath = 'now_playing';
      break;
    case FilterMovieOption.POPULAR:
      variantPath = 'popular';
      break;
    case FilterMovieOption.UP_COMING:
      variantPath = 'upcoming';
      break;
  }

  console.log(
    '`${API_BASE_URL}/movie/${variantPath}?language=en-US&page=${page}` :>> ',
    `${API_BASE_URL}/movie/${variantPath}?language=en-US&page=${page}`,
  );

  const res = await fetch(
    `${API_BASE_URL}/movie/${variantPath}?language=en-US&page=${page}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        Accept: 'application/json',
      },
    },
  );
  return await res.json();
}

export async function getConfiguration(): Promise<TMDBConfigurationApiResponse> {
  const res = await fetch(`${API_BASE_URL}/configuration`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
      Accept: 'application/json',
    },
  });
  return await res.json();
}
