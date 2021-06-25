import React, { useEffect, useState } from "react";
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
          <Text>Bienvenido a EatWell</Text>
      </View>

  );

};

const styles = StyleSheet.create({});

export default Home;
