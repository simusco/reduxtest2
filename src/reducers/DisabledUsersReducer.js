import { KEYWORD } from '../config/Constants';
import Immutable from 'immutable';

const initialState= {
    users:[],
    state:null
}

export default function keyword(state=initialState, action) {
    switch (action.type){
        case KEYWORD.loadDisabledUsers.request:
            return {
                ...state,
                state:'doing'
            };
        case KEYWORD.loadDisabledUsers.success:
            return {
                ...state,
                state:'done',
                users:action.users
            };
        default:
            return state;
    }
}