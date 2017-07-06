import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    AppState
} from 'react-native';
import AppNavigator from '../router';
import {addNavigationHelpers} from "react-navigation";
import Login from './Login';

const App = ({dispatch, nav, login, onClickWXLogin, onClickQQLogin})=>{
    if(login.state === 'isLogin'){
        return <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />;
    }
    return <Login onClickWXLogin={onClickWXLogin} onClickQQLogin={onClickQQLogin} />;
};

export default App;