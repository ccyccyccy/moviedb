import { View, Text, StyleSheet, Image } from 'react-native';
import {
  useNavigation,
  type StaticScreenProps,
} from '@react-navigation/native';
import { MovieSummary } from '../apis/type';
import { MovieDetailScreenHeader } from '../components/MovieDetails/MovieDetailScreenHeader';
import ChevronRight from '../../assets/ChevronRight';
import { useQuery } from '@tanstack/react-query';
import { getMovieDetail } from '../apis';
import { POSTER_IMAGE_BASE_URL } from '../const';
import { MovieOverview } from '../components/MovieDetails/MovieOverview';

type Props = StaticScreenProps<{
  movieSummary: MovieSummary;
}>;

export function MovieDetailScreen({ route }: Props) {
  const movieSummary = route.params.movieSummary;
  const { data: movieDetails, isFetching } = useQuery({
    queryKey: [movieSummary.id],
    queryFn: () => {
      return getMovieDetail({ movieId: movieSummary.id });
    },
  });

  return (
    <View>
      <MovieDetailScreenHeader movieSummary={movieSummary} />
      {movieDetails && <MovieOverview movieDetails={movieDetails} />}
    </View>
  );
}

const styles = StyleSheet.create({
  overviewContainer: {
    flexDirection: 'row',
  },
  overviewDescription: {},
});
