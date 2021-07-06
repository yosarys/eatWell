import React, { useEffect, useState } from "react";
import { StyleSheet,View,ImageBackground} from "react-native";
import {CardList} from '../Map';
import { fetcheatWell } from "../../api";
import Header from "../Header";
import SearchRecetas from "../SearchRecetas";

export const HomeScreen = ({navigation}) => {
const [recetas, setrecetas] = useState({});

  const getrecetas = async () => {
    const response = await fetcheatWell();

    setrecetas(response);
  };

  useEffect(() => {
    getrecetas();
  }, []);

  return (
    <View style={{flex: 1,flexDirection: "column"}}>
      <Header/>
      <ImageBackground source= {require('../../../assets/fondo.jpg')} style={{flex: 1}}>
          <SearchRecetas navigation={navigation}/>
          <>{recetas.meals ? <CardList randomR={recetas}/> : null}</>
      </ImageBackground>  
    </View>
  );

};

const styles = StyleSheet.create({});
