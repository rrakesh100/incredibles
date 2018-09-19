import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Table, Row, Rows } from 'react-native-table-component';
import { AsyncStorage } from "react-native";


const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;


export default class TransactionInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['#', 'ITEMS', 'QTY', 'MRP', 'RATE'],
      tableData: [
        ['1', 'Intelligence Bureau', '1', 'RS.40', 'RS.20'],
        ['2', 'SSC CGL\n 2018', '1', 'RS.40', 'RS.20']
      ]
    }
  }

  componentDidMount() {
    //temporarily retrieving it from storage...ideally success callback of payment should pass the data
    this._retrieveData();
  }


    _retrieveData = async () => {

      let allItemsObj = {}; let totalOriginalPrice = 0; let totalDiscount = 0;
      let totalPrice = 0; let totalQuantity = 0;

      let tableData = [];

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


            let tempArr = [totalQuantity, item.title, '1', item.originalPrice, item.price ];
            tableData.push(tempArr);
          })

          allItemsObj['subscriptions'] = itemsArray;
          console.log('total price = = ' , totalPrice);
          allItemsObj['totalPrice'] = totalPrice;
          allItemsObj['totalDiscount'] = totalDiscount;
          allItemsObj['totalOriginalPrice'] = totalOriginalPrice;
          this.setState({
            allItemsObj,
            tableData
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


              let tempArr = [totalQuantity, item.title, '1', item.originalPrice, item.price ];
              tableData.push(tempArr);
          })

          allItemsObj['onlineTests'] = itemsArray;
          console.log('total price = = ' , totalPrice);
          allItemsObj['totalPrice'] = totalPrice;
          allItemsObj['totalDiscount'] = totalDiscount;
          allItemsObj['totalOriginalPrice'] = totalOriginalPrice;
          allItemsObj['totalQuantity'] = totalQuantity ;

          this.setState({
            allItemsObj,
            tableData
          });
        }
     } catch (error) {
         console.log('&&&&&&&&&&&&& ===== ', error);
     }
    }


  static navigationOptions = ({navigation}) => (
  {
    title: 'Transaction Invoice',
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
    const { tableHead, tableData, allItemsObj } = this.state;
    if(!allItemsObj)
      return null;
    let dataLength = tableData.length;

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let monthName = months[month];

    return (
      <ScrollView style={{backgroundColor: '#E8F3F7'}}>
          <View style={{height: 80}}>
            <Text style={styles.hTxt}>Your Transaction Was Successful!</Text>
            <Text style={styles.hText}>Please Find Your Invoice Below</Text>
          </View>
          <View style={{flex:1, backgroundColor: '#ffffff'}}>
           <View style={{flex:10}}>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 10}}>
                  <Text style={{color: '#FFBC01', fontSize: 18,}}>Order No:32760</Text>
                  <Text style={{color: '#5D7889', fontSize: 18, position: 'absolute', right: 10}}>{ day + ' ' + monthName + ' ' + year }</Text>
                </View>
           </View>

           <View style={{flex:90}}>

             <Table borderStyle={{borderColor: 'transparent'}}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                <Rows data={tableData} style={{paddingVertical: 10}} textStyle={styles.rows}/>
             </Table>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingVertical: 10}}>
              <View>
                <Text style={{color: '#5D7889'}}>Total {allItemsObj['totalQuantity']} Items</Text>
                <Text style={{color: '#5D7889'}}>Discount on MRP Rs.<Text style={{color: '#5D7889',
                      fontWeight: 'bold'}}>{allItemsObj['totalDiscount']}</Text></Text>
              </View>
                <Text style={{color: '#5D7889'}}>Sub Total</Text>
                <Text style={{color: '#5D7889'}}>Rs.{allItemsObj['totalPrice']}</Text>
            </View>
           </View>
         </View>

         <View>
            <Text style={{color: '#FFBC01',fontSize: 16, margin: 6}}>Payment Via PayU Money</Text>
         </View>

         <View style={{marginTop: 50, marginLeft: 'auto', marginRight: 'auto'}}>
           <Button title='SHARE' buttonStyle={styles.btnS}
            onPress={() => console.log('share')}
            textStyle={{color: '#F8C548', fontSize : 14}} />
         </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  hTxt: {
    color: '#FFBC01',
    fontSize: 18,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20
  },
  hText: {
    color: '#5D7889',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  head: {
    height: 40,
    backgroundColor: '#5D7889'
  },
  text: {
    color: '#ffffff',
    fontSize: 18
  },
  rows: {
    color: '#5D7889',
    margin: 2
  },
  btnS: {
    width: 120,
    height: 30,
    borderRadius: 16,
    borderColor: '#FFBC00',
    borderWidth:1,
    backgroundColor: 'white',
    bottom:20
  },
})
