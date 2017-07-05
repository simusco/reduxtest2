import { KEYWORD } from '../config/Constants';
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
        case KEYWORD.loadKeywords.request:
            return {
                ...state,
                state:'doing'
            };
        case KEYWORD.loadKeywords.success:
            return {
                ...state,
                state:'done',
                keywords:action.keywords
            };
        case KEYWORD.loadKeywords.error:
            return {
                ...state,
                state:'error'
            };
        case KEYWORD.deleteKeyword.request:
            return {
                ...state,
                state:'doing'
            };
        case KEYWORD.deleteKeyword.success:
            return Object.assign({},state,{
                    keywords:delSuccess(state, action),
                    state:'done',
                }
            );
        case KEYWORD.deleteKeyword.error:
            return {
                ...state,
                state:'error'
            };
        case KEYWORD.addToBlack.request:
            return {
                ...state,
                state:'doing'
            };
        case KEYWORD.addToBlack.success:
            return Object.assign({},state,{
                    keywords:addToBlackSuccess(state,action),
                    state:'done',
                }
            );
        case KEYWORD.addToBlack.error:
            return {
                ...state,
                state:'error'
            };
        default:
            return state;
    }
}