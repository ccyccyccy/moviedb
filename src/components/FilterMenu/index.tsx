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
  const [categoryFilter, setCategoryFilter] = useState<
    FilterMovieOption | undefined
  >(FilterMovieOption.NOW_PLAYING);
  const [, setCategoryFilterAtom] = useAtom(categoryFilterAtom);

  const [searchValue, setSearchValue] = useState('');
  const [, setSearchFilterAtom] = useAtom(searchFilterAtom);

  return (
    <View style={styles.filterContainer}>
      <DropdownButton
        placeholderLabel="Category"
        options={FilterOptions}
        selectedValue={categoryFilter}
        onSelectValue={val => {
          setCategoryFilter(val);
          setSearchValue('');
        }}
      />
      <SearchBar
        value={searchValue}
        placeholderText="Search..."
        onChangeValue={val => setSearchValue(val)}
      />
      <SearchButton
        text="Search"
        onPress={() => {
          if (searchValue) {
            setCategoryFilter(undefined);
            setSearchFilterAtom(searchValue);
          } else if (categoryFilter) {
            setCategoryFilterAtom(categoryFilter);
            setSearchFilterAtom('');
          } else {
            setCategoryFilter(FilterMovieOption.NOW_PLAYING); // default
            setSearchFilterAtom('');
          }
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
