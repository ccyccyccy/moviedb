import { Pressable, StyleSheet } from 'react-native';
import { Text } from '../../../components/Text';

type Props = {
  text: string;
  onPress?: () => void;
};

export function SearchButton({ text, onPress }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#E4E4E4',
  },
  buttonText: {
    fontWeight: 'semibold',
    color: '#0008',
  },
});
