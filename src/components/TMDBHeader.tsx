import { StyleSheet, View } from 'react-native';
import TMDBIcon from '../../assets/TMDBIcon';

export function TMDBHeader() {
  return (
    <View style={styles.headerContainer}>
      <TMDBIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
});
