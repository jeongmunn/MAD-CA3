/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * CA2 - Polarscene {Home}
 * Isaac Tan Boon Keat - P2026482
 * Tan Jing Wen - P2037084
 * DIT/1B/03
 */

import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, SafeAreaView, TouchableOpacity, Image, StatusBar } from 'react-native';


const data = [
  { key: require('./assets/image/1.png') },
  { key: require('./assets/image/2.png') },
  { key: require('./assets/image/3.png') },
  { key: require('./assets/image/4.png') },
  { key: require('./assets/image/5.png') },
  { key: require('./assets/image/6.png') },
  { key: require('./assets/image/7.png') },
  { key: require('./assets/image/8.png') },
  { key: require('./assets/image/9.png') },
  { key: require('./assets/image/10.png') },
  { key: require('./assets/image/11.png') },
  { key: require('./assets/image/12.png') },
  { key: require('./assets/image/13.png') },
  { key: require('./assets/image/14.png') },
  { key: require('./assets/image/15.png') }
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 3;
export default class Home extends React.Component {
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <Image style={styles.square} source={item.key} />
      </View>
    );
  };

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true)
    StatusBar.setBackgroundColor("#FFFEFE")
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.left}>
            <TouchableOpacity>
              <Image source={require('./assets/image/camera.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.center}>
            <Text style={styles.title}>Polarscene</Text>
          </View>

          <View style={styles.right}>
            <TouchableOpacity>
              <Image source={require('./assets/image/setting.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>

        </View>
        <FlatList
          data={formatData(data, numColumns)}
          style={styles.square}
          renderItem={this.renderItem}
          numColumns={numColumns}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

  backgroundColour: {
    backgroundColor: '#FFEEEE'
  },

  icon: {
    width: 27,
    height: 27,
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
    marginBottom: 20,
  },

  title: {
    fontFamily: "MoonTime-Regular",
    fontSize: 45,
    color: '#905700',
  },

  container: {
    flex: 1,
  },

  square: {
    flex: 1,
    resizeMode: 'contain',
    marginVertical: 1.5,
    marginHorizontal: 2
  },

  item: {
    backgroundColor: '#FFEEEE',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },

  itemInvisible: {
    backgroundColor: 'transparent',
  },

  itemText: {
    color: '#fff',
  },

});




