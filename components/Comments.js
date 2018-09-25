import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, ScrollView, TextInput, Linking, TouchableHighlight, Image, Picker } from 'react-native';
import { Card } from 'native-base';

const sliderWidth = Dimensions.get('window').width;


export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({navigation}) => (
  {
    title: 'Comments',
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
      <ScrollView style={{backgroundColor: '#E8F3F7'}}>
        <View style={{marginTop: 20, marginLeft:10, backgroundColor: 'white', width: sliderWidth*0.95}}>
            <Picker
              onValueChange={(itemValue, itemIndex) => this.setState({comment: itemValue})}
              selectedValue={this.state.comment}
              style={{ height: 40, width: sliderWidth*0.95 }}>
              <Picker.Item label="Comment1" value="comment1" />
              <Picker.Item label="Comment2" value="comment2" />
            </Picker>
        </View>

        <View style={{marginTop: 20, marginLeft: 10, width: '95%'}}>
            <TextInput placeholder='Add your comment here'
            style={{height: 100,
                  borderColor: 'white',
                  borderWidth: 1,
                  backgroundColor: 'white'}} />
        </View>

        <View style={{marginTop:20}}>
            <TouchableHighlight underlayColor='#E8F3F7'
              onPress={ () => console.log('comment goes here') } >
              <View style={styles.btnView}>
                <Text style={styles.btnText}>COMMENT</Text>
              </View>
            </TouchableHighlight>
        </View>

          <View style={{marginTop:60, marginLeft: 10}}>
              <Text style={{fontSize: 18, color: '#47C8DB'}}>100 Comments</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableHighlight underlayColor='#E8F3F7'
            onPress={ () => this.props.navigation.navigate('Test', {data: {name: 'Girish'}}) }>
          <View style={styles.box}>
              <Text style={styles.boxTxt}>JEE Main</Text>
          </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor='#E8F3F7'
            onPress={ () => console.log('x') }>
          <View style={styles.box}>
              <Text style={styles.boxTxt}>JEE Advance</Text>
          </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor='#E8F3F7'
            onPress={ () => console.log('x') }>
          <View style={styles.box}>
              <Text style={styles.boxTxt}>Mathematics</Text>
          </View>
          </TouchableHighlight>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableHighlight underlayColor='#E8F3F7'
            onPress={ () => console.log('x') }>
          <View style={styles.box}>
              <Text style={styles.boxTxt}>Physics</Text>
          </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor='#E8F3F7'
            onPress={ () => console.log('x') }>
          <View style={styles.box}>
              <Text style={styles.boxTxt}>Chemistry</Text>
          </View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor='#E8F3F7'
            onPress={ () => console.log('x') }>
          <View style={styles.box}>
              <Text style={styles.boxTxt}>Question Paper</Text>
          </View>
          </TouchableHighlight>
          </View>

          <View style={{flexDirection: 'row', marginLeft: 10}}>
          <TouchableHighlight underlayColor='#E8F3F7'
            onPress={ () => console.log('x') }>
          <View style={styles.box}>
              <Text style={styles.boxTxt}>Syllabus</Text>
          </View>
          </TouchableHighlight>
          </View>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  btnView: {
    height: 50,
    marginTop:20,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#ffffff',
    width:'95%',
    borderColor: '#FFBC01',
    borderWidth: 1
  },
  btnText: {
    color: '#FFBC01',
    fontSize: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom:'auto'
  },
  box: {
    marginTop:20,
    width: 100,
    height: 40,
    backgroundColor: '#ffffff',
    borderWidth:0.5,
    borderColor: '#838685'
  },
  boxTxt: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#838685'
  }
})
