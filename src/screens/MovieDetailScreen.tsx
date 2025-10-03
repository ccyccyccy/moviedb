import { View } from 'react-native';
import { type StaticScreenProps } from '@react-navigation/native';
import { MovieSummary } from '../apis/type';
import { MovieDetailScreenHeader } from '../components/MovieDetails/MovieDetailScreenHeader';
import { useQuery } from '@tanstack/react-query';
import { getMovieDetail } from '../apis';
import { MovieOverview } from '../components/MovieDetails/MovieOverview';
import { MovieDetailedInformation } from '../components/MovieDetails/MovieDetailedInformation';

type Props = StaticScreenProps<{
  movieSummary: MovieSummary;
}>;

export function MovieDetailScreen({ route }: Props) {
  const movieSummary = route.params.movieSummary;
  const { data: movieDetails } = useQuery({
    queryKey: [movieSummary.id],
    queryFn: () => {
      return getMovieDetail({ movieId: movieSummary.id });
    },
  });

  return (
    <View>
      <MovieDetailScreenHeader movieSummary={movieSummary} />
      {movieDetails && <MovieOverview movieDetails={movieDetails} />}
      {movieDetails && <MovieDetailedInformation movieDetails={movieDetails} />}
    </View>
  );
}
