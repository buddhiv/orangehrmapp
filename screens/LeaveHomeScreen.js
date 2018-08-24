import React from 'react'
import {StyleSheet, ScrollView} from 'react-native';
import {Card, List, ListItem, Text} from 'react-native-elements';

class LeaveHomeScreen extends React.Component {
    constructor(props) {
        super(props);

        const {navigation} = this.props;

    }

    render() {
        return (
            <ScrollView>
                <Card>
                    <Text>Leave Home</Text>
                </Card>
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

export default LeaveHomeScreen;