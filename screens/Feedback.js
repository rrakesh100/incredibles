import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Picker, Dimensions, TouchableHighlight } from 'react-native';
import { Button, Header, Text } from 'react-native-elements';

const sliderWidth = Dimensions.get('window').width;


export default class Feedback extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
    static navigationOptions = ({navigation}) => (
	{
        title: 'Feedback',
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: '#364C8B',
            borderBottomColor: '#ffffff',
        },
        headerTitleStyle: {
            fontSize: 18,
        },
	});

    render() {
        return (
            <View style={s.container}>
                <View style={s.binder}>

                    <Text style={s.title}>Please fill the details</Text>
                    <View style={{backgroundColor: 'white'}}>
                        <Picker
                          onValueChange={(itemValue, itemIndex) => this.setState({reason: itemValue})}
                          selectedValue={this.state.reason}
                          style={{ height: 40 }}>
                          <Picker.Item label="Reason1" value="reason1" />
                          <Picker.Item label="Reason2" value="reason2" />
                          <Picker.Item label="Reason3" value="reason3" />
                          <Picker.Item label="Reason4" value="reason4" />
                        </Picker>
                    </View>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        underlineColorAndroid = "transparent"
                        placeholder='Comments if any..'
                        shake={true}
                       style={[s.inputContainer, s.inputStyle, {height: 120}]}
                    />

                    <TouchableHighlight underlayColor='#E8F3F7'
                        onPress={() => console.log('send')} >
                      <View style={s.buttonContainer}>
                        <Text style={s.send}>SEND</Text>
                      </View>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
}
const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8F3F7'
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
        marginTop: 10,
        marginBottom: 4,
        marginLeft: 4,
    },
    buttonContainer: {
        marginTop: 40,
        backgroundColor: '#ffffff',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 40,
        width: 140,
        borderRadius: 30,
        borderColor: '#FFBC01',
        borderWidth:1,
    },
    send: {
      color: '#FFBC01',
      fontSize: 24,
      marginTop: 'auto',
      marginBottom: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
})
