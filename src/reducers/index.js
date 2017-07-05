import {combineReducers} from 'redux';
import chargeReducer from './ChargeReducer';
import loginReducer from './LoginReducer';
import keywordReducer from './KeywordReducer';
import disabledUsersReducer from './DisabledUsersReducer';

import AppNavigator from '../router';

const appReducer = (state, action) => {
    return AppNavigator.router.getStateForAction(action, state);
};

export default combineReducers({
    nav:appReducer,
    charge:chargeReducer,
    login:loginReducer,
    keyword:keywordReducer,
    disabledUser:disabledUsersReducer
});