import React from "react";
import {Image, StyleSheet, Text, ScrollView,Button,Linking} from "react-native";
import theme from "../theme";

export const Card = ({ randomInfo}) => {

  return (
    <ScrollView style={styles.containerHome}>
      <Text style={styles.titleH}>{randomInfo.strMeal}</Text>
      <Image style={styles.imageHome} source={{ uri: randomInfo.strMealThumb }} />
      <Text style ={styles.line}></Text>
      <Text style={styles.subtitleHome}>Instrucciones:</Text>
      <Text style={styles.textHome}>{randomInfo.strInstructions}{"\n"}</Text>
      <Text style ={styles.line}></Text>
      <Text style={styles.subtitleHome}>Categoria:</Text>
      <Text style={styles.textHome}>{randomInfo.strCategory}</Text>
      <Text style ={styles.line}></Text>
      <Text style={styles.subtitleHome}>Area:</Text>
      <Text style={styles.textHome}>{randomInfo.strArea}</Text>
      <Text style ={styles.line}></Text>
      <Button
        title="Ver Procedimiento"
        color= "#ff5722"
        onPress={() => Linking.openURL(randomInfo.strYoutube)}/>
    </ScrollView>
  );
};

export const CateRecetas = ({titulo,imagen}) => {
return (
    <ScrollView style= {styles.conteinerCat}>
      <Text style={styles.titleC}>{titulo}</Text>
      <Image style={styles.imageCategoria} source={{ uri: `${imagen}`}} />
    </ScrollView>
  )};

export const Regiones = ({regionesInfo}) => {

  return (
  <ScrollView style={styles.conteinerReg}>
        <Image style={styles.imageRegiones} source={{uri: regionesInfo.strMealThumb}}/>  
        <Text style={styles.titleR}>{regionesInfo.strMeal}</Text>
  </ScrollView>
    )};
  
  const styles = StyleSheet.create({
    containerHome: {
      padding: 20,
      margin: 25,
      borderRadius:10,
      borderColor:  theme.colors.grey,
      borderWidth: 2, 
      backgroundColor: theme.colors.white,
      opacity:0.9,
     },
    titleH: {
     fontSize: 30,
     fontWeight: "bold", 
     alignSelf: "center",
     fontStyle: "italic",
    },
    textHome:{
      fontSize: 17,
      textAlign: "justify"
    },
    subtitleHome:{
      fontSize: 20,
      fontWeight: 'bold',
      fontStyle: "italic",
    },
    imageHome: {
     width: '100%',
     height: 300,
     margin:2,
     resizeMode: "center",
     borderRadius:20,
     },
     line:{
      borderBottomColor: theme.colors.grey,
      borderBottomWidth: 1,
     },
   conteinerCat:{
    flex:1,
    padding: 15,
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
  imageCategoria: {
   width: "100%",
   height: 90,
   resizeMode: "center",
   },
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
    
  

