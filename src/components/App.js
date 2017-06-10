import React,{Component} from 'react';
import AppNavigator from '../config/AppRouter';
import {addNavigationHelpers} from "react-navigation";

const App = ({dispatch, nav})=>{
    return (
        <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
    );
}

export default App;