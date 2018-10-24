import React, {Component} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import CartIcon from 'react-native-vector-icons/EvilIcons';
import NewIcon from 'react-native-vector-icons/MaterialIcons';
import BulbIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Col, Row, Grid } from "react-native-easy-grid";


export default class ExploreSakshi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({navigation}) => (
  {
    title: 'Explore Sakshi',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#00539d',
      borderBottomColor: '#ffffff',
    },
    headerTitleStyle: {
      fontSize: 22,
    }
  }
  );

  render() {
    console.log(this.props);
    return (
      <ScrollView style={{backgroundColor: '#E8F3F7'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop:10}}>

          <View style={{width: '47%', height: 200, backgroundColor: '#ffffff'}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('AcademicStudies')}>
          <View>
            <Text style={{color: '#952EB0', fontWeight: 'bold', fontSize: 24, marginLeft:10, marginTop:10}}>
              Academic{'\n'}
              <Text style={{color: '#952EB0', fontWeight: 'bold', fontSize: 24}}>
              Studies
              </Text>
            </Text>
            <View style={{marginLeft:10}}>
            <Text style={{color: '#57B768', fontSize: 12}}>STUDY MATERIAL</Text>
            <Text style={{color: '#57B768', fontSize: 12}}>PREVIOUS PAPERS</Text>
            <Text style={{color: '#57B768', fontSize: 12}}>ONLINE TEST</Text>
            <Text style={{color: '#57B768', fontSize: 12}}>CAREER GUIDANCE</Text>
            </View>
            <View style={{ marginLeft: 90}}>
            <Icon name='graduation-cap' size={70} color='#F5C7FB'/>
            </View>
          </View>
          </TouchableOpacity>
          </View>
          <View style={{width: '2%'}} />

          <View style={{width: '47%', height: 200, backgroundColor: '#ffffff'}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Competitive') }>
              <View>
              <View style={{ marginTop:10, marginLeft: 90}}>
              <NewIcon name='computer' size={70} color='#B5ECFE'/>
              </View>
              <Text style={{color: '#24BBF2', fontWeight: 'bold', fontSize: 24, marginLeft: 10}}>
                Competitive{'\n'}
                <Text style={{color: '#24BBF2', fontWeight: 'bold', fontSize: 24}}>
                Exams
                </Text>
              </Text>
              <View style={{marginLeft:10}}>
              <Text style={{color: '#E67F66', fontSize: 12}}>STUDY MATERIAL</Text>
              <Text style={{color: '#E67F66', fontSize: 12}}>PREVIOUS PAPERS</Text>
              <Text style={{color: '#E67F66', fontSize: 12}}>ONLINE TEST</Text>
              <Text style={{color: '#E67F66', fontSize: 12}}>CAREER GUIDANCE</Text>
              </View>
              </View>
              </TouchableOpacity>
          </View>
          </View>
          <View style={{height: 6}} />

          <View style={{flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto'}}>
            <View style={{ width: '48%'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('OnlineTests')}>

            <View style={{ height: 210, backgroundColor: '#ffffff'}}>
                <Text style={{marginLeft:10, marginTop:10, color: '#F06F33', fontSize: 24, fontWeight: 'bold'}}>Online Tests</Text>
                <Text style={{marginLeft:10, color:'#367195', fontSize: 16, fontWeight: 'bold'}}>
                Academic Studies{'\n'}
                <Text>
                &Competitive Exams
                </Text>
                </Text>
                <Text style={{marginLeft: 10,marginTop:10, color: '#AFBFC7'}}>
                It contains 2012 Previous Paper Prepared by eminent faculty and experts.Solution and explanation for all questions
                </Text>
                <View style={{marginLeft:100, marginTop: -10}}>
                <View style={{width: 50, height: 50, borderRadius: 25, borderWidth: 3, borderColor: '#8EFACB', position: 'absolute', top:0, left: 0}}>
                  <View style={{width: 36, height: 36, borderRadius: 18, borderWidth: 3, borderColor: '#8EFACB', marginTop:'auto',marginBottom:'auto',marginLeft:'auto',marginRight:'auto'}}>
                    <View style={{width: 20, height: 20, borderRadius: 10,backgroundColor: '#F6B6A0', marginTop:'auto',marginBottom:'auto',marginLeft:'auto',marginRight:'auto'}}>
                    </View>
                  </View>
                </View>
                <Icon name='mouse-pointer' color='#8EFACB' size={40} style={{position: 'absolute', top:22, left: 16}}/>
                </View>
            </View>
            </TouchableOpacity>

            <View style={{height:6}} />

            <TouchableOpacity onPress={ () => console.log('Updates') }>

            <View style={{height: 130, backgroundColor: '#ffffff'}}>

                <Text style={{textAlign: 'right', marginTop:10, marginRight: 10, color: '#F1B323', fontSize: 24}}>Updates</Text>
                <Text style={{textAlign: 'right', color:'#60AED4', marginRight: 10,}}>ACADEMIC STUDIES</Text>
                <Text style={{textAlign: 'right', color:'#60AED4', marginRight: 10,}}>COMPETITIVE EXAMS</Text>
                <Text style={{textAlign: 'right', color:'#60AED4', marginRight: 10,}}>RESULTS</Text>
                <Text style={{textAlign: 'right', color:'#60AED4', marginRight: 10,}}>JOBS</Text>
                <Text style={{textAlign: 'right', color:'#60AED4', marginRight: 10,}}>OTHER UPDATES</Text>
                <NewIcon name='update' color='#e098a2' size={60} style={{marginTop: -50}}/>
            </View>
            </TouchableOpacity>

            </View>
            <View style={{width: '2%'}} />

            <View style={{width: '46%', height: 346, backgroundColor: '#ffffff'}}>

                <CartIcon name='cart' color='#8DFB8C' size={70} style={{ marginTop: 10}}/>
                <Text style={{marginLeft: 10, color: '#A3185B', fontSize: 24, fontWeight: 'bold'}}>eStore</Text>
                <Text style={{marginLeft: 10, color: '#289332', fontSize: 16, fontWeight: 'bold'}}>
                Study Material & Tests{'\n'}
                <Text>
                Online Tests
                </Text>
                </Text>
                <View style={{marginTop:20, marginLeft:10}}>
                <Text style={{color: '#62A2D5'}}>
                Buy our test module online{'\n'}
                <Text>
                We have wide range of{'\n'}
                <Text>collections of test papers</Text>
                </Text>
                </Text>
                </View>
                <View style={{marginTop:30, flex:1}}>
                      <View style={{flex:70, backgroundColor: '#FEAA24'}}>
                        <View style={{marginTop: 'auto',marginBottom: 'auto'}}>
                          <Text style={{marginLeft: 'auto',marginRight: 'auto', color: '#ffffff', fontSize: 20, fontWeight: 'bold'}}>
                          Repulic Day Sale
                          </Text>
                          <Text style={{marginLeft: 'auto',marginRight: 'auto', color: '#ffffff', fontWeight: 'bold'}}>
                          Freedom Offer
                          </Text>
                        </View>
                      </View>
                    <View style={{flex:30, backgroundColor: '#008238'}}>
                      <View style={{marginTop: 'auto',marginBottom: 'auto'}}>
                        <Text style={{marginLeft: 'auto',marginRight: 'auto', color: '#ffffff', fontSize:10}}>
                        Upto 60% Off on Study Material & Tests
                        </Text>
                      </View>
                    </View>
                </View>
            </View>
          </View>
          <View style={{height:6}}/>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('OnlineTests')}>
          <View style={{width:'96%', height:140, backgroundColor: '#ffffff', marginLeft: 'auto', marginRight: 'auto'}}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <View>
              <Text style={{color: '#952EB0', fontWeight: 'bold', fontSize: 28, marginLeft:10, marginTop:10}}>Knowledge</Text>
              <Text style={{color: '#952EB0',fontSize:28, marginLeft:10}}>Centre</Text>
              </View>
              <View style={{marginRight:10, marginTop:10}}>
                <Image source={require('../bulb.png')} />
              </View>
              </View>
              <View>
              <Text style={{color: '#7d98a0',fontSize:16, marginLeft:10}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
              </View>
          </View>
          </TouchableOpacity>

          <View style={{height:6}} />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('OnlineTests')}>
          <View style={{width: '96%', height: 120, backgroundColor: '#ffffff', marginLeft: 'auto', marginRight: 'auto'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{marginLeft:10, marginTop:10}}>
              <Image source={require('../star.png')} />
              </View>
              <Text style={{fontSize:24, fontWeight: 'bold', color: '#29D58D', textAlign: 'right', marginTop: 10, marginRight: 10}}>
              Popular Exams
              </Text>
            </View>
            <View>
            <Text style={{color: '#7d98a0',fontSize:16, marginLeft:10}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </View>
          </View>
          </TouchableOpacity>

          <View style={{height:6}}/>
          <View style={{width: '96%', height: 80, backgroundColor: '#ffffff', marginLeft: 'auto', marginRight: 'auto'}}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
              <View style={{width: '23.25%'}}>
                <Text style={styles.bottomText}>JEE</Text>
              </View>
              <View style={{width: '1%',height:80, backgroundColor: '#E8F3F7'}} />
              <View style={{width: '23.25%'}}>
                <Text style={styles.bottomText}>EAMCET</Text>
              </View>
              <View style={{width: '1%',height:80, backgroundColor: '#E8F3F7'}} />
              <View style={{width: '23.25%'}}>
                <Text style={styles.bottomText}>NEET</Text>
              </View>
              <View style={{width: '1%',height:80, backgroundColor: '#E8F3F7'}} />
              <View style={{width: '23.25%'}}>
                <Text style={styles.bottomText}>GATE</Text>
              </View>
            </View>
          </View>
          <View style={{height:4}}/>
          <View style={{width: '96%', height: 80, backgroundColor: '#ffffff', marginLeft: 'auto', marginRight: 'auto'}}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
              <View style={{width: '23.25%'}}>
                <Text style={styles.bottomText}>SSC</Text>
              </View>
              <View style={{width: '1%',height:80, backgroundColor: '#E8F3F7'}} />
              <View style={{width: '23.25%'}}>
                <Text style={styles.bottomText}>RRB</Text>
              </View>
              <View style={{width: '1%',height:80, backgroundColor: '#E8F3F7'}} />
              <View style={{width: '23.25%'}}>
                <Text style={[styles.bottomText, {textAlign: 'center'}]}>POLICE CONSTABLE</Text>
              </View>
              <View style={{width: '1%',height:80, backgroundColor: '#E8F3F7'}} />
              <View style={{width: '23.25%'}}>
                <Text style={styles.bottomText}>CIVILS</Text>
              </View>
            </View>
          </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  bottomText: {
    fontSize: 14,
    color: '#F1B323',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto'
  }
});
