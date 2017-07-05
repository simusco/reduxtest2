import {CHARGE} from '../config/Constants';

const initialState= {
    charges:[],
    state:null
}

export default function charge(state=initialState, action) {
    switch (action.type){
        case CHARGE.loadCharges.request:
            return {
                ...state,
                state:'doing'
            };
        case CHARGE.loadCharges.success:
            return {
                ...state,
                state:'done',
                charges:action.charges
            };
        case CHARGE.loadCharges.error:
            return {
                ...state,
                state:'error'
            };
        default:
            return state;
    }
}