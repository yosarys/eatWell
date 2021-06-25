import React, { useEffect, useState } from "react";
import CardList from "../RandomList";
import { fetcheatWell } from "../../api";


import { StyleSheet, View} from "react-native";


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
      
      <View>
          <>{recetas.meals ? <CardList randomR={recetas}/> : null}</>
      </View>

  );

};

const styles = StyleSheet.create({});

export default Home;
