import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Image,StyleSheet,StatusBar} from 'react-native';

const Header = () => {

  return (
    <Appbar.Header style={styles.header}> 
      <StatusBar></StatusBar>
       <Image
       style={{ width: 115, height: 115, marginLeft:180, marginTop:-20}}
        source={require('../../assets/AppEatWell.png')} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#ff5722',
  },
})

export default Header;


  