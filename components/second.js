import React from "react";
import AcademicStudies from "./academicStudies";
import {View, Alert} from "react-native";
import ExamDetails from "./ExamDetails";
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
                    (this.state.pageType == "ExamDetails") ? <ExamDetails setView={this.setView}/>
                        : <AcademicStudies setView={this.setView}/>
                }
            </View>
        );
    }


}
