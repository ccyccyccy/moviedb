import { View, Image, StyleSheet } from 'react-native';
import { POSTER_IMAGE_BASE_URL } from '../../const';
import { MovieDetails } from '../../apis/type';
import ElipsisIcon from '../../icons/Elipsis';
import ISO6391 from 'iso-639-1';
import { Text } from '../Text';

type Props = {
  movieDetails: MovieDetails;
};

export function MovieOverview({ movieDetails }: Props) {
  const releaseDate = new Date(movieDetails.release_date);
  const formattedReleaseDate = `${String(releaseDate.getDate()).padStart(
    2,
    '0',
  )}/${String(releaseDate.getMonth() + 1).padStart(
    2,
    '0',
  )}/${releaseDate.getFullYear()}`;

  return (
    <View style={styles.overviewContainer}>
      <Image
        style={styles.poster}
        source={{ uri: `${POSTER_IMAGE_BASE_URL}/${movieDetails.poster_path}` }}
      />
      <View style={styles.overviewDescription}>
        <View>
          <Text style={styles.ageRatingText}>PG13</Text>
        </View>
        <View style={styles.timeContaimer}>
          <Text style={styles.whiteText}>
            {formattedReleaseDate} (
            {movieDetails.production_countries.map(c => c.iso_3166_1).join(',')}
            )
          </Text>
          <ElipsisIcon />
          <Text style={styles.whiteText}>
            {Math.floor(movieDetails?.runtime / 60)}h{' '}
            {movieDetails?.runtime % 60}m
          </Text>
        </View>
        <View>
          <Text style={styles.whiteText}>
            {movieDetails?.genres.map(x => x.name).join(', ')}
          </Text>
        </View>
        <View style={styles.labValContainer}>
          <Text style={styles.semiboldWhiteText}>Status: </Text>
          <Text style={styles.whiteText}>{movieDetails?.status}</Text>
        </View>
        <View style={styles.labValContainer}>
          <Text style={styles.semiboldWhiteText}>Original Language: </Text>
          <Text style={styles.whiteText}>
            {ISO6391.getName(movieDetails?.original_language)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overviewContainer: {
    flexDirection: 'row',
    backgroundColor: '#2596be',
    paddingVertical: 15,
    paddingHorizontal: 25,
    gap: 20,
  },
  overviewDescription: {
    flex: 1,
    alignItems: 'flex-start',
    gap: 6,
  },
  poster: {
    width: 95,
    height: 141,
  },
  whiteText: {
    color: '#fff',
  },
  semiboldWhiteText: {
    color: '#fff',
    fontWeight: 'semibold',
  },
  ageRatingText: {
    color: '#fff7',
    borderWidth: 1,
    borderColor: '#fff7',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 3,
  },
  labValContainer: {
    flexDirection: 'row',
  },
  timeContaimer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
