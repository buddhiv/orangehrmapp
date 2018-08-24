import React from "react";
import {View, Text} from 'react-native';
import {Avatar} from "react-native-elements";

class LogoComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center',}}>
                <Text></Text>
                <Avatar
                    small
                    rounded
                    source={require('../assets/images/my_info.jpg')}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
                <Text></Text>
            </View>
        )
    }
}

export default LogoComponent;