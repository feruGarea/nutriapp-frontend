import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { fetchUsuarios } from './utils/api'; 

export default function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetchUsuarios().then(setUsuarios);
  }, []);

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Usuarios registrados:</Text>
      {usuarios.length > 0 ? (
        usuarios.map((u, i) => (
          <Text key={i}>{u.nombre} - {u.mail}</Text>
        ))
      ) : (
        <Text>No hay usuarios.</Text>
      )}
    </ScrollView>
  );
}



