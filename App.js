import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from './src/components/navegation/BarNavegation';


export default function App() {
  return (
    <NavigationContainer>
    <MyTabs/>
  </NavigationContainer>
  );
}



