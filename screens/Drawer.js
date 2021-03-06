import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, AsyncStorage, TouchableOpacity } from 'react-native';
import { Avatar, Button, Icon, Text as RNEText } from 'react-native-elements';
import axios from 'axios';
import ShareIcon from 'react-native-vector-icons/FontAwesome';


class Drawer extends Component {
  navigateToScreen = (route) => () => {
    this.props.navigation.navigate(route);
    this.props.navigation.closeDrawer();
  }

  constructor() {
    super();
    this.state= {
      email : '',
      loggedIn : false
    }
  }



    _retrieveLoginData = async () => {
  try {
    const value = await AsyncStorage.getItem('loginData');

    if (value !== null) {
      console.log(value);
      let retrievedValue = JSON.parse(value);
      console.log('retrievedValue == ', retrievedValue);
      let sessionId = retrievedValue.sessionId;
      let token = retrievedValue.token;

      let headers = {
                'Content-Type': 'application/json',
                'Cookie' : sessionId,
                'X-CSRF-Token' : token
      };

      let logout = axios.post(
        'http://sakshi.myofficestation.com/user_login/user/logout',
        {},
        {headers: headers});
        console.log(logout);
      logout.then((successResponse)=>{
        console.log(successResponse);
        console.log(successResponse['data']);
        if(successResponse['status'] == 200) {
          console.log('loggedout successfully');
        }
        this.onLogoutSuccess();
      }).catch((err) => {console.log(err)});
    }
   } catch (error) {
     console.log(error);
   }
}

  render () {
    return (
        <ScrollView style={{ backgroundColor: '#E8F3F7' }}>
            { this.renderTitle() }

            <View style={s.item}>
            <Icon
                name='ios-compass'
                type='ionicon'
                color='orange'
                />
              <Text style={s.itemText} onPress={this.navigateToScreen('ExploreSakshi')}>
                Explore Sakshi Eduction
              </Text>
            </View>

            <View style={s.item}>
            <Icon
                name='ios-book'
                type='ionicon'
                color='orange'
                />
              <Text style={s.itemText} onPress={this.navigateToScreen('AcademicStudies')}>
               Study Materials
              </Text>
            </View>
            <View style={s.item}>
                <Icon
                    name='ios-school'
                    type='ionicon'
                    color='orange'
                    />

              <Text style={s.itemText} onPress={this.navigateToScreen('MyTests')}>
              My Tests
              </Text>
            </View>
            <View style={s.item}>
                <Icon
                    name='ios-card'
                    type='ionicon'
                    color='orange'
                    />
              <Text style={s.itemText} onPress={this.navigateToScreen('TransactionInvoice')}>
              My Transactions
              </Text>
            </View>


            <View style={s.item}>
                <Icon
                    name='ios-star'
                    type='ionicon'
                    color='orange'
                    />
              <Text style={s.itemText} onPress={this.navigateToScreen('Contact')}>
              Bookmarks
              </Text>
            </View>
            <View style={s.item}>
                <Icon
                    name='ios-heart'
                    type='ionicon'
                    color='orange'
                    />
              <Text style={s.itemText} onPress={this.navigateToScreen('Contact')}>
              Favourites
              </Text>
            </View>


            <View style={s.item}>
                <Icon
                    name='ios-notifications'
                    type='ionicon'
                    color='orange'
                    />
              <Text style={s.itemText} onPress={this.navigateToScreen('Notifications')}>
              Notifications
              </Text>
            </View>
            <View style={s.item}>
                <Icon
                    name='ios-microphone'
                    type='ionicon'
                    color='orange'
                    />
              <Text style={s.itemText} onPress={this.navigateToScreen('Updates')}>
              Updates
              </Text>
            </View>
            <View style={s.item}>
                <Icon
                    name='ios-stats'
                    type='ionicon'
                    color='orange'
                    />
              <Text style={s.itemText} onPress={this.navigateToScreen('Feedback')}>
              Feedback
              </Text>
            </View>
            <View style={s.item}>
                <Icon
                    name='ios-information-circle'
                    type='ionicon'
                    color='orange'
                    />
              <Text style={s.itemText} onPress={this.navigateToScreen('AboutSakshi')}>
              About Sakshi
              </Text>
            </View>
            <View style={s.item}>
                <Icon
                    name='ios-cog'
                    type='ionicon'
                    color='orange'
                    />
              <Text style={s.itemText} onPress={this.navigateToScreen('ApplicationSettings')}>
              Settings
              </Text>
            </View>
            <View style={s.item}>

              <Text style={s.itemText} onPress={this.navigateToScreen('CareerGuidance')}>
              Career Guidance
              </Text>
            </View>
            <View style={s.item}>

              <Text style={s.itemText} onPress={this.navigateToScreen('KnowledgeCenter')}>
              Knowledge Center
              </Text>
            </View>
            <View style={s.item}>

              <Text style={s.itemText} onPress={this.navigateToScreen('Comments')}>
              Comments
              </Text>
            </View>
            <View style={s.item}>

              <Text style={s.itemText} onPress={this.navigateToScreen('AllComments')}>
              All Comments
              </Text>
            </View>
            <View style={s.item}>

              <Text style={s.itemText} onPress={this.navigateToScreen('NotFound')}>
              Not Found
              </Text>
            </View>
            <View style={s.item}>

              <Text style={s.itemText} onPress={this.navigateToScreen('ProfileModify')}>
              Profile Modify
              </Text>
            </View>
            <View style={s.item}>

              <Text style={s.itemText} onPress={this.navigateToScreen('Notifications')}>
              Notifications
              </Text>
            </View>
            <View style={s.item}>

              <Text style={s.itemText} onPress={this.navigateToScreen('NoInternetAlert')}>
              No Internet Alert
              </Text>
            </View>
            <View style={s.bottomInfo}>
                { this.renderNeedHelp() }
                { this.renderBanner() }
            </View>
        </ScrollView>
    );
  }

  renderNeedHelp() {
      return (
          <View style={{backgroundColor: '#4061AE', paddingVertical: 20}}>
              <RNEText h4 style={[s.whiteText, {marginLeft: 8}]}>Need help?</RNEText>
              <RNEText h4 style={[s.whiteText,{textAlign: 'center'}]}>+91 40 4321 4321</RNEText>
          </View>
      )
  }

  renderBanner() {
      return (
          <View styles={s.banner}>
            <RNEText h3 style={[s.centeredWhiteText, {paddingTop: 40}]}>SAKSHI EDUCATION</RNEText>
            <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                }}
            />

            <RNEText h5 style={s.centeredWhiteText}>Educating, Enlightening and Ennobling</RNEText>
            <TouchableOpacity onPress={() => console.log('share the app')}>
              <View style={s.gth}>
                  <ShareIcon name='share-square-o' size={24} color='#ffffff' style={{marginLeft: 30}} />
                  <Text style={s.gthT}>Share App</Text>
              </View>
            </TouchableOpacity>

            <View style={s.fText}>
                <Text style={s.privacy} onPress={ () => console.log('terms of use') }>Terms of use</Text>
                <Text style={s.privacy} onPress={ () => console.log('privacy policy') }>Privacy Policy</Text>
            </View>
          </View>
      )
  }


  onLogoutPress() {
    this._retrieveLoginData();
  }

  onSuccessLogin() {
    this.setState({
      loggedIn: true
    })
  }

  closeDrawer() {
    this.props.navigation.closeDrawer();
    this.props.navigation.navigate('Login');
  }

  onLogoutSuccess() {
    this.setState({
      loggedIn: false
    }, this.closeDrawer())
  }

  onLoginFail() {
    this.setState({
      loggedIn: false
    })
  }

  renderLoginButton() {
    return (
      <Button
          title="Login"
          buttonStyle={s.btnStyle}
          textStyle={{color: '#FEC336'}}
          onPress={() => this.props.navigation.navigate('Login', {
            onSuccessLogin: this.onSuccessLogin.bind(this),
            onLoginFail: this.onLoginFail.bind(this)
          } )} />
    )
  }

  renderLogoutButton() {
    return (
      <Button
            title="Logout"
            buttonStyle={s.btnStyle}
            textStyle={{color: '#FEC336'}}
            onPress={this.onLogoutPress.bind(this)} />
    )
  }

  renderTitle() {

    const { email, loggedIn } = this.state;
    if(!email) {
      return (
        <View style={s.title}>
            <Avatar
                size="xlarge"
                source={{uri: "http://theroyalmorecambe.co.uk/wp-content/uploads/2017/05/anonymous.gif"}}
                onPress={this.navigateToScreen('ProfileModify')}
                activeOpacity={0.7}
                rounded
                style={s.avatar}
            />
            <View style={s.info}>
                { !loggedIn ? this.renderLoginButton() : this.renderLogoutButton() }
            </View>
        </View>
      );
    }else {
      return (
        <View style={s.title}>
            <Avatar
                size="xlarge"
                source={{uri: "http://theroyalmorecambe.co.uk/wp-content/uploads/2017/05/anonymous.gif"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                rounded
                style={s.avatar}
            />
            <View style={s.info}>
                <Text style={s.name}>Swapan Kumar GV</Text>
                <Button
                    title="Logout"
                    buttonStyle={s.btnStyle}
                    textStyle={{color: '#FEC336'}}
                />
            </View>
        </View>
      );
    }

  }
}

Drawer.propTypes = {
  navigation: PropTypes.object
};

export default Drawer;

const s = StyleSheet.create({
    title: {
        backgroundColor: '#0FB9E1',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 20

    },
    avatar: {
        alignItems: 'flex-start',
    },
    info: {
        marginLeft: 8
    },
    name: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    btnStyle: {
        borderRadius: 16,
        borderWidth: 1,
        width: 120,
        height: 20,
        borderColor: '#FEC336',
        backgroundColor: '#ffffff',
        marginTop : 10
    },
    bottomInfo: {
        backgroundColor: '#3D59A2'
    },
    whiteText: {color: 'white'},
    centeredWhiteText: {
        color: 'white',
        textAlign: 'center'
    },
    banner: {
        marginTop: 40,
        marginBottom: 20,
        paddingTop: 20,
        paddingBottom: 60
    },
    itemText: {
        fontSize: 20,
        color: 'gray',
        paddingVertical: 10,
        marginLeft: 8
    },
    item: {
        flexDirection: 'row',
        marginLeft: 8
    },
    gth: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#3D59A2',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop:80,
      height: 40,
      width: 200,
      borderRadius: 30,
      borderColor: '#FFBC01',
      borderWidth:2,
    },
    gthT: {
      color: '#FFBC01',
      fontSize: 24,
      marginTop: 'auto',
      marginBottom:'auto',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    fText: {
      flexDirection: 'row',
      marginTop: 30,
      marginBottom: 30
    },
    privacy: {
      marginLeft: 10,
      color: '#ffffff',
      textDecorationLine: 'underline',

    }
});
