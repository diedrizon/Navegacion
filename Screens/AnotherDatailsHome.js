// AnotherDetailsHome.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import DetailHome from './DetailHome';
import AnotherDetailHome from './AnotherDatailsHome';

const Stack = createStackNavigator();

export default function StackDetailHome() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={Home} 
      />
      <Stack.Screen 
        name="DetailHome" 
        component={DetailHome} 
      />
      <Stack.Screen 
        name="AnotherDetailHome" 
        component={AnotherDetailHome} 
      />
    </Stack.Navigator>
  );
}
