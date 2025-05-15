import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

export default function PurchasesScreen({ navigation }) {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetch('http://localhost:192.168.0.122/api/compras')
      .then(res => res.json())
      .then(setPurchases)
      .catch(console.error);
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={purchases}
        keyExtractor={item => item.id_compra.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 8 }}>
            <Text>{item.id_ing} - {item.cantidad_compra} @ ARS {item.precio_total}</Text>
          </View>
        )}
      />
      <Button title="Add Purchase" onPress={() => navigation.navigate('NewPurchase')} />
    </View>
  );
}
