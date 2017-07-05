import {doGet} from '../utils/RequestUtil';
import {CHARGE} from '../config/Constants';

export function queryCharge() {
    return (dispatch)=>{
        dispatch({type:CHARGE.loadCharges.request,charges:[]});
        return doGet('http://draftbottle.dftrip.com/draftbottle/charge')
            .then(res =>{
                let r = res.result;
                if(res.code === 100){
                    dispatch({type:CHARGE.loadCharges.success,charges:r})
                }else{
                    dispatch({type:CHARGE.loadCharges.error,charges:[]})
                }
            });
    }
}