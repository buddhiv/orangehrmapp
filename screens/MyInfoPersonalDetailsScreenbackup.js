import React from 'react'
import {StyleSheet, View, ScrollView, Alert} from 'react-native';
import {Card, Button, Text} from 'react-native-elements';
import {TextField} from 'react-native-material-textfield';
import {Dropdown} from 'react-native-material-dropdown';
import Globals from "../helpers/Globals";
import conditionalRender from '../components/ConditionalRenderComponent';

class MyInfoPersonalDetailsScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Personal Details'
    });

    constructor(props) {
        super(props);

        const {navigation} = this.props;

        this.state = {
            loaded: false,
            first_name: 'aa',
            middle_name: 'bb',
            last_name: 'cc'
        };
    }

    async componentWillMount() {
        // fetch('https://ohrm644tagmobilebuddhi-test-infinity.orangehrm.com/api/employees/' + GLOBAL.account_data.account.emp_number, {
        //     method: 'GET',
        //     headers: new Headers({
        //         'Authorization': 'Bearer ' + GLOBAL.access_token,
        //         'Content-Type': 'application/json'
        //     })
        // }).then((response) => response.json().then(data => ({
        //     status: response.status,
        //     ok: response.ok,
        //     data: data
        // }))).then((obj) => {
        //     if (obj.status === 200 && obj.ok) {
        //         console.log(obj.data);
        //         console.log('buddhi');
        //
        //         this.state.first_name = obj.data.firstName;
        //         this.state.middle_name = obj.data.middleName;
        //         this.state.last_name = obj.data.lastName;
        //
        //         this.state.loaded = true;
        //     }
        // }).catch((error) => {
        //     console.log(error);
        //     Alert.alert('Error Connecting to the Service');
        // });

        let responseJson = await this.fetchData().done();
        console.log(responseJson);

        console.log('componentWillMount finished');
    }

    fetchData = async () => {
        const response = await fetch('https://ohrm644tagmobilebuddhi-test-infinity.orangehrm.com/api/employees/' + GLOBAL.account_data.account.emp_number, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + GLOBAL.access_token,
                'Content-Type': 'application/json'
            })
        });

        return await response.json();
    };

    render() {
        let view;
        console.log('in render');


        if (this.state.loaded) {
            // view = <ScrollView>
            //     <Card>
            //         <TextField label='First Name' value={this.state.first_name}
            //                    onChangeText={(first_name) => this.setState({first_name})}/>
            //         <TextField label='Middle Name' value={this.state.middle_name}
            //                    onChangeText={(middle_name) => this.setState({middle_name})}/>
            //         <TextField label='Last Name' value={this.state.last_name}
            //                    onChangeText={(last_name) => this.setState({last_name})}/>
            //     </Card>
            //
            //     <Button
            //         title='SAVE'
            //         size={10}
            //         buttonStyle={{
            //             backgroundColor: "green",
            //             borderColor: "transparent",
            //             width: 100,
            //             borderWidth: 0,
            //             borderRadius: 5,
            //             float: 'right',
            //             marginTop: 20
            //         }}
            //         containerStyle={{marginTop: 20, alignItems: 'right'}}
            //     />
            // </ScrollView>;
            view = <Text>Vikasitha</Text>
        } else {
            view = <Text>Buddhi</Text>
        }

        return (
            view
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

export default MyInfoPersonalDetailsScreen;