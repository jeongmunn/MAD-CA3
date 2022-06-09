/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * CA2 - Polarscene {Editor 2}
 * Isaac Tan Boon Keat - P2026482
 * Tan Jing Wen - P2037084
 * DIT/1B/03
 */

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import Modal from 'react-native-modal';

class Editor2 extends React.Component {

  state = {
    isModalVisible: false
  }

  openModal = () => {
    this.setState({
      isModalVisible: true
    })
  }

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible
    })
  }

  closeModal = () => {
    this.setState({
      isModalVisible: false
    })
  }

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true)
    StatusBar.setBackgroundColor("#FFFEFE")
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>

          <View style={styles.left}>
            <TouchableOpacity>
              <Image source={require('./assets/image/backarrow.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <Text style={styles.title}>Editor</Text>
          </View>

          <View style={styles.right}>
            <TouchableOpacity onPress={() => this.openModal()} swipeDirection="up">
              <Image source={require('./assets/image/share.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>

          <Modal isVisible={this.state.isModalVisible} onBackdropPress={() => this.closeModal()} style={styles.modal}>

            <View style={styles.popup}>
              <Text style={styles.mtext}>Share/Export photo</Text>

              <View style={styles.row}>
                <TouchableOpacity style={styles.social}>
                  <Image source={require('./assets/image/twitter.png')} style={styles.icons} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.social}>
                  <Image source={require('./assets/image/instagram.png')} style={styles.icons} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.social}>
                  <Image source={require('./assets/image/whatsapp.png')} style={styles.icons} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.social}>
                  <Image source={require('./assets/image/snapchat.png')} style={styles.icons} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.social}>
                  <Image source={require('./assets/image/discord.png')} style={styles.icons} />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.export}>EXPORT</Text>
              </TouchableOpacity>
            </View>
          </Modal>

        </View>

        <View style={styles.content}>
          <Image source={require('./assets/image/12.png')} style={styles.image} />
        </View>

        <View style={styles.editor}>

          <TouchableOpacity style={styles.option}>
            <Image source={require('./assets/image/frame.png')} style={styles.icon} />
            <Text style={styles.text}>FRAME</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Image source={require('./assets/image/X1.png')} style={styles.icon} />
            <Text style={styles.text}>X1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Image source={require('./assets/image/X2.png')} style={styles.icon} />
            <Text style={styles.text}>X2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Image source={require('./assets/image/X3.png')} style={styles.icon} />
            <Text style={styles.text}>X3</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Image source={require('./assets/image/X4.png')} style={styles.icon} />
            <Text style={styles.text}>X4</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  image: {
    justifyContent: "center",
    width: '100%',
    resizeMode: 'contain',
  },

  icon: {
    width: 35,
    height: 35,
    alignSelf: 'center',
  },

  left: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },

  center: {
    paddingTop: 10,
  },

  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 20,
  },

  title: {
    fontFamily: "MoonTime-Regular",
    fontSize: 45,
    color: '#905700',
  },

  modal: {
    borderRadius: 20,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 10,
    height: '28%',
    width: '95%',
    alignSelf: 'center',
  },

  popup: {
    flex: 1,
    padding: 15,
  },

  mtext: {
    fontFamily: 'Dosis-Medium',
    fontSize: 23,
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },

  social: {
    padding: 10,
    marginVertical: 15,
  },

  icons: {
    height: 48,
    width: 48,
  },

  button: {
    backgroundColor: "#AE8445",
    borderRadius: 15,
    height: 44,
    width: "97%",
    justifyContent: "center",
    alignSelf: "center",
  },

  export: {
    fontFamily: "Dosis-Medium",
    alignSelf: 'center',
    fontSize: 18,
    color: 'white',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF6F6',
  },

  editor: {
    backgroundColor: '#fff',
    flexDirection: 'row',
  },

  option: {
    padding: 21.5,
  },

  text: {
    fontFamily: 'Dosis-Medium',
    color: '#4F4F4F',
    alignSelf: 'center'
  },

});

export default Editor2;