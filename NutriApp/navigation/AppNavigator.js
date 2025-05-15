// navigation/AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator }  from '@react-navigation/bottom-tabs';

import LoginScreen             from '../screens/LoginScreen';
import RegisterScreen          from '../screens/RegisterScreen';
import DashboardScreen         from '../screens/DashboardScreen';
import IngredientsScreen       from '../screens/IngredientsScreen';
import NewIngredientScreen     from '../screens/NewIngredientScreen';
import PurchasesScreen         from '../screens/PurchasesScreen';
import NewPurchaseScreen       from '../screens/NewPurchaseScreen';
import MealsScreen             from '../screens/MealsScreen';
import NewMealScreen           from '../screens/NewMealScreen';
import MealDetailScreen        from '../screens/MealDetailScreen';

const Stack = createNativeStackNavigator();
const Tab   = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard"   component={DashboardScreen} />
      <Tab.Screen name="Ingredients" component={IngredientsScreen} />
      <Tab.Screen name="Purchases"   component={PurchasesScreen} />
      <Tab.Screen name="Meals"       component={MealsScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login"    component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Main"     component={MainTabs} />

      {/* Screens accesibles desde tabs */}
      <Stack.Screen name="NewIngredient" component={NewIngredientScreen} />
      <Stack.Screen name="NewPurchase"   component={NewPurchaseScreen} />
      <Stack.Screen name="NewMeal"       component={NewMealScreen} />
      <Stack.Screen name="MealDetail"    component={MealDetailScreen} />
    </Stack.Navigator>
  );
}
