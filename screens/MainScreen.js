import React, { Component } from 'react'
import { View, Platform, Dimensions, Image } from 'react-native'
import { STATUS_BAR_HEIGHT } from '../constants'
import icon from '../assets/icons/pure-icon.png'
import KeysButtons from '../components/KeysButtons'
import CapoButtons from '../components/CapoButtons'
import CapoKey from '../components/CapoKey'
import { Divider } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width;

class MainScreen extends Component {
    static navigationOptions = () => ({
        title: "Capo Keys",
        headerStyle: {
            height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
            backgroundColor: '#2196F3'
        },
        headerTitleStyle: {
            //marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
            color: 'white'
        },
        headerLeft: <Image source={icon} style={styles.iconStyle} />
    })

    render() {
        return (
            <View style={{ flex: 1, backgroungColor: '#ddd' }}>
                <View style={styles.containerStyle}>
                    <KeysButtons />
                    <Divider style={styles.dividerStyle} />
                    <CapoButtons />
                    <Divider style={styles.dividerStyle} />
                    <CapoKey />
                </View>
            </View>
        )
    }
}

const styles = {
    iconStyle: {
        marginTop: 5,
        marginLeft: 10,
        width: 40,
        height: 40
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    dividerStyle: {
        width: SCREEN_WIDTH * 0.9,
        backgroundColor: '#2196F3',
        height: 2
    }
}

export default MainScreen;
