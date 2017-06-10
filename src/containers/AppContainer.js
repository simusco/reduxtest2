import { connect } from 'react-redux';
import App from '../components/App';

export default connect(state => ({nav: state.nav,}))(App);