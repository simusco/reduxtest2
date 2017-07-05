import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './containers/LoginContainer';
import configureStore from './store';
import {Provider} from 'react-redux';

if(!__DEV__){
    global.console = {
        info:()=>{},
        log:()=>{},
        warn:()=>{},
        error:()=>{}
    }
}

class Main extends Component{
    constructor(){
        super();
        this.state = {
            isLoading : true,
            store:configureStore(()=>{this.setState({isLoading:false})})
        };
    }
    render(){
        return (
            <Provider store={this.state.store}>
                <App/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('reduxtest2',()=>Main);