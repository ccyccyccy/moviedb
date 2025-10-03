import { Toast } from '../components/Toast';
import { API_BASE_URL, FilterMovieOption } from '../const';
import { MovieCredits, MovieDetails, MovieListApiResponse } from './type';

const fetchOptions = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    Accept: 'application/json',
  },
};

function handleError(res: Response) {
  if (!res.ok) {
    Toast.show('Internet error. Cannot fetch movie data from API');
    throw new Error('Network error. Cannot fetch data');
  }
}

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
    fetchOptions,
  );
  handleError(res);
  return await res.json();
}

type GetMovieDetailOption = {
  movieId: number;
};

export async function getMovieDetail({
  movieId,
}: GetMovieDetailOption): Promise<MovieDetails> {
  const res = await fetch(
    `${API_BASE_URL}/movie/${movieId}?language=en-US}`,
    fetchOptions,
  );
  handleError(res);
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
    fetchOptions,
  );
  handleError(res);
  return await res.json();
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
    fetchOptions,
  );
  handleError(res);
  return await res.json();
}
