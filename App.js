import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Image} from "react-native";
import Home from './src/components/screens/Home';

function LogoTitle() {
  return (
    <Image
      style={{ width: 110, height: 110, marginLeft:-30}}
      source={require('./assets/AppEatWell.png')}
    />
  );
}
const Stack = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#ff5722' } }}>
          <Stack.Screen name="Home" component={Home} options={{ headerTitle: props => <LogoTitle {...props} /> }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}



