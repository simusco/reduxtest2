import {
    KEYWORD_LOADING,
    KEYWORD_LOADED,
    KEYWORD_LOAD_ERROR,
    KEYWORD_ADD_TO_BLACK_REQUEST,
    KEYWORD_ADD_TO_BLACK_SUCCESS,
    KEYWORD_ADD_TO_BLACK_ERROR,
    KEYWORD_DEL_REQUEST,
    KEYWORD_DEL_SUCCESS,
    KEYWORD_DEL_ERROR
} from '../config/Constants';
import Immutable from 'immutable';

const initialState= {
    keywords:[],
    state:null
}

export default function keyword(state=initialState, action) {
    switch (action.type){
        case KEYWORD_LOADING:
            return {
                ...state,
                state:'loading'
            };
        case KEYWORD_LOADED:
            return {
                ...state,
                state:'loaded',
                keywords:action.keywords
            };
        case KEYWORD_LOAD_ERROR:
            return {
                ...state,
                state:'error'
            };
        case KEYWORD_DEL_REQUEST:
            let keywords1 = Immutable.fromJS(state.keywords);
            keywords1.forEach((k)=>{
                if(k.id === action.keywordId){
                    k.state = 'deleting';
                }
            });
            return Object.assign({},state, {keywords:keywords1.toJS()});
        case KEYWORD_DEL_SUCCESS:
            let keywords2 = Immutable.fromJS(state.keywords);
            keywords2 = keywords2.filter(function(value, index, array){
                return value.get('id') !== action.keywordId;
            });
            return Object.assign({},state, {keywords:keywords2.toJS()});
        case KEYWORD_DEL_ERROR:
            let keywords3 = Immutable.fromJS(state.keywords);
            keywords3.forEach((k)=>{
                if(k.id === action.keywordId){
                    k.state = 'deleteError';
                }
            });
            return Object.assign({},state, {keywords:keywords3.toJS()});
        default:
            return state;
    }
}