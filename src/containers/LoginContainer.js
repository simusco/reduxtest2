import { connect } from 'react-redux';
import { login } from '../actions/LoginAction';
import Login from '../components/login/Login';

const mapStateToProps = (state)=>{
    return {
        login:state.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickWXLogin:()=>{
            dispatch(login());
        },
        onClickQQLogin:()=>{
            dispatch(login());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);