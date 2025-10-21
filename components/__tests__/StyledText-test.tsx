import { render } from '@testing-library/react-native';
import React from 'react';
import { MonoText } from '../StyledText';

// Mock the Themed module so we don't depend on theme logic in this test
jest.mock('../Themed', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    Text: ({ children, style, ...rest }: any) => (
      <Text testID="mono-text" style={style} {...rest}>
        {children}
      </Text>
    ),
  };
});

describe('<MonoText />', () => {
  it('renders its children', () => {
    const { getByText } = render(<MonoText>Snapshot test!</MonoText>);
    expect(getByText('Snapshot test!')).toBeTruthy();
  });

  it('applies the SpaceMono font family', () => {
    const { getByTestId } = render(<MonoText>Test</MonoText>);
    const element = getByTestId('mono-text');
    const style = Array.isArray(element.props.style)
      ? Object.assign({}, ...element.props.style)
      : element.props.style;

    expect(style.fontFamily).toBe('SpaceMono');
  });

  it('renders consistently (snapshot)', () => {
    const { toJSON } = render(<MonoText>Snapshot test!</MonoText>);
    expect(toJSON()).toMatchSnapshot();
  });
});