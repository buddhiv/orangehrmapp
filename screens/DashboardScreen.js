import React from 'react'
import {StyleSheet, View, ScrollView, TouchableOpacity, Alert} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {Card, CardTitle, CardContent, CardAction, CardButton, CardImage} from 'react-native-cards';
import {createDrawerNavigator, createStackNavigator, createTabNavigator, DrawerItems} from "react-navigation";
import Globals from "../helpers/Globals";
import MyInfoPersonalDetailsScreen from "./MyInfoPersonalDetailsScreen";
import MyInfoJobScreen from "./MyInfoJobScreen";
import MyInfoSalaryScreen from "./MyInfoSalaryScreen";
import TimeHomeScreen from "./TimeHomeScreen";
import NewsScreen from "./NewsScreen";
import ProfilePictureComponent from "../components/ProfilePictureComponent";
import OrangeHRMFooterComponent from "../components/OrangeHRMFooterComponent";

class DashboardScreen extends React.Component {

    static navigationOptions = {
        title: 'Dashboard',
    };

    constructor(props) {
        super(props);

        const {navigation} = this.props;
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