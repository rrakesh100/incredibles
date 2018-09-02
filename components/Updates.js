import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Badge } from 'react-native-elements';

export default class Updates extends Component {

    render() {
        return (
            <View style={s.container}>
                {this.renderTopUpdates()}
                <Badge
                    value='Show More'
                    containerStyle={s.badge}
                    textStyle={{ color: '#FFBC01' }}
                    style={s.badge}
                />

            </View>
        )
    }

    renderTopUpdates() {
        const updatesArr = [];
        const { updates } = this.props;
        for( let i = 0; i < 3; i++) {
            updatesArr.push(
                <View style={s.cardContainer} key={i}>
                    <View style={s.card}>
                        <View style={s.title}>
                            <Text style={s.date}>{updates[i].date}</Text>
                            <Badge
                                containerStyle={{ backgroundColor: '#D9FEE4', borderWidth:0.5, borderColor: '#59B503'}}
                                value={updates[i].type}
                                textStyle={{ color: '#59B503' }}
                            />
                        </View>
                        <Text>{updates[i].desc}</Text>
                    </View>
                </View>
            );
        }
        return updatesArr;
    }

}

const s = StyleSheet.create({
    container: {
      backgroundColor: '#ecf0f1',
    },
    cardContainer: {
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    date: {
        color: '#FFBC01',
        marginHorizontal: 8
    },
    badge: {
        backgroundColor: 'white',
        width: 120,
        alignSelf: 'flex-end',
        height: 40,
        borderWidth: 0.5,
        borderColor: '#FFBC01'
    },
    card: {
        paddingVertical: 8,
        backgroundColor: 'white',
        paddingHorizontal: 6,
        marginVertical: 4,
    },
    separator: {
        backgroundColor: '#ecf0f1',
        height: 8
    }
  });
