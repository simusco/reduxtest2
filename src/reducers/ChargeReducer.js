import {CHARGE_LOADING,CHARGE_LOADED,CHARGE_LOAD_ERROR} from '../config/Constants';

const initialState= {
    charges:[],
    state:null
}

export default function charge(state=initialState, action) {
    switch (action.type){
        case CHARGE_LOADING:
            return {
                ...state,
                state:'doing'
            };
        case CHARGE_LOADED:
            return {
                ...state,
                state:'done',
                charges:action.charges
            };
        case CHARGE_LOAD_ERROR:
            return {
                ...state,
                state:'error'
            };
        default:
            return state;
    }
}