import React from 'react';
import { render } from '@testing-library/react-native';
import MealsScreen from '../screens/MealsScreen';

describe('MealsScreen', () => {
  it('renderiza correctamente', () => {
    render(<MealsScreen />);
  });
});
