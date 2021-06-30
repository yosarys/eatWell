import React from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "./InfoPantallas";
import { CateRecetas } from "./InfoPantallas";

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


//CATEGORIAS DE RECETAS
export const Category = ({cate}) => {
  return (
    <View style={styles.container}>
      {cate.categories.map((categoriaInfo, index) => (
        <CateRecetas key={index} categoriaInfo={categoriaInfo} />
      ))}
    </View>  
  );
};

//RECETAS AREAS
export const RegionR = ({area}) => {
  return (
    <View style={styles.container}>
      {area.meals.map((regionesInfo, index) => (
        <Regiones key={index} regionesInfo={regionesInfo} />
      ))}
    </View>  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },
});
