import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView, TextInput } from 'react-native';
import CartIcon from 'react-native-vector-icons/EvilIcons';
import { Button, Icon, SearchBar, Input } from 'react-native-elements';
import { Card } from 'native-base';


const sliderWidth = Dimensions.get('window').width;


export default class  Billing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  static navigationOptions = ({navigation}) => (
  {
    title: 'Billing Details',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#00539d',
      borderBottomColor: '#ffffff',
    },
    headerTitleStyle: {
      fontSize: 18,
    }
  }
  );



  render() {
    return (
      <ScrollView style={{backgroundColor : '#E8F3F7'}}>
      <Text style={{color: '#95A5A6', fontSize: 18, marginLeft: 15}}>
      Please Fill The Details
      </Text>

      <View style={{marginTop: 20, marginLeft: 10, width: '95%'}}>
      <TextInput placeholder='Name'
      style={{height: 38,
            borderColor: 'white',
            borderWidth: 1,
            backgroundColor: 'white'}}/>
      </View>

      <SearchBar containerStyle={{backgroundColor: '#E8F3F7'}}
      onChangeText={() => {}}
      onClearText={() => {}}
      lightTheme={true}
      inputStyle={{backgroundColor: 'white'}}
        placeholder='Select state/City' />

        <SearchBar containerStyle={{backgroundColor: '#E8F3F7'}}
        onChangeText={() => {}}
        onClearText={() => {}}
        lightTheme={true}
        inputStyle={{backgroundColor: 'white'}}
          placeholder='Pincode' />

          <View style={{marginTop: 20, marginLeft: 10, width: '95%'}}>
          <TextInput placeholder='Your Address'
          style={{height: 100,
                borderColor: 'white',
                borderWidth: 1,
                backgroundColor: 'white'}}/>
          </View>
          <View style={{marginTop: 20}}>
          <Text style={{color: '#95A5A6', fontSize: 18, marginLeft: 15}}>
          Select Payments Option
          </Text>
          </View>
          <View style={styles.flex}>
            <View style={{marginLeft: 15}}>
            <Image source={require('../payu.png')} style={{width: 80, height: 50}}/>
            </View>
            <View style={{marginLeft: 15}}>
            <Image source={require('../paytm.jpg')} style={{width: 80, height: 50}}/>
            </View>
            <View style={{marginLeft: 15}}>
            <Image source={require('../rupay1.png')} style={{width: 80, height: 50}}/>
            </View>
          </View>
          <View style={{marginTop: 80, marginLeft: 120}}>
          <Button title='BUY NOW' buttonStyle={styles.buyButton}
           textStyle={{color: '#F8C548', fontSize : 14}} />
           </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  buyButton: {
    width: 120,
    height: 30,
    borderRadius: 16,
    borderColor: '#FFBC00',
    borderWidth:1,
    backgroundColor: 'white',
    bottom:20,
    position : 'absolute'
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  }
})
