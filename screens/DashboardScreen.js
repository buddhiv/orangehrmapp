import React from 'react'
import {StyleSheet, View, ScrollView, TouchableOpacity, Alert} from 'react-native';
import {Button, Text, Card} from 'react-native-elements';

import {
    createDrawerNavigator,
    createStackNavigator,
    createTabNavigator,
    DrawerItems,
    Navigation
} from "react-navigation";
import Globals from "../helpers/Globals";
import MyInfoPersonalDetailsScreen from "./MyInfoPersonalDetailsScreen";
import MyInfoJobScreen from "./MyInfoJobScreen";
import MyInfoSalaryScreen from "./MyInfoSalaryScreen";
import TimeHomeScreen from "./TimeHomeScreen";
import NewsScreen from "./NewsScreen";
import ProfilePictureComponent from "../components/ProfilePictureComponent";
import OrangeHRMFooterComponent from "../components/OrangeHRMFooterComponent";
import LeaveHomeScreen from "./LeaveHomeScreen";
import MyInfoContactDetailsScreen from "./MyInfoContactDetailsScreen";
import MyInfoSocialMediaDetailsScreen from "./MyInfoSocialMediaDetailsScreen";
import LogoComponent from "../components/LogoComponent";

class DashboardScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <Card>
                    <Text>Dashboard Screen</Text>
                </Card>
            </ScrollView>
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