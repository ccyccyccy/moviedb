import { Image, Pressable, StyleSheet, View } from 'react-native';
import { MovieSummary } from '../../apis/type';
import { POSTER_IMAGE_BASE_URL } from '../../const';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../Text';

type Props = {
  movieDetails: MovieSummary;
};

export function MovieCard({ movieDetails }: Props) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.cardContainer}
      onPress={() =>
        navigation.navigate('detailsScreen', { movieSummary: movieDetails })
      }
    >
      <Image
        source={{ uri: `${POSTER_IMAGE_BASE_URL}/${movieDetails.poster_path}` }}
        style={styles.poster}
      />
      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <Text
            style={styles.detailsTitleText}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {movieDetails.title}
          </Text>
          <Text style={styles.releaseDateText}>
            {new Date(movieDetails.release_date).toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </Text>
        </View>
        <View>
          <Text numberOfLines={2} ellipsizeMode="tail">
            {movieDetails.overview}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    maxWidth: '100%',
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 4,
    marginVertical: 8,
    flexDirection: 'row',
    elevation: 2,
    backgroundColor: '#fff',
  },
  poster: {
    width: 95,
    height: 141,
  },
  detailsContainer: {
    paddingVertical: 22,
    paddingHorizontal: 14,
    gap: 20,
    flexShrink: 1,
  },
  titleContainer: {
    width: '100%',
  },
  detailsTitleText: {
    fontWeight: 'semibold',
  },
  releaseDateText: {
    color: '#999999',
    fontSize: 12,
  },
});
