import React from 'react';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import Competitive from './Compititive';
import { Dimensions, StyleSheet, View, YellowBox } from 'react-native';
import AcademicStudies from './AcademicStudies';
import Second from "./../components/second";
import OnlineTests from "./../components/OnlineTests";

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Estore from './Estore';
import { DrawerNavigator } from 'react-navigation';
import {
  Text,
  ScrollView,
} from 'react-native';
import HomePage from './HomePage';

import FacebookTabBar from './FacebookTabBar';

export default class Base extends React.Component {

  render() {
    console.log('NAV=', JSON.stringify(this.props.navigation, null, 2));
    let nav = this.props.navigation;
    return (  <ScrollableTabView
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
      </ScrollableTabView>)
  }
}

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
