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
            return (function () {
                let keywords = Object.assign({},state.keywords);
                for(k of keywords){
                    if(k.id === action.keywordId){
                        k.state = 'deleting';
                        break;
                    }
                }
                return Object.assign({},state, {keywords})
            })();
        case KEYWORD_DEL_SUCCESS:
            return (function () {
                let keywords = Object.assign({},state.keywords);
                keywords.filter((k)=>k.id === action.keywordId);
                return Object.assign({},state, {keywords})
            })();
        case KEYWORD_DEL_ERROR:
            return (function () {
                let keywords = Object.assign({},state.keywords);
                for(k of keywords){
                    if(k.id === action.keywordId){
                        k.state = 'deleteError';
                        break;
                    }
                }
                return Object.assign({},state, {keywords})
            })();
        default:
            return state;
    }
}