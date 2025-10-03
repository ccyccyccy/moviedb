export type MovieSummary = {
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
  results: MovieSummary[];
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

export type MovieDetails = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
