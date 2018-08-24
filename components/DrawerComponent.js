import React from "react";
import {View, Text, ScrollView} from 'react-native';
import {Avatar, Card} from "react-native-elements";
import {createDrawerNavigator, createTabNavigator, DrawerItems} from "react-navigation";
import MyInfoPersonalDetailsScreen from "../screens/MyInfoPersonalDetailsScreen";
import MyInfoJobScreen from "../screens/MyInfoJobScreen";
import MyInfoSalaryScreen from "../screens/MyInfoSalaryScreen";
import MyInfoContactDetailsScreen from "../screens/MyInfoContactDetailsScreen";
import MyInfoSocialMediaDetailsScreen from "../screens/MyInfoSocialMediaDetailsScreen";
import TimeHomeScreen from "../screens/TimeHomeScreen";
import LeaveHomeScreen from "../screens/LeaveHomeScreen";
import NewsScreen from "../screens/NewsScreen";
import ProfilePictureComponent from "./ProfilePictureComponent";
import OrangeHRMFooterComponent from "./OrangeHRMFooterComponent";
import DashboardScreen from "../screens/DashboardScreen";

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
            header: 'This is the dash'
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

export default drawerNavigator;