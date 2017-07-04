import { connect } from 'react-redux';
import { addToBlack,delKeyword,queryKeywords,queryDisabledUsers } from '../actions/KeywordAction';
import KeywordList from '../components/keyword/KeywordList';

const mapStateToProps = (state)=>{
    return {
        keyword:state.keyword
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToBlack:(text)=>{
            dispatch(addToBlack(text));
        },
        delKeyword:(keywordId)=>{
            dispatch(delKeyword(keywordId));
        },
        queryKeywords:()=>{
            dispatch(queryKeywords());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(KeywordList);