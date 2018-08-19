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
      const data = this.props.navigation.state.params.data;
      return (
        <View>
         <Text>WORK IN PROGRESS</Text>
         <Text style={{marginTop : 10, fontWeight : 'bold'}}>{data.heading}</Text>
         <Text style={{marginTop : 10}}>{data.date}</Text>
         <Text style={{marginTop : 10}}>{data.description}</Text>
        </View>
      )
    }
  }
