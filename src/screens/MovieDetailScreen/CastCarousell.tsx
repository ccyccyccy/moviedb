import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { MovieCredits } from '../../apis/type';
import { POSTER_IMAGE_BASE_URL } from '../../const';

type Props = {
  movieCredits: MovieCredits;
};

export default function CastCarousel({ movieCredits }: Props) {
  return (
    <FlatList
      data={movieCredits.cast}
      keyExtractor={item => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image
            style={styles.profilePic}
            source={{
              uri: `${POSTER_IMAGE_BASE_URL}/${item.profile_path}`,
            }}
          />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.character} numberOfLines={2}>
            {item.character}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 12,
    width: 100,
  },
  name: {
    color: '#fff',
    position: 'absolute',
    top: 0,
    backgroundColor: '#0005',
    fontSize: 12,
  },
  character: {
    fontSize: 12,
    color: '#fff',
  },
  contentContainerStyle: {
    gap: 10,
  },
  profilePic: {
    height: 100,
    width: 100,
  },
});
