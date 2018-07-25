import React from "react";
import AcademicStudies from "./academicStudies";
import { Container, Header, Content, Accordion, View, Text, Button } from "native-base"

let subjectList = [
    "Mathematics",
    "Physics",
    "Chemistry"
];

const dataArray = [
    { title: "Algebra", content: "Lorem ipsum dolor sit amet" },
    { title: "Coordinate Geometry", content: "Lorem ipsum dolor sit amet" },
    { title: "Trigonometry", content: "Lorem ipsum dolor sit amet" }
];

export default class AllSubjects extends React.Component {

    state : {
        selectedSubject : "mathematics"
    }

    _renderHeader(title, expanded) {
        return (
            <View
                style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#A9DAD6" }}
            >
                <Text style={{ fontWeight: 600 }}>
                    {" "}{title}
                </Text>
                {expanded
                    ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
                    : <Icon style={{ fontSize: 18 }} name="add-circle" />}
            </View>
        );
    }
    _renderContent(content) {
        return (

            <View style={{
                height : 600
            }}>
                <View style={{
                    height : 200,
                    display : "flex",
                    flexDirection : "row"
                }}>
                    <View style={{
                        width : "25%"
                    }}>
                        <Text>Study Material</Text>
                    </View>
                    <View style={{
                        width : "25%"
                    }}>
                        <Text>Online Test</Text>
                    </View>
                    <View style={{
                        width : "25%"
                    }}>
                        <Text>Career Guidance</Text>
                    </View>
                    <View style={{
                        width : "25%"
                    }}>
                        <Text>Comments</Text>
                    </View>
                </View>
                <View style={{
                    height : 400,
                    display : "flex",
                    flexDirection : "row"
                }}>
                    {
                        [...Array(5)].map((item, index) =>
                            <Text>
                                Functions
                            </Text>
                        )
                    }
                </View>

            </View>
        );
    }

    setView = () => {
        this.setState({
            pageType : "examDetails"
        });
    }

    render(){
        return (
            <View style={{
                height : "100%"
            }}>
                <View style={{
                    height : "10%",
                    display : "flex",
                    flexDirection : "row"
                }}>
                    {
                        subjectList.map((item, index) =>
                            <Button style={{
                                width : "30%",
                            }}
                            onPress={() => {
                                this.setState({
                                    selectedSubject : item.toLowerCase()
                                });
                            }}
                            >
                                { item }
                            </Button>
                        )
                    }
                </View>
                <View style={{
                    height : "10%",
                    display : "flex",
                    flexDirection : "column"
                }}>
                    <Container>
                        <Header />
                        <Content padder>
                            <Accordion
                                dataArray={dataArray}
                                renderHeader={this._renderHeader}
                                renderContent={this._renderContent}
                            />
                        </Content>
                    </Container>
                </View>
            </View>
        );
    }


}