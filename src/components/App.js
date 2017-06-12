import React,{Component} from 'react';
import AppNavigator from '../config/AppRouter';
import {addNavigationHelpers} from "react-navigation";
import Login from './Login';

const App = ({dispatch, nav, login, onClickWXLogin, onClickQQLogin})=>{
    if(login !== null && login.state === 'success'){
        return (
            <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
        );
    }

    return (
        <Login onClickWXLogin={onClickWXLogin} onClickQQLogin={onClickQQLogin} />
    );
};

export default App;