import React from 'react';
import { Dimensions, StyleSheet, View, YellowBox } from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import Competitive from './Compititive';
import HomePage from './HomePage';
import Second from "./../components/second";
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Estore from './Estore';


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
			title: `Sakshi Education`,
			headerTintColor: '#ffffff',
			headerStyle: {
				backgroundColor: '#00539d',
				borderBottomColor: '#ffffff'
			},
			headerTitleStyle: {
				fontSize: 18,
			},
      headerRight : <View style={{display:'flex', flexDirection:'row'}}>
      <View style={{marginLeft : 12, marginRight : 8}}><Icon name="user-circle-o" size={24} color="#fff" /></View>
      <Icon style={{marginLeft : 12, marginRight : 8}} name="shopping-cart" size={24} color="#fff"/>
      <Icon style={{marginLeft : 12, marginRight : 8}} name="bell" size={24} color="#fff"/>
      </View> ,
      headerLeft : <View>
      <Ionicon style={{marginLeft : 12, marginRight : 8}} name="md-menu" size={36} color="#fff"/>
      </View>
		}
	);


  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home' },
      { key: 'academicStudies', title: 'Academic Studies' },
      { key: 'competitiveExams', title: 'Competitive Exams' },
      { key: 'eStore', title: 'eStore' }
    ],
  };


  render() {
      console.log('NAV=', JSON.stringify(this.props.navigation, null, 2))
    return (
      <TabView
         navigationState={this.state}
         tabStyle={{backgroundColor:'#000'}}
         renderScene={SceneMap({
           home: FirstRoute.bind(this, this.props.navigation),
           academicStudies: Second,
           competitiveExams : ThirdRoute.bind(this, this.props.navigation),
           eStore: FourthRoute,
         })}
         onIndexChange={index => this.setState({ index })}
         initialLayout={{ width: Dimensions.get('window').width }}
         renderTabBar={props =>
          <TabBar
            {...props}
            style={{ backgroundColor: '#00539d' }}
          />
}
       />
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

const FourthRoute = (nav) => (
  <Estore />
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
});
