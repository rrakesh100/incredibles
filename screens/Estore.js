import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet, Image } from 'react-native';
import { SearchBar, ButtonGroup, Button, Badge } from 'react-native-elements';
import { Card } from 'native-base';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { estoreData } from '../api/estore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;

export default class Estore extends Component {

  state = {
    index: 0
  }

  _renderItem ({item, index}) {
    return (
      <View>
      <Image style={styles.imgS} source={item.img} />
      </View>
    )
  }

  updateIndex = (index) => {
  this.setState({index})
  }

  renderEStoreCurAff() {

  }

  render() {

    return (
      <ScrollView>
        <SearchBar
          onChangeText={() => {}}
          onClearText={() => {}}
          lightTheme={true}
          inputStyle={{backgroundColor: 'white'}}
          placeholder='What are you looking for...' />

          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={estoreData}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            sliderHeight={sliderHeight}
            itemWidth={sliderWidth}
            autoplay={true}
            loop={true} />

            <View style={styles.imgText}>
                <View style={styles.container}>
                  <ButtonGroup
                    selectedButtonStyle={styles.selectedButtonStyle}
                    onPress={this.updateIndex}
                    selectedIndex={this.state.index}
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    buttons={['Study Material & Test Packets', 'Books', 'Online Tests']}
                    containerStyle={{height: 54}} />
                </View>
            </View>
            <View style={styles.gap}>
            <Text style={styles.cTxt}>Current Affairs</Text>
            <Icon name="view-grid" style={styles.icon} size={24} color="#6D8A9E" />
            </View>
            <View>
             <Card>
             <View style={styles.gap}>
              <Image style={{width: 100, height: 100, margin: 10}} source={require('../esca1.jpg')} />
                <View>
                  <View style={styles.gap}>
                    <Text style={styles.txtStyle}>May 2018</Text>
                    <Button title='50% OFF'  buttonStyle={styles.btnStyle}
                     textStyle={{color: '#7FD672', fontSize: 12}} />
                   </View>
                   <View style={styles.seperator}>
                   </View>
                   <View>
                    <Text style={{color: '#F8C548'}}>+ Weekly Practice Tests</Text>
                   </View>
                  <View style={styles.seperator}>
                  </View>
                  <View style={styles.gap}>
                    <Text style={{fontSize: 16}} numberOfLines={2}>PM Narendra Modi</Text>
                    <Button title='Buy' buttonStyle={styles.bStyle}
                     textStyle={{color: '#F8C548'}}/>
                  </View>
                </View>
             </View>
             </Card>
             <Card>
             <View style={styles.gap}>
              <Image style={{width: 100, height: 100, margin: 10}} source={require('../esca2.jpg')} />
                <View>
                  <View style={styles.gap}>
                    <Text style={styles.txtStyle}>June 2018</Text>
                    <Button title='50% OFF'  buttonStyle={styles.btnStyle}
                     textStyle={{color: '#7FD672', fontSize: 12}} />
                   </View>
                   <View style={styles.seperator}>
                   </View>
                   <View>
                    <Text style={{color: '#F8C548'}}>+ Weekly Practice Tests</Text>
                   </View>
                  <View style={styles.seperator}>
                  </View>
                  <View style={styles.gap}>
                    <Text style={{fontSize: 16}} numberOfLines={2}>Indian Army</Text>
                    <Button title='Buy' buttonStyle={styles.bStyle}
                     textStyle={{color: '#F8C548'}}/>
                  </View>
                </View>
             </View>
             </Card>
             <Card>
             <View style={styles.gap}>
              <Image style={{width: 100, height: 100, margin: 10}} source={require('../esca3.jpg')} />
                <View>
                  <View style={styles.gap}>
                    <Text style={styles.txtStyle}>July 2018</Text>
                    <Button title='50% OFF'  buttonStyle={styles.btnStyle}
                     textStyle={{color: '#7FD672', fontSize: 12}} />
                   </View>
                   <View style={styles.seperator}>
                   </View>
                   <View>
                    <Text style={{color: '#F8C548'}}>+ Weekly Practice Tests</Text>
                   </View>
                  <View style={styles.seperator}>
                  </View>
                  <View style={styles.gap}>
                    <Text style={{fontSize: 16}} numberOfLines={2}>Indian Economy</Text>
                    <Button title='Buy' buttonStyle={styles.bStyle}
                     textStyle={{color: '#F8C548'}}/>
                  </View>
                </View>
             </View>
             </Card>
             <View style={{height: 45, marginLeft: 180}}>
               <Button title='View All' buttonStyle={styles.btnS}
                textStyle={{color: '#F8C548'}}/>
             </View>
             { this.renderEStoreCurAff() }
            </View>

      </ScrollView>
    )
    }
  }

  const styles = StyleSheet.create({
    imgS : {
      height: 160,
      width: 0.95*sliderWidth,
      marginLeft: 8
    },
    imgText: {
      marginLeft:2,
      backgroundColor: 'white'
    },
    container : {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop : 12,
      marginLeft : -8,
      marginRight : -8
    },
    textStyle : {
      color: '#fff',
      fontSize : 15,
      fontWeight : 'bold'
    },
    selectedTextStyle: {
       color: '#fff',
       fontSize : 15,
       fontWeight : 'bold'
   },
   buttonStyle: {
      color: '#000',
      backgroundColor: '#8AAFCC'
   },
   selectedButtonStyle: {
      backgroundColor: '#FFBC01'
   },
   gap: {
     flexDirection: 'row',
     alignItems: 'center',
   },
   cTxt: {
     fontSize: 20,
     marginVertical: 10,
     marginHorizontal: 10
   },
   icon: {
     position:'absolute',
     right: 10
   },
   cardStyle: {
     width: sliderWidth,
     position: 'relative'
   },
   txtStyle: {
     color: '#47C8DB',
     fontSize: 20,
     fontWeight: 'bold'
   },
   seperator: {
     height: 10
   },
   btnStyle: {
     width: 68,
     height: 25,
     borderRadius: 6,
     borderColor: '#7FD672',
     backgroundColor: '#DCFFE7',
     borderWidth: 1
   },
   bStyle: {
     width: 60,
     height: 30,
     borderRadius: 16,
     borderColor: '#F8C548',
     borderWidth:1,
     backgroundColor: 'white'
   },
   btnS: {
     width: 160,
     height: 40,
     borderRadius: 20,
     borderColor: '#F8C548',
     borderWidth:1,
     backgroundColor: 'white'
   }
  })
