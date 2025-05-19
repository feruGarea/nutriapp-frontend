import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Input from '../components/input';
import Button from '../components/Button';
import { loginUser } from '../api/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchUsuarios } from '../api/auth';



export default function LoginScreen({ navigation }) {
  const [mail, setMail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');
    const result = await loginUser(mail, contraseña);
    if (result?.token) {
      await AsyncStorage.setItem('userToken', result.token);
      navigation.replace('Main');
    } else {
      setError('Credenciales inválidas');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Input placeholder="Correo electrónico" value={mail} onChangeText={setMail} keyboardType="email-address" />
      <Input placeholder="Contraseña" value={contraseña} onChangeText={setContraseña} secureTextEntry />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button text="Ingresar" onPress={handleLogin} />
      <Button text="Crear cuenta" type="outline" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title:     { fontSize: 28, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
  error:     { color: 'red', marginVertical: 8, textAlign: 'center' },
});

