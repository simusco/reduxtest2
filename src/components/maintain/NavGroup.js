import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Navigator,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Alert} from 'react-native';

import Nav from './Nav';

const navGroupStyles = StyleSheet.create({
    group: {
        flexDirection: "column",
        marginTop:10,
        backgroundColor:'white',
    }
});

export default class NavGroup extends  Component{
    render(){
        const {navs} = this.props;
        return (
            <View style={navGroupStyles.group}>
                {
                    navs.items.map((nav,index)=>{
                        return <Nav key={'nav_'+index} {...nav} isLast={navs.items.length === index+1}/>
                    })
                }
            </View>
        )
    }
}