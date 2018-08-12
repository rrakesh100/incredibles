import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import CartIcon from 'react-native-vector-icons/EvilIcons';
import { Button, Card, Icon } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

const sliderWidth = Dimensions.get('window').width;


export default class  Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribed : false,
      quantity : 1
    }
  }

  componentDidMount(){
    console.log(this.props);
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
        <View style={{marginLeft: 20}} >
        <Grid style={{marginTop: 10}}>
           <Col size={3}>
           <Text style={{fontSize: 20}}>Rs.<Text style={{fontSize: 20, color: '#47C8DB'}}>150</Text></Text>
           </Col>
           <Col size={3}>
           <Text style={{color: '#C3CFCF'}}>valid for 2 year</Text>
           </Col>
           <Col size={4}>
           {
             subscribed ? (
               <Row>
                <Col>
                <Icon raised name='md-remove-circle' type='ionicon' color='#FFBC00'  onPress={this.onQuantityChanged.bind(this, 'remove')} />
                </Col>
                <Col>
                  <Text style={{marginTop : 10, marginLeft : 10}}>{this.state.quantity}</Text>
                </Col>
                <Col >
                <Icon raised name='md-add-circle' type='ionicon' color='#FFBC00'  onPress={this.onQuantityChanged.bind(this, 'add')} />
                </Col>

               </Row>
              ) :
             ( <Button title='SUBSCRIBE' buttonStyle={styles.subscribeButton}
                 onPress={() => {
                   this.setState({subscribed : true});
                 }}
               textStyle={{color: '#F8C548', fontSize : 8}}  />)
           }

           </Col>
         </Grid>
        </View>
        </View>
        <View>
            <Button title='PROCEED' buttonStyle={styles.proceedButton}
               onPress={() => this.props.onNavigate('Checkout', {data: {name: 'Girish'}})}
             textStyle={{color: '#F8C548', fontSize : 12}}  />
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
    height:80,
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
  subscribeButton: {
    width: 80,
    height: 30,
    borderRadius: 16,
    borderColor: '#FFBC00',
    borderWidth:2,
    backgroundColor: 'white'
  },
  proceedButton: {
    width: 120,
    height: 30,
    borderRadius: 16,
    borderColor: '#FFBC00',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:3,
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
