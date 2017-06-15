import { connect } from 'react-redux';
import { queryCharge } from '../actions/ChargeAction';
import ChargeList from '../components/charge/ChargeList';

const mapStateToProps = (state)=>{
    return {
        charge:state.charge
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        refresh:()=>{
            dispatch(queryCharge());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChargeList);