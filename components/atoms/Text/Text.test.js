import React from 'react';
import { render } from '@testing-library/react-native';
import Text from './Text';

describe('<Text />', () => {
  it('renders without props', () => {
    const { baseElement } = render(<Text>Text</Text>);

    expect(baseElement).toMatchSnapshot();
  });

  it('renders with different tag', () => {
    const { queryByRole } = render(<Text tag="h1">Text</Text>);

    expect(queryByRole('text').props.style).toMatchSnapshot();
  });

  it('renders with as bold', () => {
    const { queryByRole } = render(<Text bold>Text</Text>);

    expect(queryByRole('text').props.style).toMatchSnapshot();
  });

  it('renders with custom padding bottom', () => {
    const { queryByRole } = render(<Text paddingBottom={16}>Text</Text>);

    expect(queryByRole('text').props.style).toMatchSnapshot();
  });

  it('renders with custom style', () => {
    const { queryByRole } = render(
      <Text style={{ textTransform: 'uppercase' }}>Text</Text>,
    );

    expect(queryByRole('text').props.style).toMatchSnapshot();
  });
});
