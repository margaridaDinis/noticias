import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Colors from '../../../constants/Colors';
import styles from './Separator.style';

const Separator = ({
  color = Colors.borderColor,
  marginTop = 0,
  marginBottom = 0,
}) => (
  <View
    style={[
      styles.separator,
      { backgroundColor: color, marginTop, marginBottom },
    ]}
  />
);

Separator.propTypes = {
  color: PropTypes.string,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
};

export default Separator;
