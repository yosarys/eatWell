import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, SafeAreaView} from "react-native";
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
    <>{region ? <RegionR area={region} navigation={navigation} /> : null}</>
    </ScrollView>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({});

