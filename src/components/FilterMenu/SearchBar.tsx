import { StyleSheet, TextInput, View } from 'react-native';

type Props = {
  placeholderText?: string;
  value: string;
  onChangeValue: (value: string) => void;
};

export function SearchBar({ value, placeholderText, onChangeValue }: Props) {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.inputBox}
        value={value}
        placeholder={placeholderText}
        onChangeText={onChangeValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  inputBox: {
    width: '100%',
    padding: 10,
  },
});
