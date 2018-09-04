import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Button, Badge, ButtonGroup, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;


export default class PauseTest extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => (
  {
    title: 'My Tests',
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

  componentDidMount() {
    console.log(this.props);
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
      <View style={{backgroundColor: '#ffffff'}}>
      <Grid style={{marginTop: 20, height: 130}}>

        <Col size={70} style={{marginTop: 20}}>
          <Row style={{marginLeft: 10}}>
              <Text style={{fontSize: 16, color: '#FEC336'}}>
                TEST TAKEN ON - { day + ' ' + monthName + ' ' + year }
              </Text>
          </Row>
          <Row style={{marginLeft: 10}}>
              <Text style={styles.txtStyle}>IIT JEE - Main</Text>
              <Button title='Practise Test' buttonStyle={styles.btnStyle}
              textStyle={{color: '#7FD672', fontSize: 12}} />
          </Row>
          <Row style={{marginLeft: 10}}>
              <Text style={styles.desc}>Mock Test Paper I</Text>
          </Row>
          <Row style={{marginLeft: 10}}>
                <Text style={styles.footer}>40 Questions</Text>
                <Text style={[styles.footer, {marginLeft: 20}]}>60 Marks</Text>
                <Text style={[styles.footer, {marginLeft: 20}]}>60 Min</Text>
          </Row>
        </Col>

        <Col size={30} style={{marginTop: 20}}>
            <View style={styles.circle}>
              <Text style={{color: '#47C8DB', fontSize: 24}}>89%</Text>
            </View>
        </Col>

      </Grid>

      <View style={[styles.flex, {margin: 40}]}>
          <Button title='REVIEW' buttonStyle={styles.btnS}
           onPress={() => this.props.navigation.navigate('TestReport')}
           textStyle={{color: '#F8C548', fontSize : 14}} />

           <Button title='RETEST' buttonStyle={styles.btnS}
            onPress={() => this.props.navigation.navigate('Test')}
            textStyle={{color: '#F8C548', fontSize : 14}} />
      </View>
      </View>

      <View style={{height: 4}}>
      </View>

      <Grid style={{height: 130, backgroundColor: '#ffffff'}}>
          <Col size={70} style={{marginTop: 20}}>
            <Row style={{marginLeft: 10}}>
                <Text style={{fontSize: 16, color: '#FEC336'}}>
                  UPCOMING TEST ON - 05 Sep 2018
                </Text>
            </Row>
            <Row style={{marginLeft: 10}}>
                <Text style={styles.txtStyle}>IIT JEE - Main</Text>
                <Button title='Practise Test' buttonStyle={styles.btnStyle}
                textStyle={{color: '#7FD672', fontSize: 12}} />
            </Row>
            <Row style={{marginLeft: 10}}>
                <Text style={styles.desc}>Mock Test Paper I</Text>
            </Row>
            <Row style={{marginLeft: 10}}>
                  <Text style={styles.footer}>40 Questions</Text>
                  <Text style={[styles.footer, {marginLeft: 20}]}>60 Marks</Text>
                  <Text style={[styles.footer, {marginLeft: 20}]}>60 Min</Text>
            </Row>
          </Col>

          <Col size={30} style={{marginTop: 20}}>
              <View style={styles.square}>
                <View style={{}}>
                  <Icon name='timer-sand-empty' color='#FEC336' size={20} style={styles.icon}/>
                  <Text style={styles.text}>5 DAYS</Text>
                  <Text style={styles.text}>20 Hr 35 Mins</Text>
                </View>
              </View>
              <View style={{marginTop: 10}}>
                <Text style={{fontSize: 12, color: '#FEC336'}}>OPENS AT 10:30 AM</Text>
              </View>
          </Col>
      </Grid>
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
  circle: {
    width:80,
    height: 80,
    borderRadius: 50,
    borderWidth: 6,
    borderColor: '#9FB8CC',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
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
  icon: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  text: {
    color: '#9FB8CC',
    fontSize:16,
    fontWeight:'bold',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  square: {
    width: 100,
    height: 70,
    borderWidth: 1,
    borderColor: '#9FB8CC'
  }
})
