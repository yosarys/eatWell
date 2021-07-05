import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Image,View} from "react-native";
import { elergirReg } from "../../api";
import theme from "../../theme";
import Header from "../../components/Header";

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
    title: "China",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Zeng_Liansong%27s_proposal_for_the_PRC_flag.svg/220px-Zeng_Liansong%27s_proposal_for_the_PRC_flag.svg.png",
    regionData: "Chinese",
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
  {
    id:"6",
    title:"Italiana",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png",
    regionData: "Italian",
  },
  {
    id:"7",
    title:"Turquia",
    img: "https://i.pinimg.com/originals/db/a5/73/dba5739fd56d744a822f490ff915d2eb.png",
    regionData: "Turkish",
  },
  {
    id:"8",
    title:"España",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png",
    regionData: "Spanish",
  },
  {
    id:"9",
    title:"Portugal",
    img: "https://www.lifeder.com/wp-content/uploads/2019/11/PortugalActual.png",
    regionData: "Portuguese",
  },
  {
    id:"10",
    title:"Mexicana",
    img: "https://www.adverthia.com/wp-content/uploads/2020/02/Bandera-de-Me%CC%81xico.png",
    regionData: "Mexican"
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style= {{flex:1, flexDirection: 'row'}}>
    <Image style ={styles.img} source = {{uri:`${item.img}`}} />
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    </View>
  </TouchableOpacity>
);

export const Areas = ({navigation}) => {
  const [selectedId] = useState();

  const renderItem = ({ item}) => {
    const backgroundColor = item.id === selectedId ? "#fdfefe" : "#fdfefe";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {navigation.navigate("RegionLista",elergirReg({FiltroRegion:item.regionData}))}}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView>
      <Header/>
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
    marginVertical: 3,
    marginHorizontal: 8,
    margin: 10,
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 2, 
    borderColor: theme.colors.orangeR,
    borderRadius: 9,
  },
  title: {
    fontSize: 30,
    margin: 35,
    fontWeight: "bold",
  },
  img:{
      width: 180,
     height: 120, 
     borderRadius:7
  }
});
