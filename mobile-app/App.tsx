import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import SoldScreen from './src/screens/SoldScreen';
import FloorPlansScreen from './src/screens/FloorPlansScreen';
import ContactScreen from './src/screens/ContactScreen';
import { Colors } from './src/constants/Colors';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Sold') {
              iconName = focused ? 'checkmark-circle' : 'checkmark-circle-outline';
            } else if (route.name === 'Floor Plans') {
              iconName = focused ? 'document' : 'document-outline';
            } else if (route.name === 'Contact') {
              iconName = focused ? 'call' : 'call-outline';
            } else {
              iconName = 'home-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.gray,
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Current Listings' }}
        />
        <Tab.Screen 
          name="Sold" 
          component={SoldScreen}
          options={{ title: 'Sold Properties' }}
        />
        <Tab.Screen 
          name="Floor Plans" 
          component={FloorPlansScreen}
          options={{ title: 'Floor Plans' }}
        />
        <Tab.Screen 
          name="Contact" 
          component={ContactScreen}
          options={{ title: 'Contact Us' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}