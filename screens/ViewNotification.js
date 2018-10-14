import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



export default class Updates extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  static navigationOptions = ({navigation}) => (
  {
    title: 'View Notification',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#00539d',
      borderBottomColor: '#ffffff',
    },
    headerTitleStyle: {
      fontSize: 22,
    }
  }
  );


  render() {
    const data = this.props.navigation.state.params;
    return (
      <ScrollView style={{backgroundColor: '#E8F3F7'}}>
        <View style={{marginLeft:'auto', marginRight:'auto', marginTop: 40}}>
          <Image source={require('../bell.png')} />
        </View>

        <View style={{marginTop:30, marginLeft: 'auto', marginRight: 'auto'}}>
            <View style={{paddingVertical:10, backgroundColor: '#ffffff', width:'90%'}}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <View style={styles.btn}>
                <Text style={{color: '#50E347', textAlign: 'center'}}>{data.title}</Text>
                </View>
                <View style={{marginTop:10, marginRight:10}}>
                  <Icon name='ios-close-circle' size={30} color='#F1B323' />
                </View>
              </View>

              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                  <View style={{marginLeft:10, marginTop:4}}>
                    <Text style={{color: '#F1B323', fontSize:18}}>{data.date}</Text>
                  </View>
                  <View style={{marginTop:10, marginRight:10}}>
                  <Text style={{color: '#F1B323', fontSize:18}}>{data.time}</Text>
                  </View>
              </View>
              <View style={{marginLeft:10}}>
              <Text style={{}}>{data.desc}</Text>
              </View>
            </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  btn : {
    marginTop:10,
    marginLeft:10,
    width: 100,
    height: 25,
    borderRadius: 16,
    borderColor: '#50E347',
    backgroundColor: '#DDFEE7',
    borderWidth: 1
  },
  separator: {
    height: 4
  }
})
