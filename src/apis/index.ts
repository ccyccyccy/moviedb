import { API_BASE_URL, FilterMovieOption } from '../const';
import { MovieCredits, MovieDetails, MovieListApiResponse } from './type';

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

type GetMovieCreditsOption = {
  movieId: number;
};

export async function getMovieCredits({
  movieId,
}: GetMovieCreditsOption): Promise<MovieCredits> {
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
  return jsonRes;
}

type SearchMovieOption = {
  query: string;
  page: number;
};

export async function searchMovie({
  query,
  page,
}: SearchMovieOption): Promise<MovieListApiResponse> {
  const res = await fetch(
    `${API_BASE_URL}/search/movie?query=${query}&page=${page}&language=en-US}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        Accept: 'application/json',
      },
    },
  );
  console.log(
    '`${API_BASE_URL}/search/movie?query=${query}&page=${page}&language=en-US}` :>> ',
    `${API_BASE_URL}/search/movie?query=${query}&page=${page}&language=en-US}`,
  );
  const jsonRes = await res.json();
  console.log('jsonRes :>> ', jsonRes);
  return await jsonRes;
}
