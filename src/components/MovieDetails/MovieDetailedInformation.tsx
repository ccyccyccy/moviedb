import { StyleSheet, View } from 'react-native';
import { MovieCredits, MovieDetails } from '../../apis/type';
import { CircularProgress } from '../CircularProgress';
import { Text } from '../Text';
import CastCarousel from './CastCarousell';

type Props = {
  movieDetails: MovieDetails;
  movieCredits: MovieCredits;
};

function getAllSortedDirectorsWriter(movieCredits: MovieCredits) {
  const personToJobMap: Record<string, string[]> = {};
  movieCredits.crew.forEach(person => {
    const job = person.job;
    if (job === 'Director' || job === 'Writer') {
      if (!personToJobMap[person.name]) {
        personToJobMap[person.name] = [];
      }
      personToJobMap[person.name].push(job);
    }
  });
  return Object.entries(personToJobMap).sort(([_, jobsA], [__, jobsB]) => {
    const getRank = (jobs: string[]) => {
      const hasWriter = jobs.includes('writer');
      const hasDirector = jobs.includes('director');

      if (hasWriter && hasDirector) return 0;
      if (hasDirector) return 1;
      if (hasWriter) return 2;
      return 3;
    };

    return getRank(jobsA) - getRank(jobsB);
  });
}

export function MovieDetailedInformation({
  movieDetails,
  movieCredits,
}: Props) {
  const directorsAndWriters = getAllSortedDirectorsWriter(movieCredits);
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
          {directorsAndWriters.slice(0, 2).map(([name, jobs]) => (
            <View style={styles.creditSection} key={name}>
              <Text style={styles.creditLabel}>{name}</Text>
              <Text style={styles.creditName}>{jobs.sort().join(', ')}</Text>
            </View>
          ))}
        </View>
      </View>
      {movieDetails.tagline && (
        <View style={styles.taglineContainer}>
          <Text style={styles.taglineText}>{movieDetails.tagline}</Text>
        </View>
      )}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <Text style={styles.overviewDescription}>{movieDetails.overview}</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Cast members</Text>
        <CastCarousel movieCredits={movieCredits} />
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
  sectionContainer: {
    gap: 10,
  },
  sectionTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  overviewDescription: {
    color: '#fff',
  },
});
