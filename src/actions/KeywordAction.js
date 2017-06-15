import {doPost} from '../utils/RequestUtil';
import {
    KEYWORD_LOADING,
    KEYWORD_LOADED,
    KEYWORD_LOAD_ERROR,
    KEYWORD_ADD_TO_BLACK_REQUEST,
    KEYWORD_ADD_TO_BLACK_SUCCESS,
    KEYWORD_ADD_TO_BLACK_ERROR,
    KEYWORD_DEL_REQUEST,
    KEYWORD_DEL_SUCCESS,
    KEYWORD_DEL_ERROR,
} from '../config/Constants';

export function addToBlack(text) {
    let params = {keywords:text,pwd:'Plp123.'};
    return (dispatch)=>{
        dispatch({type:KEYWORD_ADD_TO_BLACK_REQUEST});
        return doPost('http://draftbottle.dftrip.com/draftbottle/text/keyword/list', params)
            .then(res =>{
                let r = res.result;
                if(res.code === 100){
                    dispatch({type:KEYWORD_ADD_TO_BLACK_SUCCESS,newKeywords:r})
                }else{
                    dispatch({type:KEYWORD_ADD_TO_BLACK_ERROR,msg:r.msg});
                }
            });
    }
}

export function delKeyword(keywordId) {
    let params = {id:keywordId, pwd:'Plp123.'};
    return (dispatch)=>{
        dispatch({type:KEYWORD_DEL_REQUEST});
        return doPost('http://draftbottle.dftrip.com/draftbottle/text/keyword/del', params)
            .then(res =>{
                let r = res.result;
                if(res.code === 100){
                    dispatch({type:KEYWORD_DEL_SUCCESS,keywordId:keywordId})
                }else{
                    dispatch({type:KEYWORD_DEL_ERROR,msg:r.msg})
                }
            });
    }
}

export function queryKeywords() {
    return (dispatch)=>{
        dispatch({type:KEYWORD_LOADING,keywords:[]});
        return doGet('http://draftbottle.dftrip.com/draftbottle/text/keyword/list')
            .then(res =>{
                let r = res.result;
                if(res.code === 100){
                    dispatch({type:KEYWORD_LOADED,keywords:r})
                }else{
                    dispatch({type:KEYWORD_LOAD_ERROR,msg:r.msg})
                }
            });
    }
}

export function queryDisabledUsers() {
    return (dispatch)=>{

    }
}

