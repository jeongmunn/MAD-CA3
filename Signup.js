/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * CA2 - Polarscene {Sign Up}
 * Isaac Tan Boon Keat - P2026482
 * Tan Jing Wen - P2037084
 * DIT/1B/03
 */

import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Text, Image, View, StatusBar, SafeAreaView } from 'react-native';

class Signup extends React.Component {
  
  state = {
    email:"",
    password:""
  }

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true)
    StatusBar.setBackgroundColor("#FFFEFE")
  }
  
  render(){


    return (
      <SafeAreaView>
       <Image source={require('./assets/image/backarrow.png')} style={styles.arrow} />

      <Image source={require('./assets/image/polarscene.png')} style={styles.logo} />

      <View>
        <Text style={styles.title}>Sign Up</Text>
      </View>
  
      <View style={styles.input} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#3C3C3C"
            onChangeText={value => this.setState({email:value})}/>
      </View>

      <View style={styles.input} >
          <TextInput  
            style={styles.inputText}
            placeholder="Username" 
            placeholderTextColor="#3C3C3C"
            onChangeText={value => this.setState({email:value})}/>
      </View>

      <View style={styles.input} >
        <TextInput 
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#3C3C3C"
            onChangeText={value => this.setState({password:value})}/>
      </View>
      
      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.signupText}>SIGN UP</Text>
      </TouchableOpacity>

      </SafeAreaView>
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
    marginTop: 30,
    marginBottom: 30,
  },

  title: {
    fontFamily: "MoonTime-Regular" ,
    fontSize: 45,
    paddingLeft: 30,
    color:'#905700',
  },

  input:{
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
    color:"black"
  },

  signupBtn :{
    backgroundColor:"#C2A477",
    borderRadius:30,
    height:44,
    width:135,
    marginTop:30,
    justifyContent:"center",
    alignSelf:"center",
  },

  signupText :{
    fontFamily: "Dosis-Medium",
    alignSelf:'center',
    fontSize:16,
    color:'white',
  },

});

export default Signup;
