import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View} from "react-native";
import CardList from "../Map";
import { fetcheatWell } from "../../api";
import Header from "../Header";

export const HomeScreen = () => {
const [recetas, setrecetas] = useState({});

  const getrecetas = async () => {
    const response = await fetcheatWell();

    setrecetas(response);
  };

  useEffect(() => {
    getrecetas();
  }, []);

  return (
    <ScrollView>
      <Header/>
      <View>
          <>{recetas.meals ? <CardList randomR={recetas}/> : null}</>
      </View>
      </ScrollView>

  );

};

const styles = StyleSheet.create({});
