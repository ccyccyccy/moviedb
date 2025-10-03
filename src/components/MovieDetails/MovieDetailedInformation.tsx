import { StyleSheet, Text, View } from 'react-native';
import { MovieDetails } from '../../apis/type';
import { CircularProgress } from '../CircularProgress';

type Props = {
  movieDetails: MovieDetails;
};

export function MovieDetailedInformation({ movieDetails }: Props) {
  return (
    <View style={styles.detailedInfoContainer}>
      <View style={styles.scoreCreditContainer}>
        <View style={styles.scoreContainer}>
          <CircularProgress
            progress={Math.round(movieDetails.vote_average * 10)}
            progressCircleColor="#45FF8F"
            outerCircleColor="#D0D2D366"
            backgroundColor="#042541"
            backgroundStrokeWidth={5}
            size={48}
            labelSize={17}
            labelStyle={styles.userScoreLabe}
          />
          <Text style={styles.userScoreTitle}>User Score</Text>
        </View>
        <View style={styles.creditContainer}>
          <View style={styles.creditSection}>
            <Text style={styles.creditLabel}>Director</Text>
            <Text style={styles.creditName}>Director name</Text>
          </View>
          <View style={styles.creditSection}>
            <Text style={styles.creditLabel}>Writer</Text>
            <Text style={styles.creditName}>Writer name</Text>
          </View>
        </View>
      </View>
      <View style={styles.taglineContainer}>
        <Text style={styles.taglineText}>{movieDetails.tagline}</Text>
      </View>
      <View style={styles.overviewContainer}>
        <Text style={styles.overviewTitle}>Overview</Text>
        <Text style={styles.overviewDescription}>{movieDetails.overview}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailedInfoContainer: {
    backgroundColor: '#00B4E4',
    padding: 25,
    gap: 24,
  },
  scoreCreditContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  scoreContainer: {
    flex: 1,
    gap: 6,
  },
  userScoreTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  userScoreLabe: {
    fontWeight: 'bold',
  },
  userScorePercent: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  creditContainer: { flex: 1, gap: 12 },
  creditSection: {},
  creditLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
  creditName: {
    color: '#fff',
    fontSize: 12,
  },
  taglineContainer: {},
  taglineText: {
    color: '#fff',
    fontStyle: 'italic',
    fontSize: 16,
  },
  overviewContainer: {
    gap: 10,
  },
  overviewTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  overviewDescription: {
    color: '#fff',
  },
});
