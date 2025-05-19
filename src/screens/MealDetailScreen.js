import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

export default function MealDetailScreen({ route, navigation }) {
  const { id } = route.params;
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(`https://nutriapp-backend.onrender.com/api/comidas/${id}/ingredientes`)
      .then(res => res.json())
      .then(setIngredients)
      .catch(console.error);
  }, [id]);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={ingredients}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 8 }}>
            <Text>{item.ingrediente.nombre_ing}: {item.cantidad_comida}</Text>
          </View>
        )}
      />
      <Button title="Add Ingredient" onPress={() => navigation.navigate('AddIngredient', { id })} />
    </View>
  );
}
