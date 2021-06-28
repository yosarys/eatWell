import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HomeScreen } from './screens/Home';
import {CategoriaScreen} from './screens/Categories';
import { RegionScreen } from './screens/Region';


const Tab = createMaterialBottomTabNavigator();

const  MyTabs =() =>{
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />), 
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoriaScreen}
        options={{
          tabBarLabel: 'Categorias',
          tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="animation-outline" color={color} size={26} />),
        }}
      />
      <Tab.Screen
        name="International"
        component={RegionScreen}
        options={{
          tabBarLabel: 'Internacional',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map-search-outline" color={color} size={26} />),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;