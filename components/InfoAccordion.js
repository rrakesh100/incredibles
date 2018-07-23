import { Accordion, Container, Content } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class InfoAccordion extends Component {

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

                    />
                </Content>
            </Container>
            </View>
        )
    }

    _renderContent(content) {
        console.log('ACC=', JSON.stringify(content, null, 2));
        return (
            <View>
                <View>{content.subjects && 
                    content.subjects.map(subj => <Text style={s.subject}>{subj}</Text>)}
                </View>
            </View>
        )
    }
}

  
const s = StyleSheet.create({
    container: {

    },
    subject: {
        color: 'blue',
        marginVertical: 4,
        marginHorizontal: 4
    }
  });