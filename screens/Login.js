import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TextInput, Linking, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import { Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import GoogleIcon from 'react-native-vector-icons/Zocial';
import { loginUser } from '../api/register';
import axios from 'axios';
import RCTNetworking from 'RCTNetworking';
import { AsyncStorage } from "react-native";


const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;


export default class Login extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
     // console.log('RCTNetworking:', RCTNetworking.clearCookies());
  }

  onButtonPress(url) {
    Linking.openURL(url)
  }


  onLoginBtnClick() {
   const { email, password } = this.state;
   console.log(email);
   console.log(password);
   const { params } = this.props.navigation.state;
   console.log(params);
    console.log('Firing API call to the server');
    let headers = {
              'Content-Type': 'application/json',
              'X-CSRFToken' : '',
              'XSRF-TOKEN' : '',
              'X-XSRF-TOKEN' : '',
              'xsrfCookieName' : '',
              'xsrfHeaderName' : ''
    };

    let login = axios.post(
      'http://sakshi.myofficestation.com/user_login/user/login',
      {
        username : email,
        password : password
      },
      {headers: headers});

    console.log(login);
    
    login.then((successResponse)=>{
      console.log(successResponse);
      let emailId = successResponse['data']['user']['mail'];
      let userName = successResponse['data']['user']['name'];
      console.log(emailId);
      console.log(userName);
      params.onSuccessLogin();

      let sessionId = successResponse['data'].sessid;
      let token = successResponse['data'].token;
      let value = { sessionId, token };

      this.onLoginSuccess('loginData', value)
    }).catch((e,r,t) => {console.log(e,r,t)});
  }

    onLoginSuccess = async (key, value) => {

      const storageValue = JSON.stringify(value);
      console.log(storageValue);
      try {
        await AsyncStorage.setItem(key, storageValue);
        this.props.navigation.navigate('Home')
      } catch (error) {
        console.log(error);
      }
    }


  render() {
    return (
      <ScrollView style={{backgroundColor: '#E8F3F7'}}>
        <View style={{height: 200, backgroundColor: '#3E5FAC'}}>
          <View style={{marginTop:'auto', marginBottom: 'auto'}}>
            <Text style={{textAlign: 'center', color: '#ffffff', fontSize: 30, fontWeight: 'bold'}}>SAKSHI EDUCATION</Text>
            <View style={{borderBottomColor: '#ffffff', borderBottomWidth: 1}} />
            <Text style={{textAlign: 'center', color: '#ffffff'}}>Educating, Enlightening and Ennobling</Text>
          </View>
        </View>
        <Text style={styles.loginText}>LOGIN</Text>
        <Text style={styles.text}>Login Through Social Accounts</Text>
          <View style={[styles.flex, {marginTop: 20, marginLeft: 'auto', marginRight: 'auto'}]}>
            <TouchableHighlight underlayColor='#ffffff'
              onPress={ this.onButtonPress.bind(this, 'https://www.facebook.com/') }>
              <View>
              <View style={styles.flex}>
                <View style={styles.fbIconView}>
                  <Icon name='facebook' color='#ffffff' size={30} style={styles.fbIcon}/>
                </View>
                <View style={styles.fbView}>
                  <Text style={styles.fbTxt}>FACEBOOK</Text>
                </View>
              </View>
              </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor='#ffffff'
              onPress={ this.onButtonPress.bind(this, 'https://www.google.co.in/') }>
              <View>
              <View style={styles.flex}>
                <View style={styles.gIcon}>
                  <GoogleIcon name='google' color='#ffffff' size={30}/>
                </View>
                <View style={styles.googleView}>
                  <Text style={styles.googleTxt}>GOOGLE</Text>
                </View>
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
          onChangeText={(email) => this.setState({email})}
          style={styles.textInput}/>
          </View>

          <View style={styles.password}>
          <TextInput placeholder='Password' secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
          style={styles.textInput}/>
          </View>

          <TouchableOpacity underlayColor='#ffffff'
            onPress={ this.onLoginBtnClick.bind(this) } >
            <View style={styles.btnView}>
              <Text style={styles.btnText}>LOGIN</Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.forgot} onPress={ () => console.log('forgot password') }>Forgot Password?</Text>
          </View>

          <View>
            <Text style={[styles.text, {fontSize: 16}]}>Not A Registered User?</Text>
          </View>

          <TouchableOpacity underlayColor='#ffffff'
            onPress={ () => this.props.navigation.navigate('Register') } >
            <View style={styles.btnView}>
              <Text style={styles.btnText}>REGISTER</Text>
            </View>
          </TouchableOpacity>
          <View style={{height:50}} />

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
    height: 50,
    width: 50,
    borderRadius: 25,
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
