const BASE_URL = 'http://192.168.0.122/nutriapp-backend/api'; 
export const fetchUsuarios = async () => {
  const res = await fetch(`${BASE_URL}/usuarios`);
  return res.json();
};
