import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, ScrollView, TextInput, Linking, TouchableHighlight, Image } from 'react-native';
import { Card } from 'native-base';
import { careerGuidanceData } from '../api/careerGuidance';

export default class CareerGuidance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({navigation}) => (
  {
    title: 'Career Guidance',
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

  renderCareerItem({item}) {
    return (
      <TouchableHighlight
          onPress={() => this.props.navigation.navigate('CareerGuidanceDetail', {data:item})}
          underlayColor='#ffffff'>
          <Card>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
           <Image source={item.image} style={{width:70, height:80, margin:6}}/>
           <View>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#3D4648'}}>{item.title}</Text>
              <Text style={{marginTop: 4, color: '#838685'}}>{item.description}</Text>
           </View>
           </View>
          </Card>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ScrollView style={{backgroundColor:'#E8F3F7'}}>
      <FlatList
          data={careerGuidanceData}
          renderItem={this.renderCareerItem.bind(this)}
      />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  separator: {

  }
})
