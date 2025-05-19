const BASE_URL = 'https://nutriapp-backend-vou4.onrender.com/api';
import AsyncStorage from '@react-native-async-storage/async-storage';


export async function fetchUsuarios() {
  const res = await fetch(`${BASE_URL}/usuarios`);
  return res.json();
}

export async function loginUser(mail, contraseña) {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mail, contraseña}),
    });
    return await res.json();
  } catch (err) {
    console.error('Error en login:', err);
    return null;
  }
}


export async function registerUser(nombre, mail, contraseña) {
  
  const result = await registerUser(nombre, mail, contraseña);
  if (result?.token) {
  await AsyncStorage.setItem('userToken', result.token);
  navigation.replace('Main'); // o Dashboard
} else {
  alert('Registro fallido');
}
 
}
