import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { FONT_SIZE } from '../../../constants/Layout';
import Colors from '../../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Text from '../../atoms/Text';
import styles from './ModalHeader.style';

const ModalHeader = ({ title, action, icon = 'ios-arrow-back'  }) => {
  const navigation = useNavigation();
  const handlePress = action || navigation.goBack;

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={handlePress}>
        <Ionicons name={icon} color={Colors.white} size={FONT_SIZE.h1}/>
      </TouchableOpacity>
      <Text
        color={Colors.white}
        style={styles.title}
        numberOfLines={1}
        bold
      >
        {title}
      </Text>
    </View>
  );
};

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func,
  icon: PropTypes.string
};

export default ModalHeader;
