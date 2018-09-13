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


  componentDidMount(){
    const { items } = this.state;

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

  _storeData = async () => {
    const { navigation } = this.props;

    const data = navigation.state.params.data;
      try {
        let value =  this._retrieveData().then(value => {
          console.log('LOLOLO', value);
          let v = [];
          v.push(data);
          console.log('EEEEEEE', JSON.parse(value));
          if(value) {
           v = v.concat(JSON.parse(value));
            console.log('VVVVVVVVVV', v);
            console.log('WWWWWWWWWW', JSON.stringify(v));


          }
          console.log('HAHAHAHA', v);
          AsyncStorage.setItem('items', JSON.stringify(v));
          this.setState({
            items : v
          })
          })
      } catch (error) {
        console.log(error) ;
      }
  }

  _retrieveData = async () => {
  try {
    return AsyncStorage.getItem('items')
   } catch (error) {
     // Error retrieving data
   }
  }


  renderCartItems() {
    const { navigation } = this.props;
    const { items } =  this.state ;

    console.log('$$$$$$$$$$$$$', items);

    if(!items)
      return;

    return (
      items.map((item, index) => {
        return (

          <View key={index}>
            <Card style={{height: 120}}>
            <Grid>
              <Row style={{marginTop: 10, marginLeft: 10}}>
                  <Col>
                     <Text style={styles.textCardStyle}>Title</Text>
                  </Col>
                  <Col>
                     <Text style={styles.textCardValueStyle}>{item.title}</Text>
                  </Col>
              </Row>
              <Row style={{marginTop: 10, marginLeft: 10}}>
                  <Col>
                     <Text style={styles.textCardStyle}>Description</Text>
                  </Col>
                  <Col>
                     <Text style={styles.textCardValueStyle}>{item.shortDesc}</Text>
                  </Col>
              </Row>
              <Row style={{marginTop: 10, marginLeft: 10}}>
                  <Col>
                     <Text style={styles.textCardStyle}>Price</Text>
                  </Col>
                  <Col>
                     <Text style={styles.textCardValueStyle}>{item.originalPrice}</Text>
                  </Col>
              </Row>
              <Row style={{marginTop: 10, marginLeft: 10}}>
                  <Col>
                     <Text style={styles.textCardStyle}>Discounted Price</Text>
                  </Col>
                  <Col>
                     <Text style={styles.textCardValueStyle}>{item.price}</Text>
                  </Col>
              </Row>
            </Grid>
            </Card>
          </View>
        )

      })
    )


  }

  render(){
    const { items } = this.state;
    const { navigation } = this.props;
    const data = navigation.state.params.data;
    let amountPayable =  data.price;
    return (
        <ScrollView style={{backgroundColor : '#E8F3F7', marginLeft : 10, marginRight:10}}>
          <Text style={{marginTop : 20, fontSize : 20}}>Order Summary</Text>
          { this.renderCartItems() }
        <View style={{marginTop : 20}}>
            <Grid>
            <Row style={{marginTop : 20}}>
              <Col><Text style={styles.textStyle}>Total # of items</Text></Col>
              <Col><Text style={styles.textValueStyle}>2</Text></Col>
            </Row>
            <Row style={{marginTop : 20}}>
              <Col><Text style={styles.textStyle}>Total Price</Text></Col>
              <Col><Text style={styles.textValueStyle}>Rs.{parseInt(data.price)*2}</Text></Col>
            </Row>
            <Row style={{marginTop : 20}}>
              <Col><Text style={styles.textStyle}>Discount on MRP</Text></Col>
              <Col><Text style={styles.textValueStyle}>Rs.{parseInt(data.discountedPrice)*2}</Text></Col>
            </Row>
            <Row style={{marginTop : 20}}>
              <Col><Text style={styles.textStyle}>Amount Payable</Text></Col>
              <Col><Text style={styles.textValueStyle}>Rs.{parseInt(data.price)*2}</Text></Col>
            </Row>
            </Grid>
        </View>

        <View style={{marginTop: 120, marginLeft: 120}}>
          <Button title='CHECKOUT' buttonStyle={styles.checkoutButton}
          onPress={() => this.props.navigation.navigate('Billing', {data: {amountPayable: amountPayable}})}
           textStyle={{color: '#F8C548', fontSize : 14}} />
         <Button title='ADD' buttonStyle={styles.checkoutButton}
         onPress={() => this._storeData()}
          textStyle={{color: '#F8C548', fontSize : 14}} />
        </View>

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
