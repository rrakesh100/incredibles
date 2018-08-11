import React from 'react';
import { StyleSheet, YellowBox } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Compititive from './screens/Compititive';
import ExamScreen from './screens/Exam';
import HomeScreen from './screens/Home';
import Second from "./components/second";
import { DrawerNavigator, createStackNavigator } from 'react-navigation';
import EstoreScreen from './screens/Estore';
import OnlineSubscribeScreen from './components/OnlineSubscribe';
import OnlineTestsScreen from './components/OnlineTests';
import SubscriptionScreen from './components/Subscription';

YellowBox.ignoreWarnings([
  'Encountered an error loading page', // WebView uri: result.url and url failing to load - "bloomberg suneq" https://github.com/facebook/react-native/issues/7839#issuecomment-224111608
  'Deprecation warning: moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
  'Task orphaned for request ',
  'Remote debugger is in a background tab which may cause apps to perform slowly',
  ]);
  console.disableYellowBox = true;

// Navigator
const StackNavigtor = createStackNavigator(
	{
	  Home: {
	    screen: HomeScreen,
	  },
		Exam: {
			screen: ExamScreen,
    },
    Compititive: {
      screen: Compititive,
    },
    Estore : {
      screen : EstoreScreen
    },
    OnlineTests : {
      screen : OnlineTestsScreen
    },
    Subscription : {
      screen : SubscriptionScreen
    },
    OnlineSubscribe : {
      screen : OnlineSubscribeScreen
    },
	},
	{
		initialRouteName: 'Home'
	}
);


export default class App extends React.Component {
  render() {
    return (
			<StackNavigtor />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
