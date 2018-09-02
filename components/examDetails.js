import {Dimensions, View, ScrollView, StyleSheet, FlatList, TouchableHighlight} from "react-native";
import React from "react";
import {Card, ListItem, Text, FormInput, Badge, ButtonGroup} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import NewIcon from 'react-native-vector-icons/MaterialIcons';
import GuidanceIcon from 'react-native-vector-icons/SimpleLineIcons';
import CommentIcon from 'react-native-vector-icons/Octicons';
import { images } from '../api/images';
import { SearchBar } from 'react-native-elements';
import ImageCarousel from "./ImageCarousel";
import { Button } from 'react-native-elements';
import InfoTab from "./InfoTab";
import InfoAccordion from './InfoAccordion';
import { studyMaterialData } from '../api/academicStudies';


const examInfo = [
    {
        name : "NEET",
        topic : ["Physics", "Chemistry", "Mathematics", "Botany"],
        description : "This is a description"
    },
    {
        name : "NEET",
        topic : ["Physics", "Chemistry", "Mathematics", "Botany"],
        description : "This is a description"
    }
];

export default class ExamDetails extends React.Component {

  static navigationOptions = ({navigation}) => (
  {
    title: 'Exam Detail',
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
    state = {
        index: 0,
        searchText : "",
        tabType : "recentUpdates"
    }

    updateIndex = (index) => {
      this.setState({index})
    }

    render() {
        return (
            <ScrollView style={{
                backgroundColor: '#E8F3F7'
            }}>
                <View style={{
                    display : "flex",
                    flexDirection : "column",
                }}>

                    <View style={{
                        display : "flex",
                        flexDirection : "row",
                        backgroundColor: '#00539d'
                    }}>
                        <Text style={{
                            fontSize : 24,
                            color: '#fff',
                            marginLeft : 20,
                            marginTop: 10
                        }}>JEE MAIN | Advanced </Text>
                    </View>
                </View>
                    <SearchBar
                        onChangeText={() => {}}
                        onClearText={() => {}}
                        lightTheme={true}
                        inputStyle={{backgroundColor: 'white'}}
                        placeholder='What are you looking for...' />
                <View style={{
                    display : "flex",
                    flexDirection : "column",
                }}>
                    <ImageCarousel images={images}/>
                </View>
                <View style={{
                    display : "flex",
                    flexDirection : "row",
                    alignItems: "center",
                    paddingTop : 15,
                }}>
                    <InfoTab/>
                </View>

                <View style={styles.space}>
                    <Text style={{color: '#47C8DB',
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginTop: 'auto',
                    marginRight: 'auto'}}>ALL SUBJECTS</Text>
                </View>

                <View style={styles.container}>
                  <ButtonGroup
                    selectedButtonStyle={styles.selectedButtonStyle}
                    onPress={this.updateIndex}
                    selectedIndex={this.state.index}
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    buttons={['MATHEMATICS', 'PHYSICS', 'CHEMISTRY']}
                    containerStyle={{height: 54}} />
                </View>

                <View style={styles.hBar}>
                    <TouchableHighlight onPress={ () => console.log('study material')}>
                      <View style={{width: 90, height: 70, backgroundColor: '#E8F3F7'}}>
                        <Icon name='file-text-o' size={26} color='#B1B5B8' style={{marginLeft: 'auto', marginRight: 'auto'}} />
                        <Text style={{fontSize:14, color: '#B1B5B8', marginLeft: 'auto', marginRight: 'auto', marginTop: 4}}>STUDY</Text>
                        <Text style={{fontSize:14, color: '#B1B5B8', marginLeft: 'auto', marginRight: 'auto'}}>MATERIAL</Text>
                      </View>
                    </TouchableHighlight>

                    <View style={{width: 2, height: 70, backgroundColor: '#ffffff'}}>
                    </View>
                    <TouchableHighlight onPress={ () => console.log('online test')}>
                      <View style={{width: 90, height: 70, backgroundColor: '#E8F3F7'}}>
                        <NewIcon name='computer' size={26} color='#B1B5B8' style={{marginLeft: 'auto', marginRight: 'auto'}}/>
                        <Text style={{fontSize:14, color: '#B1B5B8', marginLeft: 'auto', marginRight: 'auto', marginTop: 4}}>ONLINE</Text>
                        <Text style={{fontSize:14, color: '#B1B5B8', marginLeft: 'auto', marginRight: 'auto'}}>TEST</Text>
                      </View>
                    </TouchableHighlight>

                    <View style={{width: 2, height: 70, backgroundColor: '#ffffff'}}>
                    </View>

                    <TouchableHighlight onPress={ () => console.log('career guidance')}>
                      <View style={{width: 90, height: 70, backgroundColor: '#E8F3F7'}}>
                        <GuidanceIcon name='directions' size={26} color='#B1B5B8' style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 4}}/>
                        <Text style={{fontSize:14, color: '#B1B5B8', marginLeft: 'auto', marginRight: 'auto'}}>CAREER</Text>
                        <Text style={{fontSize:14, color: '#B1B5B8', marginLeft: 'auto', marginRight: 'auto'}}>GUIDANCE</Text>
                      </View>
                    </TouchableHighlight>

                    <View style={{width: 2, height: 70, backgroundColor: '#ffffff'}}>
                    </View>

                    <TouchableHighlight onPress={ () => console.log('comments')}>
                    <View style={{width: 90, height: 70, backgroundColor: '#E8F3F7'}}>
                      <CommentIcon name='comment-discussion' size={26} color='#B1B5B8' style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 4}}/>
                      <Text style={{fontSize:14, color: '#B1B5B8', marginLeft: 'auto', marginRight: 'auto', marginTop: 4}}>COMMENTS</Text>
                    </View>
                    </TouchableHighlight>
                </View>

                <View>
                  <InfoAccordion data={studyMaterialData} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  hBar: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle : {
    color: '#fff',
    fontSize : 15,
    fontWeight : 'bold',
    marginLeft : 10
  },
  buttonStyle: {
     backgroundColor: '#89AFCC'
  },
  selectedButtonStyle: {
     backgroundColor: '#FFBC00'
  },
  selectedTextStyle: {
     color: '#fff',
     fontSize : 15,
     fontWeight : 'bold'
 },
 container : {
   alignItems: 'center',
   justifyContent: 'center',
   marginTop : 12,
   marginLeft : -8,
   marginRight : -8
 },
 space: {
   height: 50,
   backgroundColor: '#ffffff'
 }
})
