import { API_BASE_URL, FilterMovieOption } from '../const';
import {
  MovieCredits,
  MovieDetails,
  MovieListApiResponse,
  TMDBConfigurationApiResponse,
} from './type';

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

type GetMovieDetailOption = {
  movieId: number;
};

export async function getMovieDetail({
  movieId,
}: GetMovieDetailOption): Promise<MovieDetails> {
  const res = await fetch(`${API_BASE_URL}/movie/${movieId}?language=en-US}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
      Accept: 'application/json',
    },
  });
  return await res.json();
}

export async function getMovieCredits({
  movieId,
}: GetMovieDetailOption): Promise<MovieCredits> {
  const res = await fetch(
    `${API_BASE_URL}/movie/${movieId}/credits?language=en-US}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        Accept: 'application/json',
      },
    },
  );
  const jsonRes = await res.json();
  console.log('jsonRes :>> ', jsonRes);
  return jsonRes;
}
