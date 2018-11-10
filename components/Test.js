import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet, Image, FlatList, TouchableHighlight, Alert } from 'react-native';
import { SearchBar, Badge, ButtonGroup, Button } from 'react-native-elements';
import { testQuestions } from '../api/onlineTests';
import Icon from 'react-native-vector-icons/Ionicons';
import NewIcon from 'react-native-vector-icons/Feather';
import { Card } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import TimerCountdown from 'react-native-timer-countdown';
import SadIcon from 'react-native-vector-icons/Entypo';



const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;

const Iterate = (numOfQuestions) => {
  let numOfQstns = numOfQuestions.numOfQuestions;
  let circleArr = [];
  return (
    <ScrollView horizontal={true} contentContainerStyle={{flexDirection: 'row', alignItems: 'center'}}>
      { (() => {
        for(let i=0; i<numOfQstns; i++) {
          circleArr.push(<View key={'numOfCirlcles' + Math.random()} style={{marginLeft:2,width:8, height:8, borderRadius: 4, borderColor: '#9FB8CC', borderWidth:0.5 }} />)
        }
        return circleArr;
    })() }
    </ScrollView>
  )
}

const HeaderTitle = (headerProps) => {

  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name='ios-arrow-back' color='#9FB8CC' size={24}/>
        <Iterate numOfQuestions={headerProps.headerProps.state.params.data.questions}/>
        <Icon name='ios-arrow-forward' color='#9FB8CC' size={24}/>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text>{headerProps.headerProps.state.params.data.questions} Questions</Text>
        <Text style={{marginLeft:10}}>{headerProps.headerProps.state.params.data.time} Mins</Text>
      </View>
    </View>
  )
}

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      btnIndex: 0,
      answers: {},
      revisitTest: false,
      time:0
    };
  }



  static navigationOptions = ({navigation}) => (
  {
    headerTitle: <HeaderTitle headerProps={navigation}/>,
    headerStyle: {
      backgroundColor: 'white',
      borderBottomColor: '#ffffff',
    },
    headerTitleStyle: {
      fontSize: 18,
    },
    headerRight: <View style={styles.headerView}>
          <View style={styles.timerCirlcle}></View>
          <TimerCountdown
            initialSecondsRemaining={1000*60*10}
            onTimeElapsed={() => {
              return (
                Alert.alert(
                  'Time over!',
                  '',
                  [
                    {text: 'submit', onPress: () => navigation.navigate('MyTests') },
                  ],
                  { cancelable: false }
                )
              )
            }}
            allowFontScaling={true}
            style={styles.timerStyle} />
            </View>,

    headerLeft: <View>
                <View style={{width: 50, height: 60, backgroundColor: '#364E87'}}>
                  <Text style={{fontSize: 20, color: 'white', marginTop: 'auto', marginBottom:'auto', marginLeft: 'auto', marginRight: 'auto'}}>1</Text>
                </View>
                </View>
  }
  );

  componentDidMount() {
    console.log(this.props);
  }

  newFunc() {
    return (
      <View><Text>Girish</Text></View>
    )
  }


  updateIndex = (index) => {

    const { navigation } = this.props;
    const { btnIndex } = this.state;
    if(index == 0 && btnIndex != 0) {
      this.setState({ btnIndex: this.state.btnIndex-1 })
    }

    else if(index == 1) {
      return (
        Alert.alert(
          'Are you sure you want to pause the test?',
          '',
          [
            {text: 'No', onPress: () => console.log('resumed') },
            {text: 'Yes', onPress: () => this.props.navigation.navigate('PauseTest')},
          ],
          { cancelable: true }
        )
      )
    }

    else if(index == 2) {
      let maxVal = testQuestions.length;
      this.state.btnIndex !== maxVal-1 &&
      this.setState({
        btnIndex: this.state.btnIndex+1
      });
    }

  }

  renderItemSeparator() {
      return (
          <View style={styles.separator}></View>
      )
  }

  onPressClick(option, optName, qstnNum) {
    const { answers } = this.state;
    answers[qstnNum] = optName;
    this.setState({ answers })
  }

  renderOptionsList({item,index}) {
    const { answers } = this.state;
    return (
      <TouchableHighlight underlayColor='white'
      onPress={this.onPressClick.bind(this, item.opt, item.optName, item.num)}>
            <Grid style={answers[item.num] == item.optName ? styles.selectedOpt : styles.optionView}>
                  <Row>
                    <Col size={90}>
                      <View>
                        <Text style={styles.opt}>{item.opt}</Text>
                      </View>
                    </Col>
                    <Col size={10}>
                      <View style={{backgroundColor: '#9FB8CC', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>{item.optName}</Text>
                      </View>
                    </Col>
                  </Row>
            </Grid>
          </TouchableHighlight>
    )
  }

  render() {
    const { index, btnIndex, answers, time } = this.state;
    console.log(time);
    return (
      <View style={styles.flexView}>
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

        <View style={styles.qstn}>
          <Text style={{fontSize: 22}}>{testQuestions[btnIndex].question}</Text>
        </View>

        <View style={styles.list}>
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
    headerView: {
      marginRight: 10
    },
    timerStyle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#47C8DB'
    },
    timerCirlcle: {
      width:26,
      height: 26,
      borderRadius: 20,
      borderWidth: 4,
      borderColor: '#9FB8CC'
    },
    flexView: {
      flex: 1,
      backgroundColor: 'white'
    },
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
      margin: sliderWidth*0.04,
      flex:20
    },
    optionView:  {
      paddingVertical: 18,
      paddingHorizontal: 6,
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#D2D7D3',
      borderWidth: 0.5,
    },
    correctOpt: {
      paddingVertical: 18,
      paddingHorizontal: 6,
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#50E347',
      backgroundColor: '#DDFEE7',
      borderWidth: 0.5,
    },
    selectedOpt: {
      paddingVertical: 18,
      paddingHorizontal: 6,
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#94C8D3',
      backgroundColor: '#DDEAF0',
      borderWidth: 0.5,
    },
    opt: {
      fontSize: 16,
      marginLeft: sliderWidth*0.04,
    },
    list: {
      flex: 55
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
