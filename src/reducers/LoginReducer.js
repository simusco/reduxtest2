import {LOGIN_ERROR,LOGIN_SUCCESS} from '../config/Constants';

const initialState= {
    user:null
}

export default function login(state=initialState, action) {
    switch (action.type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                user:action.user,
                state:'done',
            };
        default:
            return state;
    }
}