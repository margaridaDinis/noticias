import { StyleSheet } from 'react-native';
import { GUTTER, shadow } from '../../../constants/Layout';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.grey.light,
    paddingVertical: GUTTER / 1.5,
    paddingHorizontal: GUTTER,
    flexDirection: 'row',
    ...shadow,
  },
  title: {
    flex: 1,
  },
  button: {
    alignSelf: 'flex-end',
  },
});

export default styles;
