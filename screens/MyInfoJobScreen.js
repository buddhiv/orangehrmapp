import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native';
import {Card, Button, Text} from 'react-native-elements';
import TextField from "react-native-material-textfield/src/components/field";

class MyInfoJobScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Job'
    });

    constructor(props) {
        super(props);

        this.state = {
            job_title: ''
        };


    }

    render() {
        return (
            <ScrollView>
                <Card>
                    <Text>Job Screen</Text>
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

export default MyInfoJobScreen;