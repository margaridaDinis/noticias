import React from 'react';
import { render } from '@testing-library/react-native';
import Categories from './Categories';

describe('<Categories />', () => {
  it('joins each category with comma', () => {
    const { queryByText } = render(
      <Categories categories={['one', 'two', 'three']} />,
    );

    expect(queryByText('one, two, three')).toBeTruthy();
  });

  it('renders nothing, if there are no categories', () => {
    const { queryByTestId, rerender } = render(<Categories />);

    expect(queryByTestId('categories').props.children).toBe('');

    rerender(<Categories categories={[]} />);
    expect(queryByTestId('categories').props.children).toBe('');
  });
});
