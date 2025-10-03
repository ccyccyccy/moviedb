import { useQuery } from '@tanstack/react-query';
import { FlatList } from 'react-native';
import { getNowPlayList } from '../../apis';
import { MovieCard } from './MovieCard';

export function MovieList() {
  const movieList = useQuery({
    queryKey: ['now_playing'],
    queryFn: getNowPlayList,
  });
  return (
    <FlatList
      data={movieList.data?.results}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <MovieCard movieDetails={item} />}
    />
  );
}
