import React, {Component} from 'react';
import { View, Text, NetInfo, StyleSheet, Dimensions, TouchableOpacity, WebView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';




export default class NoInternetAlert extends Component {

  state = {
    isConnected : true
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  }

  handleConnectivityChange = isConnected => {
    console.log(isConnected);
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
    }
  };

  render() {
    if(!this.state.isConnected) {
    return (
        <View style={{flex:1}}>
          <View style={{width: 40,height: 40,position: 'relative'}}>
              <View style={{width: '100%',height: '100%',position: 'absolute',left: 0,top: 0}}>
              </View>

          </View>
          <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: 100, backgroundColor: '#DC4443'}}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 'auto', marginBottom: 'auto'}}>
                <Icon name='warning' size={26} color='#ffffff'/>
                <Text style={{color: '#ffffff'}}>Please Check Your Internet Connection!!</Text>
                <TouchableOpacity onPress={ () => console.log('retried') }>
                <View style={styles.retry}>
                  <Text style={styles.bName}>Retry</Text>
                </View>
                </TouchableOpacity>
              </View>
          </View>
        </View>
    );
  }
    return null;
  }
}

const styles = StyleSheet.create({
  retry : {
    height: 30,
    width: 80,
    borderRadius: 30,
    borderColor: '#ffffff',
    borderWidth:1
  },
  bName : {
    color: '#ffffff',
    fontSize: 16,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
})