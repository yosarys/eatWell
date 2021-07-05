import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { buscarNombre } from "../api";

const SearchRecetas = ({ navigation }) => {
  const [search, setSearch] = useState("");

  return (
    <View>
      <Searchbar
        placeholder="Busque recetas por nombre"
        value={search}
        onChangeText={setSearch}
        onIconPress={() => navigation.navigate("SearchResults",buscarNombre({FiltroBuscar:search}))}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchRecetas;
