import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { Button, Badge } from 'react-native-elements';
import ArrowIcon from 'react-native-vector-icons/Ionicons';
import NewIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;


export default class PauseTest extends Component {
  constructor(props) {
    super(props);
  }


  static navigationOptions = ({navigation}) => (
  {
    title: 'Pause/End Test',
    headerRight : null,
    headerLeft : <FontAwesomeIcon name={'arrow-left'} size={18} color="#fff" style={{marginLeft : 10}} onPress={ () => { navigation.goBack() } }  />,
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#364C8B',
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
    return (
      <ScrollView style={{backgroundColor: '#E8F3F7'}}>
        <View style={{marginTop: 40, marginLeft: 'auto', marginRight: 'auto' }}>
          <Icon name='stop' color='' size={30}/>
        </View>
        <View style={styles.heading}>
          <Text style={styles.tS}>Test Summary</Text>
        </View>

        <View style={[styles.txtView1]}>
          <View style={[styles.flex, styles.margin]}>
            <View>
            <NewIcon name='arrow-right' color='#47C8DB' size={20}/>
            </View>
            <View>
            <ArrowIcon name='ios-arrow-forward' color='#47C8DB' size={20}/>
            </View>
            <View style={{marginLeft:4}}>
            <Text style={styles.skip}>Skipped: <Text style={{color: '#47C8DB'}}>0</Text></Text>
            </View>
          </View>
        </View>

        <View style={{height: 2, backgroundColor: '#E8F3F7'}} />

        <View style={[styles.txtView2]}>
        <View style={[styles.margin, styles.flex]}>
          <View>
            <NewIcon name='check' color='#59B503' size={20}/>
          </View>
          <View style={{marginLeft: 4}}>
            <Text style={styles.ans}>Answered: <Text style={{color: '#59B503'}}>0</Text></Text>
          </View>
        </View>
        </View>

        <View style={{marginTop: 30}}>
          <Text style={{fontSize: 18, color: '#6C7A89', textAlign: 'center'}}>
          Do you think you are good enough on this test to submit the test now? If yes please submit the test to see the report.
          </Text>
        </View>

        <View style={{marginTop: 40, marginLeft: 'auto', marginRight: 'auto'}}>
        <Button title='END TEST' buttonStyle={styles.btnS}
         onPress={() => this.props.navigation.navigate('TestReport')}
         textStyle={{color: '#F8C548', fontSize : 14}} />
        </View>

        <View>
        <Badge textStyle={{color: 'white', fontSize: 8}}
        containerStyle={styles.badge} value='OR' />
        </View>

        <View style={{marginTop: 40, marginLeft: 'auto', marginRight: 'auto'}}>
        <Button title='RESUME TEST' buttonStyle={styles.btnS}
         onPress={() => this.props.navigation.navigate('Test')}
         textStyle={{color: '#F8C548', fontSize : 14}} />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  heading: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  tS: {
    color: '#FEC336',
    fontSize: 24
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  badge: {
    height: 26,
    width: 36,
    borderRadius: 16,
    borderWidth: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#688183',
    borderColor: '#688183'
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
  txtView1: {
    marginTop:30,
    height: sliderHeight*0.1,
    backgroundColor: '#FFFFFF'
  },
  txtView2: {
    height: sliderHeight*0.1,
    backgroundColor: '#FFFFFF'
  },
  skip: {
    fontSize: 24,
  },
  ans: {
    fontSize: 24
  },
  margin: {
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})
