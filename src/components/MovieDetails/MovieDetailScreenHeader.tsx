import { View, StyleSheet, Pressable } from 'react-native';
import ChevronRight from '../../../icons/ChevronRight';
import { MovieSummary } from '../../apis/type';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../Text';

type Props = {
  movieSummary: MovieSummary;
};

export function MovieDetailScreenHeader({ movieSummary }: Props) {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <ChevronRight color="#fff" />
      </Pressable>
      <Text style={styles.title} numberOfLines={1}>
        {movieSummary.title}
      </Text>
      <Text style={styles.titleYear}>
        ({new Date(movieSummary.release_date).getFullYear()})
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2596be',
    padding: 15,
    gap: 10,
    paddingLeft: 40,
  },
  backButton: {
    transform: [{ rotate: '180deg' }],
    position: 'absolute',
    left: 12,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    flexShrink: 1,
  },
  titleYear: {
    color: '#fff',
  },
});
