import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView, Linking, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';
import { Card, Badge } from 'native-base';
import { curAffData } from '../api/homepage';
import Icon from 'react-native-vector-icons/FontAwesome';

const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;

export default class CurrentAffairs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        'International Affairs',
        'National Affairs',
        'Economic Affairs',
        'Science and Technology',
        'Environment',
        'Awards',
        'Sports',
        'Persons in News'
      ]
    };
  }

  static navigationOptions = ({navigation}) => (
  {
    title: 'Current Affairs',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#00539d',
      borderBottomColor: '#ffffff',
    },
    headerTitleStyle: {
      fontSize: 18,
    }
  }
  );

  renderCurrentAffairsList = () => {

    return (
      curAffData.map((item, index) => {
        return (

          <Card key={index}>
          <TouchableHighlight underlayColor='#ffffff'
            onPress={() => this.props.navigation.navigate('CurrentAffair', {data: item})}>
            <View style={{}}>
                <View style={{marginTop:6, marginLeft:6}}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.heading}</Text>
                </View>
                <View style={styles.flex}>
                  <Image source={item.image} style={{width:60, height: 60, margin: 6}}/>
                  <View>
                  <Text numberOfLines={2} style={styles.description}>{item.description}</Text>
                    <View style={[styles.flex]}>
                      <Text style={{
                        color: '#FFBC00'
                      }}>
                      Read More >>
                      </Text>
                      <Text style={{
                        color: '#FFBC00',
                      }}>{item.date}</Text>
                    </View>
                  </View>
                </View>
            </View>
            </TouchableHighlight>
          </Card>
        )
      })
    )
  }

  listCategories() {
    const { categories } = this.state;

    return (
      categories.map((category, index) => {
            return (
                    <View style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      flex: 1,
                      marginTop: 4,
                      marginLeft: 10
                    }}>
                      <View style={{width: 10}}>
                        <Text style={{fontSize: 20}}>{'\u2022'+ ' '}</Text>
                      </View>
                      <View>
                        <Text style={{fontSize: 16}} onPress={this.renderCurrentAffairsList}>{category}</Text>
                      </View>
                </View>
            )
          })
    )
  }

  render() {

    return (
      <ScrollView style={{backgroundColor: '#E8F3F7'}}>
        { this.renderCurrentAffairsList() }
      </ScrollView>
    )
    }
  }

  const styles = StyleSheet.create({
    flex: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    description: {
      fontSize: 14,
      color:'#999999'
    },
    postedDate: {
      color: '#F8C548'
    },
    new : {
      alignItems: 'flex-end'
    },
    lastDate: {
      color: '#F8C548',
      position: 'absolute',
      right: 6
    }
  })
