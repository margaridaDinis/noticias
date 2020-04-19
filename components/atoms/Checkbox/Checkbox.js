import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import getCheckboxIconName from '../../../helpers/getCheckboxIconName';
import { FONT_SIZE } from '../../../constants/Layout';
import Colors from '../../../constants/Colors';
import Text from '../Text';
import styles from './Checkbox.style';

const Checkbox = ({ label, isSelected, onSelect }) => {
  const iconName = getCheckboxIconName(isSelected ? 'on' : 'off');

  return (
    <TouchableOpacity
      onPress={onSelect}
      style={[styles.checkbox]}
      accessibilityRole="button"
    >
      <Ionicons size={FONT_SIZE.h2} name={iconName} color={Colors.tintColor} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

export default Checkbox;
