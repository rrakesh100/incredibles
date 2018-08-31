import React , { Component } from 'react';
import { View, Text, Dimensions, ScrollView, StyleSheet, Image } from 'react-native';
import { Card } from 'native-base';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import LikeIcon from 'react-native-vector-icons/EvilIcons';


const sliderWidth = Dimensions.get('window').width;

export default class TakeTest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({navigation}) => (
  {
    title: 'Take Test',
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
    const { navigation } = this.props;
    const data = navigation.state.params.data;
    return (
      <ScrollView style={{backgroundColor : '#E8F3F7'}}>
        <Card>
          <View style={styles.content}>
            <View style={[styles.flex]}>
              <Text style={styles.txtStyle}>{data.title}</Text>
              <Button title={data.type} buttonStyle={styles.btnStyle}
              textStyle={{color: '#7FD672', fontSize: 12}} />
            </View>
            <View style={styles.flex}>
              <Text style={styles.desc}>{data.description}</Text>
              <View style={styles.arrow}>
              <Icon name="ios-star" color="#C4CCCD" size={28} />
              </View>
            </View>
            <View style={[styles.flex, {margin:4}]}>
                <Text style={styles.footer}>{data.questions} Questions</Text>
                <Text style={[styles.footer, {margin: 4}]}>{data.marks} Marks</Text>
                <Text style={styles.footer}>{data.time} Min</Text>
            </View>
          </View>
        </Card>

        <View style={styles.content}>
          <Text style={styles.inst}>Instructions</Text>
          <Text style={styles.tStyle}>1. This Test Contains multiple choice questions.</Text>
          <Text style={styles.tStyle}>2. Questions can be answered in any order.</Text>
          <Text style={styles.tStyle}>3. You can mark/unmark the question for revision.</Text>
          <Text style={styles.tStyle}>4. In case you get disconnected in the middle of the test, you can continue from where you left off by clicking "Tajke Test" button on Dashboard for that particular test.</Text>
          <Text style={styles.tStyle}>5. You can give this test multiple times.</Text>
        </View>

        <View style={styles.icon}>
        <LikeIcon name="like" color="#FEC336" size={50} />
        </View>
        <View style={styles.wish}>
        <Text style={styles.tS}>Good Luck</Text>
        </View>
        <View style={styles.takeTest}>
        <Button title='TAKE TEST' onPress={() => this.props.navigation.navigate('Test', {data: {time: navigation.state.params.data.time}})}
          buttonStyle={styles.btnS}
         textStyle={{color: '#F8C548', fontSize : 14}} />
        </View>
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
    tS: {
      color: '#47C8DB',
      fontSize: 20,
      fontWeight: 'bold',
    },
    desc: {
      color: '#FEC336',
      margin: 4
    },
    btnStyle: {
      width: 100,
      height: 25,
      borderRadius: 16,
      borderColor: '#50E347',
      backgroundColor: '#DDFEE7',
      borderWidth: 1
    },
    footer: {
      color: '#C4CCCD'
    },
    txtStyle: {
      color: '#47C8DB',
      fontSize: 20,
      fontWeight: 'bold',
      margin: 4
    },
    arrow: {
      position: 'absolute',
      right: 10
    },
    content: {
      flexDirection: 'column'
    },
    icon: {
      marginLeft: sliderWidth*0.45,
      marginTop: 60
    },
    inst : {
      margin: sliderWidth*0.02,
      fontSize: 20,
      color: '#FEC336'
    },
    tStyle: {
      margin: sliderWidth*0.02,
      fontSize: 16,
      color: '#263238'
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
    wish: {
      marginLeft: sliderWidth*0.40
    },
    takeTest: {
      marginTop: 50,
      marginLeft: sliderWidth*0.32
    }
  })
