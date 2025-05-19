import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchUsuarios } from '../api/auth';

export default function DashboardScreen() {
  const [report, setReport] = useState([]);      
  const [usuarios, setUsuarios] = useState([]);



useEffect(() => {
  const fetchReport = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const res = await fetch(
        'https://nutriapp-backend.onrender.com/api/reports/daily?date=2025-05-14',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const contentType = res.headers.get('content-type');
      if (res.ok && contentType?.includes('application/json')) {
        const data = await res.json();
        setReport(data);
      } else {
        const text = await res.text();
        console.warn('⚠️ Respuesta no JSON:', text);
      }
    } catch (err) {
      console.error('❌ Error al cargar reporte:', err);
    }
  };

  fetchReport();
}, []);



export default function DashboardScreen() {
  const [report, setReport] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  

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
