import React from 'react';
import { render } from '@testing-library/react-native';
import App from './App';

test('renders app correctly', () => {
  const { getByText } = render(<App />);
  expect(getByText(/NutriApp/i)).toBeTruthy();
});

