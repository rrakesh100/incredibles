import {Dimensions, Image, View, Alert, TouchableHighlight, TouchableOpacity} from "react-native";
import React from "react";
import { Card, ListItem, Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
//import * as Alert from "react-native";

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

export default class AcademicStudies extends React.Component {

    render() {
        return (
            <View style={{
                backgroundColor : '#E4FAFB'
            }}>
                {
                    /*examInfo.map((item, index) =>*/
                    [...Array(5)].map((item, index) =>
                        <TouchableOpacity
                            onPress={() => {
                                //Alert.alert("Hello");
                                this.props.setView("examDetails");
                            }}

                        >
                            <View style={{
                                backgroundColor : "white",
                                marginTop : 10,
                                marginBottom : 10,
                                padding : 10,
                                position : "relative"
                            }}>
                            <Text style={{
                                    fontSize : 24,
                                    fontWeight : "bold",
                                    color : '#2980b9'
                                }}>Name</Text>
                            <View style={{
                                display : "flex",
                                flexDirection : "row"
                            }}>
                            {
                                // item.topic.map((item1, index1) =>
                                [...Array(4)].map((item1, index1) =>
                                    <Text style={{
                                        marginRight : 5,
                                        fontSize : 14,
                                        color : "orange"
                                    }}>SubTopics |</Text>
                                )
                            }
                            </View>
                            <Text style={{
                                fontSize : 12
                            }}>This is description
                            </Text>
                            <Icon name="chevron-right"
                                  style={{
                                      position : "absolute",
                                      right : 0,
                                      top : "40%"
                                  }}
                                  size={25} color="#4F8EF7" />
                            </View>
                        </TouchableOpacity>
                    )
                }
            </View>
        );
    }

}
