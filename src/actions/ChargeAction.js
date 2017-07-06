import { doGet } from '../utils/RequestUtil';
import { CHARGE } from '../config/Constants';

export function queryCharge() {
    return async (dispatch) => {
        dispatch({type:CHARGE.loadCharges.request,charges:[]});
        try{
            let res = await doGet('http://draftbottle.dftrip.com/draftbottle/charge');
            let r = res.result;
            if(res.code === 100){
                dispatch({type:CHARGE.loadCharges.success,charges:r});
            }else{
                dispatch({type:CHARGE.loadCharges.error,charges:[]});
            }
        }catch(e){
            dispatch({type:CHARGE.loadCharges.error,charges:[]});
        }
    }
}