import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FONT_SIZE } from '../../../constants/Layout';
import Colors from '../../../constants/Colors';
import Text from '../Text';
import styles from './Checkbox.style';

const ICON = 'ios-radio-button';

const Checkbox = ({ value, label, isSelected, onSelect }) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={[styles.checkbox]}
    >
      <Ionicons size={FONT_SIZE.h2} name={`${ICON}-${isSelected ? 'on' : 'off'}`} color={Colors.tintColor}/>
      <Text style={styles.label}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

Checkbox.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

export default Checkbox;
