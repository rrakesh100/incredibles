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
import CurrentAffairsScreen from './screens/CurrentAffairs';
import CurrentAffairScreen from './screens/CurrentAffair';
import DrawerScreen from './screens/Drawer';
import EstoreScreen from './screens/Estore';
import ExamScreen from './screens/Exam';
import FeedbackScreen from './screens/Feedback';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import PaymentScreen from './screens/Payment';
import RegisterScreen from './screens/Register';
import RegisterVerificationScreen from './screens/RegisterVerification';
import TransactionInvoiceScreen from './components/TransactionInvoice';
import CareerGuidanceScreen from './components/CareerGuidance';
import CareerGuidanceDetailScreen from './components/CareerGuidanceDetail';
import CommentsScreen from './components/Comments';
import AllCommentsScreen from './components/AllComments';
import ProfileModifyScreen from './screens/ProfileModify';
import ApplicationSettingsScreen from './screens/ApplicationSettings';
import AboutSakshiScreen from './screens/AboutSakshi';
import NotFoundScreen from './screens/NotFound';
import NoInternetAlertScreen from './screens/NoInternetAlert';

YellowBox.ignoreWarnings([
  'Encountered an error loading page', // WebView uri: result.url and url failing to load - "bloomberg suneq" https://github.com/facebook/react-native/issues/7839#issuecomment-224111608
  'Deprecation warning: moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
  'Task orphaned for request ',
  'Remote debugger is in a background tab which may cause apps to perform slowly',
  ]);
  console.disableYellowBox = true;



// Navigator
const DrawerNavigator = createDrawerNavigator(
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
    CurrentAffairs: {
      screen : CurrentAffairsScreen
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
    },
    CareerGuidance: {
      screen : CareerGuidanceScreen
    },
    CareerGuidanceDetail: {
      screen : CareerGuidanceDetailScreen
    },
    Comments : {
      screen : CommentsScreen
    },
    AllComments : {
      screen : AllCommentsScreen
    },
    RegisterVerification : {
      screen : RegisterVerificationScreen
    },
    ProfileModify : {
      screen : ProfileModifyScreen
    },
    ApplicationSettings : {
      screen : ApplicationSettingsScreen
    },
    AboutSakshi : {
      screen : AboutSakshiScreen
    },
    NotFound : {
      screen : NotFoundScreen
    },
    NoInternetAlert : {
      screen : NoInternetAlertScreen
    }
	},
	{
    initialRouteName: 'NoInternetAlert',
    contentComponent: DrawerScreen,
    drawerWidth: 300
	}
);




export default class App extends React.Component {
  render() {
    return (
			<DrawerNavigator />
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
