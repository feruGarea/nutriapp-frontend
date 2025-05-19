import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function NewIngredientScreen({ navigation }) {
  const [name, setName] = useState('');
  const [med, setMed] = useState('gr');

  const handleSave = () => {
    fetch('https://nutriapp-backend.onrender.com/api/ingredientes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre_ing: name, medicion: med })
    })
      .then(() => navigation.goBack())
      .catch(console.error);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Name</Text>
      <TextInput value={name} onChangeText={setName} style={{ borderWidth: 1, marginBottom: 12 }} />
      <Text>Measurement</Text>
      <TextInput value={med} onChangeText={setMed} style={{ borderWidth: 1, marginBottom: 12 }} />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}
