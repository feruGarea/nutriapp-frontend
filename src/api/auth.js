const BASE_URL = 'https://staging.nutriapp.com/api';

export async function loginUser(email, password) {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mail: email, contraseña: password }),
    });
    return await res.json();
  } catch (err) {
    console.error('Error en login:', err);
    return null;
  }
}

export async function registerUser(name, email, password) {
  try {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre: name, mail: email, contraseña: password }),
    });
    return await res.json();
  } catch (err) {
    console.error('Error en registro:', err);
    return null;
  }
}
