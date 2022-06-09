/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * CA2 - Polarscene {Settings > Password}
 * Isaac Tan Boon Keat - P2026482
 * Tan Jing Wen - P2037084
 * DIT/1B/03
 */

import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, Image, View } from 'react-native';

class Settings3 extends React.Component {

  state = {
    oldpassword:"",
    newpassword:"",
    confirmpassword:""
  }

  render(){

    return (
      <View>

      <View style={styles.header}>

        <View style={styles.left}>
        <TouchableOpacity>
          <Image source={require('./assets/image/backarrow.png')} style={styles.arrow} />
        </TouchableOpacity>
        </View>

        <View style={styles.center}>
          <Text style={styles.title}>Password</Text>
        </View>

      </View>

      <View style={styles.input} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Old Password" 
            placeholderTextColor="#3C3C3C"
            onChangeText={value => this.setState({oldpassword:value})}/>
      </View>

      <View style={styles.input} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="New Password" 
            placeholderTextColor="#3C3C3C"
            onChangeText={value => this.setState({newpassword:value})}/>
      </View>

      <View style={styles.input} >
        <TextInput 
            secureTextEntry
            style={styles.inputText}
            placeholder="Confirm Password" 
            placeholderTextColor="#3C3C3C"
            onChangeText={value => this.setState({confirmpassword:value})}/>
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
  },

  left:{
    flex:3,
    justifyContent:'center',
  },

  center:{
    flex:5,
    paddingTop:10,
  },

  header:{
    height:60,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
  },

  title: {
    fontFamily: "MoonTime-Regular" ,
    fontSize: 45,
    color:'#905700',
  },

  input: {
    width:"80%",
    backgroundColor:"#E5E5E5",
    borderRadius:20,
    height:60,
    width:330,
    marginTop:30,
    marginLeft:30,
    justifyContent:"center",
    padding:20,
  },

  inputText:{
    fontFamily: "Dosis-Medium",
    fontSize:16,
    justifyContent:"center",
    height:50,
    color:"black",
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

export default Settings3;