import React from 'react'
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {Card, CardTitle, CardContent, CardAction, CardButton, CardImage} from 'react-native-cards';
import {createStackNavigator} from "react-navigation";

import MyInfoScreen from './MyInfoScreen'

class DashboardScreen extends React.Component {

    constructor(props) {
        super(props);

        const {navigation} = this.props;
        this.state = {
            access_token: navigation.getParam('access_token', ''),
            refresh_token: navigation.getParam('refresh_token', '')
        }

    }

    render() {
        return (
            <ScrollView>
                <TouchableOpacity onPress={this.goToMyInfo}>
                    <Card>
                        <CardImage
                            source={{uri: 'http://bit.ly/2GfzooV'}}
                            title="My Info"/>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToLeave}>
                    <Card>
                        <CardImage
                            source={{uri: 'http://bit.ly/2GfzooV'}}
                            title="Leave"/>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToTime}>
                    <Card>
                        <CardImage
                            source={{uri: 'http://bit.ly/2GfzooV'}}
                            title="Time"/>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToNews}>
                    <Card>
                        <CardImage
                            source={{uri: 'http://bit.ly/2GfzooV'}}
                            title="News"/>
                    </Card>
                </TouchableOpacity>

            </ScrollView>
        )
    }

    goToMyInfo = () => {
        console.log('my info navigate');
        this.props.navigation.navigate('MyInfo', {
            title: 'My Info',
            access_token: this.state.access_token,
            refresh_token: this.state.refresh_token
        })
    };

    goToLeave = () => {
        console.log('leave navigate');
        this.props.navigation.navigate('LeaveHome', {
            title: 'Leave',
            access_token: this.state.access_token,
            refresh_token: this.state.refresh_token
        })
    };

    goToTime = () => {
        console.log('time navigate');
        this.props.navigation.navigate('TimeHome', {
            title: 'Time',
            access_token: this.state.access_token,
            refresh_token: this.state.refresh_token
        })
    };

    goToNews = () => {
        console.log('news navigate');
        this.props.navigation.navigate('News', {
            title: 'News',
            access_token: this.state.access_token,
            refresh_token: this.state.refresh_token
        })
    };
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 150
    }
});

export default DashboardScreen;