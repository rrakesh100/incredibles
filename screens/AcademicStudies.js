import React from "react";
import {Dimensions, Image, View, Alert, TouchableHighlight, TouchableOpacity, ScrollView} from "react-native";
import { Card, ListItem, Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {academicStudies} from '../api/academicStudies';

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
              academicStudies.map((item, index) => {
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
                          }}>{item.examName}</Text>
                      <View style={{
                          display : "flex",
                          flexDirection : "row"
                      }}>
                      {
                          item.subjects.map((item1, index1) =>
                               <Text style={{
                                  marginRight : 5,
                                  fontSize : 14,
                                  color : "orange"
                              }} key={index1}>{item1} |</Text>
                          )
                      }
                      </View>
                      <Text style={{
                          fontSize : 12
                      }}>{item.description}
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
