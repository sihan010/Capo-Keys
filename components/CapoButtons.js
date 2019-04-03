import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import { selectCapo } from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CAPO_POSITIONS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

class CapoButtons extends Component {
    render() {
        const selectedCapo  = this.props.selectedKeys.selectedCapo;
        return (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text h4>Capo</Text>
                <Text h2 style={{ marginBottom: 2 }}>{selectedCapo}</Text>
                <ButtonGroup
                    onPress={index => this.props.selectCapo(index + 1)}
                    selectedIndex={selectedCapo - 1}
                    buttons={CAPO_POSITIONS}
                    containerStyle={styles.containerStyle}
                    buttonStyle={styles.buttonStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                />
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        height: 40,
        width: SCREEN_WIDTH * 0.9
    },
    buttonStyle: {
        backgroundColor: 'white'
    },
    selectedTextStyle: {
        color: 'orange',
        fontWeight: '900'
    }
}

const mapStateToProps = ({selectedKeys}) => ({ selectedKeys })

export default connect(mapStateToProps, { selectCapo })(CapoButtons)