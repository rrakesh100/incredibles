import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, ScrollView, TextInput, Linking, TouchableHighlight, Image } from 'react-native';
import { Card } from 'native-base';



export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({navigation}) => (
  {
    title: 'Comments',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#00539d',
      borderBottomColor: '#ffffff',
    },
    headerTitleStyle: {
      fontSize: 22,
    }
  }
  );

  render() {
    return (
      <View>
          <Text>Nithya Menon</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
})
