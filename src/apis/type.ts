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

export type MovieCredits = {
  id: number;
  cast: {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
  }[];
  crew: {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    credit_id: string;
    department: string;
    job: string;
  }[];
};
