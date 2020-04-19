import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Checkbox from './Checkbox';
import getCheckboxIconName from '../../../helpers/getCheckboxIconName';

jest.mock('../../../helpers/getCheckboxIconName');

const props = {
  label: 'label',
  isSelected: true,
  onSelect: jest.fn(),
};

describe('<Checkbox />', () => {
  it('renders checked checkbox', () => {
    const { queryByText } = render(<Checkbox {...props} />);

    expect(getCheckboxIconName).toHaveBeenCalledWith('on');
    expect(queryByText(props.label)).toBeTruthy();
  });

  it('renders unchecked checkbox', () => {
    const { queryByText } = render(<Checkbox {...props} isSelected={false} />);

    expect(getCheckboxIconName).toHaveBeenCalledWith('off');
    expect(queryByText(props.label)).toBeTruthy();
  });

  it('fires `onSelect` when clicked', () => {
    const { queryByRole } = render(<Checkbox {...props} />);

    fireEvent.press(queryByRole('button'));

    expect(props.onSelect).toHaveBeenCalled();
  });
});
