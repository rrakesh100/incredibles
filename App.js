import React from 'react';
import { StyleSheet, View, YellowBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator, createStackNavigator, DrawerActions } from 'react-navigation';
import BillingScreen from './components/Billing';
import CheckoutScreen from './components/Checkout';
import ExamDetailsScreen from './components/examDetails';
import InfoTabScreen from './components/InfoTab';
import MyTestsScreen from './components/MyTests';
import NewCheckoutScreen from './components/NewCheckout';
import OnlineSubscribeScreen from './components/OnlineSubscribe';
import OnlineTestsScreen from './components/OnlineTests';
import PauseTestScreen from './components/PauseTest';
import StudyMaterialContentScreen from './components/StudyMaterialContent';
import SubscriptionScreen from './components/Subscription';
import TakeTestScreen from './components/TakeTest';
import TestScreen from './components/Test';
import TestReportScreen from './components/TestReport';
import TrendingExamScreen from './components/ViewAllTrendingExams';
import AcademicStudiesScreen from './screens/AcademicStudies';
import Compititive from './screens/Compititive';
import CurrentAffairScreen from './screens/CurrentAffair';
import DrawerScreen from './screens/Drawer';
import EstoreScreen from './screens/Estore';
import ExamScreen from './screens/Exam';
import FeedbackScreen from './screens/Feedback';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import PaymentScreen from './screens/Payment';
import RegisterScreen from './screens/Register';
import TransactionInvoiceScreen from './components/TransactionInvoice';


YellowBox.ignoreWarnings([
  'Encountered an error loading page', // WebView uri: result.url and url failing to load - "bloomberg suneq" https://github.com/facebook/react-native/issues/7839#issuecomment-224111608
  'Deprecation warning: moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
  'Task orphaned for request ',
  'Remote debugger is in a background tab which may cause apps to perform slowly',
  ]);
  console.disableYellowBox = true;


  const InnerStackNavigator =  createStackNavigator(
    {
      Home: {
        screen: HomeScreen,
      },
      Login: {
        screen: LoginScreen,
      },
      Register: {
        screen: RegisterScreen,
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
      Checkout : {
        screen : CheckoutScreen
      },
      NewCheckout : {
        screen : NewCheckoutScreen
      },
      Billing : {
        screen : BillingScreen
      },
      ViewAllTrendingExams : {
        screen : TrendingExamScreen
      },
      Payment : {
        screen : PaymentScreen
      },
      AcademicStudies : {
        screen : AcademicStudiesScreen
      },
      ExamDetails : {
        screen : ExamDetailsScreen
      },
      CurrentAffair : {
        screen : CurrentAffairScreen
      },
      TakeTest: {
        screen : TakeTestScreen
      },
      Test: {
        screen : TestScreen
      },
      Feedback: {
        screen: FeedbackScreen
      },
      PauseTest: {
        screen : PauseTestScreen
      },
      MyTests: {
        screen : MyTestsScreen
      },
      TestReport: {
        screen : TestReportScreen
      },
      InfoTab: {
        screen : InfoTabScreen
      },
      StudyMaterialContent: {
        screen : StudyMaterialContentScreen
      },
      TransactionInvoice: {
        screen : TransactionInvoiceScreen
      }
    },
    {
      initialRouteName: 'Home',
      headerMode: 'none',
    }
  );

// Navigator
const DrawerNavigator = createDrawerNavigator(
	{
	  Home: {
	    screen: InnerStackNavigator,
    },
    Login: {
      screen: LoginScreen,
    },
    Register: {
      screen: RegisterScreen,
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
    Checkout : {
      screen : CheckoutScreen
    },
    NewCheckout : {
      screen : NewCheckoutScreen
    },
    Billing : {
      screen : BillingScreen
    },
    ViewAllTrendingExams : {
      screen : TrendingExamScreen
    },
    Payment : {
      screen : PaymentScreen
    },
    AcademicStudies : {
      screen : AcademicStudiesScreen
    },
    ExamDetails : {
      screen : ExamDetailsScreen
    },
    CurrentAffair : {
      screen : CurrentAffairScreen
    },
    TakeTest: {
      screen : TakeTestScreen
    },
    Test: {
      screen : TestScreen
    },
    Feedback: {
      screen: FeedbackScreen
    },
    PauseTest: {
      screen : PauseTestScreen
    },
    MyTests: {
      screen : MyTestsScreen
    },
    TestReport: {
      screen : TestReportScreen
    },
    InfoTab: {
      screen : InfoTabScreen
    },
    StudyMaterialContent: {
      screen : StudyMaterialContentScreen
    },
    TransactionInvoice: {
      screen : TransactionInvoiceScreen
    }
	},
	{
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: 300
	}
);

const Stack = createStackNavigator({

    //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.

    DrawerNavigator:{
        screen: DrawerNavigator
    }
},{
   navigationOptions : ({navigation}) => (
  {
    title: `Sakshi Education`,
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#364C8B',
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
    <Ionicon onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} } style={{marginLeft : 12, marginRight : 8}} name="md-menu" size={36} color="#fff"/>
    </View>
  }
)

});


export default class App extends React.Component {
  render() {
    return (
			<Stack />
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
