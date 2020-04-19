import React from 'react';
import PropTypes from 'prop-types';
import { Text as Txt } from 'react-native';

import styles from './Text.style';

const Text = ({
  children,
  tag = 'p',
  paddingBottom,
  color,
  bold,
  style,
  ...rest
}) => (
  <Txt
    style={[
      styles.general,
      styles[tag],
      bold && styles.bold,
      color && { color },
      paddingBottom && { paddingBottom },
      style,
    ]}
    {...rest}
  >
    {children}
  </Txt>
);

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  tag: PropTypes.string,
  bold: PropTypes.bool,
  color: PropTypes.string,
  paddingBottom: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Text;
