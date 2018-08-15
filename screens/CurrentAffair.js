import React from 'react';
import { Text, View } from 'react-native';



export default class CurrentAffair extends React.Component {

    static navigationOptions = ({navigation}) => (
		{
      title: 'Current Affairs',
			headerTintColor: '#ffffff',
			headerStyle: {
				backgroundColor: '#00539d',
				borderBottomColor: '#ffffff',
			},
			headerTitleStyle: {
				fontSize: 18,
			},
		}
    );

    render() {
      return (
        <View>
         <Text>Girish</Text>
        </View>
      )
    }
  }
