/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * CA2 - Polarscene {Settings}
 * Isaac Tan Boon Keat - P2026482
 * Tan Jing Wen - P2037084
 * DIT/1B/03
 */

import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, View, StatusBar } from 'react-native';
import SwitchButton from 'switch-button-react-native';


class Settings extends React.Component {

  constructor() {
    super();

    this.state = {
      activeSwitch: 1
    };
  }

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true)
    StatusBar.setBackgroundColor("#FFFEFE")
  }

  render() {

    return (
      <View>

        <View style={styles.header}>

          <View style={styles.left}>
            <TouchableOpacity>
              <Image source={require('./assets/image/backarrow.png')} style={styles.arrow} />
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <Text style={styles.title}>Settings</Text>
          </View>

        </View>

        <TouchableOpacity>
          <Image source={require('./assets/image/profile.png')} style={styles.profile} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.username}>jeongmun</Text>
          <Image source={require('./assets/image/edit.png')} style={styles.edit} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.line}>
          <Text style={styles.text}>Email</Text>
          <Image source={require('./assets/image/arrow.png')} style={styles.arrow2} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.line}>
          <Text style={styles.text}>Password</Text>
          <Image source={require('./assets/image/arrow.png')} style={styles.arrow2} />
        </TouchableOpacity>

        <View style={styles.line}>
          <Text style={styles.text}>Dark Mode</Text>
          <SwitchButton onValueChange={(val) => this.setState({ activeSwitch: val })}
            text1='o'
            text2='o'
            switchWidth={50}
            switchHeight={30}
            switchBorderRadius={80}
            switchSpeedChange={500}
            switchBorderColor='#5D5B5B'
            switchBackgroundColor='#fff'
            btnBorderColor='#5D5B5B'
            btnBackgroundColor='#5D5B5B'
            fontColor='#5D5B5B'
            activeFontColor='#5D5B5B'
          />
          {this.state.activeSwitch === 1 ? console.log('view1') : console.log('view2')}
        </View>

        <TouchableOpacity style={styles.line}>
          <Text style={styles.text}>Export</Text>
          <Image source={require('./assets/image/arrow.png')} style={styles.arrow2} />
        </TouchableOpacity>

      </View>
    );
  }
}


const styles = StyleSheet.create({

  arrow: {
    width: 27,
    height: 27,
    marginLeft: 20,
  },

  left: {
    flex: 3,
    justifyContent: 'center',
  },

  center: {
    flex: 5,
    paddingTop: 10,
  },

  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  title: {
    fontFamily: "MoonTime-Regular",
    fontSize: 45,
    color: '#905700',
  },

  profile: {
    width: 110,
    height: 110,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 25,
  },

  username: {
    fontFamily: "Dosis-Medium",
    color: '#905700',
    fontSize: 25,
  },

  edit: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },

  row: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 60,
  },

  arrow2: {
    width: 22,
    height: 22,
  },

  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 25,
  },

  text: {
    fontFamily: "Dosis-Medium",
    fontSize: 23,
    color: '#5D5B5B',
  },

});

export default Settings;