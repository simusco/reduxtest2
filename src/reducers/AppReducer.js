import AppNavigator from '../config/AppRouter';

export default function appReducer(state, action) {
    return AppNavigator.router.getStateForAction(action, state);
}