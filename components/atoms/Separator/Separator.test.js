import React from 'react';
import { render } from '@testing-library/react-native';
import Separator from './Separator';

describe('<Separator />', () => {
  it('renders without props', () => {
    const { queryByTestId } = render(<Separator />);

    expect(queryByTestId('separator').props.style).toMatchSnapshot();
  });

  it('renders with custom backgroundColor', () => {
    const { queryByTestId } = render(<Separator color="gold" />);

    expect(queryByTestId('separator').props.style).toMatchSnapshot();
  });

  it('renders with custom margins', () => {
    const { queryByTestId } = render(
      <Separator marginBottom={16} marginTop={8} />,
    );

    expect(queryByTestId('separator').props.style).toMatchSnapshot();
  });
});
