import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type Props = {
  text: string;
  enabled?: boolean;
};

export function SearchButton({ text, enabled = true }: Props) {
  return (
    <Pressable style={[styles.button, enabled && styles.enabledButton]}>
      <Text style={enabled && styles.enabledText}>{text}</Text>
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
  enabledButton: {
    backgroundColor: '#00B4E4',
  },
  inputBox: {
    width: '100%',
    padding: 10,
  },
  enabledText: {
    color: '#fff',
  },
});
