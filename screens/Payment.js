import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import PayuMoney from 'react-native-payumoney';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';

let {width, height} = Dimensions.get('window');

type Props = {};
export default class Payment extends Component<Props> {

  static navigationOptions = ({navigation}) => (
  {
    title: 'Order Summary',
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


    render() {
      let amount = this.props.navigation.state.params.data.amountPayable;
        return (
                <View style={styles.container}>
                  <View style={styles.instruction}>
                      <Text style={styles.buttonText}>You will be redirected to the payment gateway</Text>
                      <Text style={styles.instructionText}>Payment Amount : {amount}</Text>
                      <Text style={styles.instructionText}>Selected Bank : HDFC</Text>

                  </View>
                    <TouchableOpacity style={styles.button} onPress={() => this._makePay()}>
                        <Text style={styles.buttonText}>Make Payment</Text>
                    </TouchableOpacity>
                </View>
        );
    }

    _makePay() {
      //merchantId = 6371743
    //merchantkey = ikWUZXlM
    //merchantSalt = emwQSa7mLh
      let amount = parseFloat(this.props.navigation.state.params.data.amountPayable);
        let options = {
            amount: amount,
            txid: new Date().getTime()+"",
            productId: "Sakshi",
            name: "coders",
            email: "codersmagic@gmail.com",
            phone: "9901250919",
            id: "6371743",
            key: "ikWUZXlM",
            surl: "https://www.payumoney.com/mobileapp/payumoney/success.php",
            furl: "https://www.payumoney.com/mobileapp/payumoney/failure.php",
            sandbox: true, //false in production
            hash: "d829abecdaf9f2835787b3f56d1c7565721ca2501e6414438e61948dab435f102fc93213008cdfa3474691cadcc2dabdde64cd58c128dd2afcf3b389d617919c"
        };
        PayuMoney.pay(options).then((d) => {
            console.log(d);
        }).catch(e => {
            console.log(e);
        });
    }

    // Below is the test card details for doing a test transaction:
    // Card No - 5123456789012346
    // Expiry - 05/20
    // CVV - 123
    // Name - Test
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#d3dcdd',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 50
    },
    instruction: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    instructionText: {
        color: "#000000",
        fontSize: 14
    },
    button: {
        width: width - 50,
        borderRadius: 5,
        backgroundColor: "#fff",
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
        padding: 8
    },
    buttonText: {
        color: "#ff0006",
        fontSize: 20
    },
});
