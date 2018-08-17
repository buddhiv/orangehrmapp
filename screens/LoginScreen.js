import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {FormLabel, FormInput, Button} from 'react-native-elements'
import {Globals} from '../helpers/Globals'

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
        var formData = new FormData();
        formData.append('grant_type', 'password');
        formData.append('client_id', 'public_rest_api_client');
        formData.append('username', 'abbie');
        formData.append('password', 'admin@OHRM123');

        // fetch('https://' + this.state.instanceUrl + '/oauth/issueToken', {
        fetch('https://ohrm644tagmobilebuddhi-test-infinity.orangehrm.com/oauth/issueToken', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        }).then((response) => response.json().then(data => ({
            status: response.status,
            ok: response.ok,
            data: data
        }))).then((obj) => {
            if (obj.status === 200 && obj.ok) {
                this.getLoggedInAccountDetails(obj.data).then((response) => response.json().then(data => ({
                    status: response.status,
                    ok: response.ok,
                    data: data
                }))).then((obj) => {
                    if (obj.status === 200 && obj.ok) {
                        Globals.prototype.access_token = obj.data.token.access_token;
                        Globals.prototype.refresh_token = obj.data.token.refresh_token;
                        Globals.prototype.access_data = obj.data;
                        
                        this.props.navigation.navigate('Dashboard', {
                            title: 'Dashboard'
                        })
                    }
                }).catch(() => {
                    console.log(error);
                    Alert.alert('Error Connecting to the Service');
                });
            }
        }).catch((error) => {
            console.log(error);
            Alert.alert('Invalid information');
        });
    };

    getLoggedInAccountDetails = (access_info) => {
        return fetch('https://ohrm644tagmobilebuddhi-test-infinity.orangehrm.com/api/getLoggedInAccount', {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + access_info.access_token,
                'Content-Type': 'application/json'
            })
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default LoginScreen;