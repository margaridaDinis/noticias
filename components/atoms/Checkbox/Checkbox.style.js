import { StyleSheet } from 'react-native';
import { FONT_SIZE, GUTTER } from '../../../constants/Layout';

const styles = StyleSheet.create({
  checkbox: {
    paddingHorizontal: GUTTER * 1.5,
    paddingVertical: GUTTER / 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  label: {
    paddingLeft: GUTTER / 2,
    fontSize: FONT_SIZE.base,
  },
});

export default styles;
