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

const addToBlackSuccess = (state, action)=>{
    let newKeyword = action.newKeywords;
    let keywords = Immutable.fromJS(state.keywords);
    let flag = false;

    keywords.forEach(function(value){
        if(value.get('id') === newKeyword.id){
            value.update('isBlack','Y');
            flag = true;
        }
    });

    if(!flag){
        keywords.push(newKeyword);
    }

    return keywords.toJS();
};

const delSuccess = (state, action) => {
    let keywords = Immutable.fromJS(state.keywords);
    keywords = keywords.filter(function(value, index, array){
        return value.get('id') !== action.keywordId;
    });
    return keywords.toJS();
}

export default function keyword(state=initialState, action) {
    switch (action.type){
        case KEYWORD_LOADING:
            return {
                ...state,
                state:'doing'
            };
        case KEYWORD_LOADED:
            return {
                ...state,
                state:'done',
                keywords:action.keywords
            };
        case KEYWORD_LOAD_ERROR:
            return {
                ...state,
                state:'error'
            };
        case KEYWORD_DEL_REQUEST:
            return {
                ...state,
                state:'doing'
            };
        case KEYWORD_DEL_SUCCESS:
            return Object.assign({},state,{
                    keywords:delSuccess(state, action),
                    state:'done',
                }
            );
        case KEYWORD_DEL_ERROR:
            return {
                ...state,
                state:'error'
            };
        case KEYWORD_ADD_TO_BLACK_REQUEST:
            return {
                ...state,
                state:'doing'
            };
        case KEYWORD_ADD_TO_BLACK_SUCCESS:
            return Object.assign({},state,{
                    keywords:addToBlackSuccess(state,action),
                    state:'done',
                }
            );
        case KEYWORD_ADD_TO_BLACK_ERROR:
            return {
                ...state,
                state:'error'
            };
        default:
            return state;
    }
}