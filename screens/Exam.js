import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { examData } from '../api/examData';
import { images } from '../api/images';
import ImageCarousel from '../components/ImageCarousel';
import InfoAccordion from '../components/InfoAccordion';
import InfoTab from '../components/InfoTab';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class Exam extends React.Component {

    static navigationOptions = ({navigation}) => (
		{
      title: `${navigation.state.params ? navigation.state.params.data.title: 'Exam'}`,
      headerRight : null,
      headerLeft : <Icon name={'arrow-left'} size={18} color="#fff" style={{marginLeft : 10}} onPress={ () => { navigation.goBack() } }  />,
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#364C8B',
        borderBottomColor: '#ffffff',
      },
      headerTitleStyle: {
        fontSize: 18,
      }
		}
    );

    render() {
      return (
          <ScrollView>
            <SearchBar
              onChangeText={() => {}}
              onClearText={() => {}}
              lightTheme={true}
              inputStyle={{backgroundColor: 'white'}}
              placeholder='What are you looking for...' />
            <ImageCarousel images={images}/>
            <InfoTab />
            <InfoAccordion data={examData} />
          </ScrollView>
      );
    }
  }


  const s = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    updatesTab: {
        backgroundColor: 'green',
    }
  });
