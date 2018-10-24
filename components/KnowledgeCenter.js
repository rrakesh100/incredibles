import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { knowledgeCenterData } from '../api/knowledgeCenter';


const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;


export default class KnowledgeCenter extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  static navigationOptions = ({navigation}) => (
  {
    title: 'Knowledge Center',
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

  renderListItem({item}) {
    return (
      <TouchableOpacity underlayColor='#ffffff'
        onPress={ () => this.props.navigation.navigate('CareerGuidanceDetail', {data:item}) }>
        <View style={{paddingVertical:18, backgroundColor: '#ffffff'}}>
            <Text style={{fontSize:14, color: '#FFBC00', marginTop:10, marginLeft: 10}}>{item.date}</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 10}}>{item.title}</Text>
            <Image source={item.image} style={styles.resize}/>
            <Text style={{width: '95%', marginLeft: 'auto', marginRight: 'auto', fontSize: 16}} numberOfLines={3}>
            {item.description}
            </Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderItemSeperator() {
      return (
          <View style={styles.separator}></View>
      )
  }

  render() {

    return (
      <ScrollView style={{backgroundColor: '#E8F3F7'}}>
          <View style={{marginTop: 20,marginLeft: 'auto', marginRight: 'auto', width: '95%'}}>
          <SearchBar
            onChangeText={() => {}}
            onClearText={() => {}}
            lightTheme={true}
            containerStyle={{backgroundColor : '#D0E1E8'}}
            inputStyle={{backgroundColor: 'white'}}
            placeholder='What are you looking for ?' />
          </View>

          <View>
          <FlatList
              data={knowledgeCenterData}
              renderItem={this.renderListItem.bind(this)}
              ItemSeparatorComponent={this.renderItemSeperator.bind(this)}
          />
          </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  resize : {
    width: sliderWidth*0.95,
    height: sliderHeight*0.30,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  separator: {
      height: 8
  }
})
