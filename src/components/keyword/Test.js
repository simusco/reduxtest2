import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    ListView,
    RefreshControl
} from 'react-native';

export default class Test extends Component {

    static navigationOptions = {
        headerTitle:'拦截用户详细信息',
        headerTitleStyle:{
            alignSelf:'center',
            justifyContent:'center'
        },
    };

    componentWillMount(){
    }

    render() {
        let {navigation:{state:{params}}} = this.props;
        return (
            <View><Text>Test Interface:{params.user.nickName}</Text></View>
        );
    }
}