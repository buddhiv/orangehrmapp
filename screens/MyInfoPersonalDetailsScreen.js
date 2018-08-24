import React from 'react'
import {
    StyleSheet,
    View,
    ScrollView,
    Alert,
    ActivityIndicator,
    TouchableOpacity,
    Modal,
    TouchableHighlight
} from 'react-native';
import {Card, Button, Text} from 'react-native-elements';
import {TextField} from 'react-native-material-textfield';
import {Dropdown} from 'react-native-material-dropdown'
import {Calendar} from 'react-native-calendars';


class MyInfoPersonalDetailsScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;
    };

    constructor(props) {
        super(props);

        const {navigation} = this.props;

        this.state = {
            loaded: false,
            saveLoading: false,
            first_name: '',
            middle_name: '',
            last_name: '',
            employee_id: '',
            other_id: '',
            main_id: '',
            date_of_birth: '',
            modalVisible: false,
        };
    }

    async componentWillMount() {
        fetch('https://ohrm644mobiletestbuddhi-test-infinity.orangehrm.com/api/employees/' + GLOBAL.account_data.account.emp_number, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + GLOBAL.access_token,
                'Content-Type': 'application/json'
            })
        }).then((response) => response.json().then(data => ({
            status: response.status,
            ok: response.ok,
            data: data
        }))).then((obj) => {
            if (obj.status === 200 && obj.ok) {
                console.log(obj);

                this.setState({first_name: obj.data.data.firstName});
                this.setState({middle_name: obj.data.data.middleName});
                this.setState({last_name: obj.data.data.lastName});
                this.setState({employee_id: obj.data.data.employeeId});
                this.setState({other_id: obj.data.data.otherId});
                this.setState({main_id: obj.data.data.ssn});
                if (obj.data.data.emp_birthday == null) {
                    this.setState({date_of_birth: ''});
                }
                // this.setState({marital_status: obj.data.data.emp_marital_status});
                // this.setState({gender: obj.data.data.emp_gender});

                this.setState({loaded: true});
            }
        }).catch((error) => {
            console.log(error);
            Alert.alert('Error Connecting to the Service');
        });
    }

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    };

    onDayPress = (day) => {
        this.setModalVisible(false);
        this.setState({date_of_birth: day.dateString});
    };

    savePersonalDetails = () => {
        let employee = {};

        this.setState({loaded: false});

        let jsonData = JSON.stringify({
            "firstName": this.state.first_name,
            "middleName": this.state.middle_name,
            "lastName": this.state.last_name,
            "otherId": this.state.other_id,
        });

        fetch('https://ohrm644mobiletestbuddhi-test-infinity.orangehrm.com/api/employees/' + GLOBAL.account_data.account.emp_number, {
            method: 'patch',
            headers: {
                'Authorization': 'Bearer ' + GLOBAL.access_token,
                'Content-Type': 'application/json',
                'content-length': jsonData.length
            },
            body: jsonData
        }).then((response) => response.json().then(data => ({
            status: response.status,
            ok: response.ok,
            data: data
        }))).then((obj) => {
            console.log(obj);
            if (obj.status === 200 && obj.ok) {
                this.setState({loaded: true});
            }
        }).catch((error) => {
            console.log(error);
            Alert.alert('Error Connecting to the Service');
        });
    };

    render() {
        let view;

        if (this.state.loaded) {
            view = <ScrollView>
                <Card>
                    <TextField label='First Name' value={this.state.first_name} tintColor={"#f88400"}
                               onChangeText={(first_name) => this.setState({first_name})}/>
                    <TextField label='Middle Name' value={this.state.middle_name} tintColor={"#f88400"}
                               onChangeText={(middle_name) => this.setState({middle_name})}/>
                    <TextField label='Last Name' value={this.state.last_name} tintColor={"#f88400"}
                               onChangeText={(last_name) => this.setState({last_name})}/>
                    <TextField label='Employee ID' value={this.state.employee_id} tintColor={"#f88400"}
                               onChangeText={(employee_id) => this.setState({employee_id})}/>
                    <TextField label='Other ID' value={this.state.other_id} tintColor={"#f88400"}
                               onChangeText={(other_id) => this.setState({other_id})}/>
                    <TextField label='Main ID' value={this.state.main_id} tintColor={"#f88400"}
                               onChangeText={(main_id) => this.setState({main_id})}/>
                    <TextField label='Date of Birth' value={this.state.date_of_birth} tintColor={"#f88400"}
                               onChangeText={(date_of_birth) => this.setState({date_of_birth})}
                               onFocus={this.setModalVisible}/>
                </Card>

                <Button
                    title='SAVE'
                    size={10}
                    buttonStyle={{
                        backgroundColor: "#00c65d",
                        borderColor: "transparent",
                        width: 100,
                        borderWidth: 0,
                        borderRadius: 5,
                        float: 'right',
                        marginTop: 20,
                        marginBottom: 20
                    }}
                    containerStyle={{marginTop: 20, alignItems: 'right'}}
                    onPress={this.savePersonalDetails}
                />

                <View style={{
                    // flex: 1,
                    // flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: 300,
                        height: 300
                    }}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={this.state.modalVisible}>
                            <View style={{flex: 1}}>
                                <Calendar onDayPress={this.onDayPress} current={this.state.date_of_birth}/>
                            </View>
                        </Modal>
                    </View>
                </View>
            </ScrollView>;
        } else {
            view = <ActivityIndicator size="large" color="#f88400"/>
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
    },
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});

export default MyInfoPersonalDetailsScreen;