import { connect } from 'react-redux';
import { queryDisabledUsers } from '../actions/KeywordAction';
import DisabledUserList from '../components/keyword/DisabledUserList';

const mapStateToProps = (state)=>{
    return {
        users:state.keyword.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        queryDisabledUsers:(keywordId)=>{
            dispatch(queryDisabledUsers(keywordId));
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DisabledUserList);