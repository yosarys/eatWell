import React from "react";
import {Image, StyleSheet, Text, View, ScrollView } from "react-native";
import theme from "../theme";

//PANTALLA HOME
export const Card = ({ randomInfo}) => {

  return (
      <ScrollView style={styles.containerHome}>
      <Text style={styles.titleH}>{randomInfo.strMeal}</Text>
      <Image style={styles.imageHome} source={{ uri: randomInfo.strMealThumb }} />
      <Text style={styles.subtitleHome}>Instrucciones:</Text>
      <Text style={styles.textHome}>{randomInfo.strInstructions}{"\n"}</Text>
      <Text style={styles.subtitleHome}>Categoria:</Text>
      <Text styles={styles.textHome}>{randomInfo.strCategory}</Text>
      <Text styles={styles.subtitleHome}>Area:</Text>
      <Text style={styles.textHome}>{randomInfo.strArea}</Text>
    </ScrollView>
  );
};


//PANTALLA CATEGORIAS
export const CateRecetas = ({categoriaInfo}) => {
return (
    <ScrollView >
      <Text>{categoriaInfo.strCategory}</Text>
      <Text>{categoriaInfo.strCategoryDescription}</Text>
      <Image style={styles.imageCategoria} source={{ uri: categoriaInfo.strCategoryThumb }} />
    </ScrollView>
  )};

  //PANTALLA AREAS
export const Regiones = ({regionesInfo}) => {

  return (
  <ScrollView style={styles.conteinerReg}>
        <Image style={styles.imageRegiones} source={{uri: regionesInfo.strMealThumb}}/>  
        <Text style={styles.titleR}>{regionesInfo.strMeal}</Text>
  </ScrollView>
    )};
  
  const styles = StyleSheet.create({
    //ESTILO PANTALLA HOME
    containerHome: {
      padding: 20,
      margin: 4,
      borderColor:  theme.colors.orangeR,
      borderWidth: 2, 
      backgroundColor: theme.colors.white,
     },
    titleH: {
     fontSize: 30,
     fontWeight: "bold", 
     alignSelf: "center",
    },
    textHome:{
      fontSize: 15,
      textAlign: "justify"
    },
    subtitleHome:{
      fontSize: 20,
      fontWeight: 'bold',
    },
    imageHome: {
     width: 400,
     height: 280,
     margin:10,
     resizeMode: "center",
     borderRadius:20,
     },
    //ESTILO PANTALLA CATEGORIAS
   conteinerCat:{
    flex:1,
    padding: 15,
    margin: 5,
    marginHorizontal:5,
    marginVertical:5,
    backgroundColor: theme.colors.white,
    borderWidth: 3,
    borderColor: theme.colors.green,
    borderRadius: 6,
    paddingBottom: 5
  },
  titleC:{
   fontSize: 25,
   fontWeight: "bold", 
   alignSelf: "center",
   color: theme.colors.orange
 },
 textCategoria:{
   fontSize: 15,
   textAlign: "justify"
 },
  imageCategoria: {
   width: "100%",
   height: 90,
   resizeMode: "center",
   },
  //ESTILO PANTALLA REGIONES
  conteinerReg:{
   flex:1,
   marginHorizontal:15,
   marginVertical:20,
   backgroundColor: theme.colors.green,
   marginTop: 1,
   borderWidth: 3,
   borderColor: theme.colors.green,
 },
 titleR:{
  fontSize: 30,
  marginTop: 15,
  margin: 15,
  fontWeight:"bold", 
  alignSelf :"center",
  color: theme.colors.white,
},
 imageRegiones: {
  width: '100%',
  height: 375,
  resizeMode: "cover",
  },
});
    
  

