import React from 'react'
import {StyleSheet, View} from 'react-native';
import {Card, Button, Text} from 'react-native-elements';

class MyInfoScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'My Info'
    });

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>My Info</Text>
            </View>
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

export default MyInfoScreen;