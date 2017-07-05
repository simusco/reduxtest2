import { connect } from 'react-redux';
import {NavigationActions} from "react-navigation";
import { addToBlack,delKeyword,queryKeywords , queryDisabledUsers} from '../actions/KeywordAction';
import KeywordList from '../components/keyword/KeywordList';

const mapStateToProps = (state)=>{
    return {
        keyword:state.keyword
    }
}

const mapDispatchToProps = (dispatch,navigation) => {
    return {
        addToBlack:(text)=>{
            dispatch(addToBlack(text));
        },
        delKeyword:(keywordId)=>{
            dispatch(delKeyword(keywordId));
        },
        queryKeywords:()=>{
            dispatch(queryKeywords());
        },
        queryDisabledUsers:(keywordId)=>{
            dispatch(NavigationActions.navigate(
                {
                    routeName:'DisabledUser',
                    params:{'keywordId':keywordId}
                }
            ));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(KeywordList);