import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import { GUTTER } from '../../../constants/Layout';
import Colors from '../../../constants/Colors';

const Categories = ({ categories = [] }) => {
  return (
    <Text tag="small" paddingBottom={GUTTER / 2} color={Colors.tintColor}>
      {categories.join(', ')}
    </Text>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
};

export default Categories;
