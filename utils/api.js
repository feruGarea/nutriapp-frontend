const BASE_URL = 'https://nutriapp-backend.onrender.com/api';

export const fetchUsuarios = async () => {
  const res = await fetch(`${BASE_URL}/usuarios`);
  return res.json();
};
