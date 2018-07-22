import React from 'react';
import { Dimensions, StyleSheet, View, YellowBox } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import Competitive from './Compititive';

YellowBox.ignoreWarnings([
  'Encountered an error loading page', // WebView uri: result.url and url failing to load - "bloomberg suneq" https://github.com/facebook/react-native/issues/7839#issuecomment-224111608
  'Deprecation warning: moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
  'Task orphaned for request ',
  'Remote debugger is in a background tab which may cause apps to perform slowly',
  ]);
  console.disableYellowBox = true;

export default class Home extends React.Component {

    static navigationOptions = ({navigation}) => (
		{
			title: `Sakshi Eduction`,
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

  
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home' },
      { key: 'academicStudies', title: 'Academic Studies' },
      { key: 'competitiveExams', title: 'Competitive Exams' }
    ],
  };
  
  
  render() {
    return (
      <TabView
         navigationState={this.state}
         renderScene={SceneMap({
           home: FirstRoute,
           academicStudies: SecondRoute,
           competitiveExams : ThirdRoute
         })}
         onIndexChange={index => this.setState({ index })}
         initialLayout={{ width: Dimensions.get('window').width }}
       />
    );
  }
}

const FirstRoute = () => (
    <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);

const ThirdRoute = () => (
  <Competitive  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
