import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, ScrollView, TextInput, Linking, TouchableHighlight, Image, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CameraRollPicker from 'react-native-camera-roll-picker';


export default class ProfileModify extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: '#E8F3F7'}}>
        <View style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 50}}>
          <Image source={require('../universe.jpg')}  style={{width:100, height: 100, borderRadius: 50}}/>
          <Icon name='edit' color='#FFBC01' size={30}/>
        </View>
        <View>
          <Text style={styles.name}>Swapan Kumar GV</Text>
          <Text style={styles.txt}>Email:</Text>
          <Text style={styles.emailId}>swapankgv@gmail.com</Text>
          <Text style={styles.txt}>Billing Address</Text>
          <View>
            <Text style={styles.text}>#221, 8th Cross</Text>
            <Text style={styles.text}>Tent Road,Devasandra,Old Madras Road</Text>
            <Text style={styles.text}>Bangalore, 560036</Text>
          </View>
        </View>
        <View style={styles.modify}>
            <Text style={styles.mTxt}>MODIFY</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  name : {
    color: '#47C8DB',
    fontSize: 22,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20
  },
  txt : {
    color: '#6C7A89',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    fontSize:16
  },
  emailId: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    fontSize:22
  },
  text : {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize:22
  },
  modify: {
    backgroundColor: '#ffffff',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:80,
    height: 40,
    width: 140,
    borderRadius: 30,
    borderColor: '#FFBC01',
    borderWidth:1,
  },
  mTxt: {
    color: '#FFBC01',
    fontSize: 24,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
})
