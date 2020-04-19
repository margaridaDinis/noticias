import getCheckboxIconName from './getCheckboxIconName';

it('returns icon name with passed suffix', () => {
  expect(getCheckboxIconName('on')).toBe('ios-radio-button-on');
  expect(getCheckboxIconName('off')).toBe('ios-radio-button-off');
});

it('falls back to off', () => {
  expect(getCheckboxIconName()).toBe('ios-radio-button-off');
});
