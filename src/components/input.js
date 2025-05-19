import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input(props) {
  return (
    <TextInput
      style={[styles.input, props.style]}
      placeholderTextColor="#999"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 12,
    color: '#333',
    backgroundColor: '#fff',
  },
});
