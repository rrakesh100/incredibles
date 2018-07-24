import React, { Component} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { ButtonGroup } from 'react-native-elements';
import { homeData, trendingData } from '../api/homepage';
import { Button } from 'native-base';
import { Badge } from 'react-native-elements';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';


const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;

export default class HomePage extends Component {

    state = {
        index: 0,
        entries: [
        {
          title: 'Latest Stories',
          image: require('../sak1.jpg'),
          text: 'Online AP CETs dates 2018 - APSCHE Entrance Tests Dates 2018'
        },
        {
          title: 'Latest Stories',
          image: require('../sak2.jpg'),
          text: 'Online AP CETs dates 2018 - APSCHE Entrance Tests Dates 2018'
        },
        {
          title: 'Latest Stories',
          image: require('../sak3.jpg'),
          text: 'Online AP CETs dates 2018 - APSCHE Entrance Tests Dates 2018'
        }
      ]
    }


  _renderItem ({item, index}) {
        return (
            <View>
                <View style={styles.imgText}>
                <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={{height: 5}}>
                </View>
                <View style={styles.imgText}>
                <Image style={styles.imgS} source={item.image} />
                <Text style={styles.fText}>{item.text}</Text>
                </View>
            </View>
        );
    }

  pagination() {
      const { entries, activeSlide } = this.state;
      return (
            <Pagination
              dotsLength={entries.length}
              activeDotIndex={activeSlide}
              dotStyle={{
                  width: 15,
                  height: 15,
                  borderRadius: 10,
                  marginHorizontal: 1,
              }}
            />
        );
    }

    updateIndex = (index) => {
    this.setState({index})
    }

    renderRecentHomeUpdates() {
      const updatesArr = []

      for( let i = 0; i < 3; i++) {
          updatesArr.push(
            <View>
                  <View style={styles.card} key={i}>
                      <View style={styles.listStyle}>
                          <Text style={{color: 'orange', marginHorizontal: 8}}>{homeData[i].title}</Text>
                          <Badge
                              containerStyle={{ backgroundColor: '#2ecc71'}}
                              value={homeData[i].type}
                              textStyle={{ color: 'green' }}
                          />
                      </View>
                      <Text style={{marginTop: 5}}>{homeData[i].desc}</Text>
                  </View>
              </View>
            );
        }
        updatesArr.push(
          <View>
          <Badge
              containerStyle={styles.badge}
              value='View All'
              textStyle={{ color: 'orange' }}
              />
          </View>
        )
        return updatesArr;
      }



  render() {

      return (
        <ScrollView>
        <View>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.entries}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            sliderHeight={sliderHeight}
            itemWidth={sliderWidth}
            autoplay={true}
            loop={true}
            onSnapToItem={(index) => this.setState({ activeSlide: index }) }
          />
          { this.pagination() }
        </View>
        <View style={styles.imgText}>
          <Text style={styles.txtS}>Recent Updates</Text>
          <View style={styles.container}>
          <ButtonGroup
          selectedBackgroundColor="black"
          onPress={this.updateIndex}
          selectedIndex={this.state.index}
          buttons={['ACADEMICS', 'COMPETITIVE EXAMS', 'RESULTS', 'JOBS']}
          containerStyle={{height: 50}} />
          </View>
        </View>
        <View>
            {this.renderRecentHomeUpdates()}
        </View>
        <View style={styles.adStyle}>
        <Text style={styles.adText}>Advertisement/Announcements</Text>
        <Image resizeMode="contain" style={styles.shrink} source={require('../Adimg.jpg')} />
        </View>
        <View style={styles.adStyle}>
        <Text style={styles.trend}>Trending Exams</Text>
        <Card style={{width:200, height: 150, marginLeft: 6}}>
            <Text style={{marginTop: 10, marginLeft: 10, fontSize: 20}}>India Post Payment Bank Officer Post</Text>
            <Text style={{marginTop: 10, marginLeft: 10, fontSize: 15, color: '#47C8DB'}}>Mar 2018</Text>
            <Text style={{marginTop: 10, marginLeft: 10, fontSize: 13}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..</Text>
        </Card>
        </View>
        </ScrollView>
      )
    }
  }

  const styles = StyleSheet.create({
    title : {
      color: '#47C8DB',
      fontSize: 20,
      margin: 7,
      fontWeight: 'bold'
    },
    imgS : {
      height: 200,
      borderRadius: 10,
      width: 0.98*sliderWidth
    },
    txtS : {
      color: '#47C8DB',
      fontSize: 20,
      marginLeft: 7,
      fontWeight: 'bold'
    },
    imgText: {
      marginLeft:2,
      backgroundColor: 'white'
    },
    homeS : {
      backgroundColor: '#ecf0f1',
    },
    fText : {
      fontSize: 20,
      margin: 7
    },
    container : {
    alignItems: 'center',
    justifyContent: 'center',
    },
    separator : {
      backgroundColor: '#ecf0f1',
      height: 2
    },
    card: {
      paddingVertical: 8,
      backgroundColor: 'white',
      paddingHorizontal: 6,
      marginVertical: 4,
    },
    cardStyle: {
      paddingVertical: 8,
      backgroundColor: 'white',
      paddingHorizontal: 6,
      flexDirection: 'row'
    },
    listStyle : {
      flexDirection: 'row',
      alignItems: 'center'
    },
    date: {
        color: 'orange',
        marginHorizontal: 8
    },
    badge: {
      backgroundColor: 'white',
      width: 120,
      alignSelf: 'flex-end',
      height: 40,
      marginTop: 5
    },
    cardContent: {
        flex: 1
    },
    contentStyle : {
      fontSize: 12,
      color: 'orange'
    },
    contentDesc : {
      fontSize : 8
    },
    adStyle : {
      marginTop: 10,
      backgroundColor: '#ecf0f1',
      height: 250
    },
    adText : {
      color: '#16A085',
      fontSize: 20,
      marginVertical: 20,
      marginHorizontal: 10
    },
    shrink : {
      flex:1,
      height: undefined,
      width: undefined
    },
    trend : {
      color: '#47C8DB',
      fontw
      fontSize: 20,
      marginVertical: 20,
      marginHorizontal: 10
    }
  })
