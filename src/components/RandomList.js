import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "./Random";

const CardList = ({ randomR }) => {
  return (
    <View style={styles.container}>
      {randomR.meals.map((randomInfo, index) => (
        <Card key={index} randomInfo={randomInfo} />
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

export default CardList;