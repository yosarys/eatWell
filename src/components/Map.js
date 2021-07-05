import React from "react";
import { StyleSheet, View,Text} from "react-native";
import { Card } from "./InfoPantallas";
import { Regiones } from "./InfoPantallas";
import theme from "../theme";

//RECETAS RANDOM
export const CardList = ({randomR}) => {
  return (
    <View style={styles.container}>
      {randomR.meals.map((randomInfo, index) => (
        <Card key={index} randomInfo={randomInfo} />
      ))}
    </View>  
  );
};

//RECETAS AREAS
export const RegionR = ({area}) => {
  return (
    <View>
       <Text style={styles.title}>Recetas</Text>
      {area.meals.map((regionesInfo, index) => (
        <Regiones key={index} regionesInfo={regionesInfo} />
      ))}
    </View>  
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold", 
    paddingVertical: 8,
    marginVertical:20,
    borderWidth: 3,
    borderColor: theme.colors.grey,
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
  }
})
