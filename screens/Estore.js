import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet, Image } from 'react-native';
import { SearchBar, ButtonGroup, Button, Badge } from 'react-native-elements';
import { Card } from 'native-base';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { estoreData , onlineTests, studyMaterial } from '../api/estore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OnlineTests from '../components/OnlineTests';
import { Col, Row, Grid } from "react-native-easy-grid";
const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;

export default class Estore extends Component {

  constructor(){
    super();
    this.renderStudyMaterialAndTestPackets=this.renderStudyMaterialAndTestPackets.bind(this);
    this.renderOnlineTests=this.renderOnlineTests.bind(this);
  }
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


  renderStudyMaterialAndTestPackets() {
    return (
      <View>
        {
        studyMaterial.map(entry => {
          let items = entry['items'];
        return (
              <View>
                 <View style={styles.gap}>
                    <Text style={styles.cTxt}>{entry.categoryName}</Text>
                 </View>
                 <View>
                    {
                      items.map(item => {
                        return (
                          <Card>
                           <Grid>
                              <Col size={2.2}>
                                <View style={styles.gap}>
                                 <Image style={{width: 100, height: 100, margin: 10}} source={item.image} />
                                 </View>
                              </Col>
                              <Col size={3.8} style={{marginTop : 10,marginLeft:4}}>
                                <View>
                                  <View style={styles.gap}>
                                    <Text style={styles.txtStyle}>{item.title}</Text>
                                    { item.discountPercentage  ?
                                    <Button title={item.discountPercentage + '% OFF'}  buttonStyle={styles.btnStyle}
                                     textStyle={{color: '#7FD672', fontSize: 8}} /> : null
                                    }
                                   </View>
                                   <View style={styles.seperator}/>
                                    <Text style={{color: '#FEC336'}}>+{item.shortDesc}</Text>
                                    <Text style={{fontSize: 16,marginTop : 10}} numberOfLines={2}>{item.description}</Text>
                                 </View>
                              </Col>
                              <Col size={2}  style={{marginTop : 10}}>
                                <Row>
                                   <Text><Text style={{textDecorationLine: 'line-through'}}>Rs.{item.originalPrice}</Text>
                                   <Text style={{color: '#17A194'}}>Rs.{item.price}</Text></Text>
                                </Row>
                                <Row>
                                  <Button title='Buy' buttonStyle={styles.bStyle}
                                  onPress ={() => this.props.onNavigate('OnlineSubscribe', {data: {name: 'Girish'}})}
                                   textStyle={{color: '#F8C548'}}/>
                                </Row>
                              </Col>
                           </Grid>
                           </Card> )})
                         }
                     </View>
                     <View style={{height: 45, marginLeft: 200}}>
                        <Button title='View All' buttonStyle={styles.viewAll}
                        textStyle={{color: '#F8C548'}}/>
                     </View>
              </View>
            )
          })
      }
      </View>
    )
    }


  renderOnlineTests(){
    return (
      <View>
      {
      onlineTests.map(test =>{
        return( <Card style={{height : 150}}>
          <Grid style={{marginLeft : 10}}>
            <Col size={3} style={{marginTop : 10}}>
              <Row size={2.8}>
              <Text style={styles.txtStyle}>{test.title}</Text>
              </Row>
              <Row size={1.9} >
              <Text style={{color: '#F8C548', fontSize: 18}}>{test.description}</Text>
              </Row>
              <Row size={1.3} style={{marginTop : 10}}>
              {
                test.originalPrice ? (<Text><Text style={{textDecorationLine: 'line-through'}}>Rs.{test.originalPrice}
                </Text><Text style={{color: '#17A194'}}>Rs.{test.price}</Text></Text>) :
                      (<Text style={{color: '#17A194'}}>Rs.{test.price}</Text>)
              }
              </Row>

            </Col>
            <Col size={1} style={{marginLeft : 10, marginTop : 10}}>
            <Row size={3}>
              <Col>
                  <Row>
                    {test.discountApplicable ? <View><Button title={test.discountPercentage + '% OFF'}  buttonStyle={styles.discountButtonStyle}
                     textStyle={{color: '#7FD672', fontSize: 8}} /></View> : null }
                  </Row>
                  <Row>
                    <Text style={{fontSize : 12}}>Valid for {test.validity}</Text>
                  </Row>
              </Col>
            </Row>
            <Row size={1}>
              <Button title='SUBSCRIBE' buttonStyle={styles.subscribeButton}
              onPress={() => this.props.onNavigate('Subscription', {data: {name: 'Girish'}})}
               textStyle={{color: '#F8C548', fontSize : 8}} />
            </Row>
            </Col>
          </Grid>
          </Card> )
      })
      }
    </View>
    )
  }

  renderSelectedTabContent() {

    if(this.state.index==0) {
       return (this.renderStudyMaterialAndTestPackets());
    }

    else if(this.state.index==1) {

      return (
        <View>
        <Text>sa</Text>
        </View>
      )
    }

    else if(this.state.index==2) {
        return (this.renderOnlineTests());
    }
  }

  render() {

    return (
      <ScrollView style={{backgroundColor : '#E8F3F7'}}>
        <SearchBar
          onChangeText={() => {}}
          onClearText={() => {}}
          lightTheme={true}
          containerStyle={{backgroundColor : '#E8F3F7', margin : 8}}
          inputStyle={{backgroundColor: 'white'}}
          placeholder='What are you looking for ?' />

          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={estoreData}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            sliderHeight={sliderHeight}
            itemWidth={sliderWidth}
            autoplay={true}
            loop={true} />

            <View>
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

            { this.renderSelectedTabContent() }
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
      fontWeight : 'bold',
      marginLeft : 10
    },
    selectedTextStyle: {
       color: '#fff',
       fontSize : 15,
       fontWeight : 'bold'
   },
   buttonStyle: {
      backgroundColor: '#89AFCC'
   },
   selectedButtonStyle: {
      backgroundColor: '#FFBC00'
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
     color: '#01C0E6',
     fontSize: 20,
     fontWeight: 'bold'
   },
   seperator: {
     height: 10
   },
   btnStyle: {
     width: 70,
     height: 25,
     borderRadius: 6,
     borderColor: '#50E347',
     backgroundColor: '#DDFEE7',
     borderWidth: 2
   },
   discountButtonStyle: {
     width: 70,
     height: 25,
     marginLeft: -50,
     borderRadius: 6,
     borderColor: '#50E347',
     backgroundColor: '#DDFEE7',
     borderWidth: 2
   },
   bStyle: {
     width: 60,
     height: 30,
     borderRadius: 16,
     borderColor: '#F8C548',
     borderWidth:1,
     backgroundColor: 'white'
   },
   viewAll: {
     width: 100,
     height: 40,
     borderRadius: 20,
     borderColor: '#F8C548',
     borderWidth:2,
     backgroundColor: 'white',
     position : 'absolute',
     marginTop : 8,
     right : 0
   },
   flex: {
     flexDirection: 'row',
     alignItems: 'center',
     margin: 8
   },
   seperatr: {
     height: 4
   },
   buttonS: {
     width: 68,
     height: 25,
     borderRadius: 6,
     borderColor: '#7FD672',
     backgroundColor: '#DCFFE7',
     borderWidth: 1
   },
   button: {
     width: 100,
     height: 30,
     borderRadius: 16,
     borderColor: '#F8C548',
     borderWidth:1,
     backgroundColor: 'white'
   },
   subscribeButton: {
     width: 70,
     height: 30,
     borderRadius: 16,
     borderColor: '#FFBC00',
     borderWidth:2,
     backgroundColor: 'white',
     bottom:20,
     position : 'absolute'
   },
   lineStyle: {
     margin: 20
   }
  })
