export type MovieDetails = {
  adult: boolean; // default true
  backdrop_path: string;
  genre_ids: number[];
  id: number; // default 0
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number; // default 0
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean; // default true
  vote_average: number; // default 0
  vote_count: number; // default 0
};

export type MovieListApiResponse = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number; // default 0
  results: MovieDetails[];
  total_pages: number; // default 0
  total_results: number; // default 0
};

export type TMDBConfigurationApiResponse = {
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
  };
  change_keys: string[];
};
