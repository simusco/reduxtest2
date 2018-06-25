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

const chargeItemStyles = StyleSheet.create({
    container: {
        height:90,
        borderTopWidth:StyleSheet.hairlineWidth,
        borderTopColor:'#222222',
        flexDirection:'column'
    },
    header:{
        flex:1,
        flexDirection:'row'
    },
    name:{
        flex:7,
        alignItems:'flex-start',
        justifyContent:'center',
    },
    price:{
        alignItems:'center',
        justifyContent:'center',
        width:40
    },
    text0:{
        fontSize:16,
    },
    text1:{
        color:'red',
        fontSize:16
    },
    body:{
        flex:1,
        flexDirection:'row',
        marginLeft:4,
        flexWrap:'wrap'
    },
    tag:{
        margin:2,
        height:16,
        backgroundColor:'red',
        borderRadius:4,
        paddingLeft:4,
        paddingRight:4,
        justifyContent:'center'
    },
    text2:{
        fontSize:14,
        color:'#ffffff'
    }
});


const ChargeItem = ({charge})=>{
    return (
        <View style={chargeItemStyles.container}>
            <View style={chargeItemStyles.header}>
                <View style={chargeItemStyles.name}>
                    <Text style={chargeItemStyles.text0}>{charge.goodsName}</Text>
                </View>
                <View style={chargeItemStyles.price}>
                    <Text style={chargeItemStyles.text1}>{charge.price}元</Text>
                </View>
            </View>
            <View style={chargeItemStyles.body}>
                <View style={chargeItemStyles.tag}>
                    <Text style={chargeItemStyles.text2}>{charge.payType}</Text>
                </View>
                <View style={chargeItemStyles.tag}>
                    <Text style={chargeItemStyles.text2}>{charge.channelid}/{charge.userAgent}</Text>
                </View>
                <View style={chargeItemStyles.tag}>
                    <Text style={chargeItemStyles.text2}>{charge.payTime}</Text>
                </View>
                <View style={chargeItemStyles.tag}>
                    <Text style={chargeItemStyles.text2}>{charge.goodsType}</Text>
                </View>
            </View>
        </View>
    );
}


export default ChargeItem;
