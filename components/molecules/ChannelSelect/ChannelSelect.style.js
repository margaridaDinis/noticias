import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import { GUTTER, shadow } from '../../../constants/Layout';

const title = {
  textTransform: 'uppercase'
};

const styles = StyleSheet.create({
  section: {
    padding: GUTTER,
    backgroundColor: Colors.grey.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: GUTTER / 2,
    ...shadow,
  },
  country: {
    ...title,
    color: Colors.tintColor
  },
  network: {
    ...title,
    color: Colors.grey.base
  }
});

export default styles;
