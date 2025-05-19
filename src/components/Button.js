import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ text, onPress, type = 'primary', style }) {
  const isOutline = type === 'outline';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        isOutline ? styles.outline : styles.primary,
        style,
      ]}
    >
      <Text style={[styles.text, isOutline && styles.textOutline]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
  },
  primary: {
    backgroundColor: '#007AFF',
  },
  outline: {
    borderWidth: 1,
    borderColor: '#007AFF',
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  textOutline: {
    color: '#007AFF',
  },
});
