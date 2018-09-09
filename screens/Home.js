import React from 'react';
import { Dimensions, StyleSheet, View, YellowBox } from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import Competitive from './Compititive';
import AcademicStudies from './AcademicStudies';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Second from "./../components/second";
import OnlineTests from "./../components/OnlineTests";
import Estore from './Estore';
import { DrawerNavigator } from 'react-navigation';
import { Text, ScrollView } from 'react-native';
import HomePage from './HomePage';
import FacebookTabBar from './FacebookTabBar';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';


YellowBox.ignoreWarnings([
  'Encountered an error loading page', // WebView uri: result.url and url failing to load - "bloomberg suneq" https://github.com/facebook/react-native/issues/7839#issuecomment-224111608
  'Deprecation warning: moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
  'Task orphaned for request ',
  'Remote debugger is in a background tab which may cause apps to perform slowly',
  ]);
  console.disableYellowBox = true;

export default class Home extends React.Component {



  state = {
    index: 0
  };


  render() {
      console.log('NAV=', JSON.stringify(this.props.navigation, null, 2));
      let nav = this.props.navigation;
    return (
      <ScrollableTabView
        style={{marginTop: 0}}
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar underlineStyle={{backgroundColor:'#FFBC00'}}
             activeTextColor='#FFFFFF' inactiveTextColor = '#98B9D6'
             style ={{backgroundColor : '#364C8B',height:60}}/>}  >
    <ScrollView tabLabel="Home" tabIcon="" style={styles.tabView}>
      <View style={styles.card}>
       <HomePage onNavigate={redirect.bind(this, nav)} />
      </View>
    </ScrollView>
    <ScrollView tabLabel="Academic Studies" style={styles.tabView}>
      <View style={styles.card}>
        <AcademicStudies onNavigate={redirect.bind(this, nav)} />
      </View>
    </ScrollView>
    <ScrollView tabLabel="Competitive Exams" style={styles.tabView}>
      <View style={styles.card}>
      <Competitive onNavigate={redirect.bind(this, nav)} />
      </View>
    </ScrollView>
    <ScrollView tabLabel="eStore" style={styles.tabView}>
      <View style={styles.card}>
        <Estore onNavigate={redirect.bind(this, nav)}/>
      </View>
    </ScrollView>
    <ScrollView tabLabel="Online Tests" style={styles.tabView}>
      <View style={styles.card}>
        <OnlineTests onNavigate={redirect.bind(this, nav)}/>
      </View>
    </ScrollView>
    <ScrollView tabLabel="Current Affairs" style={styles.tabView}>
      <View style={styles.card}>
      <Text>Current Affairs</Text>
      </View>
    </ScrollView>
    <ScrollView tabLabel="Jobs" style={styles.tabView}>
      <View style={styles.card}>
      <Text>Jobs</Text>
      </View>
    </ScrollView>
  </ScrollableTabView>
    );
  }
}

const FirstRoute = (nav) => (
  <HomePage onNavigate={redirect.bind(this, nav)}/>
);

const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);

const ThirdRoute = (nav) => (
  <Competitive onNavigate={redirect.bind(this, nav)} />
);




const redirect = (nav, route, data) => {
    console.log('NAVE=', JSON.stringify(nav, null,2 ) +
    '\n ROUTE=', JSON.stringify(route, null,2 ) +
    '\n DATA=', JSON.stringify(data, null,2 ));
    nav.navigate(route, data);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabView : {
     backgroundColor: '#E8F3F7'
  }
});
