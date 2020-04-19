import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import { GUTTER } from '../../../constants/Layout';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: GUTTER,
    backgroundColor: Colors.tintColor,
    alignItems: 'center'
  },
  title: {
    flex: 1,
    paddingLeft: GUTTER,
    textTransform: 'uppercase'
  }
});

export default styles;
