import { FlatList, StyleSheet } from 'react-native';
import { FilterMenu } from '../components/FilterMenu';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getListOfMovies } from '../apis';
import { LoadMoreButton } from '../components/MovieList/LoadMoreButton';
import { MovieCard } from '../components/MovieList/MovieCard';
import { useAtom } from 'jotai';
import { filterAtom, sortCriteriaAtom } from '../store/filter';

export function HomeScreen() {
  const [filter] = useAtom(filterAtom);
  const [sortCriteria] = useAtom(sortCriteriaAtom);

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: [filter],
    queryFn: ({ pageParam, queryKey }) => {
      const [variant] = queryKey;
      return getListOfMovies({
        variant,
        page: pageParam,
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.page >= lastPage.total_pages) {
        return null;
      }
      return lastPage.page + 1;
    },
  });

  const movieList = [...(data?.pages.flatMap(x => x.results) ?? [])];

  // if (sortCriteria !== undefined) {
  //   sortedMovieList.sort((a, b) => {
  //     switch (sortCriteria) {
  //       case SortMovieCriteria.ALPHA:
  //         return a.title < b.title ? -1 : 1;
  //       case SortMovieCriteria.RATING:
  //         return a.vote_average - b.vote_average;
  //       case SortMovieCriteria.RELEASE:
  //         return new Date(a.release_date) < new Date(b.release_date) ? -1 : 1;
  //     }
  //   });
  // }

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
