import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, ScrollView, TextInput, Linking, TouchableHighlight, Image } from 'react-native';
import { Card } from 'native-base';
import { careerGuidanceData } from '../api/careerGuidance';


const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;


export default class CareerGuidanceDetail extends Component {
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

  render() {
    const data = this.props.navigation.state.params.data;
    return (
      <View>
          <Text style={{fontSize:20, fontWeight: 'bold', color: '#3D4648'}}>Online-Counselling Process of JEE (Main) 2016, JEE (Advanced) 2016</Text>
          <Text style={{marginTop: 10, fontSize: 16, color: '#838685'}}>Be very clear about the problem name. This will help everyone locate the problem in their respective sheets and there is a higher chance that you will get answered by others.</Text>
          <Image source={data.image} style={styles.resize} />
          <Text style={{fontSize: 16, color: '#838685'}}>{data.detailedDescription}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  resize : {
    width: sliderWidth,
    height: sliderHeight*0.30,
    marginTop: 10,
    marginBottom: 10
  },
})
