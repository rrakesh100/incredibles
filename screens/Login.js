import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';



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

  render() {
    return (
      <View>
        <Text style={styles.login}>LOGIN</Text>
        <Text style={styles.text}>Login Through Social Accounts</Text>
          <View style={{}}>
            <Button>
                
            </Button>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  login: {
    color: '#47C8DB',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: sliderWidth*0.45,
    marginTop: 20
  },
  text: {
    color: '#B6C7D6',
    marginLeft: sliderWidth*0.30
  }
})
