import React from 'react';
import { render } from '@testing-library/react-native';
import TabBarIcon from './TabBarIcon';

describe('<TabBarIcon />', () => {
  it('renders without props', () => {
    const { baseElement } = render(<TabBarIcon />);

    expect(baseElement).toMatchSnapshot();
  });

  it('renders with custom props', () => {
    const { baseElement } = render(<TabBarIcon color="gold" />);

    expect(baseElement).toMatchSnapshot();
  });
});
