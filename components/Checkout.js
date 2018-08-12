
import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import CartIcon from 'react-native-vector-icons/EvilIcons';
import { Button, Card, Icon } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

const sliderWidth = Dimensions.get('window').width;


export default class  Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribed : false,
      quantity : 1
    }
  }

  componentDidMount(){
    console.log(this.props);
  }
  render(){
    console.log(this.state);
    console.log('@@@', this.props);
    <Text>Hi</Text>
  }
}
