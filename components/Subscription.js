import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import CartIcon from 'react-native-vector-icons/EvilIcons';
import { Button, Card } from 'react-native-elements';


const sliderWidth = Dimensions.get('window').width;


export default class  Subscription extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = ({navigation}) => (
  {
    title: 'eStore-Online Tests',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#00539d',
      borderBottomColor: '#ffffff',
    },
    headerTitleStyle: {
      fontSize: 18,
    },
    headerRight: <View>
        <CartIcon name="cart" style={{}} size={24} color="white" />
        </View>
  }
  );

  render() {
    return (
      <ScrollView>
        <Image style={styles.resize} source={require('../subscribe.jpg')} />
        <View style={styles.header}>
            <Text style={styles.txtStyle}>
            SSC CGL 2016 Tier Grand Tests (New Pattern)
            </Text>
           <Text style={{color: '#F8C548', marginLeft: 8}}>
           10 Tests with solutions and explanations
           </Text>
           <Text style={{color: '#b2bec3', fontSize: 16, margin: 8}}>
           Facility to take tests at your convenient time.
           </Text>
           <Text style={{color: '#b2bec3', fontSize: 16, margin: 8}}>
           Also find detailed solutions and explanations to each and every question.
           </Text>
           <Text style={{color: '#b2bec3', fontSize: 16, margin: 8}}>
           Feel the real-time experience with sakshieducation.com
           </Text>
           <Text style={{color: '#b2bec3', fontSize: 16, margin: 8}}>
           Online Mock tests
           </Text>

        </View>
        <View style={styles.seperator}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
        <View style={{marginLeft: 20}}>
        <Text style={{fontSize: 20}}>Rs.<Text style={{fontSize: 20, color: '#47C8DB'}}>150</Text></Text>
        </View>
        <Text style={{color: '#C3CFCF', marginLeft: 30}}>valid for 1 year</Text>
        <View style={{position: 'absolute', right: 4}}>
        <Button title='SUBSCRIBE' buttonStyle={styles.bStyle}
         textStyle={{color: '#F8C548'}}/>
         </View>
        </View>
        </View>
        <View style={styles.flex}>
        <View>
        <Card containerStyle={{width:150, height: 160}}>
          <Text style={{color: '#47C8DB', fontSize: 14, position: 'relative'}}>CURRENT AFFAIRS</Text>
          <Text style={{color: '#47C8DB', fontSize: 14, position: 'relative'}}>January 2018</Text>
          <Text style={{color: '#F8C548', fontSize: 10, marginTop: 4}}>+ Weekly Practise Tests</Text>
          <View style={{marginTop: 20}}>
          <Button title='40% OFF'  buttonStyle={styles.btnStyle}
           textStyle={{color: '#7FD672', fontSize: 12}} />
          </View>
          <View style={{marginTop: 4, marginLeft: 10}}>
          <Text>Rs.<Text style={{textDecorationLine: 'line-through'}}>50</Text> Rs.<Text style={{color: '#17A194'}}>30</Text></Text>
          </View>
        </Card>
        </View>
        <View>
        <Card containerStyle={{width:150, height: 160}}>
          <Text style={{color: '#47C8DB', fontSize: 14, position: 'relative'}}>IB ACIO Exam</Text>
          <Text style={{color: '#47C8DB', fontSize: 14, position: 'relative'}}>Previous Papers</Text>
          <Text style={{color: '#F8C548', fontSize: 10, marginTop: 4}}>+ Weekly Practise Tests</Text>
          <View style={{marginTop: 20}}>
          <Button title='50% OFF'  buttonStyle={styles.btnStyle}
           textStyle={{color: '#7FD672', fontSize: 12}} />
          </View>
          <View style={{marginTop: 4, marginLeft: 10}}>
          <Text>Rs.<Text style={{textDecorationLine: 'line-through'}}>100</Text> Rs.<Text style={{color: '#17A194'}}>50</Text></Text>
          </View>
        </Card>
        </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  resize : {
    width: sliderWidth,
    height: 150
  },
  header: {
    backgroundColor: '#E8F3F7',
    height: 250
  },
  seperator: {
    height:55,
    backgroundColor: 'white'
  },
  txtStyle: {
    fontSize: 20,
    margin: 8,
    color: '#47C8DB',
    fontWeight: 'bold'
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnStyle: {
    width: 74,
    height: 25,
    borderRadius: 6,
    borderColor: '#7FD672',
    backgroundColor: '#DCFFE7',
    borderWidth: 1
  },
  bStyle: {
    width: 100,
    height: 30,
    borderRadius: 16,
    borderColor: '#F8C548',
    borderWidth:1,
    backgroundColor: 'white'
  },
})
