import { View, Text, StyleSheet } from 'react-native';

export function WatchList() {
  return (
    <View style={styles.container}>
      <Text>WatchList</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
