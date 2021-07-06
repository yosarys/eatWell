import React, { useEffect, useState } from "react";
import { StyleSheet, View,ImageBackground } from "react-native";
import { BuscarRecetas} from "../../api";
import Header from "../Header";
import SearchData from "../SearchList";

const SearchResults =() => {

  const [recetas, setrecetas] = useState(null);

  const getrecetas = async () => {
    let result;

     result = await BuscarRecetas();

    setrecetas(result);
  };

  useEffect(() => {
    getrecetas();
  }, []);

  return (
   <View style={{flex: 1,flexDirection: "column"}}>
      <Header/>
      <ImageBackground source= {require('../../../assets/fondo.jpg')} style={{flex: 1}}>
        <>{recetas ? <SearchData Resultados={recetas}/> : null}</>
      </ImageBackground>
   </View>
  );
};

const styles = StyleSheet.create({});

export default SearchResults;
