import { connect } from 'react-redux';
import { queryCharge } from '../actions/ChargeAction';
import Charge from '../components/charge/Charge';

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

export default connect(mapStateToProps,mapDispatchToProps)(Charge);