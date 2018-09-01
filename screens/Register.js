import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TextInput, Linking, TouchableHighlight, Picker } from 'react-native';
import { Button } from 'react-native-elements';
import { Form } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import GoogleIcon from 'react-native-vector-icons/Zocial';



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

  onButtonPress(url) {
    Linking.openURL(url)
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: '#E8F3F7'}}>
        <Text style={styles.loginText}>REGISTER</Text>
        <Text style={styles.text}>Please Fill The Details To Register With Us</Text>
        <Text style={styles.select}>Select Language</Text>

          <View style={{marginTop:40, marginLeft: 'auto', marginRight: 'auto'}}>

          <Picker
            mode="dropdown"
            iosHeader="Select your Language"
            style={{ width: 120,height: 30, backgroundColor: '#ffffff', borderRadius: 10, borderWidth:1, borderColor: '#FFBC01' }}
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
          >
            <Picker.Item label="English" value="key0" />
            <Picker.Item label="Telugu" value="key1" />
          </Picker>
          </View>

          <View style={styles.inputStyle}>
          <TextInput placeholder='Name'
          style={styles.textInput}/>
          </View>

          <View style={styles.inputStyle}>
          <TextInput placeholder='Email Id'
          style={styles.textInput}/>
          </View>

          <View style={styles.inputStyle}>
          <TextInput placeholder='Mobile No'
          style={styles.textInput}/>
          </View>

          <View style={styles.inputStyle}>
          <TextInput placeholder='Password'
          style={styles.textInput}/>
          </View>

          <TouchableHighlight underlayColor='#ffffff'
            onPress={ () => console.log('register page')} >
            <View style={styles.btnView}>
              <Text style={styles.btnText}>REGISTER HERE</Text>
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
  text: {
    color: '#B6C7D6',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20
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
