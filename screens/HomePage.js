import React, { Component} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ButtonGroup } from 'react-native-elements';
import { homeData } from '../api/homepage';
import { Button } from 'native-base';


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

    renderContent({item}) {
        return (
                <View style={styles.card}>
                    <View style={styles.cardContent}>
                        <Text style={styles.contentStyle}>{item.title}</Text>
                        <Text style={styles.contentDesc}>{item.desc}</Text>
                    </View>
                </View>
        )
    }

    renderItemSeperator() {
        return (
            <View style={styles.separator}></View>
        )
    }


  _renderItem ({item, index}) {
        return (
            <View>
                <Text style={styles.title}>{item.title}</Text>
                <View style={{marginLeft:10}}>
                <Image style={styles.imgS} source={item.image} />
                </View>
                <Text style={styles.fText}>{item.text}</Text>
            </View>
        );
    }

    updateIndex = (index) => {
    this.setState({index})
    }



  render() {


      return (
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
            autoplayDelay={3000}
          />
        <View>
          <Text style={styles.txtS}>Recent Updates</Text>
        </View>
        <View style={styles.container}>
          <ButtonGroup
          selectedBackgroundColor="black"
          onPress={this.updateIndex}
          selectedIndex={this.state.index}
          buttons={['ACADEMICS', 'COMPETITIVE EXAMS', 'RESULTS', 'JOBS']}
          containerStyle={{height: 50}} />
        </View>
        <View>
            <FlatList
                data={homeData}
                renderItem={this.renderContent.bind(this)}
                ItemSeparatorComponent={this.renderItemSeperator.bind(this)}
            />
        </View>
      </View>
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
      borderRadius: 20,
      width: 0.8*sliderWidth
    },
    txtS : {
      color: '#47C8DB',
      fontSize: 20,
      marginLeft: 7,
      fontWeight: 'bold'
    },
    fText : {
      fontSize: 20,
      margin: 7
    },
    container : {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
    },
    separator : {
      backgroundColor: '#ecf0f1',
      height: 2
    },
    card: {
      paddingVertical: 8,
      backgroundColor: 'white',
      paddingHorizontal: 6,
      flexDirection: 'row'
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
    }
  })
