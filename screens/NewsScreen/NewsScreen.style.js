import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { GUTTER } from '../../constants/Layout';

const styles = StyleSheet.create({
  loader: {
    padding: GUTTER,
  },
  header: {
    padding: GUTTER,
    alignItems: 'flex-end',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    paddingTop: GUTTER,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.borderColor,
  },
});

export default styles;
