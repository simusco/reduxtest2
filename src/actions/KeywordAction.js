import {doPost,doGet, toURL} from '../utils/RequestUtil';
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
    KEYWORD,
} from '../config/Constants';

export function addToBlack(text) {
    let params = {keywords:text,pwd:'Plp123.'};
    return (dispatch)=>{
        let params = {keywords:text, pwd:'Plp123.'};
        let url = toURL('http://123.207.242.189:9080','/draftbottle/text/keyword/add', params);

        dispatch({type:KEYWORD_ADD_TO_BLACK_REQUEST});
        return doPost(url, {})
            .then(res =>{
                if(res.code === 100){
                    dispatch({type:KEYWORD_ADD_TO_BLACK_SUCCESS,newKeywords:res.result})
                }else{
                    dispatch({type:KEYWORD_ADD_TO_BLACK_ERROR,msg:res.msg});
                }
            });
    }
}

export function delKeyword(keywordId) {
    let params = {id:keywordId, pwd:'Plp123.'};
    let url = toURL('http://123.207.242.189:9080','/draftbottle/text/keyword/del', params);

    return (dispatch)=>{
        dispatch({type:KEYWORD_DEL_REQUEST,keywordId:keywordId});
        return doPost(url, {})
            .then(res =>{
                if(res.code === 100){
                    dispatch({type:KEYWORD_DEL_SUCCESS,keywordId:keywordId})
                }else{
                    dispatch({type:KEYWORD_DEL_ERROR,msg:res.msg})
                }
            });
    }
}

export function queryKeywords() {
    return (dispatch)=>{
        return doGet('http://123.207.242.189:9080/draftbottle/text/keyword/list')
            .then(res =>{
                let r = res.result;
                if(res.code === 100){
                    dispatch({type:KEYWORD_LOADED,keywords:r})
                }else{
                    dispatch({type:KEYWORD_LOAD_ERROR,msg:res.msg})
                }
            });
    }
}

export function queryDisabledUsers(keywordId) {
    let loadDisabledUsers = KEYWORD.loadDisabledUsers;
    let params = {keywordId:keywordId, pwd:'Plp123.'};
    let url = toURL('http://123.207.242.189:9080','/draftbottle/text/keyword/user/disabled', params);

    return (dispatch)=>{
        dispatch({type:loadDisabledUsers.request});
        return doGet(url)
            .then(res =>{
                let r = res.result;
                if(res.code === 100){
                    dispatch({type:loadDisabledUsers.success,users:r})
                }else{
                    dispatch({type:loadDisabledUsers.error,msg:res.msg})
                }
            });
    }
}

