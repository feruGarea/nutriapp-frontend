import React from 'react';
import { render } from '@testing-library/react-native';
import DashboardScreen from '../screens/DashboardScreen';

describe('DashboardScreen', () => {
  it('renderiza correctamente', () => {
    render(<DashboardScreen navigation={{ navigate: jest.fn() }} />);
  });
});
