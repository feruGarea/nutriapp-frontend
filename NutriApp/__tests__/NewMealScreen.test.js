import React from 'react';
import { render } from '@testing-library/react-native';
import NewMealScreen from '../screens/NewMealScreen';


describe('NewMealScreen', () => {
  it('renderiza formulario para nueva comida', () => {
    render(<NewMealScreen />);
  });
});