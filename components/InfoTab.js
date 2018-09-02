import { Container, Tab, Tabs } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { recentUpdates } from '../api/recentUpdtes';
import Updates from './Updates';

export default class InfoTab extends Component {

    render() {
        return(
            <View style={s.container}>
                <Container>
                    <Tabs>
                        <Tab heading='RECENT UPDATES'>
                            <Updates updates={recentUpdates}/>
                        </Tab>
                        <Tab heading='EXAMS OVERVIEW'>
                            <View style={{}}>
                                <Text>{`Exams Overview
                                    sdfasdf
                                    asdf
                                    asdfdsfasdfasdf
                                    asdfdsfasdfasdfasd

                                    asdfdsfasdfasdf`}
                                </Text>
                            </View>
                        </Tab>
                    </Tabs>
                </Container>
            </View>
        )
    }
}


const s = StyleSheet.create({
    container: {
    },
  });
