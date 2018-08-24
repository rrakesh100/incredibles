import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import CartIcon from 'react-native-vector-icons/EvilIcons';
import { Button, Icon } from 'react-native-elements';
import { Card } from 'native-base';
import CloseIcon from 'react-native-vector-icons/EvilIcons';


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
      items.map((item) => {
        return (

          <View>
            <Card>
              <View style={{flexDirection: 'row'}}>
               <Image style={{width: 100, height: 100, margin: 6}} source={item.image} />
                 <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
                     <Text style={styles.txtStyle}>{item.title}</Text>
                     <Text style={styles.textS}>{item.shortDesc}</Text>
                     <Text style={styles.textS}>{item.description}</Text>
                   </View>
               </View>
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
        <Text style={styles.textStyle}>Discount on MRP Rs.{data.originalPrice}</Text>
        </View>
        <View>
        <Text style={{color: 'white',fontSize: 18, marginLeft: 50}}>Sub Total</Text>
        </View>
        <View>
        <Text style={styles.textStyle}>Rs {data.originalPrice}</Text>
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
