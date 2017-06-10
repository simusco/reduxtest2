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

const  navStyles = StyleSheet.create({
    nav:{
        height:40,
        flexDirection: "row",
    },
    icon:{
        justifyContent:'center',
        alignItems:'center',
        width:46,
    },
    content:{
        flex:1,
        alignItems:'center',
        flexDirection: "row",
    },
    left:{
        justifyContent:'center',
        flex:1,
        alignItems:'flex-start',
    },
    right:{
        justifyContent:'center',
        flex:1,
        alignItems:'flex-end',
    },
    iconImg:{
        width:32,
        height:32,
    },
    bline:{
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'#222222',
    }
});

export default class Nav extends Component{
    render(){
        const {isLast,title,onClick} = this.props;

        return (
            <TouchableOpacity style={navStyles.nav} onPress={onClick}>
                <View style={navStyles.icon}><Image style={navStyles.iconImg} source={require("../images/icon.png")} /></View>
                <View style={[navStyles.content, isLast?{}:navStyles.bline]} >
                    <View style={navStyles.left}><Text>{title}</Text></View>
                    <View style={navStyles.right}>
                        <Image style={navStyles.iconImg} source={require("../images/035.png")} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}