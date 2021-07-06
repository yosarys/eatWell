import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { buscarNombre } from "../api";
import theme from "../theme";

const SearchRecetas = ({ navigation }) => {
  const [search, setSearch] = useState("");

  return (
    <View style = {styles.contenedor}>
      <Searchbar style={styles.barra}
        placeholder="Busque recetas por nombre"
        value={search}
        onChangeText={setSearch}
        onIconPress={() => navigation.navigate("SearchResults",buscarNombre({FiltroBuscar:search}))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor:{
    marginHorizontal: 7,
    marginVertical:7,
  },
  barra:{
    borderRadius:10,
    backgroundColor: theme.colors.grey,
    opacity: 0.7
  }
});

export default SearchRecetas;
