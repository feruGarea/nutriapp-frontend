const BASE_URL = 'https://nutriapp-backend-vou4.onrender.com/api/comidas';


export async function getComidas(token) {
  try {
    const res = await fetch(`${BASE_URL}/meals`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return await res.json();
  } catch (err) {
    console.error('Error al obtener comidas:', err);
    return [];
  }
}

export async function postComida(mealData, token) {
  try {
    const res = await fetch(`${BASE_URL}/meals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(mealData),
    });
    return await res.json();
  } catch (err) {
    console.error('Error al guardar comida:', err);
    return null;
  }
}
