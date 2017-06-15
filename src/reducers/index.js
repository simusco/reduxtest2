import {combineReducers} from 'redux';
import chargeReducer from './ChargeReducer';
import appReducer from './AppReducer';
import loginReducer from './LoginReducer';
import KeywordReducer from './KeywordReducer';

export default combineReducers({
    charge:chargeReducer,
    nav:appReducer,
    login:loginReducer,
    keyword:KeywordReducer,
});