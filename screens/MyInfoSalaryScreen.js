import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native';
import {Card, Button, Text} from 'react-native-elements';

class MyInfoSalaryScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Salary'
    });

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <Card>
                    <Text>Salary Screen</Text>
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

export default MyInfoSalaryScreen;