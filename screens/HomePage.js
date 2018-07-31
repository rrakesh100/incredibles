import React, { Component} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableHighlight } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { ButtonGroup, Badge, Card } from 'react-native-elements';
import { homeData, trendingData, onlineTestData, currentAffairsData, curAffData } from '../api/homepage';
import { Button } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

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
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }

    updateIndex = (index) => {
    this.setState({index})
    }

    renderCurrentAffairsList() {
      const updatesArr = []

      for( let i=0; i<3; i++) {
        updatesArr.push(
          <TouchableHighlight onPress={() => this.props.onNavigate('CurrentAffair', {data: i})}
            underlayColor='#ffffff'>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={curAffData[i].image} style={{width:100, height: 100, verticalAlign: 'middle', margin: 2}}/>
            <View>
              <Text style={{fontSize: 18, fontWeight: 'bold', margin: 4, textAlign: 'justify'}}>{curAffData[i].heading}</Text>
              <Text style={{margin: 4}}>{curAffData[i].date}</Text>
              <Text numberOfLines={2} style={{margin: 4}}>{curAffData[i].description}</Text>
            </View>
            </View>
          </View>
          </TouchableHighlight>
        )
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
      return updatesArr
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

      renderTrendingCards({item, index}) {
        return (
          <View>
            <Card containerStyle={{width:180, height: 140}}>
              <Text style={{fontSize: 20}}>{item.title}</Text>
              <Text style={{marginTop: 6, fontSize: 15, color: '#47C8DB'}}>{item.date}</Text>
              <Text style={{marginTop: 6, fontSize: 13}}>{item.desc}</Text>
            </Card>

            <Badge containerStyle={styles.badge}
            onPress={() => this.props.onNavigate('CurrentAffair', {data: item})}
            value='View All'
            textStyle={{ color: 'orange' }}
            />
          </View>
        )
      }

      renderOnlineTestCards({item, index}) {
        return (
          <View>
              <Card containerStyle={{width:180, height: 160}}
                title={item.title}
                image={item.image}
                imageStyle={{width:180, height: 60}}>
                  <View>
                    <Text>
                    {item.type}
                    </Text>
                  </View>
                  <View>
                    <Text>
                    {item.noOfTests}
                    </Text>
                  </View>
              </Card>
              <Badge containerStyle={styles.badge}
              value='View All'
              textStyle={{ color: 'orange' }}
              />
           </View>
        )
      }

      renderCurrentAffairsCards({item, index}) {
        return (
          <View>
          <Card containerStyle={{width:180, height: 160, backgroundColor: '#DCF0F7'}}
           image={item.image}
           imageStyle={{width:160, height: 80, marginTop: 8, marginLeft: 8}}>
             <View>
               <Text style={{fontSize: 20,color: '#47C8DB', fontWeight: 'bold'}}>
               {item.title}
               </Text>
             </View>
              <View>
                <Text>
                {item.month}
                </Text>
              </View>
              <View>
                <Text style={{color: 'red'}}>
                {item.others}
                </Text>
              </View>
          </Card>
          <Badge containerStyle={styles.badge}
          value='View All'
          textStyle={{ color: 'orange' }}
          />
          </View>
        )
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
          <View style={{height : 80}}>
          { this.pagination() }
          </View>
        </View>
        <View style={styles.imgText}>
          <Text style={styles.txtS}>Recent <Text style={{fontWeight: 'bold'}}>Updates</Text></Text>
            <View style={styles.container}>
              <ButtonGroup
                selectedButtonStyle={styles.selectedButtonStyle}
                onPress={this.updateIndex}
                selectedIndex={this.state.index}
                buttonStyle={styles.buttonStyle}
                selectedTextStyle={styles.selectedTextStyle}
                buttons={['Academics', 'Exams', 'Results', 'Jobs']}
                containerStyle={{height: 60}} />
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
        <Text style={styles.trend}>Trending <Text style={{fontWeight: 'bold'}}>Exams</Text></Text>

          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={trendingData}
            renderItem={this.renderTrendingCards}
            sliderWidth={sliderWidth}
            sliderHeight={sliderHeight}
            itemWidth={sliderWidth}
            autoplay={true}
            loop={true}
          />

        </View>

        <View style={styles.trendStyle}>
        <Text style={styles.trend}>Online Test and <Text style={{fontWeight: 'bold'}}>Test Series</Text></Text>

            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={onlineTestData}
              renderItem={this.renderOnlineTestCards}
              sliderWidth={sliderWidth}
              sliderHeight={sliderHeight}
              itemWidth={sliderWidth}
              autoplay={true}
              loop={true}
            />
        </View>

        <View style={styles.trendStyle}>
        <Text style={styles.trend}>Current Affairs and <Text style={{fontWeight: 'bold'}}>Other Exams</Text></Text>

            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={currentAffairsData}
              renderItem={this.renderCurrentAffairsCards}
              sliderWidth={sliderWidth}
              sliderHeight={sliderHeight}
              itemWidth={sliderWidth}
              autoplay={true}
              loop={true}
            />
        </View>
        <View style={styles.ad}>
        <Image resizeMode="contain" style={styles.shrink} source={require('../ad.jpg')} />
        </View>
        <View style={styles.cStyle}>
        <Text style={styles.trend}>Current <Text style={{fontWeight: 'bold'}}>Affairs</Text></Text>
        </View>
        <View style={styles.caStyle}>
        { this.renderCurrentAffairsList() }
        </View>
        </ScrollView>
      )
    }
  }

  const styles = StyleSheet.create({
    title : {
      color: '#47C8DB',
      fontSize: 20,
      margin: 8,
      marginTop : 16,
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
      marginLeft: 8,
      marginTop : 12,
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
    marginTop : 12,
    marginLeft : -8,
    marginRight : -8

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
    ad: {
      backgroundColor: '#ecf0f1',
      height: 200
    },
    adStyle : {
      marginTop: 10,
      backgroundColor: '#ecf0f1',
      height: 250
    },
    trendStyle : {
      marginTop: 10,
      backgroundColor: '#ecf0f1',
      height: 270
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
      width: undefined,
      marginVertical: 5
    },
    trend : {
      color: '#47C8DB',
      fontSize: 20,
      marginVertical: 10,
      marginHorizontal: 10
    },
    selectedTextStyle: {
       color: '#fff',
       fontSize : 12,
       fontWeight : 'bold'
   },
   buttonStyle: {
        color: '#000',
        backgroundColor: '#fff',
        marginRight : 2,
        marginLeft : 2

   },
   selectedButtonStyle: {
        backgroundColor: '#FFD133'
   },
   smallTab: {
        color: '#555', fontSize: 12
   },
   cStyle: {
     height: 40,
     backgroundColor: 'white'
   },
   caStyle : {
     backgroundColor: '#ecf0f1',
     height: 400
   },

  })
