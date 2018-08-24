import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet, Image, FlatList, TouchableHighlight, Alert } from 'react-native';
import { SearchBar, Badge, ButtonGroup, Button } from 'react-native-elements';
import { testQuestions } from '../api/onlineTests';
import Icon from 'react-native-vector-icons/Ionicons';
import NewIcon from 'react-native-vector-icons/Feather';
import { Card } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import TimerCountdown from 'react-native-timer-countdown';

const showAlert = () => {
  Alert.alert(
    'submit',
    [
      {text: 'Submit', onPress: () => console.log('submitted')},
    ],
    { cancelable: false }
  )
}

const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      btnIndex: 0,
      optionClicked: {}
    };
  }



  static navigationOptions = ({navigation}) => (
  {
    headerStyle: {
      backgroundColor: 'white',
      borderBottomColor: '#ffffff',
    },
    headerTitleStyle: {
      fontSize: 18,
    },
    headerRight: <View style={{marginRight: sliderWidth*0.05}}>
          <TimerCountdown
            initialSecondsRemaining={1000*60*30}
            onTick={secondsRemaining => console.log('tick', secondsRemaining)}
            onTimeElapsed={showAlert}
            allowFontScaling={true}
            style={{fontSize: 16, fontWeight: 'bold', color: '#47C8DB'}} />
            </View>,
    headerLeft: <View style={{width: 50, height: 60, backgroundColor: '#364E87'}}>
                  <Text style={{color: 'white'}}>1</Text>
                </View>
  }
  );



  updateIndex = (index) => {

    const { btnIndex } = this.state;
    if(index == 0 && btnIndex != 0) {
      this.setState({ btnIndex: this.state.btnIndex-1 })
    }

    else if(index == 1) {
      console.log('stop the clock')
    }

    else if(index == 2) {
      let maxVal = testQuestions.length;
      this.state.btnIndex !== maxVal-1 &&
      this.setState({
        btnIndex: this.state.btnIndex+1,
        optionClicked: false
      });
    }

  }

  renderItemSeparator() {
      return (
          <View style={styles.separator}></View>
      )
  }

  onPressClick(option) {
    const { optionClicked } = this.state;
    optionClicked[option] = true;
    this.setState({ optionClicked })
  }

  renderOptionsList({item,index}) {
    const { optionClicked } = this.state;
    console.log(optionClicked)
    return (
      <TouchableHighlight underlayColor='white'
      onPress={this.onPressClick.bind(this, item.opt)}  >
          <View style={[styles.optionView, {borderColor: '#D2D7D3', borderWidth: 0.5}]}>
            <View style={[styles.optContainer]}>
                <Text style={styles.opt}>{item.opt}</Text>
            </View>
          </View>
          </TouchableHighlight>
    )
  }

  render() {
    const { index, btnIndex } = this.state;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
          <View style={[styles.flex, {flex:5}]}>
            <View style={[styles.txtView1, styles.flex]}>
              <Text style={styles.mark}>Mark 1</Text>
            </View>
            <View style={styles.space}>
            </View>
            <View style={[styles.txtView2, styles.flex]}>
              <NewIcon name='arrow-right' color='#47C8DB' />
              <Icon name='ios-arrow-forward' color='#47C8DB' />
              <Text style={styles.skip}>Skipped: <Text style={{color: '#47C8DB'}}>0</Text></Text>
            </View>
            <View style={styles.space}>
            </View>
            <View style={[styles.txtView3, styles.flex]}>
              <NewIcon name='check' color='#59B503' />
              <Text style={styles.ans}>Answered: <Text style={{color: '#59B503'}}>0</Text></Text>
            </View>
          </View>

        <View style={[styles.qstn, {flex:30}]}>
          <Text style={{fontSize: 22}}>{testQuestions[btnIndex].question}</Text>
        </View>

        <View style={{flex: 45}}>
          <FlatList
              data={testQuestions[btnIndex].options}
              renderItem={this.renderOptionsList.bind(this)}
              ItemSeparatorComponent={this.renderItemSeparator.bind(this)}
          />
        </View>

        <View style={styles.footer}>
          <ButtonGroup
            selectedButtonStyle={styles.selectedButtonStyle}
            onPress={this.updateIndex}
            selectedIndex={1}
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}
            selectedTextStyle={styles.selectedTextStyle}
            buttons={['<', 'PAUSE/END TEST', '>']}
            containerStyle={{height: 50}} />
        </View>
      </View>
      )
    }
  }

  const styles = StyleSheet.create({
    flex: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    txtView1: {
      width: sliderWidth*0.40,
      height: sliderHeight*0.05,
      backgroundColor: '#E8F3F7'
    },
    txtView2: {
      width: sliderWidth*0.29,
      height: sliderHeight*0.05,
      backgroundColor: '#E8F3F7'
    },
    txtView3: {
      width: sliderWidth*0.30,
      height: sliderHeight*0.05,
      backgroundColor: '#E8F3F7'
    },
    mark: {
      marginLeft: sliderWidth*0.15
    },
    skip: {
      marginLeft: sliderWidth*0.02
    },
    ans: {
      marginLeft: sliderWidth*0.02
    },
    space: {
      width: sliderWidth*0.005,
      backgroundColor: '#A5A8AC'
    },
    qstn: {
      margin: sliderWidth*0.04
    },
    optionView:  {
      paddingVertical: 18,
      paddingHorizontal: 6,
      flexDirection: 'row'
    },
    optContainer: {
      marginLeft: sliderWidth*0.04,
    },
    opt: {
      fontSize: 16
    },
    footer: {
      flex: 20,
      position: 'absolute',
      right: 0,
      left: 0,
      bottom: 0
    },
    selectedButtonStyle: {
      backgroundColor: '#E8F3F7'
    },
    textStyle : {
      color: 'white',
      fontSize : 24,
      fontWeight : 'bold',
      marginLeft : 10
    },
    selectedTextStyle: {
       color: '#FEC336',
       fontSize : 12,
       fontWeight : 'bold'
   },
    buttonStyle: {
       backgroundColor: '#89AFCC'
    },
  })
