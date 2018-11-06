import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements';
import CartIcon from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { AsyncStorage } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;


export default class OnlineSubscribe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subscribed : false,
      quantity : 1
    }
  }

  static navigationOptions = ({navigation}) => (
  {
    title: `${navigation.state.params ? navigation.state.params.data.title : 'eStore-Study Material & Tests'}`,
    headerRight : null,
    headerLeft : <FontAwesomeIcon name={'arrow-left'} size={18} color="#fff" style={{marginLeft : 10}} onPress={ () => { navigation.goBack() } }  />,
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#364C8B',
      borderBottomColor: '#ffffff',
    },
    headerTitleStyle: {
      fontSize: 18,
    }
  }
  );


  onQuantityChanged(action) {
    if(this.state.quantity === 1 && action === 'remove'){
      this.setState({subscribed : false});
      return;
    }
    if(action === 'add') {
      this.setState({
        quantity: this.state.quantity + 1
      })
    }else {
      this.setState({
        quantity : this.state.quantity - 1
      })
    }
  }

  addToCart = (data, qty) => {
    let checkoutObj = {};
    checkoutObj['data'] = data;
    checkoutObj['quantity'] = qty;
    this.storeData('subscriptions', checkoutObj);
  }

  storeData = async (key, value) => {
    console.log('entered to store data');
    try {
      const storageValue = await AsyncStorage.getItem(key);
      console.log('storagevalue =====================================', storageValue);
      if(storageValue) {
        existingValue = JSON.parse(storageValue);
        existingValue.push(value);
        await AsyncStorage.setItem(key, JSON.stringify(existingValue));
      }else {
        let existingValue = [];
        existingValue.push(value)
        await AsyncStorage.setItem(key, JSON.stringify(existingValue));
      }


    } catch (error) {
      console.log(error);
    }
  }


  render() {
    const { subscribed, quantity } = this.state;
    const { navigation } = this.props;
    const data = navigation.state.params.data;
    return (
      <ScrollView>
        <Image style={styles.resize} source={data.image} />
            <View style={styles.header}>
              <View style={styles.flex}>
                <Text style={styles.txtStyle}>
                  {data.categoryName}
                </Text>
                <Button title='50% OFF'  buttonStyle={styles.btnStyle}
                 textStyle={{color: '#7FD672', fontSize: 12}} />
               </View>
               <Text style={{color: '#F8C548', marginLeft: 8}}>
               {data.insideShortDesc}
               </Text>
               <Text style={{color: '#b2bec3', fontSize: 16, margin: 8}}>
               {data.insideDesc}
               </Text>
            </View>
          <View style={[styles.space, {flex:1}]}>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginTop: 'auto', marginBottom: 'auto'}}>
              <Text style={{fontSize: 22}}>
                  {
                    data.originalPrice ?
                    <Text style={{textDecorationLine: 'line-through', fontSize:22}}>Rs.{data.originalPrice}</Text> : null }
                  <Text style={{fontSize: 22, marginLeft: 4}}>Rs.</Text>
                  <Text style={{color: '#17A194', fontSize: 22}}>{data.price}</Text>
              </Text>
              <View style={{position: 'absolute', right: 30}}>
              {
                subscribed ?
                  <View style={[styles.flex]}>
                  <Icon name='circle-with-minus'
                  size={24} style={{marginRight:10}}
                  color='#FFBC00'  onPress={this.onQuantityChanged.bind(this, 'remove')} />
                  <Text style={{fontSize: 20}}>{this.state.quantity}</Text>
                  <Icon name='circle-with-plus'
                  size={24} style={{marginLeft:10}}
                  color='#FFBC00'  onPress={this.onQuantityChanged.bind(this, 'add')} />
                  </View> :
                <Button title='BUY NOW' buttonStyle={styles.bStyle}
                onPress={() => {
                  this.setState({subscribed : true});
                }}
               textStyle={{color: '#F8C548'}} />
             }
              </View>
          </View>
          </View>
          <View style={styles.footer}>
            <Text style={{color: '#F8C548', margin: 8}}>
            *PDFs will be emailed only to the subscribed
            </Text>
            { subscribed ?
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
              <Button title='PROCEED' buttonStyle={styles.bStyle}
                 onPress={() => this.props.navigation.navigate('NewCheckout', {data: data, Qty: quantity})}
               textStyle={{color: '#F8C548', fontSize : 12}}  />
               </View>
               <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
              <Button title='ADD TO CART' buttonStyle={styles.bStyle}
                 onPress={ this.addToCart.bind(this, data, quantity) }
               textStyle={{color: '#F8C548', fontSize : 12}}  />
               </View>
             </View> : null }
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
    width: sliderWidth,
    height: sliderHeight*0.30
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
