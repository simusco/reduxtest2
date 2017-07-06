import { connect } from 'react-redux';
import App from '../components/App';
import { login } from '../actions/LoginAction';

const mapStateToProps = (state)=>{
    return {
        login:state.login,
        nav:state.nav
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        onClickWXLogin:()=>{
            dispatch(login());
        },
        onClickQQLogin:()=>{
            dispatch(login());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);