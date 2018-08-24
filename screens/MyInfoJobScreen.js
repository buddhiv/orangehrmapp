import React from 'react'
import {ActivityIndicator, Modal, ScrollView, StyleSheet, View} from 'react-native';
import {Card, Button, Text} from 'react-native-elements';
import TextField from "react-native-material-textfield/src/components/field";
import {Calendar} from "react-native-calendars";

class MyInfoJobScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Job'
    });

    constructor(props) {
        super(props);

        this.state = {
            loaded: true,
            joined_date: '',
            probation_end_date: '',
            date_of_permanency: '',
            job_title: '',
            employment_status: '',
            job_category: '',
            sub_unit: '',
            location: '',
            work_shift: '',
            creditable_service: '',
            comments: '',
        };


    }

    render() {
        let view;

        if (this.state.loaded) {
            view = <ScrollView>
                <Card>
                    <TextField label='Joined Date' value={this.state.first_name} tintColor={"#f88400"}
                               onChangeText={(first_name) => this.setState({first_name})}/>
                    <TextField label='Probation End Date' value={this.state.middle_name} tintColor={"#f88400"}
                               onChangeText={(middle_name) => this.setState({middle_name})}/>
                    <TextField label='Date of Permanency' value={this.state.last_name} tintColor={"#f88400"}
                               onChangeText={(last_name) => this.setState({last_name})}/>
                    <TextField label='Job Title' value={this.state.employee_id} tintColor={"#f88400"}
                               onChangeText={(employee_id) => this.setState({employee_id})}/>
                    <TextField label='Employment Status' value={this.state.other_id} tintColor={"#f88400"}
                               onChangeText={(other_id) => this.setState({other_id})}/>
                    <TextField label='Job Category' value={this.state.main_id} tintColor={"#f88400"}
                               onChangeText={(main_id) => this.setState({main_id})}/>
                    <TextField label='Sub Unit' value={this.state.date_of_birth} tintColor={"#f88400"}
                               onChangeText={(date_of_birth) => this.setState({date_of_birth})}
                               onFocus={this.setModalVisible}/>
                    <TextField label='Location' value={this.state.first_name} tintColor={"#f88400"}
                               onChangeText={(first_name) => this.setState({first_name})}/>
                    <TextField label='Work Shift' value={this.state.first_name} tintColor={"#f88400"}
                               onChangeText={(first_name) => this.setState({first_name})}/>
                    <TextField label='Creditable Service' value={this.state.first_name} tintColor={"#f88400"}
                               onChangeText={(first_name) => this.setState({first_name})}/>

                </Card>

                <Button
                    title='SAVE'
                    size={10}
                    buttonStyle={{
                        backgroundColor: "#00c65d",
                        borderColor: "transparent",
                        width: 100,
                        borderWidth: 0,
                        borderRadius: 5,
                        float: 'right',
                        marginTop: 20,
                        marginBottom: 20
                    }}
                    containerStyle={{marginTop: 20, alignItems: 'right'}}
                    onPress={this.savePersonalDetails}
                />
            </ScrollView>;
        } else {
            view = <ActivityIndicator size="large" color="#f88400"/>
        }

        return (
            view
        )
    }
}

const styles = StyleSheet.create({
    card_info: {
        flex: 1,
        height: 10
    },
    card_leave: {
        flex: 2,
        height: 30
    }
});

export default MyInfoJobScreen;