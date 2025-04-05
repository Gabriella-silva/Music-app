import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Usuario from './screens/Perfil.js';
import Playlist from './screens/Playlist.js';
import Home from './screens/HomeScreens.js';
import { NonBinary } from 'lucide-react-native';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer> 
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#F8B4CD', 
          headerShown:false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (  
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Lista de música"
          component={Playlist}
          options={{
            tabBarLabel: 'Playlist',
            tabBarIcon: ({ color, size }) => (  
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Usuario}
          options={{
            tabBarLabel: 'Usuario',
            tabBarIcon: ({ color, size }) => (  
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer> 
  );
}
