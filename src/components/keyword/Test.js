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

    componentWillMount(){
        let {navigation} = this.props;
        console.log('-----Test Page-------');
        console.log(navigation);
    }

    render() {
        let {navigation:{state:{params}}} = this.props;
        return (
            <View><Text>Test Interface:{params.user.nickName}</Text></View>
        );
    }
}