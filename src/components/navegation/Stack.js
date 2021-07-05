import * as React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {RegionScreen} from '../screens/RegionLista';
import { Areas } from '../screens/Region';
import { HomeScreen } from '../screens/Home';
import SearchResults from '../screens/SearchResults';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export const RegionResult=()=>{
    return(
        <Stack.Navigator>
          <Stack.Screen
          name="Region"
          component={Areas}
          options={{headerShown: false}}
         />
        <Stack.Screen
          name="RegionLista"
          component={RegionScreen}
          options={{headerShown: false}}
        />
        </Stack.Navigator>
    );
}

export const BusquedaResult=()=>{
  return(
       <Stack.Navigator>
              <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{headerShown: false}}
              />
              <Stack.Screen
                  name="SearchResults"
                  component={SearchResults}
                  options = {{headerShown: false}}
             />
          </Stack.Navigator>
  );
}