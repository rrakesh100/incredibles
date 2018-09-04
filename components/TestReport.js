import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, FlatList, TouchableHighlight } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Button, Badge, ButtonGroup, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import NewIcon from 'react-native-vector-icons/Feather';
import IncorrectIcon from 'react-native-vector-icons/EvilIcons';
import CloseIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { testQuestions } from '../api/onlineTests';


const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;


export default class TestReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      viewAnswers: {},
      testReportData :
      [
        {
          no:1,
          time: '2 Min',
          level: 'Easy',
          status: 'correct'
        },
        {
          no:2,
          time: '1.5 Min',
          level: 'Medium',
          status: 'Incorrect'
        },
        {
          no:3,
          time: '2.5 Min',
          level: 'Hard',
          status: 'correct'
        },
        {
          no:4,
          time: '2 Min',
          level: 'Medium',
          status: 'skipped'
        },
        {
          no:5,
          time: '1.5 Min',
          level: 'Easy',
          status: 'correct'
        },
        {
          no:6,
          time: '2.5 Min',
          level: 'Hard',
          status: 'skipped'
        },
        {
          no:7,
          time: '2 Min',
          level: 'Medium',
          status: 'Incorrect'
        },
        {
          no:8,
          time: '1.5 Min',
          level: 'Easy',
          status: 'correct'
        },
        {
          no:9,
          time: '1.7 Min',
          level: 'Hard',
          status: 'correct'
        },
        {
          no:10,
          time: '1.2 Min',
          level: 'Hard',
          status: 'Incorrect'
        },
      ]
    }
  }

  static navigationOptions = ({navigation}) => (
  {
    title: 'Test Report',
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

  updateIndex = (index) => {
    this.setState({index})
  }

  renderItemSeperator() {
      return (
          <View style={styles.gap}></View>
      )
  }

  onViewingAnswer(index) {
    return (
      <View>
        <View>
          <Text style={{fontSize: 18, color: '#99A6AA', margin: 14}}>{testQuestions[index].question}</Text>
        </View>
        {
          testQuestions[index].options.map((item, index) => {
            return (
              <View style={[styles.flex, {marginLeft: 14, marginTop: 2}]} key={index}>
                <View style={{height: 34, width: '10%', backgroundColor: '#9FB8CC', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#ffffff', fontWeight: 'bold'}}>{item.optName}</Text>
                </View>
                <View style={{height: 34, width: '90%'}}>
                    <Text style={{fontSize: 14, color: '#99A6AA', marginLeft: 20}}>{item.opt}</Text>
                </View>
              </View>
            )
          })
        }
      </View>
    )
  }

  onExpandClick = () => {
    const { viewAnswers } = this.state;
    let reportData = this.state.testReportData;
    reportData.map((item, index) => {
      viewAnswers[index] = true;
    })
    this.setState({viewAnswers})
  }

  onCloseIconPress = (index) => {
    const { viewAnswers } = this.state;
    viewAnswers[index] = false;
    this.setState({ viewAnswers })
  }

  onShowingAnswerCard = (item, index) => {
    const { viewAnswers } = this.state;
    viewAnswers[index] = !viewAnswers[index];
    this.setState({ viewAnswers })
  }

  renderAllQuestionsItem({item,index}) {
    const { viewAnswers } = this.state;

    return (
      <View>
      <TouchableHighlight underlayColor='#ffffff'
        onPress={ this.onShowingAnswerCard.bind(this, item, index) }>
          <View style={[styles.flex, {backgroundColor: '#ffffff'}]}>
            {
              viewAnswers[index] ?
              <View style={{height: 34, width: '10%', backgroundColor: '#FFBC00', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{color: '#ffffff', fontWeight: 'bold'}}>{item.no}</Text>
              </View> :
              <View style={{height: 34, width: '10%', backgroundColor: '#9FB8CC', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{color: '#ffffff', fontWeight: 'bold'}}>{item.no}</Text>
              </View>
            }

              <View style={{height: 34, width: '90%', backgroundColor: '#ffffff'}}>
                <Grid>
                  <Col size={20}>
                    <View>
                      <Text style={{fontSize: 14, color: '#9FB8CC', margin: 6}}>{item.time}</Text>
                    </View>
                  </Col>
                  <Col size={40}>
                    {
                      item.level == 'Easy' ?
                        <View style={{marginTop: 2}}>
                          <Button title={item.level} buttonStyle={styles.easy}
                          textStyle={{color: '#59B503', fontSize: 12}} />
                        </View> :
                      item.level == 'Medium' ?
                        <View style={{marginTop: 2}}>
                          <Button title={item.level} buttonStyle={styles.medium}
                          textStyle={{color: '#E0CBAE', fontSize: 12}} />
                        </View> :
                      item.level == 'Hard' ?
                        <View style={{marginTop: 2}}>
                          <Button title={item.level} buttonStyle={styles.hard}
                          textStyle={{color: '#FF0000', fontSize: 12}} />
                        </View> : null
                    }
                  </Col>
                    <Col size={35}>
                        {
                          item.status == 'correct' ?
                            <View style={[styles.flex, {marginTop: 6}]}>
                              <NewIcon name='check' color='#59B503' />
                              <Text style={{marginLeft: 4, color: '#59B503'}}>{item.status}</Text>
                            </View> :
                            item.status == 'Incorrect' ?
                            <View style={[styles.flex, {marginTop: 6}]}>
                              <IncorrectIcon name='close' color= '#FF0000' />
                              <Text style={{marginLeft: 4, color: '#FF0000'}}>{item.status}</Text>
                            </View> :
                            item.status == 'skipped' ?
                            <View style={[styles.flex, {marginTop: 6}]}>
                              <NewIcon name='arrow-right' color='#47C8DB' />
                              <Icon name='ios-arrow-forward' color='#47C8DB' />
                              <Text style={{marginLeft: 4, color: '#47C8DB'}}>{item.status}</Text>
                            </View> : null
                        }
                    </Col>
                    <Col size={5}>
                      {
                        viewAnswers[index] ?
                        <View style={{position: 'absolute', right: 14, marginTop: 4}}>
                            <CloseIcon name='close' color= '#FFBC00' size={20}
                             onPress={ this.onCloseIconPress.bind(this, index) }/>
                        </View> : null
                      }
                    </Col>
                </Grid>
              </View>
          </View>
      </TouchableHighlight>
      {
        viewAnswers[index] ?
        <View>
        { this.onViewingAnswer(index) }
        </View> : null
      }
      </View>
    )
  }

  renderAllQuestionsTab() {
    return (
      <View style={{}}>
          <FlatList
              data={this.state.testReportData}
              renderItem={this.renderAllQuestionsItem.bind(this)}
              ItemSeparatorComponent={this.renderItemSeperator.bind(this)}
          />
      </View>
    )
  }

  renderCorrectAnswersTab() {
    const { testReportData, viewAnswers } = this.state;
    return (
      testReportData.map((item, index) => {
        if(item.status == 'correct')
        return (
          <View key={index} style={{marginTop:4}}>
          <TouchableHighlight underlayColor='#ffffff'
            onPress={ this.onShowingAnswerCard.bind(this, item, index) }>
              <View style={[styles.flex, {backgroundColor: '#ffffff'}]}>
                {
                  viewAnswers[index] ?
                  <View style={{height: 34, width: '10%', backgroundColor: '#FFBC00', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <Text style={{color: '#ffffff', fontWeight: 'bold'}}>{item.no}</Text>
                  </View> :
                  <View style={{height: 34, width: '10%', backgroundColor: '#9FB8CC', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <Text style={{color: '#ffffff', fontWeight: 'bold'}}>{item.no}</Text>
                  </View>
                }

                  <View style={{height: 34, width: '90%', backgroundColor: '#ffffff'}}>
                    <Grid>
                      <Col size={20}>
                        <View>
                          <Text style={{fontSize: 14, color: '#9FB8CC', margin: 6}}>{item.time}</Text>
                        </View>
                      </Col>
                      <Col size={40}>
                        {
                          item.level == 'Easy' ?
                            <View style={{marginTop: 2}}>
                              <Button title={item.level} buttonStyle={styles.easy}
                              textStyle={{color: '#59B503', fontSize: 12}} />
                            </View> :
                          item.level == 'Medium' ?
                            <View style={{marginTop: 2}}>
                              <Button title={item.level} buttonStyle={styles.medium}
                              textStyle={{color: '#E0CBAE', fontSize: 12}} />
                            </View> :
                          item.level == 'Hard' ?
                            <View style={{marginTop: 2}}>
                              <Button title={item.level} buttonStyle={styles.hard}
                              textStyle={{color: '#FF0000', fontSize: 12}} />
                            </View> : null
                        }
                      </Col>
                        <Col size={35}>
                            {
                              item.status == 'correct' ?
                                <View style={[styles.flex, {marginTop: 6}]}>
                                  <NewIcon name='check' color='#59B503' />
                                  <Text style={{marginLeft: 4, color: '#59B503'}}>{item.status}</Text>
                                </View> :
                                item.status == 'Incorrect' ?
                                <View style={[styles.flex, {marginTop: 6}]}>
                                  <IncorrectIcon name='close' color= '#FF0000' />
                                  <Text style={{marginLeft: 4, color: '#FF0000'}}>{item.status}</Text>
                                </View> :
                                item.status == 'skipped' ?
                                <View style={[styles.flex, {marginTop: 6}]}>
                                  <NewIcon name='arrow-right' color='#47C8DB' />
                                  <Icon name='ios-arrow-forward' color='#47C8DB' />
                                  <Text style={{marginLeft: 4, color: '#47C8DB'}}>{item.status}</Text>
                                </View> : null
                            }
                        </Col>
                        <Col size={5}>
                          {
                            viewAnswers[index] ?
                            <View style={{position: 'absolute', right: 14, marginTop: 4}}>
                                <CloseIcon name='close' color= '#FFBC00' size={20}
                                 onPress={ this.onCloseIconPress.bind(this, index) }/>
                            </View> : null
                          }
                        </Col>
                    </Grid>
                  </View>
              </View>
          </TouchableHighlight>
          {
            viewAnswers[index] ?
            <View>
            { this.onViewingAnswer(index) }
            </View> : null
          }
          </View>
        )
      })

    )
  }

  renderIncorrectAnswersTab() {
    const { testReportData, viewAnswers } = this.state;
    return (
      testReportData.map((item, index) => {
        if(item.status == 'Incorrect')
        return (
          <View key={index} style={{marginTop:4}}>
          <TouchableHighlight underlayColor='#ffffff'
            onPress={ this.onShowingAnswerCard.bind(this, item, index) }>
              <View style={[styles.flex, {backgroundColor: '#ffffff'}]}>
                {
                  viewAnswers[index] ?
                  <View style={{height: 34, width: '10%', backgroundColor: '#FFBC00', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <Text style={{color: '#ffffff', fontWeight: 'bold'}}>{item.no}</Text>
                  </View> :
                  <View style={{height: 34, width: '10%', backgroundColor: '#9FB8CC', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <Text style={{color: '#ffffff', fontWeight: 'bold'}}>{item.no}</Text>
                  </View>
                }

                  <View style={{height: 34, width: '90%', backgroundColor: '#ffffff'}}>
                    <Grid>
                      <Col size={20}>
                        <View>
                          <Text style={{fontSize: 14, color: '#9FB8CC', margin: 6}}>{item.time}</Text>
                        </View>
                      </Col>
                      <Col size={40}>
                        {
                          item.level == 'Easy' ?
                            <View style={{marginTop: 2}}>
                              <Button title={item.level} buttonStyle={styles.easy}
                              textStyle={{color: '#59B503', fontSize: 12}} />
                            </View> :
                          item.level == 'Medium' ?
                            <View style={{marginTop: 2}}>
                              <Button title={item.level} buttonStyle={styles.medium}
                              textStyle={{color: '#E0CBAE', fontSize: 12}} />
                            </View> :
                          item.level == 'Hard' ?
                            <View style={{marginTop: 2}}>
                              <Button title={item.level} buttonStyle={styles.hard}
                              textStyle={{color: '#FF0000', fontSize: 12}} />
                            </View> : null
                        }
                      </Col>
                        <Col size={35}>
                            {
                              item.status == 'correct' ?
                                <View style={[styles.flex, {marginTop: 6}]}>
                                  <NewIcon name='check' color='#59B503' />
                                  <Text style={{marginLeft: 4, color: '#59B503'}}>{item.status}</Text>
                                </View> :
                                item.status == 'Incorrect' ?
                                <View style={[styles.flex, {marginTop: 6}]}>
                                  <IncorrectIcon name='close' color= '#FF0000' />
                                  <Text style={{marginLeft: 4, color: '#FF0000'}}>{item.status}</Text>
                                </View> :
                                item.status == 'skipped' ?
                                <View style={[styles.flex, {marginTop: 6}]}>
                                  <NewIcon name='arrow-right' color='#47C8DB' />
                                  <Icon name='ios-arrow-forward' color='#47C8DB' />
                                  <Text style={{marginLeft: 4, color: '#47C8DB'}}>{item.status}</Text>
                                </View> : null
                            }
                        </Col>
                        <Col size={5}>
                          {
                            viewAnswers[index] ?
                            <View style={{position: 'absolute', right: 14, marginTop: 4}}>
                                <CloseIcon name='close' color= '#FFBC00' size={20}
                                 onPress={ this.onCloseIconPress.bind(this, index) }/>
                            </View> : null
                          }
                        </Col>
                    </Grid>
                  </View>
              </View>
          </TouchableHighlight>
          {
            viewAnswers[index] ?
            <View>
            { this.onViewingAnswer(index) }
            </View> : null
          }
          </View>
        )
      })

    )
  }

  renderSkippedAnswersTab() {
    const { testReportData, viewAnswers } = this.state;
    return (
      testReportData.map((item, index) => {
        if(item.status == 'skipped')
        return (
          <View key={index} style={{marginTop:4}}>
          <TouchableHighlight underlayColor='#ffffff'
            onPress={ this.onShowingAnswerCard.bind(this, item, index) }>
              <View style={[styles.flex, {backgroundColor: '#ffffff'}]}>
                {
                  viewAnswers[index] ?
                  <View style={{height: 34, width: '10%', backgroundColor: '#FFBC00', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <Text style={{color: '#ffffff', fontWeight: 'bold'}}>{item.no}</Text>
                  </View> :
                  <View style={{height: 34, width: '10%', backgroundColor: '#9FB8CC', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <Text style={{color: '#ffffff', fontWeight: 'bold'}}>{item.no}</Text>
                  </View>
                }

                  <View style={{height: 34, width: '90%', backgroundColor: '#ffffff'}}>
                    <Grid>
                      <Col size={20}>
                        <View>
                          <Text style={{fontSize: 14, color: '#9FB8CC', margin: 6}}>{item.time}</Text>
                        </View>
                      </Col>
                      <Col size={40}>
                        {
                          item.level == 'Easy' ?
                            <View style={{marginTop: 2}}>
                              <Button title={item.level} buttonStyle={styles.easy}
                              textStyle={{color: '#59B503', fontSize: 12}} />
                            </View> :
                          item.level == 'Medium' ?
                            <View style={{marginTop: 2}}>
                              <Button title={item.level} buttonStyle={styles.medium}
                              textStyle={{color: '#E0CBAE', fontSize: 12}} />
                            </View> :
                          item.level == 'Hard' ?
                            <View style={{marginTop: 2}}>
                              <Button title={item.level} buttonStyle={styles.hard}
                              textStyle={{color: '#FF0000', fontSize: 12}} />
                            </View> : null
                        }
                      </Col>
                        <Col size={35}>
                            {
                              item.status == 'correct' ?
                                <View style={[styles.flex, {marginTop: 6}]}>
                                  <NewIcon name='check' color='#59B503' />
                                  <Text style={{marginLeft: 4, color: '#59B503'}}>{item.status}</Text>
                                </View> :
                                item.status == 'Incorrect' ?
                                <View style={[styles.flex, {marginTop: 6}]}>
                                  <IncorrectIcon name='close' color= '#FF0000' />
                                  <Text style={{marginLeft: 4, color: '#FF0000'}}>{item.status}</Text>
                                </View> :
                                item.status == 'skipped' ?
                                <View style={[styles.flex, {marginTop: 6}]}>
                                  <NewIcon name='arrow-right' color='#47C8DB' />
                                  <Icon name='ios-arrow-forward' color='#47C8DB' />
                                  <Text style={{marginLeft: 4, color: '#47C8DB'}}>{item.status}</Text>
                                </View> : null
                            }
                        </Col>
                        <Col size={5}>
                          {
                            viewAnswers[index] ?
                            <View style={{position: 'absolute', right: 14, marginTop: 4}}>
                                <CloseIcon name='close' color= '#FFBC00' size={20}
                                 onPress={ this.onCloseIconPress.bind(this, index) }/>
                            </View> : null
                          }
                        </Col>
                    </Grid>
                  </View>
              </View>
          </TouchableHighlight>
          {
            viewAnswers[index] ?
            <View>
            { this.onViewingAnswer(index) }
            </View> : null
          }
          </View>
        )
      })

    )
  }

  renderSelectedTabContent() {

    if(this.state.index==0) {
       return (this.renderAllQuestionsTab());
    }

    else if(this.state.index==1) {
      return (this.renderCorrectAnswersTab());
    }

    else if(this.state.index==2) {
        return (this.renderIncorrectAnswersTab());
    }

    else if(this.state.index==3) {
        return (this.renderSkippedAnswersTab());
    }
  }

  render() {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let monthName = months[month];


    return (
      <ScrollView style={{backgroundColor: '#E8F3F7'}}>
        <Grid style={{marginLeft: 10, marginTop: 20}}>

          <Col size={70}>
            <Row>
                <Text style={{fontSize: 16, color: '#FEC336'}}>
                  TEST TAKEN ON - { day + ' ' + monthName + ' ' + year }
                </Text>
            </Row>
            <Row>
                <Text style={styles.txtStyle}>IIT JEE - Main</Text>
                <Button title='Practise Test' buttonStyle={styles.btnStyle}
                textStyle={{color: '#7FD672', fontSize: 12}} />
            </Row>
            <Row>
                <Text style={styles.desc}>Mock Test Paper I</Text>
            </Row>
            <Row>
                  <Text style={styles.footer}>10 Questions</Text>
                  <Text style={[styles.footer, {marginLeft: 20}]}>10 Marks</Text>
                  <Text style={[styles.footer, {marginLeft: 20}]}>10 Min</Text>
            </Row>
          </Col>

          <Col size={30}>
          <View style={styles.percentage}>
          <Text style={{color: '#9FB8CC', fontSize: 10}}>OVERALL</Text>
          </View>
          </Col>

        </Grid>

        <View style={[styles.flex, {justifyContent: 'space-around'}]}>
          <View style={[styles.flex, {margin: 6}]}>
            <NewIcon name='check' color='#59B503' />
            <Text style={{marginLeft: 4}}>Correct - <Text style={{color: '#59B503'}}>5</Text></Text>
          </View>
          <View style={[styles.flex, {margin: 6}]}>
            <IncorrectIcon name='close' color= '#FF0000' />
            <Text style={{marginLeft: 4}}>Incorrect - <Text style={{color:'#FF0000'}}>3</Text></Text>
          </View>
          <View style={[styles.flex, {margin: 6}]}>
            <NewIcon name='arrow-right' color='#47C8DB' />
            <Icon name='ios-arrow-forward' color='#47C8DB' />
            <Text style={{marginLeft: 4}}>Skipped - <Text style={{color: '#47C8DB'}}>2</Text></Text>
          </View>
        </View>

        <View style={styles.container}>
          <ButtonGroup
            selectedButtonStyle={styles.selectedButtonStyle}
            onPress={this.updateIndex}
            selectedIndex={this.state.index}
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}
            selectedTextStyle={styles.selectedTextStyle}
            buttons={['All Questions', 'Correct', 'Incorrect', 'Skipped']}
            containerStyle={{height: 54}} />
        </View>

        <View style={{backgroundColor: '#E8F3F7', height: sliderHeight*0.06}}>
            <Text style={styles.expand} onPress={this.onExpandClick}>EXPAND ALL</Text>
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
  btnStyle: {
    width: 100,
    height: 25,
    borderRadius: 16,
    borderColor: '#86E27E',
    backgroundColor: '#DDFEE7',
    borderWidth: 1
  },
  easy: {
    width: 80,
    height: 20,
    borderRadius: 16,
    borderColor: '#59B503',
    backgroundColor: '#ffffff',
    borderWidth: 1
  },
  medium: {
    width: 80,
    height: 20,
    borderRadius: 16,
    borderColor: '#E0CBAE',
    backgroundColor: '#ffffff',
    borderWidth: 1
  },
  hard: {
    width: 80,
    height: 20,
    borderRadius: 16,
    borderColor: '#FF0000',
    backgroundColor: '#ffffff',
    borderWidth: 1
  },
  desc: {
    color: '#FEC336',
    margin: 4
  },
  footer: {
    color: '#9FB8CC'
  },
  gap: {
    height: 4,
  },
  percentage: {
    width:70,
    height: 70,
    borderRadius: 50,
    borderWidth: 6,
    borderColor: '#9FB8CC',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  expand: {
    position: 'absolute',
    right: 10,
    top: 8,
    color: '#FFBC00',
    fontWeight: 'bold'
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
 container : {
   alignItems: 'center',
   justifyContent: 'center',
   marginTop : 12,
   marginLeft : -8,
   marginRight : -8
 },
})
