import {doPost,doGet, toURL} from '../utils/RequestUtil';
import {KEYWORD} from '../config/Constants';

export function addToBlack(text) {
    let params = {keywords:text,pwd:'Plp123.'};
    return (dispatch)=>{
        let params = {keywords:text, pwd:'Plp123.'};
        let url = toURL('http://123.207.242.189:9080','/draftbottle/text/keyword/add', params);

        dispatch({type:KEYWORD.addToBlack.request});
        return doPost(url, {})
            .then(res =>{
                if(res.code === 100){
                    dispatch({type:KEYWORD.addToBlack.success,newKeywords:res.result})
                }else{
                    dispatch({type:KEYWORD.addToBlack.error,msg:res.msg});
                }
            });
    }
}

export function delKeyword(keywordId) {
    let params = {id:keywordId, pwd:'Plp123.'};
    let url = toURL('http://123.207.242.189:9080','/draftbottle/text/keyword/del', params);

    return (dispatch)=>{
        dispatch({type:KEYWORD.deleteKeyword.request,keywordId:keywordId});
        return doPost(url, {})
            .then(res =>{
                if(res.code === 100){
                    dispatch({type:KEYWORD.deleteKeyword.success,keywordId:keywordId})
                }else{
                    dispatch({type:KEYWORD.deleteKeyword.error,msg:res.msg})
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
                    dispatch({type:KEYWORD.loadKeywords.success,keywords:r})
                }else{
                    dispatch({type:KEYWORD.loadKeywords.error,msg:res.msg})
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

