import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, ScrollView, TextInput, Linking, TouchableHighlight, Image, Picker } from 'react-native';
import { Card } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';




export default class ApplicationSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: false,
      notificationSound: false
    };
  }

  static navigationOptions = ({navigation}) => (
  {
    title: 'Application Settings',
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
    const {notifications, notificationSound} = this.state;

    return (
      <View style={{flex:1}}>
        <View style={{flex:70}}>
          <View style={{height:50, backgroundColor: '#E8F3F7'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', marginTop: 'auto', marginBottom: 'auto'}}>
              <Text style={styles.txt}>Notifications</Text>
              {
                notifications ?
                <Icon name='toggle-on'
                size={34} color='#02BEE8'
                style={styles.icon}
                onPress={ () => this.setState({notifications:!this.state.notifications}) }
                /> :
                <Icon name='toggle-off'
                size={34} color='#9FB8CC'
                style={styles.icon}
                onPress={ () => this.setState({notifications:!this.state.notifications}) }
                />
              }

            </View>
          </View>
          <View style={{height:1}} />
          <View style={{height:50, backgroundColor: '#E8F3F7'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', marginTop: 'auto', marginBottom: 'auto'}}>
              <Text style={styles.txt}>Notification Sound</Text>
              {
                notificationSound ?
                <Icon name='toggle-on'
                size={34} color='#02BEE8'
                style={styles.icon}
                onPress={ () => this.setState({notificationSound:!this.state.notificationSound}) }
                /> :
                <Icon name='toggle-off'
                size={34} color='#9FB8CC'
                style={styles.icon}
                onPress={ () => this.setState({notificationSound:!this.state.notificationSound}) }
                />
              }
            </View>
          </View>
          </View>

          <View style={{flex:30}}>
              <View>
                  <Text style={{textAlign: 'center', color: '#38507F', fontSize: 30, fontWeight: 'bold'}}>SAKSHI EDUCATION</Text>
              </View>
              <View style={{borderBottomColor: '#9FB8CC', borderBottomWidth: 1}} />
              <View>
                  <Text style={{textAlign: 'center', color: '#FFBC01'}}>Educating, Enlightening and Ennobling</Text>
                  <Text style={{textAlign: 'center', color:'#9FB8CC', fontSize: 18, marginTop:10}}>Version 1.0</Text>
              </View>
              <View style={{marginTop: 30}}>
                  <Text style={{textAlign: 'center', color: '#48C7D8', fontSize: 22, fontWeight: 'bold'}}>www.sakshieducation.com</Text>
              </View>
          </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  txt: {
    fontSize:18,
    color:'#9FB8CC',
    marginLeft:20
  },
  icon: {
    marginRight: 30
  }
})
