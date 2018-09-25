import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, ScrollView, TextInput, Linking, TouchableHighlight, Image, Picker } from 'react-native';
import { Card } from 'native-base';
import { Input } from 'react-native-elements';
import moment from 'moment';
import LikeIcon from 'react-native-vector-icons/EvilIcons';
import ReplyIcon from 'react-native-vector-icons/Entypo';



const sliderWidth = Dimensions.get('window').width;


export default class AllComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      commented: false,
      replied : false,
      liked : false
    };
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

  onCommentingBtnClick = () => {
    this.setState({
      commented: true
    })
  }

  onLikeBtnClick = () => {
    this.setState({
      liked: true
    })
  }

  onReplyBtnClick = () => {
    this.setState({
      replied: true
    })
  }

  renderReplies() {
    const { replied } = this.state;
    if(replied) {
      return (
        <View>
          <TextInput
           placeholder='BASIC INPUT'
           underlineColorAndroid="transparent"
          />
        </View>
      )
    } else {
      return
    }
  }

  renderComments() {

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let monthName = months[month];

    const timeStr = moment(date).format('h:mm A');
    const { text, commented } = this.state;
    if(commented) {
      return (
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop:20}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../user.jpg')} style={{width:50, height: 50, borderRadius: 25}}/>
                <Text style={{color: '#6C7A89', fontSize: 18, fontWeight: 'bold', marginLeft: 10}}>user</Text>
            </View>
            <View>
                <Text style={{fontSize: 16, color: '#47C8DB', marginRight: 10}}>{ monthName + ' ' + day + ',' + year + ' ' + timeStr}</Text>
            </View>
          </View>

          <View style={{marginLeft:60, marginTop: 10}}>
               <Text style={{fontSize:16, color: '#6C7A89'}}>{text}</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20}}>
            <TouchableHighlight underlayColor='#E8F3F7'
                onPress = { this.onLikeBtnClick }>
              <View style={{width:70, height: 30, borderRadius: 20, borderWidth: 1, borderColor: '#6C7A89', marginRight: 20}}>
                  <View style={{flexDirection: 'row', alignItems: 'center', marginTop:'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto'}}>
                    <LikeIcon name='like' color='#6C7A89' size={20} style={{}}/>
                    <Text style={{color: '#6C7A89'}}>Like</Text>
                  </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#E8F3F7'
                onPress = { this.onReplyBtnClick }>
              <View style={{width:70, height: 30, borderRadius: 20, borderWidth: 1, borderColor: '#6C7A89', marginRight: 20}}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop:'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto'}}>
                    <ReplyIcon name='reply' color='#6C7A89' size={20} />
                    <Text style={{color: '#6C7A89'}}>Reply</Text>
                </View>
              </View>
          </TouchableHighlight>
          </View>
        </View>
      )
    }
  }

  render() {

    return (
      <ScrollView style={{backgroundColor: '#E8F3F7'}}>
        <View style={{marginTop:20, marginLeft: 10}}>
            <Text style={{fontSize: 18, color: '#47C8DB'}}>100 Comments</Text>
        </View>

        <View style={{marginTop: 20, marginLeft: 10, width: '95%'}}>
            <TextInput placeholder='Add your comment here'
            underlineColorAndroid = "transparent"

            onChangeText={(text) => this.setState({text})}
            style={{height: 100,
                  borderColor: 'white',
                  borderWidth: 1,
                  backgroundColor: 'white'}} />
        </View>

        <View style={{marginTop:20}}>
            <TouchableHighlight underlayColor='#E8F3F7'
              onPress={ this.onCommentingBtnClick } >
              <View style={styles.btnView}>
                <Text style={styles.btnText}>COMMENT</Text>
              </View>
            </TouchableHighlight>
        </View>

        <View>
        { this.renderComments() }
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
