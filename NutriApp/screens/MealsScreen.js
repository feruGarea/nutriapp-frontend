import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

export default function MealsScreen({ navigation }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:192.168.0.122/api/comidas')
      .then(res => res.json())
      .then(setMeals)
      .catch(console.error);
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={meals}
        keyExtractor={item => item.id_comida.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 8 }}>
            <Text>{item.nombre} ({item.tipo_comida})</Text>
          </View>
        )}
      />
      <Button title="Add Meal" onPress={() => navigation.navigate('NewMeal')} />
    </View>
  );
}
