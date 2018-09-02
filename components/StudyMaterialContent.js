import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TextInput, Linking, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import ArrowIcon from 'react-native-vector-icons/Ionicons';


export default class StudyMaterialContent extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => (
  {
    title: 'Mathematics',
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
    return (
      <View style={{flex:1, backgroundColor: '#E8F3F7'}}>
        <View style={styles.header}>
            <View>
              <Text style={{color: '#47C8DB',fontSize: 18, fontWeight: 'bold', marginTop: 20, marginLeft: 10}}>Mathematical Induction</Text>
              <Text style={{color: '#FFBC01', marginLeft: 10}}>page(1-4)</Text>
            </View>
            <View>
              <Icon name='cloud-download' size={20} color='#263238' style={{marginTop: 20, marginLeft: 50}}/>
            </View>
            <View>
              <Icon name='heart' size={20} color='#263238' style={{marginTop: 20, marginLeft: 14}}/>
            </View>
            <View>
              <Icon name='share' size={20} color='#263238' style={{marginTop: 20, marginLeft: 14, marginRight: 'auto'}}/>
            </View>
        </View>

        <View style={styles.content}>
            <Text style={{margin:10, color: '#3A3A3A'}}>
            The method of induction requires two cases to be proved. The first case, called the base case (or, sometimes, the basis), proves that the property holds for the number 0. The second case, called the induction step, proves that, if the property holds for one natural number n, then it holds for the next natural number n + 1. These two steps establish the property P(n) for every natural number n = 0, 1, 2, 3, ... The base step need not begin with zero. Often it begins with the number one, and it can begin with any natural number, establishing the truth of the property for all natural numbers greater than or equal to the starting number.
            </Text>


        </View>

        <View style={styles.footer}>
            <ArrowIcon name='ios-arrow-back' size={18} color='#ffffff' style={{marginLeft: 20}}/>
            <Text style={{color:'#ffffff', fontSize:14, marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto'}}>page(1-4)</Text>
            <ArrowIcon name='ios-arrow-forward' size={18} color='#ffffff' style={{marginRight: 20}}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flex:12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 82,
    backgroundColor: 'white'
  },
  footer: {
    flex: 10,
    backgroundColor: '#9FB8CC',
    flexDirection: 'row',
    alignItems: 'center'
  }
})
