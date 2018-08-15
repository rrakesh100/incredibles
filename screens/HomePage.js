import React, { Component} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableHighlight } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Button, ButtonGroup, Badge, Card } from 'react-native-elements';
import { homeData, trendingData, onlineTestData, currentAffairsData, curAffData, homepageExamData, homepageResultsData, homepageJobsData } from '../api/homepage';
import { Col, Row, Grid } from "react-native-easy-grid";

const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    ],
    activeSlide : 0,
    viewAllClicked: false,
    currentAffairsViewAllClicked: false
    }
  }

  componentDidMount() {
    console.log(this.props);
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
    this.setState({
      index,
      viewAllClicked: false
    })
    }

    onViewingAll() {
      this.setState({
        currentAffairsViewAllClicked: true
      })
    }

    onHidingBtn() {
      this.setState({
        currentAffairsViewAllClicked: false
      })
    }

    renderCurrentAffairsList() {
      const { currentAffairsViewAllClicked } = this.state;

      let maxNum = currentAffairsViewAllClicked ? curAffData.length : 3;
      const updatesArr = []

      for( let i=0; i<maxNum; i++) {
        updatesArr.push(
          <TouchableHighlight onPress={() => this.props.onNavigate('CurrentAffair', {data: curAffData[i]})}
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
        !currentAffairsViewAllClicked ?
        <View style={{alignItems: 'flex-end'}}>
          <Button title='View All' buttonStyle={styles.viewAll}
          onPress={this.onViewingAll.bind(this)}
          textStyle={{color: '#F8C548'}} />
        </View> :
        <View style={{alignItems: 'flex-end'}}>
          <Button title='Hide' buttonStyle={styles.viewAll}
          onPress={this.onHidingBtn.bind(this)}
          textStyle={{color: '#F8C548'}} />
        </View>
      )
      return updatesArr
    }

    onViewAllButton() {
      this.setState({
        viewAllClicked: true
      })
    }

    onHideButton() {
      this.setState({
        viewAllClicked: false
      })
    }

    renderAcademicUpdates() {
      const { viewAllClicked } = this.state;

      const updatesArr = [];

      let maxNum = viewAllClicked ? homeData.length : 3;

      for( let i = 0; i < maxNum; i++) {
          updatesArr.push(
            <View key={i}>
                  <View style={styles.card}>
                      <View style={styles.listStyle}>
                          <Text style={{color: '#FEC336', marginHorizontal: 8}}>{homeData[i].title}</Text>

                          <Button title={homeData[i].type} buttonStyle={styles.btnStyle}
                          textStyle={{color: '#7FD672', fontSize: 12}} />
                      </View>
                      <Text style={{marginTop: 5}}>{homeData[i].desc}</Text>
                  </View>
              </View>
            );
        }

        updatesArr.push(
            !viewAllClicked ?
            <View style={{alignItems: 'flex-end'}}>
          <Button title='View All' buttonStyle={styles.viewAll}
          onPress={this.onViewAllButton.bind(this)}
          textStyle={{color: '#F8C548'}} />
          </View> :
          <View style={{alignItems: 'flex-end'}}>
          <Button title='Hide' buttonStyle={styles.viewAll}
          onPress={this.onHideButton.bind(this)}
          textStyle={{color: '#F8C548'}} />
          </View>
        )

        return updatesArr;
    }

    renderExamUpdates() {
      const { viewAllClicked } = this.state;

      const updatesArr = [];

      let maxNum = viewAllClicked ? homepageExamData.length : 3;

      for( let i = 0; i < maxNum; i++) {
          updatesArr.push(
            <View>
                  <View style={styles.card} key={i}>
                      <View style={styles.listStyle}>
                          <Text style={{color: '#FEC336', marginHorizontal: 8}}>{homepageExamData[i].date}</Text>

                          <Button title={homepageExamData[i].title} buttonStyle={styles.btnStyle}
                          textStyle={{color: '#7FD672', fontSize: 12}} />
                      </View>
                      <Text style={{marginTop: 5}}>{homepageExamData[i].desc}</Text>
                  </View>
              </View>
            );
        }

        updatesArr.push(
            !viewAllClicked ?
            <View style={{alignItems: 'flex-end'}}>
          <Button title='View All' buttonStyle={styles.viewAll}
          onPress={this.onViewAllButton.bind(this)}
          textStyle={{color: '#F8C548'}} />
          </View> :
          <View style={{alignItems: 'flex-end'}}>
          <Button title='Hide' buttonStyle={styles.viewAll}
          onPress={this.onHideButton.bind(this)}
          textStyle={{color: '#F8C548'}} />
          </View>
        )

        return updatesArr;
    }

    renderResultUpdates() {
      const { viewAllClicked } = this.state;

      const updatesArr = [];

      let maxNum = viewAllClicked ? homepageResultsData.length : 3;

      for( let i = 0; i < maxNum; i++) {
          updatesArr.push(
            <View>
                  <View style={styles.card} key={i}>
                      <View style={styles.listStyle}>
                          <Text style={{color: '#FEC336', marginHorizontal: 8}}>{homepageResultsData[i].date}</Text>

                          <Button title={homepageResultsData[i].title} buttonStyle={styles.btnStyle}
                          textStyle={{color: '#7FD672', fontSize: 12}} />
                      </View>
                      <Text style={{marginTop: 5}}>{homepageResultsData[i].desc}</Text>
                  </View>
              </View>
            );
        }

        updatesArr.push(
            !viewAllClicked ?
            <View style={{alignItems: 'flex-end'}}>
          <Button title='View All' buttonStyle={styles.viewAll}
          onPress={this.onViewAllButton.bind(this)}
          textStyle={{color: '#F8C548'}} />
          </View> :
          <View style={{alignItems: 'flex-end'}}>
          <Button title='Hide' buttonStyle={styles.viewAll}
          onPress={this.onHideButton.bind(this)}
          textStyle={{color: '#F8C548'}} />
          </View>
        )

        return updatesArr;
    }

    renderJobUpdates() {
      const { viewAllClicked } = this.state;

      const updatesArr = [];

      let maxNum = viewAllClicked ? homepageJobsData.length : 3;

      for( let i = 0; i < maxNum; i++) {
          updatesArr.push(
            <View>
                  <View style={styles.card} key={i}>
                      <View style={styles.listStyle}>
                          <Text style={{color: '#FEC336', marginHorizontal: 8}}>{homepageJobsData[i].date}</Text>

                          <Button title={homepageJobsData[i].title} buttonStyle={styles.btnStyle}
                          textStyle={{color: '#7FD672', fontSize: 12}} />
                      </View>
                      <Text style={{marginTop: 5}}>{homepageJobsData[i].desc}</Text>
                  </View>
              </View>
            );
        }

        updatesArr.push(
            !viewAllClicked ?
            <View style={{alignItems: 'flex-end'}}>
          <Button title='View All' buttonStyle={styles.viewAll}
          onPress={this.onViewAllButton.bind(this)}
          textStyle={{color: '#F8C548'}} />
          </View> :
          <View style={{alignItems: 'flex-end'}}>
          <Button title='Hide' buttonStyle={styles.viewAll}
          onPress={this.onHideButton.bind(this)}
          textStyle={{color: '#F8C548'}} />
          </View>
        )

        return updatesArr;
    }



    renderRecentHomeUpdates() {
      const { index } = this.state;

      if(index == 0) {
        return (
          this.renderAcademicUpdates()
        )
      }

      else if(index == 1) {
        return (
          this.renderExamUpdates()
        )
      }

      else if(index == 2) {
        return (
          this.renderResultUpdates()
        )
      }

      else if(index == 3) {
        return (
          this.renderJobUpdates()
        )
      }

      }

      renderTrendingCards({item, index}) {
        return (
          <View>
            <Card containerStyle={{width:180, height: 140}}>
              <Text style={{fontSize: 20}}>{item.title}</Text>
              <Text style={{marginTop: 6, fontSize: 15, color: '#47C8DB'}}>{item.date}</Text>
              <Text style={{marginTop: 6, fontSize: 13}} numberOfLines={3}>{item.desc}</Text>
            </Card>
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

          </View>
        )
      }





  render() {
      return (
        <ScrollView style={{backgroundColor : '#E8F3F7'}}>
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
                textStyle={styles.textStyle}
                buttonStyle={styles.buttonStyle}
                selectedTextStyle={styles.selectedTextStyle}
                buttons={['Academics', 'Exams', 'Results', 'Jobs']}
                containerStyle={{height: 54}} />
            </View>
        </View>
            {this.renderRecentHomeUpdates()}
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
          <View style={{alignItems: 'flex-end'}}>
          <Button title='View All' buttonStyle={styles.viewAll}
          onPress={() =>  this.props.onNavigate('ViewAllTrendingExams', {data: 'Girish'})}
          textStyle={{color: '#F8C548'}} />
          </View>
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
            <View style={{alignItems: 'flex-end'}}>
            <Button title='View All' buttonStyle={styles.viewAll}
            textStyle={{color: '#F8C548'}} />
            </View>
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
            <View style={{alignItems: 'flex-end'}}>
            <Button title='View All' buttonStyle={styles.viewAll}
            textStyle={{color: '#F8C548'}} />
            </View>
        </View>
        <View style={styles.ad}>
        <Image resizeMode="contain" style={styles.shrink} source={require('../ad.jpg')} />
        </View>
        <View style={styles.cStyle}>
        <Text style={styles.trend}>Current <Text style={{fontWeight: 'bold'}}>Affairs</Text></Text>
        </View>
        { this.renderCurrentAffairsList() }
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
    btnStyle: {
      width: 140,
      height: 25,
      borderRadius: 16,
      borderColor: '#50E347',
      backgroundColor: '#DDFEE7',
      borderWidth: 1
    },
    badge: {
      backgroundColor: 'white',
      width: 120,
      alignSelf: 'flex-end',
      height: 40,
      marginTop: 5
    },
    textStyle : {
      color: '#fff',
      fontSize : 15,
      fontWeight : 'bold',
      marginLeft : 10
    },
    cardContent: {
        flex: 1
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
      height: 260
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
     backgroundColor: '#89AFCC'
   },
   viewAll: {
     width: 100,
     height: 34,
     borderRadius: 20,
     borderColor: '#F8C548',
     borderWidth:1,
     backgroundColor: 'white',
   },
   selectedButtonStyle: {
        backgroundColor: '#FFBC00'
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
