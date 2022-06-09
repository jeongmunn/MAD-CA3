/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * CA2 - Polarscene {Forgot Password 2}
 * Isaac Tan Boon Keat - P2026482
 * Tan Jing Wen - P2037084
 * DIT/1B/03
 */

import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Text, Image, View, StatusBar } from 'react-native';

class Forgot2 extends React.Component {
  
  state = {
    newpassword:"",
    confirmpassword:""
  }

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true)
    StatusBar.setBackgroundColor("#FFFEFE")
  }

  render(){


    return (
      <View>
      <Image source={require('./assets/image/backarrow.png')} style={styles.arrow} />
      <Image source={require('./assets/image/polarscene.png')} style={styles.logo}/>

      <View>
        <Text style={styles.title}>Change your password</Text>
      </View>
  
      <View style={styles.input} >
          <TextInput
            secureTextEntry  
            style={styles.inputText}
            placeholder="New Password" 
            placeholderTextColor="#3C3C3C"
            onChangeText={value => this.setState({email:value})}/>
      </View>

      <View style={styles.input} >
        <TextInput 
            secureTextEntry
            style={styles.inputText}
            placeholder="Confirm Password" 
            placeholderTextColor="#3C3C3C"
            onChangeText={value => this.setState({OTP:value})}/>
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>SUBMIT</Text>
      </TouchableOpacity>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  
  arrow:{
    width:27,
    height:27,
    marginLeft:20,
    marginTop:15,
  },

  logo: {
    width: 140 ,
    height: 140 ,
    alignSelf: 'center',
    marginTop: 60,
    marginBottom: 40,
  },

  title: {
    fontFamily: "MoonTime-Regular" ,
    fontSize: 45,
    color:'#905700',
    paddingLeft:30,
  },

  input:{
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

  inputText:{
    fontFamily: "Dosis-Medium",
    fontSize:16,
    justifyContent:"center",
    height:50,
    color:"black"
  },

  loginBtn :{
    backgroundColor:"#C2A477",
    borderRadius:30,
    height:44,
    width:135,
    marginTop:50,
    justifyContent:"center",
    alignSelf:"center",
  },

  loginText :{
    fontFamily: "Dosis-Medium",
    alignSelf:'center',
    fontSize:16,
    color:'white',
  },

});

export default Forgot2;
