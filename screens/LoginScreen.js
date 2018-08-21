import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {FormLabel, FormInput, Button, Card} from 'react-native-elements'
import {Globals} from '../helpers/Globals'
import TextField from "react-native-material-textfield/src/components/field";

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            instanceUrl: '',
            username: '',
            password: '',
        };
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
                GLOBAL.access_token = obj.data.access_token;
                GLOBAL.refresh_token = obj.data.refresh_token;

                this.getLoggedInAccountDetails(obj.data).then((response) => response.json().then(data => ({
                    status: response.status,
                    ok: response.ok,
                    data: data
                }))).then((obj) => {
                    if (obj.status === 200 && obj.ok) {
                        GLOBAL.account_data = obj.data;

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
    };

    render() {
        return (
            <View>

                <Card>
                    <TextField label='Instance URL' value={this.state.instanceUrl}
                               onChangeText={(instanceUrl) => this.setState({instanceUrl})}/>
                    <TextField label='Username' value={this.state.username}
                               onChangeText={(username) => this.setState({username})}/>
                    <TextField label='Password' value={this.state.password}
                               onChangeText={(password) => this.setState({password})}/>
                </Card>

                <Button
                    title='Login'
                    size={10}
                    buttonStyle={{
                        backgroundColor: "green",
                        borderColor: "transparent",
                        width: 100,
                        borderWidth: 0,
                        borderRadius: 5,
                        float: 'right',
                        marginTop: 20,
                        marginBottom: 20
                    }}
                    onPress={this.login}
                    containerStyle={{marginTop: 20, alignItems: 'center', flex: 1}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});

export default LoginScreen;