import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import CartIcon from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Entypo';
import { Button, Card } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { AsyncStorage } from "react-native";

const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;


export default class  Subscription extends Component {

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


  componentDidMount() {
    console.log(this.props);
  }


    addToCart = (data, qty) => {
      let checkoutObj = {};
      checkoutObj['data'] = data;
      checkoutObj['quantity'] = qty;
      this.storeData('onlineTests', checkoutObj);
    }

    storeData = async (key, value) => {
      try {
        const storageValue = await AsyncStorage.getItem(key);
        console.log('storageValue = = = ', storageValue);
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

  render() {
    const { subscribed } = this.state;
    const { navigation } = this.props;
    const data = navigation.state.params.data;
    return (
      <ScrollView>
        <Image style={styles.resize} source={data.image} />
        <View style={styles.header}>
            <Text style={styles.txtStyle}>
            {data.title}
            </Text>
           <Text style={{color: '#F8C548', marginLeft: 8}}>
           {data.description}
           </Text>
           <Text style={{color: '#b2bec3', fontSize: 16, margin: 8}}>
           {data.insideDescription.first}
           </Text>
           <Text style={{color: '#b2bec3', fontSize: 16, margin: 8}}>
           {data.insideDescription.second}
           </Text>
           <Text style={{color: '#b2bec3', fontSize: 16, margin: 8}}>
           {data.insideDescription.third}
           </Text>
           <Text style={{color: '#b2bec3', fontSize: 16, margin: 8}}>
           {data.insideDescription.fourth}
           </Text>

        </View>
        <View style={styles.seperator}>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 'auto', marginBottom: 'auto'}}>
            <View style={{marginLeft: 20}}>
              <Text style={{fontSize: 20}}>Rs.<Text style={{fontSize: 20, color: '#47C8DB'}}>{data.price}</Text></Text>
            </View>
            <View style={{marginLeft: 20}}>
              <Text style={{color: '#C3CFCF'}}>{data.validity}</Text>
            </View>
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
                  <Button title='SUBSCRIBE' buttonStyle={styles.subscribeButton}
                     onPress={() => {
                       this.setState({subscribed : true});
                     }}
                   textStyle={{color: '#F8C548', fontSize : 10}}  />
             }
            </View>
            </View>
        </View>
        <View style={[styles.flex, {marginTop: 20}]}>
            <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
              <Button title='PROCEED' buttonStyle={styles.proceedButton}
                 onPress={() => this.props.navigation.navigate('NewCheckout', {data: data})}
               textStyle={{color: '#F8C548', fontSize : 12}}  />
             </View>
             <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
               <Button title='ADD TO CART' buttonStyle={styles.bStyle}
                  onPress={ this.addToCart.bind(this, data, this.state.quantity) }
                textStyle={{color: '#F8C548', fontSize : 12}}  />
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
    height: sliderHeight*0.30
  },
  header: {
    backgroundColor: '#E8F3F7',
    height: 250
  },
  seperator: {
    height:50,
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
    justifyContent: 'space-around'
  },
  btnStyle: {
    width: 74,
    height: 25,
    borderRadius: 6,
    borderColor: '#7FD672',
    backgroundColor: '#DCFFE7',
    borderWidth: 1
  },
  subscribeButton: {
    width: 80,
    height: 20,
    borderRadius: 16,
    borderColor: '#FFBC00',
    borderWidth:1,
    backgroundColor: 'white'
  },
  proceedButton: {
    width: 120,
    height: 30,
    borderRadius: 16,
    borderColor: '#FFBC00',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    backgroundColor: 'white'
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
