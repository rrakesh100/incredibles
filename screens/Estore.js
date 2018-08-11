import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet, Image } from 'react-native';
import { SearchBar, ButtonGroup, Button, Badge } from 'react-native-elements';
import { Card } from 'native-base';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { estoreData } from '../api/estore';
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
      <View style={styles.gap}>
      <Text style={styles.cTxt}>Current Affairs</Text>
      <Icon name="view-grid" style={styles.icon} size={24} color="#6D8A9E" />
      </View>
      <View>
       <Card>
       <Grid>
          <Col size={2.2}>
            <View style={styles.gap}>
             <Image style={{width: 100, height: 100, margin: 10}} source={require('../esca1.jpg')} />
             </View>
          </Col>
          <Col size={3.8} style={{marginTop : 10,marginLeft:4}}>
            <View>
              <View style={styles.gap}>
                <Text style={styles.txtStyle}>May 2018</Text>
                <Button title='50% OFF'  buttonStyle={styles.btnStyle}
                 textStyle={{color: '#7FD672', fontSize: 8}} />
               </View>
               <View style={styles.seperator}/>
                <Text style={{color: '#FEC336'}}>+ Weekly Practice Tests</Text>
                <Text style={{fontSize: 16,marginTop : 10}} numberOfLines={2}>PM Narendra Modi</Text>
             </View>
          </Col>
          <Col size={2}  style={{marginTop : 10}}>
            <Row>
               <Text>Rs.<Text style={{textDecorationLine: 'line-through'}}>500</Text> Rs.<Text style={{color: '#17A194'}}>150</Text></Text>
            </Row>
            <Row>
              <Button title='Buy' buttonStyle={styles.bStyle}
              onPress ={() => this.props.onNavigate('OnlineSubscribe', {data: {name: 'Girish'}})}
               textStyle={{color: '#F8C548'}}/>
            </Row>
          </Col>
       </Grid>
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
              onPress ={() => this.props.onNavigate('OnlineSubscribe', {data: {name: 'Girish'}})}
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
              onPress ={() => this.props.onNavigate('OnlineSubscribe', {data: {name: 'Girish'}})}
               textStyle={{color: '#F8C548'}}/>
            </View>
          </View>
       </View>
       </Card>
       <View style={{height: 45, marginLeft: 200}}>
         <Button title='View All' buttonStyle={styles.btnS}
          textStyle={{color: '#F8C548'}}/>
       </View>
       { this.renderEStoreCurAff() }
      </View>
      <View style={styles.gap}>
      <Text style={styles.cTxt}>Intelligence bureau</Text>
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
              onPress ={() => this.props.onNavigate('OnlineSubscribe', {data: {name: 'Girish'}})}
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
              onPress ={() => this.props.onNavigate('OnlineSubscribe', {data: {name: 'Girish'}})}
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
              onPress ={() => this.props.onNavigate('OnlineSubscribe', {data: {name: 'Girish'}})}
               textStyle={{color: '#F8C548'}}/>
            </View>
          </View>
       </View>
       </Card>
       <View style={{height: 45, marginLeft: 200}}>
         <Button title='View All' buttonStyle={styles.btnS}
          textStyle={{color: '#F8C548'}}/>
       </View>
       { this.renderEStoreCurAff() }
      </View>
      <View style={styles.gap}>
      <Text style={styles.cTxt}>RBI Assistants</Text>
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
              onPress ={() => this.props.onNavigate('OnlineSubscribe', {data: {name: 'Girish'}})}
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
              onPress ={() => this.props.onNavigate('OnlineSubscribe', {data: {name: 'Girish'}})}
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
              onPress ={() => this.props.onNavigate('OnlineSubscribe', {data: {name: 'Girish'}})}
               textStyle={{color: '#F8C548'}}/>
            </View>
          </View>
       </View>
       </Card>
       <View style={{height: 45, marginLeft: 200}}>
         <Button title='View All' buttonStyle={styles.btnS}
          textStyle={{color: '#F8C548'}}/>
       </View>
       { this.renderEStoreCurAff() }
      </View>
      <View style={styles.gap}>
      <Text style={styles.cTxt}>EAMCET</Text>
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
       <View style={{height: 45, marginLeft: 200}}>
         <Button title='View All' buttonStyle={styles.btnS}
          textStyle={{color: '#F8C548'}}/>
       </View>
       { this.renderEStoreCurAff() }
      </View>

      </View>
    )
  }


  renderOnlineTests(){
    return (
      <View>
        <Card style={{height : 120}}>
        <Grid style={{marginLeft : 20}}>
          <Row size={1} style={{marginTop : 10}}>
            <Text style={styles.txtStyle}>EAMCET - 2018 Grand Tests</Text>
            <Button title='60% OFF'  buttonStyle={styles.btnStyle}
             textStyle={{color: '#7FD672', fontSize: 8}} />
          </Row>
          <Row  size={3} style={{marginTop : 10}}>
            <Col>
              <Text style={{color: '#F8C548', fontSize: 18}}>Engineering</Text>
              <Text style={{fontSize: 14}}>8 Mock Tests</Text>
              <Text>Rs.<Text style={{textDecorationLine: 'line-through'}}>500</Text> Rs.<Text style={{color: '#17A194'}}>150</Text></Text>
            </Col>
            <Col>
            <Text style={{color: '#F8C548', fontSize: 18}}>Medical</Text>
            <Text style={{fontSize: 14}}>8 Mock Tests</Text>
            <Text>Rs.<Text style={{textDecorationLine: 'line-through'}}>500</Text> Rs.<Text style={{color: '#17A194'}}>150</Text></Text>
            </Col>
            <Col>
              <Button title='SUBSCRIBE' buttonStyle={styles.button}
              onPress={() => this.props.onNavigate('Subscription', {data: {name: 'Girish'}})}
               textStyle={{color: '#F8C548', fontSize : 8}} />
            </Col>
          </Row>
        </Grid>
        </Card>
        <Card>
        <View>
          <View style={{flexDirection: 'row', margin: 8}}>
            <View>
            <Text style={styles.txtStyle}>SSC CGL 2018 Tier</Text>
            <Text style={styles.txtStyle}>Grand Tests (New Pattern)</Text>
            </View>
            <Text style={{color: '#C3CFCF',position:'absolute',right: 5}}>valid for only 1 year</Text>
           </View>
           <View style={styles.flex}>
           <View>
            <Text style={{fontSize: 14}}>10 Tests with Solutions and explanation</Text>
            <View style={styles.seperatr}>
            </View>
            <View>
            <Text>Rs.<Text style={{color: '#17A194'}}>150</Text></Text>
            </View>
           </View>
           <View>
           </View>
           <View>
             <Button title='SUBSCRIBE' buttonStyle={styles.button}
             onPress={() => this.props.onNavigate('Subscription', {data: {name: 'Girish'}})}
              textStyle={{color: '#F8C548'}}/>
           </View>
           </View>
        </View>
        </Card>
        <Card>
        <View>
          <View style={{flexDirection: 'row', margin: 8}}>
            <View>
            <Text style={styles.txtStyle}>SSC CGL 2018 Tier</Text>
            <Text style={styles.txtStyle}>Grand Tests (Set-I)</Text>
            </View>
            <Text style={{color: '#C3CFCF',position:'absolute',right: 5}}>valid for only 1 year</Text>
           </View>
           <View style={styles.flex}>
           <View>
            <Text style={{fontSize: 14}}>4 Tests with Solutions and explanation</Text>
            <View style={styles.seperatr}>
            </View>
            <View>
            <Text>Rs.<Text style={{color: '#17A194'}}>150</Text></Text>
            </View>
           </View>
           <View>
           </View>
           <View>
             <Button title='SUBSCRIBE' buttonStyle={styles.button}
             onPress={() => this.props.onNavigate('Subscription', {data: {name: 'Girish'}})}
              textStyle={{color: '#F8C548'}}/>
           </View>
           </View>
        </View>
        </Card>
        <Card>
        <View>
          <View style={{flexDirection: 'row', margin: 8}}>
            <View>
            <Text style={styles.txtStyle}>SSC CGL 2018 Tier</Text>
            <Text style={styles.txtStyle}>Grand Tests (Set-II)</Text>
            </View>
            <Text style={{color: '#C3CFCF',position:'absolute',right: 5}}>valid for only 1 year</Text>
           </View>
           <View style={styles.flex}>
           <View>
            <Text style={{fontSize: 14}}>6 Tests with Solutions and explanation</Text>
            <View style={styles.seperatr}>
            </View>
            <View>
            <Text>Rs.<Text style={{color: '#17A194'}}>150</Text></Text>
            </View>
           </View>
           <View>
           </View>
           <View>
             <Button title='SUBSCRIBE' buttonStyle={styles.button}
             onPress={() => this.props.onNavigate('Subscription', {data: {name: 'Girish'}})}
              textStyle={{color: '#F8C548'}}/>
           </View>
           </View>
        </View>
        </Card>
      </View>)
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

  renderEStoreCurAff() {

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
   bStyle: {
     width: 60,
     height: 30,
     borderRadius: 16,
     borderColor: '#F8C548',
     borderWidth:1,
     backgroundColor: 'white'
   },
   btnS: {
     width: 140,
     height: 40,
     borderRadius: 20,
     borderColor: '#F8C548',
     borderWidth:1,
     backgroundColor: 'white'
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
   lineStyle: {
     margin: 20
   }
  })
