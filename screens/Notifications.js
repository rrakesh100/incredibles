import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';



export default class Updates extends Component {
  constructor(props) {
    super(props);
    this.state={
      notifications: [
        {
          title: 'SSC EXAM',
          date: '04/10/2018',
          time: '09:00',
          desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor'
        },
        {
          title: 'IIT JEE',
          date: '04/10/2018',
          time: '09:00',
          desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor'
        },
        {
          title: 'GATE',
          date: '04/10/2018',
          time: '09:00',
          desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor'
        },
        {
          title: 'NEET',
          date: '04/10/2018',
          time: '09:00',
          desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor'
        }
      ]
    };
  }

  static navigationOptions = ({navigation}) => (
  {
    title: 'Notifications',
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

  renderNotificationItem({item}) {
    return (
      <TouchableOpacity onPress={ () => this.props.navigation.navigate('ViewNotification', item) }>
      <View style={{height: 120, backgroundColor: '#ffffff'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <View style={styles.btn}>
          <Text style={{color: '#50E347', textAlign: 'center'}}>{item.title}</Text>
          </View>
          <View style={{marginTop:10, marginRight:10}}>
          <Text style={{color: '#F1B323', fontSize:18}}>{item.time}</Text>
          </View>
        </View>
        <View style={{marginLeft:10, marginTop:4}}>
          <Text style={{color: '#F1B323', fontSize:18}}>{item.date}</Text>
        </View>
        <View style={{marginLeft:10}}>
        <Text numberOfLines={3} style={{}}>{item.desc}</Text>
        </View>
      </View>
      </TouchableOpacity>
    )
  }

  renderItemSeperator() {
    return (
        <View style={styles.separator}></View>
    )
  }

  renderNotificationsList() {
    const { notifications } = this.state;
    console.log(notifications);
    return (
      <View>
        <FlatList
            data={notifications}
            renderItem={this.renderNotificationItem.bind(this)}
            ItemSeparatorComponent={this.renderItemSeperator.bind(this)}
        />
      </View>
    )
  }

  render() {

    return (
      <ScrollView style={{backgroundColor: '#E8F3F7'}}>
          { this.renderNotificationsList() }
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
