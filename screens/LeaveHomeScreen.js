import React from 'react'
import {StyleSheet, ScrollView} from 'react-native';
import {List, ListItem} from 'react-native-elements';

class LeaveHomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Leave'
    });

    constructor(props) {
        super(props);
        console.log('hello');

        const {navigation} = this.props;
        this.state = {
            access_token: navigation.getParam('access_token', ''),
            refresh_token: navigation.getParam('refresh_token', '')
        }
    }

    render() {
        return (
            <ScrollView>
                <List>
                    <ListItem key="apply_leave" title="Apply Leave" onPress={this.goToApplyLeave}/>
                    <ListItem key="my_leave_list" title="My Leave List"/>
                </List>
            </ScrollView>
        )
    }

    goToApplyLeave = () => {
        console.log('apply leave navigate');
        this.props.navigation.navigate('ApplyLeave', {
            title: 'Apply Leave',
            access_token: this.state.access_token,
            refresh_token: this.state.refresh_token
        })
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