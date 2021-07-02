import React from "react";
import {Image, StyleSheet, Text, View, ScrollView } from "react-native";

//PANTALLA HOME
export const Card = ({ randomInfo}) => {

  return (
      <ScrollView style={styles.container}>
      <Text style={styles.title}>{randomInfo.strMeal}</Text>
      <Text>Instrucciones: {randomInfo.strInstructions}</Text>
      <Text>Categoria: {randomInfo.strCategory}</Text>
      <Text>Area: {randomInfo.strArea}</Text>
      <View style={styles.image}>
        <Image style={styles.image} source={{ uri: randomInfo.strMealThumb }} />
      </View>
    </ScrollView>
  );
};


//PANTALLA CATEGORIAS
export const CateRecetas = ({categoriaInfo}) => {
return (
    <ScrollView >
      <Text>{categoriaInfo.idCategory}</Text>
      <Text>{categoriaInfo.strCategory}</Text>
      <Text>{categoriaInfo.strCategoryDescription}</Text>
      <Image style={styles.image} source={{ uri: categoriaInfo.strCategoryThumb }} />
    </ScrollView>
  )};

  //PANTALLA AREAS
export const Regiones = ({regionesInfo}) => {

  return (
  <ScrollView>
        <Text>{regionesInfo.strMeal}</Text>
        <Image style={styles.image} source={{uri: regionesInfo.strMealThumb}}/>  
  </ScrollView>
    )};
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      margin: 0.5,
      borderColor: "#ffecb3",
      backgroundColor: "#bdc3c7",
     },
    title: {
     fontSize: 25,
     fontWeight: "bold", 
     alignSelf: "center",
    },
    image: {
     width: 300,
     height: 300,
     }
    });
  

