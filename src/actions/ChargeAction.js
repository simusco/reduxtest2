import {doGet} from '../utils/RequestUtil';
import {CHARGE_LOADING,CHARGE_LOADED,CHARGE_LOAD_ERROR} from '../config/Constants';

export function queryCharge() {
    return (dispatch)=>{
        dispatch({type:CHARGE_LOADING,charges:[]});
        return doGet('http://draftbottle.dftrip.com/draftbottle/charge')
            .then(res =>{
                let r = res.result;
                if(res.code === 100){
                    dispatch({type:CHARGE_LOADED,charges:r})
                }else{
                    dispatch({type:CHARGE_LOAD_ERROR,charges:[]})
                }
            });
    }
}