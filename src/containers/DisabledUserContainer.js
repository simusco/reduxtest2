import { connect } from 'react-redux';
import { NavigationActions } from "react-navigation";
import { queryDisabledUsers } from '../actions/KeywordAction';
import DisabledUserList from '../components/keyword/DisabledUserList';

const mapStateToProps = (state)=>{
    return {
        disabledUser:state.disabledUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        queryDisabledUsers:(keywordId)=>{
            dispatch(queryDisabledUsers(keywordId));
        },
        toTest:(user)=>{
            dispatch(NavigationActions.navigate(
                {
                    routeName:'Test',
                    params:{user:user}
                }
            ));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DisabledUserList);