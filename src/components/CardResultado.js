import React from 'react';
import {Text,View, Image, StyleSheet,Button, Linking} from 'react-native';
import theme from '../theme';

const CardSearch = ({titulo,imagen,instrucciones,categoria,area,video}) => {
    return ( 
        <View style={styles.containerBusqueda}>
        <Text style={styles.titleB}>{titulo}</Text>
        <Image style={styles.imageB} source={{ uri: `${imagen}`}}/>
        <Text style ={styles.line}></Text>
        <Text style= {styles.subtitleB}>Instrucciones:</Text>
        <Text style={styles.textB}>{instrucciones}{"\n"}</Text>
        <Text style ={styles.line}></Text>
        <Text style= {styles.subtitleB}>Categoria:</Text>
        <Text style={styles.textB}>{categoria}{"\n"}</Text>
        <Text style ={styles.line}></Text>
        <Text style= {styles.subtitleB}>Area:</Text>
        <Text style={styles.textB}>{area}</Text>
        <Text style ={styles.line}></Text>
        <Button
        title="Ver Procedimiento"
        color= "#ff5722"
        onPress={() => Linking.openURL(video)}/>
        </View>
     );
}
export default CardSearch;

const styles = StyleSheet.create({
   containerBusqueda: {
     padding: 20,
     margin: 25,
     borderRadius:10,
     backgroundColor: theme.colors.white,
     borderWidth: 2, 
     borderColor: theme.colors.grey,
    },
   titleB: {
    fontSize: 30,
    fontWeight: "bold", 
    alignSelf: "center",
    fontStyle: "italic",
   },
   subtitleB:{
     fontSize: 20,
     fontWeight: 'bold',
     fontStyle: "italic",
   },
   textB:{
     fontSize: 15,
     textAlign: "justify"
   },
   imageB: {
    width: 380,
    height: 280,
    margin: 10,
    resizeMode: "center",
    borderRadius: 20,
    },
    line:{
    borderBottomColor: theme.colors.grey,
    borderBottomWidth: 1,
    }
});