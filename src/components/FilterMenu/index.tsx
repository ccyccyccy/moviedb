import { StyleSheet, Text, View } from 'react-native';
import { DropdownButton } from './DropdownButton';
import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { SearchButton } from './SearchButton';

const SortCriteriaOptions = [
  { label: 'By alphabetical order', value: 'ALPHA' },
  { label: 'By rating', value: 'RATING' },
  { label: 'By release date', value: 'RELEASE' },
];

const FilterOptions = [
  { label: 'Now Playing', value: 'NOW_PLAYING' },
  { label: 'Upcoming', value: 'UP_COMING' },
  { label: 'Popular', value: 'POPULAR' },
];

export function FilterMenu() {
  const [filter, setFilter] = useState<string>(FilterOptions[0].value);
  const [sortCriteria, setSortCriteria] = useState<string | undefined>();
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
      <SearchButton text="Search" enabled={searchValue.length > 0} />
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
