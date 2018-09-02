import { Accordion, Container, Content } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { DrawerActions, NavigationActions } from 'react-navigation';


export default class InfoAccordion extends Component {
*
    render() {
        const { data } = this.props;

        return(
            <View style={s.container}>
            <Container>
                <Content padder>
                    <Accordion
                        dataArray={this.props.data}
                        expanded={0}
                        expandedIcon="close"
                        renderContent={this._renderContent}
                        headerStyle={{ backgroundColor: "#9FB8CC" }}
                        expandedIconStyle={{ color: "#FFBC01" }}
                    />
                </Content>
            </Container>
            </View>
        )
    }

    colorText() {
      this.setState({
        textColored: true
      })
    }

    resetText() {
      this.setState({
        textColored: false
      })
    }

    _renderContent(content) {
        console.log('ACC=', JSON.stringify(content, null, 2));
        return (
            <View>
                <View>{content.subjects &&
                    content.subjects.map(subj =>
                      <Text style={s.subject} onPress={() => console.log('navigate to StudyMaterialContent.js')}>{subj}</Text>
                     )}
                </View>
            </View>
        )
    }
}


const s = StyleSheet.create({
    container: {

    },
    subject: {
        color: '#B1B5B8',
        marginVertical: 4,
        marginHorizontal: 4
    }
  });
