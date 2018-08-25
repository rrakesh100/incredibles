import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Avatar, Icon, Text as RNEText } from 'react-native-elements';
import { DrawerActions, NavigationActions } from 'react-navigation';

class Drawer extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  render () {
    return (
        <ScrollView>
            { this.renderTitle() }
      
            <View style={s.item}>
            <Icon
                name='ios-compass'
                type='ionicon'
                color='orange'
                />
              <Text style={s.itemText} onPress={this.navigateToScreen('Home')}>
                Explore Sakshi Eduction
              </Text>
            </View>

            <View style={s.item}>
            <Icon
                name='ios-book'
                type='ionicon'
                color='orange'
                />
              <Text style={s.itemText} onPress={this.navigateToScreen('About')}>
               Study Materials
              </Text>
            </View>
            <View style={s.item}>
                <Icon
                    name='ios-school'
                    type='ionicon'
                    color='orange'
                    />

              <Text style={s.itemText} onPress={this.navigateToScreen('Contact')}>
              My Tests
              </Text>
            </View>
            <View style={s.item}>
                <Icon
                    name='ios-card'
                    type='ionicon'
                    color='orange'
                    />
              <Text style={s.itemText} onPress={this.navigateToScreen('Contact')}>
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
              Bookmarsk
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
              <Text style={s.itemText} onPress={this.navigateToScreen('Contact')}>
              Notifications
              </Text>
            </View>
            <View style={s.item}>
                <Icon
                    name='ios-microphone'
                    type='ionicon'
                    color='orange'
                    />
              <Text style={s.itemText} onPress={this.navigateToScreen('Contact')}>
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
              <Text style={s.itemText} onPress={this.navigateToScreen('Contact')}>
              About Sakshi
              </Text>
            </View>
            <View style={s.item}>
                <Icon
                    name='ios-cog'
                    type='ionicon'
                    color='orange'
                    />
              <Text style={s.itemText} onPress={this.navigateToScreen('Contact')}>
              Settings
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
          <View style={{backgroundColor: 'darkblue', paddingVertical: 20}}>
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
            <Button
                title="Share App"
                loading
                loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={{
                    backgroundColor: "rgba(92, 99,216, 1)",
                    width: 300,
                    height: 45,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 5
                }}
                containerStyle={{ marginTop: 20, marginBottom: 40 }}
            />

          </View>
      )
  }

  renderTitle() {
      return (
        <View style={s.title}>
            <Avatar
                size="xlarge"
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                rounded
                style={s.avatar}
            />
            <View style={s.info}>
                <Text style={s.name}>Swapan Kumar GV</Text>
                <Button 
                    clear
                    raised
                    title="Logout"
                    buttonStyle={s.btnStyle}
                    style={{color: 'white'}}
                />
            </View>
        </View>
      );
  }
}

Drawer.propTypes = {
  navigation: PropTypes.object
};

export default Drawer;

const s = StyleSheet.create({
    title: {
        backgroundColor: '#00539d',
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
        borderRadius: 6,
        borderWidth: 1,
        width: 120,
        height: 20
    },
    bottomInfo: {
        backgroundColor: '#00539d'
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
    }
});