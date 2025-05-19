import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { registerUser } from '../api/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function RegisterScreen({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [mail, setMail] = useState('');
  const [contraseña, setContraseña] = useState('');

  

const handleRegister = async () => {
  const result = await registerUser(nombre, mail, contraseña);

  if (result?.token) {
    await AsyncStorage.setItem('userToken', result.token);
    navigation.replace('Main');
  } else {
    alert('Registro fallido');
  }
};


  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Text>Nombre</Text>
      <TextInput value={nombre} onChangeText={setNombre} style={{ borderWidth: 1, marginBottom: 12 }} />
      <Text>Mail</Text>
      <TextInput value={mail} onChangeText={setMail} style={{ borderWidth: 1, marginBottom: 12 }} />
      <Text>Contraseña</Text>
      <TextInput secureTextEntry value={contraseña} onChangeText={setContraseña} style={{ borderWidth: 1, marginBottom: 12 }} />
      <Button title="Register" onPress={handleRegister} />
      <Button title="Back to Login" onPress={() => navigation.goBack()} />
    </View>
  );
}
