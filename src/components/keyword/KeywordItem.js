import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    ListView,
    RefreshControl,
    TouchableOpacity
} from 'react-native';

const keywordStyles = StyleSheet.create({
    keyword:{
        flexDirection:'column',
        flexGrow:1,
        flexShrink:0,
        height:140,
        borderTopWidth:StyleSheet.hairlineWidth,
        borderTopColor:'#ccc',
        paddingLeft:4,
        paddingRight:4,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:'#fff',
    },
    title:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start',
    },
    titleText:{
        fontSize:20,
        fontWeight:'bold',
    },
    disabledUserNum:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start',
    },
    disabledUserNumText:{
        fontSize:18,
        color:'blue',
    },
    bar:{
        flex:1,
        flexDirection:'row',
    },
    btn:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
    },
    btnText:{
        fontSize:16,
        color:'white',
    },
    br:{
        borderRightWidth:StyleSheet.hairlineWidth,
        borderRightColor:'#ffffff',
    },
    bl:{
        borderLeftWidth:StyleSheet.hairlineWidth,
        borderLeftColor:'#ffffff',
    },
    isBlack:{
        backgroundColor:'#CCCC99'
    }
});


const KeywordItem = ({keyword, addToBlack, delKeyword, navigation})=>{
    return (
        <View style={[keywordStyles.keyword,keyword.isBlack === 'Y' ? keywordStyles.isBlack: null]}>
            <View style={keywordStyles.title}>
                <Text style={keywordStyles.titleText}>{keyword.text}</Text>
            </View>
            <View style={keywordStyles.disabledUserNum}>
                <Text style={keywordStyles.disabledUserNumText}>有{keyword.disabledUserCount}个用户被拦截</Text>
            </View>
            <View style={keywordStyles.bar}>
                <TouchableOpacity
                    style={[keywordStyles.btn,keywordStyles.br]}
                    onPress={()=>{delKeyword(keyword.id)}}>
                    <Text style={keywordStyles.btnText}>删除</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[keywordStyles.btn,keywordStyles.bl,keywordStyles.br]}
                    onPress={()=>{addToBlack(keyword.text)}}>
                    <Text style={keywordStyles.btnText}>加入黑名单</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[keywordStyles.btn,keywordStyles.bl]}
                    onPress={()=>{navigation.navigate('DisabledUser',{keywordId:keyword.id})}}>
                    <Text style={keywordStyles.btnText}>被禁用户</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default KeywordItem;