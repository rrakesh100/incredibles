import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import CartIcon from 'react-native-vector-icons/EvilIcons';
import { Button, Icon } from 'react-native-elements';
import { Card } from 'native-base';
import CloseIcon from 'react-native-vector-icons/EvilIcons';
import { Col, Row, Grid } from "react-native-easy-grid";


const sliderWidth = Dimensions.get('window').width;


export default class  Checkout extends Component {
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
    title: 'My Cart',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#00539d',
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

  renderCartItems() {
    const { items } = this.state;
    const { navigation } = this.props;
    const data = navigation.state.params.data;
    items.push(data)

    return (
      items.map((item, index) => {
        return (

          <View key={index}>
            <Card style={{height: 120}}>
            <Grid>
              <Row style={{marginTop: 10, marginLeft: 10}}>
                  <Col>
                     <Text>Title</Text>
                  </Col>
                  <Col>
                     <Text>{item.title}</Text>
                  </Col>
              </Row>
              <Row style={{marginTop: 10, marginLeft: 10}}>
                  <Col>
                     <Text>Description</Text>
                  </Col>
                  <Col>
                     <Text>{item.shortDesc}</Text>
                  </Col>
              </Row>
              <Row style={{marginTop: 10, marginLeft: 10}}>
                  <Col>
                     <Text>Price</Text>
                  </Col>
                  <Col>
                     <Text>{item.originalPrice}</Text>
                  </Col>
              </Row>
              <Row style={{marginTop: 10, marginLeft: 10}}>
                  <Col>
                     <Text>Discounted Price</Text>
                  </Col>
                  <Col>
                     <Text>{item.price}</Text>
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
    return (
        <ScrollView>

        { this.renderCartItems() }
        <View style={styles.seperator}>
        <View>
        <Text style={styles.textStyle}>Total 1 Item</Text>
        <Text style={styles.textStyle}>Discount on MRP Rs.{data.discountedPrice}</Text>
        </View>
        <View>
        <Text style={{color: 'white',fontSize: 18, marginLeft: 50}}>Sub Total</Text>
        </View>
        <View>
        <Text style={styles.textStyle}>Rs {data.price}</Text>
        </View>
        </View>
        <View style={{marginTop: 80, marginLeft: 120}}>
        <Button title='CHECKOUT' buttonStyle={styles.checkoutButton}
        onPress={() => this.props.navigation.navigate('Billing', {data: {name: 'Girish'}})}
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
    textS: {
      color: '#F8C548',
      fontSize: 14
    },
    textStyle: {
      color: 'white',
      fontSize: 18,
      marginLeft: 10
    }
  })
