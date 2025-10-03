import { ScrollView } from 'react-native';
import { type StaticScreenProps } from '@react-navigation/native';
import { MovieSummary } from '../../apis/type';
import { useQuery } from '@tanstack/react-query';
import { getMovieCredits, getMovieDetail } from '../../apis';
import { MovieDetailScreenHeader } from './MovieDetailScreenHeader';
import { MovieDetailedInformation } from './MovieDetailedInformation';
import { MovieOverview } from './MovieOverview';

type Props = StaticScreenProps<{
  movieSummary: MovieSummary;
}>;

export function MovieDetailScreen({ route }: Props) {
  const movieSummary = route.params.movieSummary;
  const { data: movieDetails } = useQuery({
    queryKey: ['movieDetails', movieSummary.id],
    queryFn: () => {
      return getMovieDetail({ movieId: movieSummary.id });
    },
  });
  const { data: movieCredits } = useQuery({
    queryKey: ['movieCredits', movieSummary.id],
    queryFn: () => {
      return getMovieCredits({ movieId: movieSummary.id });
    },
  });

  return (
    <ScrollView>
      <MovieDetailScreenHeader movieSummary={movieSummary} />
      {movieDetails && <MovieOverview movieDetails={movieDetails} />}
      {movieDetails && movieCredits && (
        <MovieDetailedInformation
          movieDetails={movieDetails}
          movieCredits={movieCredits}
        />
      )}
    </ScrollView>
  );
}
