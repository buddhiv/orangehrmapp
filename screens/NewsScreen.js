import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native';
import {Card, Button, Text, List, ListItem} from 'react-native-elements';

class NewsScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'News'
    });

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>news</Text>
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

export default NewsScreen;