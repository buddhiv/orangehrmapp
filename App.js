import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {FormLabel, FormInput, Button} from 'react-native-elements'
import {createStackNavigator} from 'react-navigation'

import DashboardScreen from './screens/DashboardScreen'
import MyInfoScreen from "./screens/MyInfoScreen";
import LeaveHomeScreen from "./screens/LeaveHomeScreen";
import TimeHomeScreen from "./screens/TimeHomeScreen";
import NewsScreen from "./screens/NewsScreen";
import ApplyLeaveScreen from "./screens/ApplyLeaveScreen";

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            instanceUrl: '',
            username: '',
            password: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <FormLabel autoFocus={true}>Instance URL</FormLabel>
                <FormInput onChangeText={(instanceUrl) => this.setState({instanceUrl})}/>

                <FormLabel>Username</FormLabel>
                <FormInput onChangeText={(username) => this.setState({username})}/>

                <FormLabel>Password</FormLabel>
                <FormInput onChangeText={(password) => this.setState({password})} secureTextEntry={true}/>

                {/*<FormValidationMessage>Error message</FormValidationMessage>*/}
                <Button small icon={{name: 'login', type: 'material-community'}} title='Login' onPress={this.login}/>
            </View>
        );
    }

    login = () => {
        // fetch('https://' + this.state.instanceUrl + '/oauth/issueToken', {
        fetch('https://645continuous-prod-infinity.orangehrm.com/oauth/issueToken', {
            // fetch('https://eagle644:9071/oauth/issueToken', {
            method: 'POST',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                grant_type: 'password',
                client_id: 'public_rest_api_client',
                // username: this.state.username,
                // password: this.state.password
                username: 'admin',
                password: 'admin@OHRM123'
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);

                this.props.navigation.navigate('Dashboard', {
                    title: 'Dashboard',
                    access_token: responseJson.access_token,
                    refresh_token: responseJson.refresh_token
                })
            }).catch((error) => {
            console.log(error);
            Alert.alert('Invalid information');
        });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default createStackNavigator({
        Login: LoginScreen,
        Dashboard: DashboardScreen,
        MyInfo: MyInfoScreen,
        LeaveHome: LeaveHomeScreen,
        TimeHome: TimeHomeScreen,
        News: NewsScreen,
        ApplyLeave: ApplyLeaveScreen
    },
    {
        initialRouteName: 'Login',
    }
);
