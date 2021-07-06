import React, { useEffect, useState } from "react";
import {StyleSheet,ImageBackground,SafeAreaView} from "react-native";
import { ListaCategorias } from "../../api";
import Header from "../Header";
import CategoryData from "../CategoriaList";

export const CategoriaScreen = () => {
const [secciones, setsecciones] = useState({});

  const getsecciones = async () => {
    const response = await ListaCategorias();

    setsecciones(response);
  };

  useEffect(() => {
    getsecciones();
  }, []);

  return (
    <SafeAreaView style={{flex: 1,flexDirection: "column"}}>
      <Header/>
    <ImageBackground source= {require('../../../assets/fondo2.jpg')} style={{flex: 1,resizeMode: "cover",justifyContent: "center"}}>
        <>{secciones.categories ? <CategoryData ListaCategoria={secciones}/> : null}</>
      </ImageBackground>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({});

