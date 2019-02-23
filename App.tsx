import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

interface IHomeProps { }
interface IHomeState { }

export default class App extends React.Component<IHomeProps, IHomeState> {
  render() {

    let pic = {
      uri: 'https://scontent-sjc3-1.cdninstagram.com/vp/f6b9680a11921964ee53e8464c4776d4/5CE68166/t51.2885-15/e15/c0.135.1080.1080/s320x320/49443103_2037289829657580_7762886922735361680_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&ig_cache_key=MTk2MDMwODA4MDk3ODUyMzIzOQ%3D%3D.2.c',
    };

    let pic2 = {
      uri: 'https://scontent-a-sin.cdninstagram.com/vp/8f1a7638d48ac233d1ce10d11e7d4f7c/5CE294CA/t51.2885-15/e35/50237220_2205284679688220_6352302062612391666_n.jpg?_nc_ht=instagram.ffra1-1.fna.fbcdn.net&se=7&ig_cache_key=MTk2OTY3MjIwNTQzNjg1Mzk3NA%3D%3D.2'
    }

    let pic3 = {
      uri: 'https://img.devrant.com/devrant/rant/r_101126_Hz9wR.jpg'
    }

    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <View style={styles.container3}>
            <ScrollView>
              <Text style={styles.textStyle}>#CrushingIt</Text>
              <Image source={pic} style={styles.picStyle}></Image>
              <Image source={pic2} style={styles.picStyle}></Image>
              <Image source={pic3} style={styles.picStyle}></Image>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    padding: 15
  },
  container2: {
    flex: 1,
    backgroundColor: 'black',
    padding: 15
  },
  container3: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 40,
    color: 'white',
    backgroundColor: 'red',
    fontFamily: 'monospace',
    textAlign: 'center',
    marginTop: 15
  },
  picStyle: {
    width: 330,
    height: 424,
    marginTop: 15
  }
});
