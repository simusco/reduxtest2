import {combineReducers} from 'redux';
import chargeReducer from './ChargeReducer';
import appReducer from './AppReducer';
import loginReducer from './LoginReducer';

export default combineReducers({
    charge:chargeReducer,
    nav:appReducer,
    login:loginReducer,
});