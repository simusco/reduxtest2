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
        height:120,
        borderTopWidth:StyleSheet.hairlineWidth,
        borderTopColor:1,
        paddingLeft:4,
        paddingRight:4,
    },
    title:{
        flex:4,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    titleText:{
        fontSize:24,
        fontWeight:'bold',
    },
    disabledUserNum:{
        flex:3,
        justifyContent:'start-flex',
        alignItems:'center',
    },
    disabledUserNumText:{
        fontSize:18,
        color:'blue',
    },
    bar:{
        flex:3,
        flexDirection:'row',
    },
    btn:{
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
        backgroundColor:'#999'
    }
});


const KeywordItem = ({keyword, addToBlack, delKeyword, queryDisabledUsers})=>{
    return (
        <View style={keywordStyles.keyword}>
            <View style={keywordStyles.title}>
                <Text style={keywordStyles.titleText}>{keyword.text}</Text>
            </View>
            <View style={keywordStyles.disabledUserNum}>
                <Text style={keywordStyles.disabledUserNumText}>有{keyword.disabledUserCount}个用户被拦截</Text>
            </View>
            <View style={keywordStyles.bar}>
                <TouchableOpacity style={[keywordStyles.btn,keywordStyles.br]}  onPress={delKeyword(keyword.id)}>
                    <Text style={keywordStyles.btnText}>删除</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[keywordStyles.btn,keywordStyles.bl,keywordStyles.br]}  onPress={addToBlack(keyword.text)}>
                    <Text style={keywordStyles.btnText}>加入黑名单</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[keywordStyles.btn,keywordStyles.bl]} onPress={queryDisabledUsers(keyword.id)}>
                    <Text style={keywordStyles.btnText}>被禁用户</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default KeywordItem;