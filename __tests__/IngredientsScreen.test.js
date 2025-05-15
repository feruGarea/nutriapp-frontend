import React from 'react';
import { render } from '@testing-library/react-native';
import IngredientsScreen from '../screens/IngredientsScreen';

describe('IngredientsScreen', () => {
  it('renderiza correctamente', () => {
    render(<IngredientsScreen />);
  });
});
