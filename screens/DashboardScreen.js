import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function DashboardScreen() {
  const [report, setReport] = useState([]);

  useEffect(() => {
    fetch('http://localhost:192.168.0.122/api/reports/daily?date=2025-05-14')
      .then(res => res.json())
      .then(setReport)
      .catch(console.error);
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
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
