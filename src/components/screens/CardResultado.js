import React from 'react';
import {Text,View, Image, StyleSheet} from 'react-native';
import theme from '../../theme';

const CardSearch = ({titulo,imagen,instrucciones,categoria,area}) => {
    return ( 
        <View style={styles.containerBusqueda}>
        <Text style={styles.titleB}>{titulo}</Text>
        <Image style={styles.imageB} source={{ uri: `${imagen}`}}/>
        <Text style= {styles.subtitleB}>Instrucciones:</Text>
        <Text style={styles.textB}>{instrucciones}{"\n"}</Text>
        <Text style= {styles.subtitleB}>Categoria:</Text>
        <Text style={styles.textB}>{categoria}{"\n"}</Text>
        <Text style= {styles.subtitleB}>Area:</Text>
        <Text style={styles.textB}>{area}</Text>
        </View>
     );
}
export default CardSearch;

const styles = StyleSheet.create({
    //ESTILO PANTALLA HOME
   containerBusqueda: {
     padding: 20,
     margin: 4,
     backgroundColor: theme.colors.white,
     borderWidth: 2, 
     borderColor: theme.colors.orangeR,
     marginBottom: 50,
    },
   titleB: {
    fontSize: 30,
    fontWeight: "bold", 
    alignSelf: "center",
   },
   subtitleB:{
     fontSize: 20,
     fontWeight: 'bold',
   },
   textB:{
     fontSize: 15,
     textAlign: "justify"
 
   },
   imageB: {
    width: 400,
    height: 280,
    margin: 10,
    resizeMode: "center",
    borderRadius: 20,
    },
});