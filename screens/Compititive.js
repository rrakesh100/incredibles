import React from 'react';
import { FlatList, StyleSheet, Text, TouchableHighlight, View, AsyncStorage, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';



export default class Compititive extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      competitiveDataObj: null,
    }
  }


  componentDidMount() {

    const competitiveData = axios.get('http://sakshi.myofficestation.com/node.json?type=competitive_exams_category', {withCredentials: true});

    competitiveData.then((res) => {
      console.log(res);
      this.setState({
        competitiveDataObj: res
      })
    }
    ).catch((e) => console.log(e))

  }

    render() {
      const { competitiveDataObj } = this.state;

      if(competitiveDataObj) {
      let cData = competitiveDataObj['data'];
      let dList = cData.list;

        return (
            <View s={s.container}>
                <FlatList
                    data={dList}
                    renderItem={this.renderCompetitiveItem.bind(this)}
                    ItemSeparatorComponent={this.renderItemSeperator.bind(this)}
                />
            </View>
        )
      } else {
        return (
          <View style={s.cardContent}>
            <View style={s.indicator}>
              <ActivityIndicator size="large" color="#FFBC01" />
            </View>
          </View>
        )
      }
    }

    renderItemSeperator() {
        return (
            <View style={s.separator}></View>
        )
    }

    renderCompetitiveItem({item}) {
      return (
        <TouchableHighlight
            onPress={() => this.props.onNavigate('Exam', {data:item.title})}
            underlayColor='#ffffff'>
        <View style={s.card}>
            <View style={s.cardContent}>
                <Text style={s.title}>{item.title}</Text>
            </View>
            <View style={s.arrow}>
                <Icon name="ios-arrow-forward" color="#4F8EF7"   size={32} />
            </View>
        </View>
        </TouchableHighlight>
      )
    }

    renderItem({item}) {
        return (
            <TouchableHighlight
                onPress={() => this.props.onNavigate('Exam', {data: item})}
                underlayColor='#ffffff'>
                <View style={s.card}>
                    <View style={s.cardContent}>
                        <Text style={s.title}>{item.title}</Text>
                        <Text style={s.catagories}>{item.catagories ? item.catagories.join(' | ') : ''}</Text>
                        <Text style={s.desc}>{item.desc.substr(0, 200) + '...'}</Text>
                    </View>
                    <View style={s.arrow}>
                        <Icon name="ios-arrow-forward" color="#4F8EF7"   size={32} />
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

}

const s = StyleSheet.create({
    card: {
      paddingVertical: 8,
      backgroundColor: 'white',
      paddingHorizontal: 6,
      flexDirection: 'row'
    },
    container: {
      backgroundColor:'#E8F3F7'
    },
    cardContent: {
        flex: 1
    },
    arrow: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2980b9'
    },
    catagories: {
        fontSize: 14,
        color: 'orange'
    },
    desc: {
        fontSize: 12,
        marginTop: 2
    },
    separator: {
        backgroundColor: '#ecf0f1',
        height: 8
    },
    indicator: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto'
    }
  });
