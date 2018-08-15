import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native';
import {Card, Button, Text, List, ListItem} from 'react-native-elements';

class TimeHomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Time'
    });

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <List>
                    <ListItem key="my_attendance" title="My Attendance"/>
                    <ListItem key="my_timesheets" title="My Timesheets"/>
                    <ListItem key="punch_in" title="Punch In"/>
                </List>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    card_info: {
        flex: 1,
        height: 10
    },
    card_leave: {
        flex: 2,
        height: 30
    }
});

export default TimeHomeScreen;