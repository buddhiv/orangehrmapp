import React from 'react'
import {StyleSheet, View, ScrollView, Alert} from 'react-native';
import {Card, Button, Text} from 'react-native-elements';
import {TextField} from 'react-native-material-textfield';
import {Dropdown} from 'react-native-material-dropdown';

class MyInfoPersonalDetailsScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Personal Details'
    });

    constructor(props) {
        super(props);

        const {navigation} = this.props;
        this.state = {
            access_token: navigation.getParam('access_token', ''),
            refresh_token: navigation.getParam('refresh_token', ''),
            account_data: navigation.getParam('account_data', '')
        };

        fetch('https://ohrm644tagmobilebuddhi-test-infinity.orangehrm.com/api/employees' + this.state.account_data.account.emp_number, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + this.state.access_token,
                'Content-Type': 'application/json'
            })
        }).then((response) => response.json().then(data => ({
            status: response.status,
            ok: response.ok,
            data: data
        }))).then((obj) => {
            console.log(obj);
            if (obj.status === 200 && obj.ok) {
                console.log(obj.data);
            }
        }).catch((error) => {
            console.log(error);
            Alert.alert('Error Connecting to the Service');
        });
    }

    render() {
        return (
            <ScrollView>
                <Card>

                </Card>
            </ScrollView>
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

export default MyInfoPersonalDetailsScreen;