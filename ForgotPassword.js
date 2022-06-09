/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * CA2 - Polarscene {Forgot Password}
 * Isaac Tan Boon Keat - P2026482
 * Tan Jing Wen - P2037084
 * DIT/1B/03
 */

import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Text, Image, View, StatusBar } from 'react-native';

class Forgot extends React.Component {
  
  state = {
    email:"",
    OTP:""
  }

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true)
    StatusBar.setBackgroundColor("#FFFEFE")
  }
  
  render(){


    return (
      <View>
        
      <Image source={require('./assets/image/polarscene.png')} style={styles.logo}/>

      <View>
        <Text style={styles.title}>Change Your Password</Text>
      </View>
  
      <View style={styles.input1} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#3C3C3C"
            onChangeText={value => this.setState({email:value})}/>
      </View>

      <View style={styles.input2} >
        <TextInput 
            secureTextEntry
            style={styles.inputText}
            placeholder="OTP" 
            placeholderTextColor="#3C3C3C"
            onChangeText={value => this.setState({OTP:value})}/>
      </View>
    
      <TouchableOpacity>
      <Image source={require('./assets/image/button.png')} style={styles.button}/>
      </TouchableOpacity>

      </View>
    );
  }
}


const styles = StyleSheet.create({

  logo: {
    width: 140 ,
    height: 140 ,
    alignSelf: 'center',
    marginTop: 70,
    marginBottom: 50,
  },

  title: {
    fontFamily: "MoonTime-Regular" ,
    fontSize: 45,
    color:'#905700',
    paddingLeft:30,
  },

  input1:{
    width:"80%",
    backgroundColor:"#E5E5E5",
    borderRadius:20,
    height:60,
    width:330,
    marginTop:30,
    marginLeft:30,
    justifyContent:'center',
    padding:20,
  },

  input2:{
    width:"80%",
    backgroundColor:"#F5F4F4",
    borderRadius:20,
    height:60,
    width:330,
    marginTop:30,
    marginLeft:30,
    justifyContent:'center',
    padding:20,
  },

  inputText:{
    fontFamily: "Dosis-Medium",
    fontSize:16,
    justifyContent:"center",
    height:50,
    color:"black"
  },

  button :{
    width:64,
    height:64,
    alignSelf:'center',
    marginTop:45,
  },

});

export default Forgot;
