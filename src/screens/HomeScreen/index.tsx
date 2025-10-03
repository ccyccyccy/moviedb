import { FlatList, StyleSheet } from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getListOfMovies, searchMovie } from '../../apis';
import { useAtom } from 'jotai';
import { categoryFilterAtom, searchFilterAtom } from '../../store/filter';
import { FilterMenu } from './FilterMenu';
import { LoadMoreButton } from './MovieList/LoadMoreButton';
import { MovieCard } from './MovieList/MovieCard';

export function HomeScreen() {
  const [categoryFilter] = useAtom(categoryFilterAtom);
  const [searchFilter] = useAtom(searchFilterAtom);

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: searchFilter
      ? (['searchFilter', searchFilter] as const)
      : (['categoryFilter', categoryFilter] as const),
    queryFn: ({ pageParam, queryKey }) => {
      const [filterType, param] = queryKey;
      if (filterType === 'categoryFilter') {
        return getListOfMovies({
          variant: param,
          page: pageParam,
        });
      } else {
        return searchMovie({
          query: param,
          page: pageParam,
        });
      }
    },
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      if (lastPage.page >= lastPage.total_pages) {
        return null;
      }
      return Math.max(lastPage.page, 1) + 1; // Weird API bug that returns page as 0 on page 1 of search
    },
  });

  const movieList = [...(data?.pages.flatMap(x => x.results) ?? [])];

  return (
    <FlatList
      data={movieList}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <MovieCard movieDetails={item} />}
      style={styles.container}
      ListHeaderComponent={<FilterMenu />}
      ListHeaderComponentStyle={styles.filterBox}
      ListFooterComponent={
        <LoadMoreButton
          onPress={fetchNextPage}
          disabled={!hasNextPage}
          loading={isFetching}
        />
      }
      ListFooterComponentStyle={styles.loadMoreButton}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  loadMoreButton: {
    marginVertical: 10,
  },
  filterBox: {
    marginBottom: 30,
  },
});
