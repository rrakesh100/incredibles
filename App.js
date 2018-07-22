import React from 'react';
import { StyleSheet, Text, View , Dimensions} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

export default class App extends React.Component {
  
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
  <View style={[styles.container, { backgroundColor: '#303ab7' }]} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
