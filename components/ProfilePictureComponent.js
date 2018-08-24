import React from "react";
import {View, Text, Image} from 'react-native';
import {Card, Avatar} from 'react-native-elements';
import {CardImage} from 'react-native-cards';

class ProfilePictureComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center',}}>
                <Text></Text>
                <Avatar
                    xlarge
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

export default ProfilePictureComponent;