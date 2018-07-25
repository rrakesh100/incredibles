import {Dimensions, View} from "react-native";
import React from "react";
import {Card, ListItem, Text, FormInput, Badge} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { images } from '../api/images';
import { SearchBar } from 'react-native-elements';
import ImageCarousel from "./ImageCarousel";
import { Button } from 'react-native-elements';

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
                        flexDirection : "column",
                        height : "50%",
                        position: "relative",
                        backgroundColor : "blue"
                    }}>
                        <Icon name="arrow-left"
                              style={{
                                    position : "absolute",
                                    top : 0,
                                    left : 0,
                                    margin : 10
                              }}
                              onPress={() => {
                                  //Alert.alert("Hello");
                                  this.props.setView("examList");
                              }}
                              size={25} color="white" />
                        <Icon name="shopping-cart"
                              style={{
                                  position : "absolute",
                                  top : 0,
                                  right : 0,
                                  margin : 10
                              }}
                              size={25} color="white" />
                    </View>
                    <View style={{
                        display : "flex",
                        flexDirection : "row",
                        height : "50%",
                        backgroundColor : "blue"
                    }}>
                        <Text style={{
                            fontSize : 24,
                            color : "white",
                            marginLeft : 20,
                            marginTop: 10
                        }}>JEE MAIN | Advance</Text>
                    </View>
                </View>
                <Card style={{
                    display : "flex",
                    flexDirection : "column",
                    height : "8%",
                    backgroundColor : "white"
                }}>
                    <SearchBar
                        onChangeText={() => {}}
                        onClearText={() => {}}
                        lightTheme={true}
                        inputStyle={{backgroundColor: 'white'}}
                        placeholder='What are you looking for...' />
                </Card>
                <View style={{
                    display : "flex",
                    flexDirection : "column",
                    height : "30%"
                }}>
                    <Card>
                    <ImageCarousel images={images}/>
                    </Card>
                </View>
                <View style={{
                    display : "flex",
                    flexDirection : "row",
                    height : "8%",
                    alignItems: "center",
                    paddingTop : 15
                }}>
                    <Button
                        onPress={() => {
                            this.setState({
                                tabType : "recentUpdates"
                            })
                        }}
                        title='RECENT UPDATES'
                    />

                    <Button
                        onPress={() => {
                            this.setState({
                                tabType : "examOverview"
                            })
                        }}
                        title='EXAM OVERVIEW'
                    />
                </View>
                <View>
                    {
                        this.state.tabType == "recentUpdates" ?
                            <View style={{
                                height : "30%"
                            }}>
                                <View style={{
                                    height : "90%"
                                }}>
                                    {
                                        [...Array(5)].map((item, index) =>
                                            <Card style={{
                                                backgroundColor : "lightgray",
                                                display : "flex",
                                                flexDirection : "column"
                                            }}>
                                                <View style={{
                                                    display : "flex",
                                                    flexDirection : "row"
                                                }}>
                                                    <Text style={{
                                                        color : "red",
                                                        fontSize : 16
                                                    }}> 20 March 2017</Text>
                                                    <Badge containerStyle={{ backgroundColor: 'green'}}>
                                                        <Text>Exam Alert</Text>
                                                    </Badge>
                                                </View>
                                                <View style={{
                                                    display : "flex",
                                                    flexDirection : "row"
                                                }}>
                                                    <Text>This is text</Text>
                                                </View>
                                            </Card>
                                        )
                                    }
                                </View>
                                <View style={{
                                    height : "10%"
                                }}>
                                    {/*<Badge containerStyle={{ backgroundColor: 'green'}}>*/}
                                        {/*<Text>Show More</Text>*/}
                                    {/*</Badge>*/}
                                </View>
                            </View> : null
                    }
            </View>
            </View>
        );
    }
}