import {doGet} from '../utils/RequestUtil';
import {LOGIN_SUCCESS} from '../config/Constants';

export function login() {
    return (dispatch)=>{
        dispatch({type:LOGIN_SUCCESS,user:{userId:'1',name:'管理员'}});
    }
}