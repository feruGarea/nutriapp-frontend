import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../screens/LoginScreen';

describe('LoginScreen', () => {
  it('renderiza inputs y botón de login, y simula escritura', () => {
    const mockNavigation = { replace: jest.fn() };
    const { getByText, getAllByDisplayValue } = render(<LoginScreen navigation={mockNavigation} />);

    expect(getByText('Email')).toBeTruthy();
    expect(getByText('Password')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();

    const inputs = getAllByDisplayValue('');
    const emailInput = inputs[0];

    fireEvent.changeText(emailInput, 'test@example.com');
    expect(emailInput.props.value).toBe('test@example.com');
  });

  it('navega al presionar login', () => {
    const mockNavigation = { replace: jest.fn() };
    const { getByText } = render(<LoginScreen navigation={mockNavigation} />);
    const button = getByText('Login');
    fireEvent.press(button);
    expect(mockNavigation.replace).toHaveBeenCalledWith('Main');
  });
});