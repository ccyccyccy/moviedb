import { Text as RNText, StyleSheet, TextProps } from 'react-native';

const fontMapping = {
  regular: {
    normal: 'SourceSansPro-Regular',
    italic: 'SourceSansPro-Italic',
  },
  semibold: {
    normal: 'SourceSansPro-Semibold',
    italic: 'SourceSansPro-SemiboldItalic',
  },
  bold: {
    normal: 'SourceSansPro-Bold',
    italic: 'SourceSansPro-BoldItalic',
  },
};

const weightMap: Record<string, 'regular' | 'bold' | 'semibold'> = {
  '100': 'regular',
  '200': 'regular',
  '300': 'regular',
  '400': 'regular',
  '500': 'regular',
  '600': 'semibold',
  '700': 'bold',
  '800': 'bold',
  '900': 'bold',
  regular: 'regular',
  bold: 'bold',
  semibold: 'semibold',
};

export const Text = ({ style, ...props }: TextProps) => {
  const flatStyle = StyleSheet.flatten(style) || {};
  const { fontWeight = '400', fontStyle = 'normal', ...restStyle } = flatStyle;
  const weightKey = weightMap[fontWeight] || 'regular';
  const fontFamily =
    fontMapping[weightKey]?.[fontStyle] || fontMapping.regular.normal;

  const finalStyle = [{ ...restStyle, fontFamily }];
  return <RNText {...props} style={finalStyle} />;
};
