import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView, TextInput, TouchableOpacity,Picker } from 'react-native';
import CartIcon from 'react-native-vector-icons/EvilIcons';
import { Button, Icon, SearchBar, Input } from 'react-native-elements';
import { Card } from 'native-base';


const sliderWidth = Dimensions.get('window').width;


export default class  Billing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPaymentOption : 'None',
      city: '',
      pin: ''
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
  
  onPaymentButtonClick = (selectedPaymentOption) => {
    this.setState({
      selectedPaymentOption
    })
  }



  render() {
    const {selectedPaymentOption} = this.state;
    return (
      <ScrollView style={{backgroundColor : '#E8F3F7'}}>
      <Text style={{color: '#95A5A6', fontSize: 18, marginLeft: 15}}>
      Please Fill The Details
      </Text>

      <View style={{marginTop: 20, marginLeft: 10, width: '95%'}}>
      <TextInput placeholder='Name'
      style={{height: 40,
            borderColor: 'white',
            borderWidth: 1,
            backgroundColor: 'white'}}/>
      </View>

      <View style={{marginTop: 20, marginLeft:10, backgroundColor: 'white', width: sliderWidth*0.95}}>
      <Picker
        onValueChange={(itemValue, itemIndex) => this.setState({city: itemValue})}
        selectedValue={this.state.city}
        style={{ height: 40, width: sliderWidth*0.95 }}>
        <Picker.Item label="state/city" value="state" />
        <Picker.Item label="Hyderabad" value="hyderabad" />
        <Picker.Item label="Warangal" value="warangal" />
        <Picker.Item label="Nizamabad" value="nizamabad" />
        <Picker.Item label="Khammam" value="khammam" />
        <Picker.Item label="Karimnagar" value="karimnagar" />
        <Picker.Item label="Mahbubnagar" value="mahbubnagar" />
        <Picker.Item label="Nalgonda" value="nalgonda" />
        <Picker.Item label="Adilabad" value="adilabad" />
        <Picker.Item label="Medak" value="medak" />
        <Picker.Item label="Ranga Reddy" value="rangaReddy" />
        <Picker.Item label="Visakhapatnam" value="visakhapatnam" />
        <Picker.Item label="Vijayawada" value="vijayawada" />
        <Picker.Item label="Guntur" value="guntur" />
        <Picker.Item label="Kurnool" value="kurnool" />
        <Picker.Item label="Nellore" value="nellore" />
        <Picker.Item label="Rajahmundry" value="rajahmundry" />
        <Picker.Item label="Tirupati" value="tirupati" />
        <Picker.Item label="Kadapa" value="kadapa" />
        <Picker.Item label="Kakinada" value="kakinada" />
        <Picker.Item label="Anantapur" value="anantapur" />
        <Picker.Item label="Eluru" value="eluru" />
        <Picker.Item label="Vizianagaram" value="vizianagaram" />
        <Picker.Item label="Chittoor" value="chittoor" />
        <Picker.Item label="Srikakulam" value="srikakulam" />
      </Picker>
      </View>

      <View style={{marginTop: 20, marginLeft:10, backgroundColor: 'white', width: sliderWidth*0.95}}>
      <Picker
        onValueChange={(itemValue, itemIndex) => this.setState({pin: itemValue})}
        selectedValue={this.state.pin}
        style={{ height: 40, width: sliderWidth*0.95 }}>
        <Picker.Item label="pincode" value="pincode" />
        <Picker.Item label="500057" value="pin1" />
        <Picker.Item label="506001" value="pin2" />
        <Picker.Item label="503001" value="pin3" />
        <Picker.Item label="507001" value="pin4" />
        <Picker.Item label="505001" value="pin5" />
        <Picker.Item label="509001" value="pin6" />
        <Picker.Item label="508001" value="pin7" />
        <Picker.Item label="504001" value="pin8" />
        <Picker.Item label="502110" value="pin9" />
        <Picker.Item label="500074" value="pin10" />
        <Picker.Item label="500020" value="pin11" />
        <Picker.Item label="502355" value="pin12" />
        <Picker.Item label="522001" value="pin13" />
        <Picker.Item label="518001" value="pin14" />
        <Picker.Item label="524001" value="pin15" />
        <Picker.Item label="533101" value="pin16" />
        <Picker.Item label="517101" value="pin17" />
        <Picker.Item label="516001" value="pin18" />
        <Picker.Item label="533001" value="pin19" />
        <Picker.Item label="510051" value="pin20" />
        <Picker.Item label="534001" value="pin21" />
        <Picker.Item label="535001" value="pin22" />
        <Picker.Item label="517001" value="pin23" />
        <Picker.Item label="532001" value="pin24" />
      </Picker>
      </View>

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
            <TouchableOpacity onPress={()=>this.onPaymentButtonClick('PayU Money')}>
            <Image source={require('../payu.png')} style={{width: 80, height: 50}}/>
            </TouchableOpacity>
            </View>
            <View style={{marginLeft: 15}}>
            <TouchableOpacity onPress={()=>this.onPaymentButtonClick('PayTM')}>
            <Image source={require('../paytm.jpg')} style={{width: 80, height: 50}}/>
            </TouchableOpacity>
            </View>
            <View style={{marginLeft: 15}}>
            <TouchableOpacity onPress={()=>this.onPaymentButtonClick('Ru Pay')}>
            <Image source={require('../rupay1.png')} style={{width: 80, height: 50}}/>
            </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={{fontWeight : 'bold', fontSize : 18, marginTop: 20 }}>Selected Payment Mode : {selectedPaymentOption}</Text>
          </View>
          <View style={{marginTop: 80, marginLeft: 120}}>
          <Button title='BUY NOW' buttonStyle={styles.buyButton} 
          onPress={() => this.props.navigation.navigate('Payment', {data: {amountPayable: this.props.navigation.state.params.data.amountPayable}})}
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
