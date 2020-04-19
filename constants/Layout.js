import { Dimensions } from 'react-native';
import Colors from './Colors';

export const GUTTER = 16;
export const BUTTON_HEIGHT = 45;
export const INPUT_HEIGHT = 45;

const BASE_FONT_SIZE = 16;

export const FONT_SIZE = {
  base: BASE_FONT_SIZE, // 16
  h1: BASE_FONT_SIZE * 1.75, // 28
  h2: BASE_FONT_SIZE * 1.5, // 24
  h3: BASE_FONT_SIZE * 1.25, // 20
  h4: BASE_FONT_SIZE * 1.125, // 18
  h5: BASE_FONT_SIZE, // 16
  h6: BASE_FONT_SIZE * 0.875, // 14,
  small: BASE_FONT_SIZE * 0.875
};
export const BASE_LINE_HEIGHT = BASE_FONT_SIZE * 1.5;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const WINDOW = {
  width,
  height,
};

export const isSmallDevice = width < 375;

export const shadow = {
  elevation: 2,
  shadowOpacity: 0.15,
  shadowRadius: 4,
  shadowColor: Colors.black,
  shadowOffset: {
    height: 5
  },
  zIndex: 1
};
