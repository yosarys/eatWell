import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from './src/components/navegation/BarNavegation';
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./src/theme";

export default function App() {
  return (
    <PaperProvider theme={theme}>
     <NavigationContainer>
       <MyTabs/>
     </NavigationContainer>
  </PaperProvider>
  );
}



