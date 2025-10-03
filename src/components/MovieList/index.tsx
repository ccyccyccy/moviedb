import { useQuery } from '@tanstack/react-query';
import { FlatList } from 'react-native';
import { getListOfMovies } from '../../apis';
import { MovieCard } from './MovieCard';
import { FilterMovieOption } from '../../const';

export function MovieList() {
  const movieList = useQuery({
    queryKey: ['now_playing', { variant: FilterMovieOption.NOW_PLAYING }],
    queryFn: () =>
      getListOfMovies({ variant: FilterMovieOption.NOW_PLAYING, page: 1 }),
  });
  return (
    <FlatList
      data={movieList.data?.results}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <MovieCard movieDetails={item} />}
    />
  );
}
