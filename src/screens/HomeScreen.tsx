import { StyleSheet, View } from 'react-native';
import { FilterMenu } from '../components/FilterMenu';
import { MovieList } from '../components/MovieList';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <FilterMenu />
      <MovieList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  filterMenu: {},
});
