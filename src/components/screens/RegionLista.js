import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, SafeAreaView,ImageBackground} from "react-native";
import { RegionR} from '../Map';
import { FilterArea} from '../../api';

export const RegionScreen = ({navigation}) => {
const [region, setregiones] = useState();

  const getregion = async () => {
    const response = await FilterArea();

    setregiones(response);
  };

  useEffect(() => {
    getregion();
  }, []);

  return (
    <SafeAreaView>
    <ScrollView>
      <ImageBackground source= {require('../../../assets/fondo3.jpg')} style={{flex: 1}}>
        <>{region ? <RegionR area={region} navigation={navigation} /> : null}</>
       </ImageBackground>
    </ScrollView>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({});

