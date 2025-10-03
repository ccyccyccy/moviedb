import { StyleSheet, View } from 'react-native';
import { DropdownButton } from './DropdownButton';
import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { SearchButton } from './SearchButton';
import { FilterMovieOption } from '../../const';
import { useAtom } from 'jotai';
import { categoryFilterAtom, searchFilterAtom } from '../../store/filter';

const FilterOptions = [
  { label: 'Now Playing', value: FilterMovieOption.NOW_PLAYING },
  { label: 'Upcoming', value: FilterMovieOption.UP_COMING },
  { label: 'Popular', value: FilterMovieOption.POPULAR },
];

export function FilterMenu() {
  const [filter, setFilter] = useState<FilterMovieOption>(
    FilterMovieOption.NOW_PLAYING,
  );
  const [, setCategoryFilterAtom] = useAtom(categoryFilterAtom);
  const [, setSearchFilterAtom] = useAtom(searchFilterAtom);

  const [searchValue, setSearchValue] = useState('');

  return (
    <View style={styles.filterContainer}>
      <DropdownButton
        options={FilterOptions}
        selectedValue={filter}
        onSelectValue={val => setFilter(val)}
      />
      <SearchBar
        value={searchValue}
        placeholderText="Search..."
        onChangeValue={val => setSearchValue(val)}
      />
      <SearchButton
        text="Search"
        onPress={() => {
          setCategoryFilterAtom(filter);
          setSearchFilterAtom(searchValue);
        }}
      />
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
