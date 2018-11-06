import React , { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ScrollView, Picker, Dimensions, FlatList } from 'react-native';
import { Button, SearchBar, Badge, ButtonGroup } from 'react-native-elements';
import { onlineTestsInfo } from '../api/onlineTests';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Card } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';



const sliderWidth = Dimensions.get('window').width;


export default class OnlineTests extends  Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      exam: '',
      test: ''
    }
  }

  updateIndex = (index) => {
    this.setState({index})
  }

  renderItemSeperator() {
      return (
          <View style={styles.gap}></View>
      )
  }

  renderTrendingTestItem({item}) {
    return (
      <TouchableHighlight underlayColor='#E8F3F7'
      onPress={() => this.props.onNavigate('TakeTest', {data: item})} >
      <Card>
        <View style={{flexDirection: 'column'}}>
          <View style={[styles.flex]}>
            <Text style={styles.txtStyle}>{item.title}</Text>
            <Button title={item.type} buttonStyle={styles.btnStyle}
            textStyle={{color: '#7FD672', fontSize: 12}} />
          </View>
          <View style={styles.flex}>
            <Text style={styles.desc}>{item.description}</Text>
            <View style={{position: 'absolute', right: 10}}>
            <Icon name="ios-arrow-forward" color="#C4CCCD" size={28} />
            </View>
          </View>
          <View style={[styles.flex, {margin:4}]}>
              <Text style={styles.footer}>{item.questions} Questions</Text>
              <Text style={[styles.footer, {margin: 4}]}>{item.marks} Marks</Text>
              <Text style={styles.footer}>{item.time} Min</Text>
          </View>
        </View>

      </Card>
      </TouchableHighlight>
    )
  }

  renderTrendingTests() {
    return (
      <View>
          <FlatList
              data={onlineTestsInfo}
              renderItem={this.renderTrendingTestItem.bind(this)}
              ItemSeparatorComponent={this.renderItemSeperator.bind(this)}
          />
      </View>
    )
  }

  renderFreeTests() {
    return(
      <View>
          <FlatList
              data={onlineTestsInfo}
              renderItem={this.renderTrendingTestItem.bind(this)}
              ItemSeparatorComponent={this.renderItemSeperator.bind(this)}
          />
      </View>
    )
  }

  renderMyTests() {
    return(
      <View>
      <Text>My Tests</Text>
      </View>
    )
  }

  renderSelectedTabContent() {

    if(this.state.index==0) {
       return (this.renderTrendingTests());
    }

    else if(this.state.index==1) {
      return (this.renderFreeTests());
    }

    else if(this.state.index==2) {
        return (this.renderMyTests());
    }
  }



  render() {

    return (
      <ScrollView>
        <View style={styles.seperator}>
        <View><Text>We have more than 1000 tests with 50 different category exams</Text></View>
        <View style={styles.flex}>
          <View style={{marginTop:20, marginLeft:'auto', marginRight: 'auto', backgroundColor: 'white', width: '50%'}}>
              <Picker
                onValueChange={(itemValue, itemIndex) => this.setState({exam: itemValue})}
                selectedValue={this.state.exam}
                style={{ height: 40 }}>
                  <Picker.Item label="Select Exam Category" value="exam" />
                  <Picker.Item label="SSC" value="ssc" />
                  <Picker.Item label="GRE" value="gre" />
                  <Picker.Item label="IIT JEE - Advance" value="jee" />
                  <Picker.Item label="IBPS PO" value="ibps" />
                  <Picker.Item label="CIVILS" value="civils" />
                  <Picker.Item label="RRB Exams" value="rrb" />
                  <Picker.Item label="APPSC Exams" value="appsc" />
                  <Picker.Item label="TSPSC Exams" value="tspsc" />
                  <Picker.Item label="TET Exam" value="tet" />
                  <Picker.Item label="DSC Exam" value="dsc" />
                  <Picker.Item label="TRT Exam" value="trt" />
              </Picker>
          </View>
          <View style={{marginTop:20, marginLeft:'auto', marginRight: 'auto', backgroundColor: 'white', width: '40%'}}>
              <Picker
                onValueChange={(itemValue, itemIndex) => this.setState({test: itemValue})}
                selectedValue={this.state.test}
                style={{ height: 40 }}>
                <Picker.Item label="Select Exam Category" value="exam" />
                <Picker.Item label="SSC" value="ssc" />
                <Picker.Item label="GRE" value="gre" />
                <Picker.Item label="IIT JEE - Advance" value="jee" />
                <Picker.Item label="IBPS PO" value="ibps" />
                <Picker.Item label="CIVILS" value="civils" />
                <Picker.Item label="RRB Exams" value="rrb" />
                <Picker.Item label="APPSC Exams" value="appsc" />
                <Picker.Item label="TSPSC Exams" value="tspsc" />
                <Picker.Item label="TET Exam" value="tet" />
                <Picker.Item label="DSC Exam" value="dsc" />
                <Picker.Item label="TRT Exam" value="trt" />
              </Picker>
          </View>
          </View>

          <View style={{marginTop: 40, marginLeft: 'auto', marginRight: 'auto'}}>
          <Button title='FIND' buttonStyle={styles.btnS}
           textStyle={{color: '#F8C548', fontSize : 14}} />
          </View>

          <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
          <Badge textStyle={{color: 'white', fontSize: 8}}
          containerStyle={styles.badge} value='OR' />
          </View>

          <SearchBar
            onChangeText={() => {}}
            onClearText={() => {}}
            lightTheme={true}
            containerStyle={{backgroundColor : '#D0E1E8'}}
            inputStyle={{backgroundColor: 'white'}}
            placeholder='Which test are you looking for ?' />

          <View style={{marginTop: 30, marginLeft: 'auto', marginRight: 'auto'}}>
          <Button title='SEARCH' buttonStyle={styles.btnS}
           textStyle={{color: '#F8C548', fontSize : 14}} />
          </View>
        </View>
        <View>
            <View style={styles.container}>
              <ButtonGroup
                selectedButtonStyle={styles.selectedButtonStyle}
                onPress={this.updateIndex}
                selectedIndex={this.state.index}
                buttonStyle={styles.buttonStyle}
                textStyle={styles.textStyle}
                selectedTextStyle={styles.selectedTextStyle}
                buttons={['Trending Tests', 'Free Tests', 'My Tests']}
                containerStyle={{height: 54}} />
            </View>
        </View>
        { this.renderSelectedTabContent() }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  txtStyle: {
    color: '#47C8DB',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 4
  },
  seperator: {
    height: 280,
    backgroundColor: '#D0E1E8'
  },
  badge: {
    height: 26,
    width: 36,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: '#688183',
    borderColor: '#688183'
  },
  btnStyle: {
    width: 100,
    height: 25,
    borderRadius: 16,
    borderColor: '#50E347',
    backgroundColor: '#DDFEE7',
    borderWidth: 1
  },
  btnS: {
    width: 120,
    height: 30,
    borderRadius: 16,
    borderColor: '#FFBC00',
    borderWidth:1,
    backgroundColor: 'white',
    bottom:20
  },
  container : {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 12,
    marginLeft : -8,
    marginRight : -8
  },
  textStyle : {
    color: '#fff',
    fontSize : 15,
    fontWeight : 'bold',
    marginLeft : 10
  },
  buttonStyle: {
     backgroundColor: '#89AFCC'
  },
  selectedButtonStyle: {
     backgroundColor: '#FFBC00'
  },
  selectedTextStyle: {
     color: '#fff',
     fontSize : 15,
     fontWeight : 'bold'
 },
 gap: {
     height: 8
 },
 desc: {
   color: '#FEC336',
   margin: 4
 },
 footer: {
   color: '#C4CCCD'
 },
 arrow: {
     alignItems: 'center',
     justifyContent: 'center',
     width: 20
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
