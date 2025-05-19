import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchUsuarios } from '../api/auth';



export default function DashboardScreen() {
  const [report, setReport] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://nutriapp-backend.onrender.com/api/reports/daily?date=2025-05-14')
      .then(res => res.json())
      .then(setReport)
      .catch(console.error);
  }, []);

  useEffect(() => {
    fetchUsuarios().then(setUsuarios).catch(console.error);
  }, []);

  return (
    
      
    
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Usuarios:</Text>
      {usuarios.map((u, i) => (
        <Text key={i}>{u.nombre}</Text>
      ))}
      <Text style={{ fontSize: 18, marginBottom: 12 }}>Daily Summary</Text>
      <FlatList
        data={report}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 8 }}>
            <Text>{item.comida} - {item.calories} kcal - ARS {item.cost}</Text>
          </View>
        )}
      />
    </View>
  );
}
