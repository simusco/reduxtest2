import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Alert} from 'react-native';
import NavGroup from './NavGroup';

const maintainStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#cccccc',
    },
    icon:{
        width:30,
        height:30
    }
});

export default class  Maintain extends Component{
    static navigationOptions = {
        tabBarLabel: '维护',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../images/icon.png')}
                style={[maintainStyles.icon]}
            />
        ),
        headerTitle:'维护',
        headerTitleStyle:{
            alignSelf:'center',
            justifyContent:'center'
        },
        headerLeft:null,
    };

    render(){
        const {navigation} = this.props;

        return (
            <View style={maintainStyles.container}>
                <NavGroup navs={{items:[
                    {title:'礼物管理',onClick:()=>{navigation.navigate('Gift')}},
                    {title:'闪屏管理',onClick:()=>{}},
                    {title:'功能开关',onClick:()=>{Alert.alert('功能开关');}}
                ]}}/>
                <NavGroup navs={{items:[
                    {title:'用户查询',onClick:()=>{}},
                    {title:'日志查询',onClick:()=>{}}
                ]}}/>
            </View>
        );
    }
}