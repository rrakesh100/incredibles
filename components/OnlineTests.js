import React , { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Card } from 'native-base';
import { Button } from 'react-native-elements';

export default class OnlineTests extends  Component {

  render() {


    return (
      <View>
        <Card>
        <View>
          <View style={styles.flex}>
            <Text style={styles.txtStyle}>EAMCET - 2018 Grand Tests</Text>
            <Button title='60% OFF'  buttonStyle={styles.btnStyle}
             textStyle={{color: '#7FD672', fontSize: 12}} />
           </View>

           <View style={styles.flex}>
           <View>
           <Text style={{color: '#F8C548', fontSize: 18}}>Engineering</Text>
           <View style={styles.seperator}>
           </View>
            <Text style={{fontSize: 14}}>8 Mock Tests</Text>
            <View style={styles.seperator}>
            </View>
            <View>
            <Text>Rs.<Text style={{textDecorationLine: 'line-through'}}>500</Text> Rs.<Text style={{color: '#17A194'}}>150</Text></Text>
            </View>
           </View>
           <View style = {styles.lineStyle} />
           <View>
           <Text style={{color: '#F8C548', fontSize: 18}}>Medical</Text>
           <View style={styles.seperator}>
           </View>
            <Text style={{fontSize: 14}}>8 Mock Tests</Text>
            <View style={styles.seperator}>
            </View>
            <View>
            <Text>Rs.<Text style={{textDecorationLine: 'line-through'}}>500</Text> Rs.<Text style={{color: '#17A194'}}>150</Text></Text>
            </View>
           </View>
           <View style={{margin: 8}}>
           </View>
             <Button title='SUBSCRIBE' buttonStyle={styles.bStyle}

              textStyle={{color: '#F8C548'}}
              onPress={() => this.props.navigate('OnlineSubscribe', {data: {name: 'Girish'}})} />

           </View>
        </View>
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
            <View style={styles.seperator}>
            </View>
            <View>
            <Text>Rs.<Text style={{color: '#17A194'}}>150</Text></Text>
            </View>
           </View>
           <View>
           </View>
           <View>
             <Button title='SUBSCRIBE' buttonStyle={styles.bStyle}
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
            <View style={styles.seperator}>
            </View>
            <View>
            <Text>Rs.<Text style={{color: '#17A194'}}>150</Text></Text>
            </View>
           </View>
           <View>
           </View>
           <View>
             <Button title='SUBSCRIBE' buttonStyle={styles.bStyle}
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
            <View style={styles.seperator}>
            </View>
            <View>
            <Text>Rs.<Text style={{color: '#17A194'}}>150</Text></Text>
            </View>
           </View>
           <View>
           </View>
           <View>
             <Button title='SUBSCRIBE' buttonStyle={styles.bStyle}
              textStyle={{color: '#F8C548'}}/>
           </View>
           </View>
        </View>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8
  },
  txtStyle: {
    color: '#47C8DB',
    fontSize: 20,
    fontWeight: 'bold',
  },
  seperator: {
    height: 4
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
