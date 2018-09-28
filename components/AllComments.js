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
      liked : false,
      viewMore: false,
      comments : [
        {
          name: 'Galileo',
          dp: require('../galileo.jpeg'),
          comment: 'You cannot teach a man anything, you can only help him find it within himself.',
          time: 'Sep 22,2018 1:40 AM',
          replies: [
            {
              name: 'Stephen Hawking',
              dp: require('../hawking.jpg'),
              comment: 'I have noticed even people who claim everything is predestined, and that we can do nothing to change it, look before they cross the road.',
              time: 'Sep 22,2018 1:40 AM',
            },
            {
              name: 'Christopher Nolan',
              dp: require('../chris.jpg'),
              comment: 'A hero can be anyone, even a man doing something as simple and reassuring as putting a coat on a young boys shoulders to let him know the world hadnt ended.',
              time: 'Sep 23,2018 2:30 AM'
            },
            {
              name: 'Plato',
              dp: require('../plato.jpg'),
              comment: 'Be kind, for everyone you meet is fighting a hard battle.',
              time: 'Sep 24,2018 8:30 AM'
            }
          ]
        },
        {
          name: 'CV Raman',
          dp: require('../cvr.jpg'),
          comment: 'The essence of science is independent thinking, hard work, and not equipment. When I got my Nobel Prize, I had spent hardly 200 rupees on my equipment.',
          time: 'Sep 23,2018 2:30 AM',
          replies: [
            {
              name: 'Stephen Hawking',
              dp: require('../hawking.jpg'),
              comment: 'I have noticed even people who claim everything is predestined, and that we can do nothing to change it, look before they cross the road.',
              time: 'Sep 22,2018 1:40 AM',
            },
            {
              name: 'Christopher Nolan',
              dp: require('../chris.jpg'),
              comment: 'A hero can be anyone, even a man doing something as simple and reassuring as putting a coat on a young boys shoulders to let him know the world hadnt ended.',
              time: 'Sep 23,2018 2:30 AM'
            },
            {
              name: 'Plato',
              dp: require('../plato.jpg'),
              comment: 'Be kind, for everyone you meet is fighting a hard battle.',
              time: 'Sep 24,2018 8:30 AM'
            }
          ]
        },
        {
          name: 'Alber Einstein',
          dp: require('../einstein.jpg'),
          comment: 'Imagination is more important than knowledge.',
          time: 'Sep 24,2018 8:30 AM',
          replies: [
            {
              name: 'Stephen Hawking',
              dp: require('../hawking.jpg'),
              comment: 'I have noticed even people who claim everything is predestined, and that we can do nothing to change it, look before they cross the road.',
              time: 'Sep 22,2018 1:40 AM',
            },
            {
              name: 'Christopher Nolan',
              dp: require('../chris.jpg'),
              comment: 'A hero can be anyone, even a man doing something as simple and reassuring as putting a coat on a young boys shoulders to let him know the world hadnt ended.',
              time: 'Sep 23,2018 2:30 AM'
            },
            {
              name: 'Plato',
              dp: require('../plato.jpg'),
              comment: 'Be kind, for everyone you meet is fighting a hard battle.',
              time: 'Sep 24,2018 8:30 AM'
            }
          ]
        }
      ]
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

  componentDidMount() {
    this.renderComments()
  }

  onCommentingBtnClick = () => {
    this.setState({
      commented: true
    }, this.renderNewComment())
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

  renderNewComment() {
    const { commented, text, comments } = this.state;

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let monthName = months[month];
    let timeStr = moment(date).format('h:mm A');
    let time = monthName + ' ' + day + ',' + year + ' ' + timeStr;

    if(commented) {
      comments.push({
        name: 'Universe', /* get the name from localStorage */
        dp: require('../universe.jpg'), /* get the profile pic from localStorage */
        comment: text,
        time: time,
        replies:[]
      })
      this.setState({comments})
    }
  }

  renderReplies = (item) => {
    const {viewMore} = this.state;
    console.log(viewMore);
    let replies = item.replies;
    let repliesArrLength = replies.length;
    let remainingComments = repliesArrLength-2;
    console.log(remainingComments);
    const repliesArr = [];
    let maxNum = viewMore ? repliesArrLength : 2;

    for(let i=0; i<maxNum; i++) {
      repliesArr.push(
        <View key={i}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop:20}}>
          <View style={{flexDirection: 'row', alignItems: 'center', marginLeft:60}}>
              <Image source={replies[i].dp} style={{width:34, height: 34, borderRadius: 17}}/>
              <Text style={{color: '#6C7A89', fontSize: 14, fontWeight: 'bold', marginLeft: 10}}>{replies[i].name}</Text>
          </View>

          <View>
              <Text style={{fontSize: 12, color: '#47C8DB', marginRight: 10}}>{replies[i].time}</Text>
          </View>
        </View>

        <View style={{marginLeft:100, marginTop: 10}}>
             <Text style={{fontSize:13, color: '#6C7A89'}}>{replies[i].comment}</Text>
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
    return (
      <View>
          {repliesArr}
          {
          !viewMore ?
          <View>
          <Text onPress={() => this.setState({viewMore: true})}
            style={{marginLeft: 100, marginTop: 20, color: '#FFBC01', textDecorationLine: 'underline'}}>
            {remainingComments} More <Text>{remainingComments == 1 ? 'Comment' : 'Comments'}</Text>...   View
          </Text>
          </View> :
          <View>
          <Text onPress={() => this.setState({viewMore: false})}
            style={{marginLeft: 100, marginTop: 20, color: '#FFBC01', textDecorationLine: 'underline'}}>
            Hide Comments...
          </Text>
          </View>
        }
      </View>
    );
  }

  renderComments() {

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let monthName = months[month];
    let timeStr = moment(date).format('h:mm A');
    let time = monthName + ' ' + day + ',' + year + ' ' + timeStr;
    const { text, commented, comments } = this.state;
      return (
        comments.map((item, index) => {
          return (
            <View key={index}>
              <View>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop:20}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={item.dp} style={{width:50, height: 50, borderRadius: 25}}/>
                    <Text style={{color: '#6C7A89', fontSize: 18, fontWeight: 'bold', marginLeft: 10}}>{item.name}</Text>
                </View>
                <View>
                    <Text style={{fontSize: 16, color: '#47C8DB', marginRight: 10}}>{item.time}</Text>
                </View>
              </View>

              <View style={{marginLeft:60, marginTop: 10}}>
                   <Text style={{fontSize:16, color: '#6C7A89'}}>{item.comment}</Text>
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

              <View>
                 { this.renderReplies(item) }
              </View>
            </View>
          )
        })
      )
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
                multiline={true}
                numberOfLines={4}
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
