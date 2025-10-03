import { Pressable, StyleSheet } from 'react-native';
import { Text } from '../Text';

type Prop = {
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export function LoadMoreButton({
  onPress,
  disabled = false,
  loading = false,
}: Prop) {
  return (
    <Pressable
      style={[styles.loadMoreButton, disabled && styles.disabledButton]}
      onPress={onPress}
    >
      <Text style={[styles.loadMoreText, disabled && styles.disabledText]}>
        {disabled ? 'No more movies' : loading ? 'Loading..' : 'Load more'}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  loadMoreButton: {
    backgroundColor: '#00B4E4',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  loadMoreText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  disabledButton: {
    backgroundColor: '#E4E4E4',
  },
  disabledText: {
    color: '#fff',
  },
});
