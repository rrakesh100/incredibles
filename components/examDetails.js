import {Dimensions, View} from "react-native";
import React from "react";
import {Card, ListItem, Text, FormInput, Badge} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { images } from '../api/images';
import { SearchBar } from 'react-native-elements';
import ImageCarousel from "./ImageCarousel";
import { Button } from 'react-native-elements';
import InfoTab from "./InfoTab";

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
        searchText : "",
        tabType : "recentUpdates"
    }

    render() {
        return (
            <View style={{
                height : "100%"
            }}>
                <View style={{
                    display : "flex",
                    flexDirection : "column",
                    height : "15%"
                }}>
                  
                    <View style={{
                        display : "flex",
                        flexDirection : "row",
                        height : "50%",
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
                    height : "30%"
                }}>
                    <ImageCarousel images={images}/>
                </View>
                <View style={{
                    display : "flex",
                    flexDirection : "row",
                    alignItems: "center",
                    paddingTop : 15,
                    height : "40%"
                }}>
                    <InfoTab/>
                </View>
              
            </View>
        );
    }
}
