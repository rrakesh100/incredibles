import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TextInput, Linking, TouchableHighlight } from 'react-native';
import { Button } from 'native-base';
import { Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import GoogleIcon from 'react-native-vector-icons/Zocial';



const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;


export default class Login extends Component {

  constructor(props) {
    super(props);
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
        <Text style={styles.loginText}>LOGIN</Text>
        <Text style={styles.text}>Login Through Social Accounts</Text>
          <View style={[styles.flex, {marginTop: 20}]}>
            <TouchableHighlight underlayColor='#ffffff'
              onPress={ this.onButtonPress.bind(this, 'https://www.facebook.com/') }>
              <View style={styles.flex}>
                <View style={styles.fbIconView}>
                  <Icon name='facebook' color='#ffffff' size={30} style={styles.fbIcon}/>
                </View>
                <View style={styles.fbView}>
                  <Text style={styles.fbTxt}>FACEBOOK</Text>
                </View>
              </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='#ffffff'
              onPress={ this.onButtonPress.bind(this, 'https://www.google.co.in/') }>
              <View style={styles.flex}>
                <View style={styles.gIcon}>
                  <GoogleIcon name='google' color='#ffffff' size={30}/>
                </View>
                <View style={styles.googleView}>
                  <Text style={styles.googleTxt}>GOOGLE</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View>
            <Badge textStyle={{color: '#B6C7D6', fontSize: 12}}
            containerStyle={styles.badge} value='OR' />
          </View>
          <View>
            <Text style={styles.text}>Please Login Through Mobile No/Email Id</Text>
          </View>

          <View style={styles.email}>
          <TextInput placeholder='Mobile No/Email Id'
          style={styles.textInput}/>
          </View>

          <View style={styles.password}>
          <TextInput placeholder='Password'
          style={styles.textInput}/>
          </View>

          <TouchableHighlight underlayColor='#ffffff'
            onPress={ () => console.log('login')} >
            <View style={styles.btnView}>
              <Text style={styles.btnText}>LOGIN</Text>
            </View>
          </TouchableHighlight>
          <View>
            <Text style={styles.forgot} onPress={ () => console.log('forgot password') }>Forgot Password?</Text>
          </View>

          <View>
            <Text style={[styles.text, {fontSize: 16}]}>Not A Registered User?</Text>
          </View>

          <TouchableHighlight underlayColor='#ffffff'
            onPress={ () => console.log('navigate to register page')} >
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
  text: {
    color: '#B6C7D6',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20
  },
  fbIconView: {
    height: 40,
    width:40,
    backgroundColor: '#2E5799',
    marginLeft: 30
  },
  fbIcon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom:'auto'
  },
  gIcon: {
    height: 40,
    width:40,
    backgroundColor: '#D04837',
    marginLeft: 10
  },
  fbTxt: {
    color: '#2E5799',
    fontSize: 16,
    fontWeight:'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom:'auto'
  },
  fbView: {
    height: 40,
    width: 100,
    backgroundColor: '#ffffff',
    borderColor: '#C3CDD2',
    borderWidth: 0.5
  },
  googleView: {
    height: 40,
    width: 100,
    backgroundColor: '#ffffff',
    borderColor: '#C3CDD2',
    borderWidth: 0.5
  },
  googleTxt: {
    color: '#D04837',
    fontSize: 16,
    fontWeight:'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom:'auto'
  },
  badge: {
    height: 40,
    width: 40,
    borderRadius: 22,
    borderWidth: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#ffffff',
    borderColor: '#B6C7D6',
    marginTop: 10
  },
  email: {
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '95%'
  },
  password: {
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
  forgot: {
    textDecorationLine: 'underline',
    color: '#FFBC01',
    fontSize: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20
  }
})
