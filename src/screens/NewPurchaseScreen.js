// screens/NewPurchaseScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function NewPurchaseScreen({ navigation }) {
  const [ingId, setIngId] = useState('');
  const [qty, setQty] = useState('');
  const [price, setPrice] = useState('');

  const handleSave = () => {
    fetch('http://localhost:192.168.0.122/api/compras', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id_usuario: 1,
        id_ing: parseInt(ingId, 10),
        cantidad_compra: parseFloat(qty),
        precio_total: parseFloat(price),
        fecha_compra: new Date().toISOString()
      })
    })
      .then(() => navigation.goBack())
      .catch(console.error);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Ingredient ID</Text>
      <TextInput
        value={ingId}
        onChangeText={setIngId}
        style={{ borderWidth: 1, marginBottom: 12 }}
      />

      <Text>Quantity</Text>
      <TextInput
        value={qty}
        onChangeText={setQty}
        style={{ borderWidth: 1, marginBottom: 12 }}
      />

      <Text>Price Total</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        style={{ borderWidth: 1, marginBottom: 12 }}
      />

      <Button title="Save" onPress={handleSave} />
    </View>
  );
}
