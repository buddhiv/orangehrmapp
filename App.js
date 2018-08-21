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

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>buddhi</Text>
            </View>
        )
    }
}

export const myInfoTabNavigator = createTabNavigator({
    PersonalDetails: {
        screen: MyInfoPersonalDetailsScreen
    },
    Job: {
        screen: MyInfoJobScreen
    },
    Salary: {
        screen: MyInfoSalaryScreen
    },
    ContactDetails: {
        screen: MyInfoContactDetailsScreen
    },
    SocialMediaDetails: {
        screen: MyInfoSocialMediaDetailsScreen
    }
}, {
    tabBarOptions: {
        scrollEnabled: true,
        style: {
            backgroundColor: '#f88400',
        }
    }
});

export const drawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: DashboardScreen,
    },
    MyInfo: {
        screen: myInfoTabNavigator,
    },
    Time: {
        screen: TimeHomeScreen,
    },
    News: {
        screen: NewsScreen,
    }
}, {
    contentComponent: (props) => (
        <View>
            <ProfilePictureComponent/>
            <DrawerItems {...props} />
            <OrangeHRMFooterComponent/>
        </View>
    ),
    initialRouteName: "Dashboard"
});

export const stackNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    Dashboard: {
        screen: drawerNavigator
    }
}, {
    initialRouteName: "Login",
});

export default stackNavigator;