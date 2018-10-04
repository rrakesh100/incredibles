import React, {Component} from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';


const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;


export default class NotFound extends Component {


  render() {
    console.log(this.props);
    return (
        <View style={{marginTop: 'auto', marginBottom: 'auto'}}>
            <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <Text style={styles.num}>404</Text>
            </View>
            <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <Text style={styles.nf}>Not Found</Text>
            </View>
            <View style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 20}}>
                <Text style={styles.oops}>OOPS!!</Text>
            </View>
            <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <Text style={styles.oops}>Something Went Wrong</Text>
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
              <View style={styles.gth}>
                  <Text style={styles.gthT}>GO TO HOME</Text>
              </View>
            </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  num : {
    fontSize: 80,
    color: '#9EB8CD'
  },
  nf : {
    fontSize: 20,
    color: '#FFBC01'
  },
  oops : {
    fontSize: 26,
    color: '#54DEEC'
  },
  gth: {
    backgroundColor: '#ffffff',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:80,
    height: 50,
    width: 170,
    borderRadius: 30,
    borderColor: '#FFBC01',
    borderWidth:1,
  },
  gthT: {
    color: '#FFBC01',
    fontSize: 24,
    marginTop: 'auto',
    marginBottom:'auto',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})
