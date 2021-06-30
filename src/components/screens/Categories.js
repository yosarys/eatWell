import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, SafeAreaView} from "react-native";
import { ListaCategorias } from "../../api";
import { Category } from "../Map";

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
    <SafeAreaView>
    <ScrollView>
        <>{secciones.categories ? <Category cate={secciones}/> : null}</>
    </ScrollView>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({});

