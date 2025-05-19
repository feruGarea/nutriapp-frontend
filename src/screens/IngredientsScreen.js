import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { loginUser, registerUser } from '../api/auth';


export default function IngredientsScreen({ navigation }) {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch('https://nutriapp-backend.onrender.com/api/ingredientes')
      .then(res => res.json())
      .then(setIngredients)
      .catch(console.error);
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={ingredients}
        keyExtractor={item => item.id_ing.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 8 }}>
            <Text>{item.nombre_ing} ({item.medicion})</Text>
          </View>
        )}
      />
      <Button title="Add Ingredient" onPress={() => navigation.navigate('NewIngredient')} />
    </View>
  );
}
