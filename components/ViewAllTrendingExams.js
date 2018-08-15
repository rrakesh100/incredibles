import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView, Linking, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';
import { Card, Badge } from 'native-base';
import { trendingData } from '../api/homepage';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ViewAllTrendingExams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true
    };
  }

  static navigationOptions = ({navigation}) => (
  {
    title: 'Trending Exams',
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
    setInterval(() => {
        this.setState({
          showText: !this.state.showText
        })
      },100);
  }


  onTextPress(url) {
    Linking.openURL(url)
  }

  renderTrendingExamList() {
    const { showText } = this.state;

    return (
      trendingData.map((exam, index) => {
        return (
            <Card key={index}>
              <View style={{margin: 6}}>
                <View style={styles.flex}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}
                  onPress={this.onTextPress.bind(this, exam.URL)}>
                  {exam.desc}
                  </Text>
                  <View style={styles.new}>
                  </View>
                </View>
              <Text style={styles.description}>{exam.shortdesc}</Text>
              </View>
              <View style={styles.flex}>
                <Text style={styles.postedDate}>Posted Date:{exam.postedDate}</Text>
                <Text style={styles.lastDate}>Last Date:{exam.lastDate}</Text>
              </View>
            </Card>
        )
      })
    )
  }

  render() {
    return (
      <ScrollView>
      { this.renderTrendingExamList() }
      </ScrollView>
    )
    }
  }

  const styles = StyleSheet.create({
    flex: {
      flexDirection: 'row',
      margin: 6
    },
    description: {
      fontSize: 12,
      marginTop:6,
      color:'#999999'
    },
    postedDate: {
      color: '#F8C548'
    },
    new : {
      alignItems: 'flex-end'
    },
    lastDate: {
      color: '#F8C548',
      position: 'absolute',
      right: 6
    }
  })
