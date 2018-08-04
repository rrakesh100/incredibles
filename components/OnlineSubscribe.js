import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class OnlineSubscribe extends Component {

  static navigationOptions = ({navigation}) => (
  {
    title: `${navigation.state.params ? navigation.state.params.data.name : 'kumar'}`,
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#00539d',
      borderBottomColor: '#ffffff',
    },
    headerTitleStyle: {
      fontSize: 18,
    },
  }
  );

  render() {
    return (
      <View>
      <Text>Nithya</Text>
      </View>
    )
  }
}