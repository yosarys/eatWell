import React from "react";
import {Image, ScrollView, StyleSheet, Text, View } from "react-native";

export const Card = ({ randomInfo}) => {

  return (
    <ScrollView style={styles.container}>
    <Text style={styles.title}>{randomInfo.strMeal}</Text>
    <Image style={styles.image} source={{ uri: randomInfo.strMealThumb }} />
    <Text>Instrucciones:</Text>
    <Text>{randomInfo.strInstructions}</Text>
    <Text>Categoria:</Text>
    <Text>{randomInfo.strCategory}</Text>
    <Text>Area:</Text>
    <Text>{randomInfo.strArea}</Text>
    </ScrollView>
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
