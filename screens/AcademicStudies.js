import React from "react";
import {Dimensions, Image, View, Alert, TouchableHighlight, TouchableOpacity, ScrollView} from "react-native";
import { Card, ListItem, Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AcademicStudies extends React.Component {

  static navigationOptions = ({navigation}) => (
  {
    title: 'My Cart',
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

  componentDidMount(){
    console.log('######', this.props);
  }

    state = {
        pageType : "examList"
    }

    setView = (type) => {
        this.setState({
            pageType : type
        });
    }

    render(){
        return (
          <ScrollView style={{backgroundColor : '#E8F3F7'}}>
            {
              [...Array(5)].map((item, index) => {
                return (  <TouchableOpacity key={index}
                  onPress={() => this.props.onNavigate('ExamDetails', {data: {name: 'Girish'}})}
                      >
                      <View  key= {index} style={{
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
                  </TouchableOpacity>)
              })
            }
          </ScrollView>
        );
    }
}
