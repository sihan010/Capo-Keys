import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Text } from 'react-native-elements'

class CapoKey extends Component {    
    render() {
        const {selectedKeys:{capoKeyIndex},keys}=this.props;
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text h4>Capo Key</Text>
                <Text h2 style={{ marginBottom: 2 }}>{keys[capoKeyIndex].key}</Text>
            </View>
        )
    }
}

const mapStateToProps = ({ keys, selectedKeys }) => ({ keys, selectedKeys })

export default connect(mapStateToProps)(CapoKey);