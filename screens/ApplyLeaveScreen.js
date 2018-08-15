import React from 'react'
import {StyleSheet, ScrollView, Picker, Alert} from 'react-native';
import {Button, FormInput, FormLabel} from 'react-native-elements';

class ApplyLeaveScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Apply Leave'
    });

    constructor(props) {
        super(props);
        console.log('apply leave');

        const {navigation} = this.props;

        this.state = {
            employee: '',
            leave_type: '',
            from: '',
            to: '',
            comment: '',
            employees: [],
            leave_types: [],
            access_token: navigation.getParam('access_token', ''),
            refresh_token: navigation.getParam('refresh_token', '')
        };

        // var URLS = [{
        //     key: 'employees',
        //     address: 'https://645continuous-prod-infinity.orangehrm.com/api/employees'
        // }, {
        //     key: 'leave_types',
        //     address: 'https://645continuous-prod-infinity.orangehrm.com/api/leave/types'
        // }];
        //
        // return Promise.all(
        //     URLS.map(url =>
        //         fetch(url.address, {
        //             method: 'GET',
        //             headers: new Headers({
        //                 'Authorization': 'Bearer ' + this.state.access_token,
        //                 'Content-Type': 'application/x-www-form-urlencoded'
        //             }),
        //             data: JSON.stringify([])
        //         }).then(response => response.json())
        //             .then(responseData => {
        //                 var k = url.key;
        //                 this.setState({
        //                     k: responseData
        //                 });
        //             })
        //             .catch(err => /* handle errors here */ console.error(err))
        //     )
        // );

        fetch('https://645continuous-prod-infinity.orangehrm.com/api/employees', {
            // fetch('https://eagle644:9071/api/employees', {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + this.state.access_token,
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            data: JSON.stringify([])
        }).then((response) => response.json())
            .then((responseJson) => {

                console.log(responseJson);
                this.state.employees = responseJson.data;

            }).catch((error) => {

            console.log(error);

            Alert.alert('Invalid information');
        });

        console.log('buddhi');
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <FormLabel autoFocus={true}>Employee</FormLabel>
                <Picker
                    selectedValue={this.state.employee}
                    style={{height: 50, width: 300, marginLeft: 10, flex: 1}}
                    onValueChange={(itemValue, itemIndex) => this.setState({employee: itemValue})}>
                    <Picker.Item label="Employee 1" value="1"/>
                    <Picker.Item label="Employee 2" value="2"/>
                    <Picker.Item label="Employee 3" value="3"/>
                    <Picker.Item label="Employee 4" value="4"/>
                    <Picker.Item label="Employee 5" value="5"/>
                </Picker>

                <FormLabel autoFocus={true}>Leave Type</FormLabel>
                <Picker
                    selectedValue={this.state.leave_type}
                    style={{height: 50, width: 300, marginLeft: 10, flex: 1}}
                    onValueChange={(itemValue, itemIndex) => this.setState({leave_type: itemValue})}>
                    <Picker.Item label="Leave Type 1" value="1"/>
                    <Picker.Item label="Leave Type 2" value="2"/>
                    <Picker.Item label="Leave Type 3" value="3"/>
                    <Picker.Item label="Leave Type 4" value="4"/>
                </Picker>

                <FormLabel autoFocus={true}>From</FormLabel>


                <FormLabel autoFocus={true}>To</FormLabel>

                <FormLabel autoFocus={true}>Comment</FormLabel>
                <FormInput onChangeText={(comment) => this.setState({comment})}/>

                <Button small icon={{name: 'av-timer', type: 'material-community'}} title='Apply Leave'
                        onPress={this.applyLeave}/>
            </ScrollView>
        )
    }


    applyLeave = () => {
        console.log('Apply Leave');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    }
});

export default ApplyLeaveScreen;