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
        screen: MyInfoPersonalDetailsScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Personal Details',
        }),
    },
    Job: {
        screen: MyInfoJobScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Job',
        }),
    },
    Salary: {
        screen: MyInfoSalaryScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Salary',
        }),
    },
    ContactDetails: {
        screen: MyInfoContactDetailsScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Contact Details',
        }),
    },
    SocialMediaDetails: {
        screen: MyInfoSocialMediaDetailsScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Social Media Details',
        }),
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
        navigationOptions: ({navigation}) => ({
            title: 'Dashboard',
        }),
    },
    MyInfo: {
        screen: myInfoTabNavigator,
        navigationOptions: ({navigation}) => ({
            title: 'My Info',
        }),
    },
    Time: {
        screen: TimeHomeScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Time',
        }),
    },
    Leave: {
        screen: LeaveHomeScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Leave',
        }),
    },
    News: {
        screen: NewsScreen,
        navigationOptions: ({navigation}) => ({
            title: 'News',
        }),
    }
}, {
    contentComponent: (props) => (
        <View>
            <ProfilePictureComponent/>
            <DrawerItems {...props} />
            <OrangeHRMFooterComponent/>
        </View>
    ),
    initialRouteName: "Dashboard",
    contentOptions: {
        activeTintColor: '#f88400'
    }
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