import React from 'react'
import {StyleSheet, View, ScrollView, TouchableOpacity, Alert} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {Card, CardTitle, CardContent, CardAction, CardButton, CardImage} from 'react-native-cards';
import {createStackNavigator} from "react-navigation";

class DashboardScreen extends React.Component {

    constructor(props) {
        super(props);

        const {navigation} = this.props;
        this.state = {
            access_token: navigation.getParam('access_token', ''),
            refresh_token: navigation.getParam('refresh_token', ''),
            account_data: navigation.getParam('account_data', '')
        };

        if (this.state.account_data.account.emp_number == null) {
            // this.props.navigation.setParams({
            //
            // });
        }
    }

    render() {
        return (
            <View>
                <Text>Dashboard</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 150
    }
});

export default DashboardScreen;