import React from "react";
import AcademicStudies from "./academicStudies";
import {View, Alert} from "react-native";
import ExamDetails from "./examDetails";
import Exam from "../screens/Exam";
import AllSubject from "./allSubjects";

export default class SecondRoute extends React.Component {

    state = {
        pageType : "examList"
    }

    setView = (type) => {
        this.setState({
            pageType : type
        });
    }

    render(){
        return (
            <View>
                {
                    (this.state.pageType == "examDetails") ? <ExamDetails setView={this.setView}/>
                        : <AcademicStudies setView={this.setView}/>
                }
            </View>
        );
    }


}