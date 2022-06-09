/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * CA2 - Polarscene {Login}
 * Isaac Tan Boon Keat - P2026482
 * Tan Jing Wen - P2037084
 * DIT/1B/03
 */

import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Text, Image, View, StatusBar } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

class Login extends React.Component {
  
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
      <View>
        
      <Image source={require('./assets/image/polarscene.png')} style={styles.logo}
       resizeMode="stretch" />

      <View>
        <Text style={styles.title}>Login</Text>
      </View>
  
      <View style={styles.input} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email/Username" 
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

      <View style={styles.line}>
        <TouchableOpacity>
        <Text style={styles.new}>New ? Sign Up !</Text> 
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.line2}>
        <CheckBox style={styles.checkbox}
          value={this.state.checked}
          onValueChange={() => this.setState({ checked: !this.state.checked })}
        />
      <Text style={styles.checktext}>Remember me ?</Text>
      </View>
      
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
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

  new :{
    fontFamily: "Dosis-Medium",
    color:"black",
    fontSize:15,
    paddingLeft:40,
  },

  forgot :{
    fontFamily: "Dosis-Medium",
    color:"black",
    fontSize:15,
    paddingLeft:120,
  },

  line :{
    flexDirection:'row',
    marginTop:12,
    marginBottom:15,
  },

  loginBtn :{
    backgroundColor:"#C2A477",
    borderRadius:30,
    height:44,
    width:135,
    marginTop:30,
    justifyContent:"center",
    alignSelf:"center",
  },

  loginText :{
    fontFamily: "Dosis-Medium",
    alignSelf:'center',
    fontSize:16,
    color:'white',
  },

  line2 :{
    flexDirection:'row',
    paddingLeft: 30,
    paddingTop: 2,
  },
  checkbox: {
    height:17
  },
  checktext :{
    fontFamily: "Dosis-Medium",
    fontSize:14,
    marginLeft: 0,
  }

});

export default Login;
