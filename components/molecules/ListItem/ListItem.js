import React from 'react';
import PropTypes from 'prop-types';
import { RectButton } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { GUTTER } from '../../../constants/Layout';
import Colors from '../../../constants/Colors';
import Text from '../../atoms/Text';
import styles from './ListItem.style';
import Categories from '../../atoms/Categories';

const ListItem = ({
  title = '',
  description = '',
  categories = [],
  date = '',
  onPress,
}) => {
  return (
    <RectButton style={[styles.option]} onPress={onPress}>
      <View>
        <Categories categories={categories} />
        <Text tag="h4" paddingBottom={GUTTER}>
          {title}
        </Text>
        <Text
          tag="small"
          paddingBottom={GUTTER}
          color={Colors.grey.dark}
          numberOfLines={3}>
          {description}
        </Text>
        <Text tag="small" color={Colors.grey.base}>
          {date}
        </Text>
      </View>
    </RectButton>
  );
};

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onPress: PropTypes.func,
};

export default ListItem;
