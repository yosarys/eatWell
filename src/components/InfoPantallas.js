import React from "react";
import {Image, StyleSheet, Text, View } from "react-native";

const Card = ({ randomInfo}) => {

  return (
      <View style={styles.container}>
      <Text style={styles.title}>{randomInfo.strMeal}</Text>
      <Text>{'\n'}Instrucciones {'\n'}{randomInfo.strInstructions}{'\n'}{'\n'}</Text>
      <Text>Categoria {'\n'}{randomInfo.strCategory}{'\n'}{'\n'}</Text>
      <Text>Area {'\n'}{randomInfo.strArea}</Text>
      <View style={styles.image}>
        <Image style={styles.image} source={{ uri: randomInfo.strMealThumb }} />
      </View>
    </View>
  );
};


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

export default Card;