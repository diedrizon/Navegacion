import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";

import Home from "./Screens/Home";
import Users from "./Screens/Users";
import DetailHome from "./Screens/DetailHome";
import Settings from "./Screens/Settings";
import AnotherDetailHome from "./Screens/AnotherDatailsHome";

const Tab = createBottomTabNavigator();

function Mytabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceenOptions={{
        tabBarActiveTintColor: "purple",
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={StackDetailHome}
        options={{
          tabBarLabel: "HomeScreen",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Users" component={Users} />
      options=
      {{
        tabBarLabel: "Users",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" size={30} color={color} />
        ),
      }}
    </Tab.Navigator>
  );
}

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Mytabs />
    </NavigationContainer>
  );
}
