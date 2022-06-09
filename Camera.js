/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * CA2 - Polarscene {Camera}
 * Isaac Tan Boon Keat - P2026482
 * Tan Jing Wen - P2037084
 * DIT/1B/03
 */

import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, StatusBar, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cameraButtons: {
    flex: 0.5,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cambutton: {
    width:28,
    height:28,
  },
  buttonLeft: {
    left: 20
  },
  buttonRight: {
    right: 20
  }
});


class PhotoCamera extends React.PureComponent {
  state = {
    type: RNCamera.Constants.Type.back,
  };

  componentDidMount() {
    StatusBar.setBarStyle('light-content', true)
    StatusBar.setBackgroundColor("#000000")
  }

  flipCamera = () =>
    this.setState({
      type:
        this.state.type === RNCamera.Constants.Type.back
          ? RNCamera.Constants.Type.front
          : RNCamera.Constants.Type.back,
    });

  takePhoto = async () => {
    const { onTakePhoto } = this.props;
    const options = {
      quality: 1,
      base64: true,
      width: 300,
      height: 300,
    };
    const data = await this.camera.takePictureAsync(options);
    onTakePhoto(data.base64);
  };
  render() {
    const { type } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.cameraButtons}>
          <TouchableOpacity style={styles.buttonLeft}>
            <Icon name="flash-off-outline" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="timer-outline" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRight}>
            <Icon name="arrow-forward" size={25} color="white" />
          </TouchableOpacity>
        </View>
        <RNCamera
          ref={cam => {
            this.camera = cam;
          }}
          type={type}
          style={styles.preview}
          captureAudio={false}
          useNativeZoom={true}
        />
        <View style={styles.cameraButtons}>
          <TouchableOpacity style={styles.buttonLeft}>
            <Icon name="images-outline" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.takePhoto}>
            <Image source={require('./assets/image/cambutton.png')} style={styles.cambutton} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.flipCamera} style={styles.buttonRight}>
            <Icon name="camera-reverse-outline" size={27} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PhotoCamera;