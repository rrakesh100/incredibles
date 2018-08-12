import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Button, Header, Text } from 'react-native-elements';
export default class Feedback extends Component {
    static navigationOptions = ({navigation}) => (
	{
        title: 'Feedback',
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: '#00539d',
            borderBottomColor: '#ffffff',
        },
        headerTitleStyle: {
            fontSize: 18,
        },
	});

    render() {
        return (
            <View style={s.container}>
                <Header
                    placement="left"
                    leftComponent={{ icon: 'ios-arrow-back', color: '#fff',   type: 'ionicon'}}
                    centerComponent={{ text: 'Feedback', style: { color: '#fff', fontSize: 22 } }}
                />
                <View style={s.binder}>

                    <Text style={s.title}>Please fill the details</Text>
                    <TextInput
                        placeholder='Select Reason'
                        style={[s.inputContainer, s.inputStyle]}
                    />
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        placeholder='Comments if any..'
                        shake={true}
                       style={[s.inputContainer, s.inputStyle, {height: 120}]}
                    />
                    <View style={s.buttonContainer}>
                        <Button
                            title='Submit'
                            color='white'
                            containerStyle={{marginTop: 20}}
                        />
                    </View>

                </View>

            </View>    
        );    
    }
}

const s = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#bdc3c7'
    },
    binder: {
        width: '90%',
        alignSelf: 'center'
    },
    title: {
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    inputContainer: {
        backgroundColor: 'white',
    },
    inputStyle: {
        height: 40,
        justifyContent: 'center',
        fontSize: 22,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 4,
        marginBottom: 4,
        marginLeft: 4,
    },
    buttonContainer: {
        marginTop: 40
    }
})