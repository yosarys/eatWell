import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View} from "react-native";
import CardList from "../RandomList";
import { fetcheatWell } from "../../api";

const Home = () => {
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
      <View>
          <>{recetas.meals ? <CardList randomR={recetas}/> : null}</>
      </View>
      </ScrollView>

  );

};

const styles = StyleSheet.create({});
export default Home;
