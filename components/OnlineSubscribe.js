import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import CartIcon from 'react-native-vector-icons/EvilIcons';


const sliderWidth = Dimensions.get('window').width;


export default class OnlineSubscribe extends Component {

  static navigationOptions = ({navigation}) => (
  {
    title: 'eStore-Study Material & Tests',
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
        <Image style={styles.resize} source={require('../ib.jpg')} />
            <View style={styles.header}>
              <View style={styles.flex}>
                <Text style={styles.txtStyle}>
                Intelligence Bureau Exam 2018
                </Text>
                <Button title='50% OFF'  buttonStyle={styles.btnStyle}
                 textStyle={{color: '#7FD672', fontSize: 12}} />
               </View>
               <Text style={{color: '#F8C548', marginLeft: 8}}>
               Previous Solved Papers With Solutions
               </Text>
               <Text style={{color: '#b2bec3', fontSize: 16, margin: 8}}>
               It contains 2017 Previous Papers Prepared by eminent faculty and experts.Solutions and explanations for all questions.
               </Text>
            </View>
          <View style={styles.space}>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
              <Text style={{fontSize: 22}}>Rs.<Text style={{textDecorationLine: 'line-through', fontSize:22}}>40</Text> <Text style={{fontSize: 22, marginLeft: 4}}>Rs.</Text><Text style={{color: '#17A194', fontSize: 22}}>20</Text></Text>
              <View style={{position: 'absolute', right: 4}}>
              <Button title='BUY NOW' buttonStyle={styles.bStyle}
               textStyle={{color: '#F8C548'}} />
              </View>
          </View>
          </View>
          <View style={styles.footer}>
            <Text style={{color: '#F8C548', margin: 8}}>
            *PDFs will be emailed only to the subscribed
            </Text>
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
          </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  resize : {
    width: 0.99*sliderWidth,
    height: 150
  },
  header: {
    backgroundColor: '#E8F3F7',
    height: 140
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
    backgroundColor: 'white',

  },
  space: {
    height: 60,
    backgroundColor: 'white'
  },
  footer: {
    height: 240,
    backgroundColor: '#E8F3F7'
  }
})
