import { StyleSheet, Text, View } from 'react-native';
import { DropdownButton } from './DropdownButton';
import { useState } from 'react';

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

  return (
    <View style={styles.filterContainer}>
      <View style={styles.filterItem}>
        <DropdownButton
          options={FilterOptions}
          selectedValue={filter}
          onSelectValue={val => setFilter(val)}
        />
      </View>
      <View>
        <DropdownButton
          placeholderLabel="Sort by"
          options={SortCriteriaOptions}
          selectedValue={sortCriteria}
          onSelectValue={val => setSortCriteria(val)}
        />
      </View>
      <View>
        <Text>Search...</Text>
      </View>
      <View>
        <Text>Search</Text>
      </View>
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
  filterItem: {
    width: '100%',
  },
});
