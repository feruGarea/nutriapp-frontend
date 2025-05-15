import React from 'react';
import { render } from '@testing-library/react-native';
import RegisterScreen from '../screens/RegisterScreen';


describe('RegisterScreen', () => {
  it('renderiza formulario de registro',  () => {
    render(<RegisterScreen />);
  });
});