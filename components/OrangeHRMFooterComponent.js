import React from "react";
import {View, Text} from 'react-native';
import {Avatar} from "react-native-elements";

class OrangeHRMFooterComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center',}}>
                <Text></Text>
                <Text style={{color: 'grey'}}>OrangeHRM Mobile 0.0.1</Text>
                <Text style={{color: 'grey'}}>All Rights Reserved</Text>
                <Text></Text>
            </View>
        )
    }
}

export default OrangeHRMFooterComponent;