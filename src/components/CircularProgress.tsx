import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import { Text } from './Text';

export interface CircularProgressProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  backgroundColor?: string;
  backgroundStrokeWidth?: number;
  showLabel?: boolean;
  outerCircleColor?: string;
  progressCircleColor?: string;
  labelColor?: string;
  labelStyle?: StyleProp<TextStyle>;
  labelSize?: number;
}

export function CircularProgress(props: CircularProgressProps) {
  const {
    size = 80,
    strokeWidth = (5 * size) / 100,
    progress = 0,
    showLabel = true,
    labelSize = (20 * size) / 100,
    labelColor = '#fff',
    labelStyle,
    outerCircleColor = '#fff',
    progressCircleColor = '#00a',
    backgroundColor,
    backgroundStrokeWidth = 0,
  } = props;

  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;

  const labelViewContainerStyle: StyleProp<ViewStyle> = [
    styles.labelView,
    {
      width: size + backgroundStrokeWidth * 2,
      height: size + backgroundStrokeWidth * 2,
    },
  ];

  const labelTextStyles: StyleProp<TextStyle> = [
    {
      color: labelColor,
      fontSize: labelSize,
      textAlignVertical: 'bottom',
      marginLeft: labelSize / 5,
    },
    labelStyle,
  ];

  const labelTextPercentStyles: StyleProp<TextStyle> = [
    {
      color: labelColor,
      fontSize: labelSize / 2.5,
      textAlignVertical: 'bottom',
      marginLeft: labelSize / 15,
    },
    labelStyle,
  ];

  // render
  return (
    <Svg
      width={size + backgroundStrokeWidth * 2}
      height={size + backgroundStrokeWidth * 2}
    >
      <Circle
        fill={backgroundColor ?? 'none'}
        cx={size / 2 + backgroundStrokeWidth}
        cy={size / 2 + backgroundStrokeWidth}
        r={radius + backgroundStrokeWidth}
      />
      <Circle
        stroke={outerCircleColor}
        fill="none"
        cx={size / 2 + backgroundStrokeWidth}
        cy={size / 2 + backgroundStrokeWidth}
        r={radius}
        strokeWidth={strokeWidth}
      />

      <Circle
        stroke={progressCircleColor}
        fill="none"
        cx={size / 2 + backgroundStrokeWidth}
        cy={size / 2 + backgroundStrokeWidth}
        r={radius}
        strokeDasharray={`${circum} ${circum}`}
        strokeLinecap="round"
        transform={`rotate(-90, ${size / 2 + backgroundStrokeWidth}, ${
          size / 2 + backgroundStrokeWidth
        })`}
        strokeWidth={strokeWidth}
        strokeDashoffset={circum * ((100 - progress) / 100)}
      />

      {showLabel ? (
        <View style={labelViewContainerStyle}>
          <View style={styles.labelTextContainer}>
            <Text style={labelTextStyles}>{`${progress}`}</Text>
            <Text style={labelTextPercentStyles}>%</Text>
          </View>
        </View>
      ) : null}
    </Svg>
  );
}

const styles = StyleSheet.create({
  labelView: {
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelTextContainer: {
    flexDirection: 'row',
  },
});
