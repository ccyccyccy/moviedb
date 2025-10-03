import { StyleSheet, View } from 'react-native';
import { DropdownButton } from './DropdownButton';
import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { SearchButton } from './SearchButton';
import { SortMovieCriteria, FilterMovieOption } from '../../const';
import { useAtom } from 'jotai';
import { filterAtom } from '../../store/filter';

const SortCriteriaOptions = [
  { label: 'By alphabetical order', value: SortMovieCriteria.ALPHA },
  { label: 'By rating', value: SortMovieCriteria.RATING },
  { label: 'By release date', value: SortMovieCriteria.RELEASE },
];

const FilterOptions = [
  { label: 'Now Playing', value: FilterMovieOption.NOW_PLAYING },
  { label: 'Upcoming', value: FilterMovieOption.UP_COMING },
  { label: 'Popular', value: FilterMovieOption.POPULAR },
];

export function FilterMenu() {
  const [filter, setFilter] = useState<FilterMovieOption>(
    FilterMovieOption.NOW_PLAYING,
  );
  const [, setFilterAtom] = useAtom(filterAtom);

  const [sortCriteria, setSortCriteria] = useState<
    SortMovieCriteria | undefined
  >();
  const [searchValue, setSearchValue] = useState('');

  return (
    <View style={styles.filterContainer}>
      <DropdownButton
        options={FilterOptions}
        selectedValue={filter}
        onSelectValue={val => setFilter(val)}
      />
      <DropdownButton
        placeholderLabel="Sort by"
        options={SortCriteriaOptions}
        selectedValue={sortCriteria}
        onSelectValue={val => setSortCriteria(val)}
      />
      <SearchBar
        value={searchValue}
        placeholderText="Search..."
        onChangeValue={val => setSearchValue(val)}
      />
      <SearchButton text="Search" onPress={() => setFilterAtom(filter)} />
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
});
