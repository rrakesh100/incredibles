import React, { Component } from 'react';
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.8

export default class ImageCarousel extends Component {
  render() {
    const { images } = this.props;
    if (images && images.length) {
      return (
        <View
          style={styles.scrollContainer}
        >
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {images.map((image, index) => (
                <ImageBackground key={index}
                    source={{uri: image.uri}}
                    style={styles.image}>
                    <Text style={styles.textOnImageTitle}>{image.title}</Text>
                    <Text style={styles.textOnImageSubTitle}>{image.subtitle}</Text>

                </ImageBackground>
            ))}
          </ScrollView>
        </View>
      );
    }
    console.log('Please provide images');
    return null;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
  },
  scrollContainer: {
  },
  image: {
    width,
    height: 200,
    justifyContent: 'center'
  },
  textOnImageTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    textShadowColor: 'black',
    color: 'white',
    textShadowRadius: 4,
    textShadowOffset: {width: 0.5, height: 0.5}
  },
  textOnImageSubTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    textShadowColor: 'black',
    color: 'yellow',
    textShadowRadius: 4,
    textShadowOffset: {width: 0.5, height: 0.5}
  }
});
