import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Image} from "react-native";

const DATA = [
  {
    id: "1",
    title: "Estados Unidos",
    img: "https://www.lifeder.com/wp-content/uploads/2018/11/bandera-eeuu.png",
    regionData: "American",
  },
  {
    id: "2",
    title: "Britania",
    img: "https://img2.freepng.es/20180326/gre/kisspng-england-flag-of-the-united-kingdom-flag-of-great-b-england-5ab872a144d506.7267652915220374092819.jpg",
    regionData: "British",
  },
  {
    id: "3",
    title: "Japonesa",
    img: "https://www.muyjapones.com/wp-content/uploads/2019/07/La-bandera-japonesa-1.jpg",
    regionData: "Japanese",
  },
  {
    id:"4",
    title:"India",
    img: "https://cdn.pixabay.com/photo/2020/03/03/08/26/india-4897873_960_720.png",
    regionData: "Indian",
  },
  {
    id:"5",
    title:"Francia",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/200px-Flag_of_France.svg.png",
    regionData: "French",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Image style ={styles.img} source = {{uri:`${item.img}`}} />
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

export const Areas = ({navigation}) => {
  const [selectedId] = useState();

  const renderItem = ({ item}) => {
    const backgroundColor = item.id === selectedId ? "#bdc3c7" : "#bdc3c7";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {navigation.navigate("RegionLista")}}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 30,
  },
  img:{
      width: 110,
     height: 90, 
     borderRadius:10
  }
});
