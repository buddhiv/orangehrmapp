import React from 'react'

import {StyleSheet, Text, View, Alert} from 'react-native';
import {createTabNavigator, createStackNavigator, createDrawerNavigator, DrawerItems} from 'react-navigation';

import DashboardScreen from "./screens/DashboardScreen";
import MyInfoPersonalDetailsScreen from "./screens/MyInfoPersonalDetailsScreen";
import NewsScreen from "./screens/NewsScreen";
import TimeHomeScreen from "./screens/TimeHomeScreen";
import ProfilePictureComponent from "./components/ProfilePictureComponent";
import OrangeHRMFooterComponent from "./components/OrangeHRMFooterComponent";
import LoginScreen from "./screens/LoginScreen";
import MyInfoJobScreen from "./screens/MyInfoJobScreen";
import MyInfoSalaryScreen from "./screens/MyInfoSalaryScreen";
import MyInfoContactDetailsScreen from "./screens/MyInfoContactDetailsScreen";
import MyInfoSocialMediaDetailsScreen from "./screens/MyInfoSocialMediaDetailsScreen";
import LeaveHomeScreen from "./screens/LeaveHomeScreen";
import drawerNavigator from "./components/DrawerComponent";


const StackNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    Dashboard: {
        screen: drawerNavigator
    }
}, {
    initialRouteName: "Login",
    // headerMode: 'none',
    // navigationOptions: {
    //     headerVisible: false,
    // }
});

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StackNavigator/>
        )
    }
}

export default App;