import React from 'react';
import { Text, View } from 'react-native';



export default class CurrentAffair extends React.Component {

    static navigationOptions = ({navigation}) => (
		{
      title: `${navigation.state.params ? navigation.state.params.data.title : 'Exam'}`,
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
      console.log(this.props)
      return (
        <View>
         <Text>Girish</Text>
        </View>
      )
    }
