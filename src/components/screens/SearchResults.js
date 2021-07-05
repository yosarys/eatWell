import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ActivityIndicator, Title } from "react-native-paper";
import { BuscarRecetas} from "../../api";
import Header from "../Header";
import SearchData from "../SearchList";

const SearchResults =() => {

  const [recetas, setrecetas] = useState(null);
  const [error, setError] = useState("");

  const getrecetas = async () => {
    let result;

     result = await BuscarRecetas();

    setrecetas(result);
  };

  useEffect(() => {
    getrecetas();
  }, []);

  return (
   <View>
      <Header/>
      {recetas && error ? <ActivityIndicator size="large" /> : null}
      <>{recetas ? <SearchData Resultados={recetas}/> : null}</>
      {error ? <Title>{error}</Title> : null}  
   </View>
  );
};

const styles = StyleSheet.create({});

export default SearchResults;
