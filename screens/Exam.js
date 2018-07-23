import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { examData } from '../api/examData';
import { images } from '../api/images';
import ImageCarousel from '../components/ImageCarousel';
import InfoAccordion from '../components/InfoAccordion';
import InfoTab from '../components/InfoTab';



export default class Exam extends React.Component {

    static navigationOptions = ({navigation}) => (
		{
      title: `${navigation.state.params ? navigation.state.params.data.title : 'Exam'}`,
			headerTintColor: '#ffffff',
			headerStyle: {
				backgroundColor: '#00539d',
				borderBottomColor: '#ffffff',
			},
			headerTitleStyle: {
				fontSize: 18,
			},
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