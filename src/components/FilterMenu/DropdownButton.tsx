import { Pressable, StyleSheet, View } from 'react-native';
import ChevronRight from '../../icons/ChevronRight';
import { useState } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { Text } from '../Text';

type Props<T> = {
  options: { label: string; value: T }[];
  placeholderLabel?: string;
  selectedValue?: T;
  onSelectValue: (value: T) => void;
};

export function DropdownButton<T>({
  options,
  selectedValue,
  placeholderLabel,
  onSelectValue,
}: Props<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const chevronRotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${chevronRotation.value}deg` }],
    };
  });

  const selectedLabel =
    options.find(o => o.value === selectedValue)?.label ??
    placeholderLabel ??
    '';

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => {
          chevronRotation.value = withSpring(isOpen ? 0 : 90, {
            duration: 300,
          });
          setIsOpen(open => !open);
        }}
      >
        <Text style={styles.labelText}>{selectedLabel}</Text>
        <Animated.View style={animatedStyle}>
          <ChevronRight />
        </Animated.View>
      </Pressable>
      {isOpen && (
        <View style={styles.dropdownContainer}>
          {options.map((option, idx) => {
            const isSelected = option.value === selectedValue;
            return (
              <Pressable
                key={idx}
                onPress={() => {
                  onSelectValue(option.value);
                  setIsOpen(false);
                }}
                style={[
                  styles.dropdownItem,
                  isSelected && styles.selectedDropdownItem,
                ]}
              >
                <Text style={isSelected && styles.selectedDropdownText}>
                  {option.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 2,
    backgroundColor: '#fff',
    width: '100%',
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  button: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  labelText: {
    fontWeight: 'semibold',
  },
  dropdownContainer: {
    borderTopWidth: 2,
    borderColor: '#ddd',
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 8,
  },
  dropdownItem: {
    backgroundColor: '#F8F8F8',
    paddingLeft: 15,
    paddingVertical: 8,
    borderRadius: 3,
  },
  selectedDropdownItem: {
    backgroundColor: '#00B4E4',
  },
  selectedDropdownText: {
    color: '#fff',
  },
});
