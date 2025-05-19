import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function NewMealScreen({ navigation }) {
  const [dayId, setDayId] = useState('1');
  const [name, setName] = useState('');
  const [type, setType] = useState('almuerzo');

  const handleSave = () => {
    fetch('http://localhost:192.168.0.122/api/comidas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id_dia: parseInt(dayId,10), nombre: name, tipo_comida: type })
    })
      .then(() => navigation.goBack())
      .catch(console.error);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Day ID</Text>
      <TextInput value={dayId} onChangeText={setDayId} style={{ borderWidth: 1, marginBottom: 12 }} />
      <Text>Name</Text>
      <TextInput value={name} onChangeText={setName} style={{ borderWidth: 1, marginBottom: 12 }} />
      <Text>Type</Text>
      <TextInput value={type} onChangeText={setType} style={{ borderWidth: 1, marginBottom: 12 }} />
      <Button title="Save" onPress={handleSave} />
    </View>)}

