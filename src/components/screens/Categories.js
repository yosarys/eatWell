import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, SafeAreaView} from "react-native";
import { ListaCategorias } from "../../api";
import { Category } from "../Map";

export const CategoriaScreen = ({navigation}) => {
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
      <View>
        <>{secciones.categories ? <Category cate={secciones} navigation={navigation} /> : null}</>
      </View>
    </ScrollView>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({});

