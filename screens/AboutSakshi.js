import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';



export default class AboutSakshi extends Component {

  static navigationOptions = ({navigation}) => (
  {
    title: 'About Sakshi Education',
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
      <View style={{flex:1}}>
          <View style={{flex:70}}>
              <Text>
              </Text>
          </View>

          <View style={{flex:30}}>
              <View>
                  <Text style={{textAlign: 'center', color: '#38507F', fontSize: 30, fontWeight: 'bold'}}>SAKSHI EDUCATION</Text>
              </View>
              <View style={{borderBottomColor: '#9FB8CC', borderBottomWidth: 1}} />
              <View>
                  <Text style={{textAlign: 'center', color: '#FFBC01'}}>Educating, Enlightening and Ennobling</Text>
                  <Text style={{textAlign: 'center', color:'#9FB8CC', fontSize: 18, marginTop:10}}>Version 1.0</Text>
              </View>
              <View style={{marginTop: 30}}>
                  <Text style={{textAlign: 'center', color: '#48C7D8', fontSize: 22, fontWeight: 'bold'}}>www.sakshieducation.com</Text>
              </View>
          </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({

})
