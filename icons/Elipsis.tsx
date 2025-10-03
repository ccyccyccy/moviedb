import * as React from 'react';
import Svg, { SvgProps, Circle } from 'react-native-svg';
const ElipsisIcon = (props: SvgProps) => (
  <Svg width={5} height={5} fill="none" {...props}>
    <Circle cx={2.5} cy={2.5} r={2.5} fill="#fff" />
  </Svg>
);
export default ElipsisIcon;
