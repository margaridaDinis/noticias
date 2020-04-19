import { StyleSheet } from 'react-native';
import { BASE_LINE_HEIGHT, FONT_SIZE } from '../../../constants/Layout';

const styles = StyleSheet.create({
  general: {
    fontWeight: 'bold',
  },
  p: {
    fontSize: FONT_SIZE.base,
    lineHeight: BASE_LINE_HEIGHT,
    fontWeight: 'normal',
  },
  a: {
    textDecorationLine: 'underline',
    fontWeight: 'normal'
  },
  small: {
    fontSize: FONT_SIZE.small,
    lineHeight: BASE_LINE_HEIGHT / 1.2,
    fontWeight: 'normal',
  },
  h1: {
    fontSize: FONT_SIZE.h1 // 28
  },
  h2: {
    fontSize: FONT_SIZE.h2 // 24
  },
  h3: {
    fontSize: FONT_SIZE.h3 // 20
  },
  h4: {
    fontSize: FONT_SIZE.h4 // 18
  },
  h5: {
    fontSize: FONT_SIZE.h5 // 16
  },
  h6: {
    fontSize: FONT_SIZE.h6 // 14
  },
  bold: {
    fontWeight: 'bold'
  }
});

export default styles;
