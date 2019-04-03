import {combineReducers} from 'redux'
import keys from './keys_reducer'
import selectedKeys from './selections_reduces'

export default combineReducers({
    keys, selectedKeys
});