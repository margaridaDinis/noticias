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
}) => {
  const textStyles = [styles.general, styles[tag]];

  if (bold) textStyles.push(styles.bold);
  if (color) textStyles.push({ color });
  if (paddingBottom) textStyles.push({ paddingBottom });
  if (style) textStyles.push(style);

  return (
    <Txt style={textStyles} accessibilityRole="text" {...rest}>
      {children}
    </Txt>
  );
};

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
