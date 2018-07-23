import React from 'react';
import { FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { compititiveData } from '../api/competitive';



export default class Compititive extends React.Component {

    render() {
        return (
            <View s={s.container}>
                <FlatList
                    data={compititiveData}
                    renderItem={this.renderItem.bind(this)}
                    ItemSeparatorComponent={this.renderItemSeperator.bind(this)}
                />
            </View>
        )
    }

    renderItemSeperator() {
        return (
            <View style={s.separator}></View>
        )
    }

    renderItem({item}) {
        console.log('NAV in ITEM=', this.props);
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
    }
  });