/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * CA2 - Polarscene {Logo}
 * Isaac Tan Boon Keat - P2026482
 * Tan Jing Wen - P2037084
 * DIT/1B/03
 */

import React from 'react';
import { StyleSheet, Text, Image, View, StatusBar } from 'react-native';

class Logo extends React.Component {
  
  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true)
    StatusBar.setBackgroundColor("#FFEEEE")
  }
  
  render(){
    return (
      <View style={{backgroundColor:'#FFEEEE', flex: 1}}>
      <View styles={styles.Image}>
      <Image source={require('./assets/image/logopink.png')} style={styles.logo} />
      </View>
        <Text style={styles.title}>Polarscene</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  Image:{
    alignItems:'center',
  },

  logo: {
    width: 300 ,
    height: 300 ,
    alignSelf: 'center',
    marginTop: 180,
  },

  title: {
    fontFamily: "MoonTime-Regular" ,
    fontSize: 45,
    color:'#905700',
    alignSelf:'center',
    paddingTop:160,
  },

});

export default Logo;
