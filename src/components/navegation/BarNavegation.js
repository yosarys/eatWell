import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HomeScreen} from '../screens/Home';
import {CategoriaScreen} from '../screens/Categories';
import { RegionScreen } from '../screens/RegionLista';
import { RegionResult } from './Stack';
import theme from '../../theme';
import { BusquedaResult } from './Stack';

/*
  https://reactnavigation.org/docs/material-bottom-tab-navigator/
  Se implemento el Botton Tab para un manejo más facil y dinamico para el uso de la app.
*/
const Tab = createMaterialBottomTabNavigator();

const  MyTabs =() =>{
  return (
    //Cambio de color de la barra, y de iconos al momento de ser presionados.
    //Definicion de pantallas que estaran contenidas dentro de otra.
  <Tab.Navigator
       initialRouteName="Home"
       activeColor="#fdfefe"
       inactiveColor="#bdc3c7"
       barStyle={{ backgroundColor: theme.colors.orange }}
       >     
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        name="BusquedaResult"
        component={BusquedaResult}
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
        name="Regiones"
        component={RegionResult}
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