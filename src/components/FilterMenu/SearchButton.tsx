import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  text: string;
  onPress?: () => void;
};

export function SearchButton({ text, onPress }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text>{text}</Text>
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
});
