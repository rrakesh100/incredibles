import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Card } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { AsyncStorage } from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


const sliderWidth = Dimensions.get('window').width;


export default class  NewCheckout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribed : false,
      quantity : 1,
      items : []
    }
  }

  componentDidMount(){
    this._retrieveData();
  }

  static navigationOptions = ({navigation}) => (
  {
    title: 'Checkout',
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

  storeData = async () => {
    try {
      await AsyncStorage.setItem('TASKS', 'I like to save it.');
    } catch (error) {
      // Error saving data
    }
  }

  _retrieveData = async () => {

    let allItemsObj = {}; let totalOriginalPrice = 0; let totalDiscount = 0;
    let totalPrice = 0; let totalQuantity = 0;

    try {
      const subscriptions = await AsyncStorage.getItem('subscriptions') ;
      const onlineTests = await AsyncStorage.getItem('onlineTests');

      if (subscriptions !== null) {
        let subscriptionsArray = JSON.parse(subscriptions);
        this.setState({
          'subscriptions' : subscriptionsArray
        })

        let itemsArray = [];
        console.log('subscriptions = = = = ', subscriptionsArray);

        subscriptionsArray.map((subscription , i)=> {
          let subscripData = subscription['data'];
          let item = {};
          item.title = subscripData.title;
          item.desc = subscripData.description;
          item.originalPrice = subscripData.originalPrice || subscripData.price;
          item.price = subscripData.price;
          itemsArray.push(item);
          totalQuantity = totalQuantity + 1;
          totalOriginalPrice += Number(item.originalPrice ? item.originalPrice : 0);
          totalDiscount += Number(item.originalPrice - item.price);
          totalPrice += Number(item.price ? item.price : 0);
        })

        allItemsObj['subscriptions'] = itemsArray;
        console.log('total price = = ' , totalPrice);
        allItemsObj['totalPrice'] = totalPrice;
        allItemsObj['totalDiscount'] = totalDiscount;
        allItemsObj['totalOriginalPrice'] = totalOriginalPrice;
        this.setState({
          allItemsObj
        });
      }

      if (onlineTests !== null) {
          let onlineTestsArray = JSON.parse(onlineTests);
          this.setState({
            'onlineTests' : onlineTestsArray
          })

          let itemsArray = [];

          console.log('onlineTestsArray = = = = ', onlineTestsArray);


          onlineTestsArray.map((onlineTest , i)=> {
            let onlineTestData = onlineTest['data'];
            let item = {};
            item.title = onlineTestData.title;
            item.desc = onlineTestData.description;
            item.originalPrice = onlineTestData.originalPrice || onlineTestData.price;
            item.price = onlineTestData.price;
            itemsArray.push(item);
            totalQuantity = totalQuantity + 1;
            totalOriginalPrice += Number(item.originalPrice ? item.originalPrice : 0);
            totalDiscount += Number(item.originalPrice - item.price)
            totalPrice += Number(item.price ? item.price : 0)
        })

        allItemsObj['onlineTests'] = itemsArray;
        console.log('total price = = ' , totalPrice);
        allItemsObj['totalPrice'] = totalPrice;
        allItemsObj['totalDiscount'] = totalDiscount;
        allItemsObj['totalOriginalPrice'] = totalOriginalPrice;
        allItemsObj['totalQuantity'] = totalQuantity ;

        this.setState({
          allItemsObj
        });
      }
   } catch (error) {
       console.log('&&&&&&&&&&&&& ===== ', error);
   }
  }

  renderCartItems() {
    const { allItemsObj } = this.state; let cards = [];
    if(!allItemsObj)
      return;

    let subscriptionsArr = allItemsObj['subscriptions'];
    let onlineTestsArr = allItemsObj['onlineTests'];

      if(subscriptionsArr) {
        cards.push(<Text>Study Materials</Text>)
        subscriptionsArr.map((item, index) => {
          cards.push(
            this.renderOneItem(item, index)
           )
        })
      }

      if(onlineTestsArr) {
        cards.push(<Text>Online Tests</Text>)
        onlineTestsArr.map((item, index) => {
          cards.push(
            this.renderOneItem(item,index)
           )
        })
      }

    return cards;
  }

  renderOneItem(item,index) {
    return(  <View key={index}>
        <Card style={{height: 120}}>
        <Grid>
          <Row style={{marginTop: 10, marginLeft: 10}}>
              <Col size={3}>
                 <Text style={styles.textCardStyle}>Title</Text>
              </Col>
              <Col size={7}>
                 <Text style={styles.textCardValueStyle}>{item.title}</Text>
              </Col>
          </Row>
          <Row style={{marginTop: 10, marginLeft: 10}}>
              <Col size={3}>
                 <Text style={styles.textCardStyle}>Description</Text>
              </Col>
              <Col size={7}>
                 <Text style={styles.textCardValueStyle}>{item.desc}</Text>
              </Col>
          </Row>
          <Row style={{marginTop: 10, marginLeft: 10}}>
              <Col size={3}>
                 <Text style={styles.textCardStyle}>Price</Text>
              </Col>
              <Col size={7}>
                 <Text style={styles.textCardValueStyle}>{item.originalPrice}</Text>
              </Col>
          </Row>
          <Row style={{marginTop: 10, marginLeft: 10}}>
              <Col size={3}>
                 <Text style={styles.textCardStyle}>Price after Discount Price</Text>
              </Col>
              <Col size={7}>
                 <Text style={styles.textCardValueStyle}>{item.price}</Text>
              </Col>
          </Row>
        </Grid>
        </Card>
      </View>)
  }


  renderSummary() {
    const  { allItemsObj } = this.state;
    if(!allItemsObj)
      return;
    return (
    <View style={{marginTop : 20}}>
          <Grid>
          <Row style={{marginTop : 20}}>
            <Col><Text style={styles.textStyle}>Total # of items</Text></Col>
            <Col><Text style={styles.textValueStyle}>{allItemsObj['totalQuantity']}</Text></Col>
          </Row>
          <Row style={{marginTop : 20}}>
            <Col><Text style={styles.textStyle}>Total Price</Text></Col>
            <Col><Text style={styles.textValueStyle}>Rs.{parseInt(allItemsObj['totalOriginalPrice'])}</Text></Col>
          </Row>
          <Row style={{marginTop : 20}}>
            <Col><Text style={styles.textStyle}>Discount on MRP</Text></Col>
            <Col><Text style={styles.textValueStyle}>Rs.{parseInt(allItemsObj['totalDiscount'])}</Text></Col>
          </Row>
          <Row style={{marginTop : 20}}>
            <Col><Text style={styles.textStyle}>Amount Payable</Text></Col>
            <Col><Text style={styles.textValueStyle}>Rs.{parseInt(allItemsObj['totalPrice'])}</Text></Col>
          </Row>
          </Grid>

      <View style={{marginTop: 120, marginLeft: 120}}>
        <Button title='CHECKOUT' buttonStyle={styles.checkoutButton}
        onPress={() => this.props.navigation.navigate('Billing', {data: {amountPayable: allItemsObj['totalPrice']}})}
         textStyle={{color: '#F8C548', fontSize : 14}} />
      </View>
      </View>

    );
  }

  render(){

    return (
        <ScrollView style={{backgroundColor : '#E8F3F7', marginLeft : 10, marginRight:10}}>
          <Text style={{marginTop : 20, fontSize : 20}}>Order Summary</Text>
          { this.renderCartItems() }
          { this.renderSummary() }

        </ScrollView>
      )
    }
  }

  const styles = StyleSheet.create({
    flex: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    txtStyle: {
      color: '#01C0E6',
      fontSize: 18,
      fontWeight: 'bold'
    },
    seperator: {
      height: 60,
      backgroundColor: '#5D7889',
      flexDirection: 'row',
      alignItems: 'center'
    },
    btnStyle: {
      width: 54,
      height: 25,
      borderRadius: 6,
      borderColor: '#50E347',
      backgroundColor: '#DDFEE7',
      borderWidth: 1
    },
    checkoutButton: {
      width: 120,
      height: 30,
      borderRadius: 16,
      borderColor: '#FFBC00',
      borderWidth:1,
      backgroundColor: 'white',
      bottom:20,
      position : 'absolute'
    },
    textStyle: {
      color: 'green',
      fontSize: 14,
      textAlign : 'left',
      marginLeft: 10
    },
    textValueStyle: {
      color: 'green',
      fontSize: 14,
      textAlign : 'right',
      marginRight: 10
    },
    textCardStyle: {
      fontSize: 14,
      textAlign : 'left',
      marginLeft: 10
    },
    textCardValueStyle: {
      fontSize: 14,
      textAlign : 'right',
      marginRight: 10
    }
  })
