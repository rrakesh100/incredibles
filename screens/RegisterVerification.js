import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TextInput, Linking, TouchableHighlight, Picker } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Form } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import GoogleIcon from 'react-native-vector-icons/Zocial';
import { registerUser } from '../api/register';


const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;


export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      language: "key0"
    }
  }

  static navigationOptions = ({navigation}) => (
  {
    title: 'SAKSHI EDUCATION',
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

  onVerifyClick() {
    console.log('verified');
  }

  onResendClick() {
    console.log('resend');
  }


  render() {

    return (
      <ScrollView style={{backgroundColor: '#E8F3F7'}}>
        <Text style={styles.loginText}>VERIFY YOUR MOBILE NUMBER</Text>
        <Text style={styles.select}>Language</Text>

        <View style={{marginLeft: 'auto', marginRight:'auto', marginTop:20, height: 50, width: 140, backgroundColor: '#ffffff', borderColor: '#FFBC01', borderWidth:1, borderRadius:25}}>
        <Picker
          selectedValue={this.state.language}
          style={{}}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="TELUGU" value="telugu" />
          <Picker.Item label="ENGLISH" value="english" />
        </Picker>
        </View>

          <View style={{marginTop:30}}>
              <Text style={styles.txt1}>Ashok Kumar Mohanty</Text>
              <Text style={styles.txt1}>ashok@lensinteractive.com</Text>
              <Text style={styles.txt1}>+91 9620498213</Text>
          </View>

          <Text style={styles.txt}>Please Enter Verification Code Which You have Received Through SMS</Text>

          <View style={styles.inputStyle}>
          <TextInput placeholder='*Verification Code'
          underlineColorAndroid='transparent'
          onChangeText={(verificationCode) => this.setState({verificationCode})}
          style={styles.textInput}/>
          </View>

          <TouchableHighlight underlayColor='#ffffff'
            onPress={ this.onVerifyClick.bind(this) } >
            <View style={styles.btnView}>
              <Text style={styles.btnText}>VERIFY</Text>
            </View>
          </TouchableHighlight>

          <Text style={styles.text}>Not Received Verification Code Yet?</Text>


          <TouchableHighlight underlayColor='#ffffff'
            onPress={ this.onResendClick.bind(this) } >
            <View style={styles.btnView}>
              <Text style={styles.btnText}>RESEND</Text>
            </View>
          </TouchableHighlight>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  loginText: {
    color: '#47C8DB',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20
  },
  btnS: {
    width: 120,
    height: 30,
    borderRadius: 16,
    borderColor: '#FFBC00',
    borderWidth:1,
    backgroundColor: 'white',
    bottom:20
  },
  select: {
    color: '#47C8DB',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20
  },
  txt: {
    textAlign: 'center',
    margin: 30,
    fontSize: 16,
    color: '#525659'
  },
  txt1: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 20
  },
  text: {
    color: '#525659',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    fontSize: 16
  },
  inputStyle: {
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '95%'
  },
  textInput: {
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'white'
  },
  btnView: {
    height: 50,
    marginTop:20,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#ffffff',
    width:'95%',
    borderColor: '#FFBC01',
    borderWidth: 1
  },
  btnText: {
    color: '#FFBC01',
    fontSize: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom:'auto'
  },
})
