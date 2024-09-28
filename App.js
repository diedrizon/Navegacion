// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackDetailHome from './Screens/AnotherDatailsHome'; // Corrige el nombre si es necesario

export default function App() {
  return (
    <NavigationContainer>
      <StackDetailHome />
    </NavigationContainer>
  );
}
