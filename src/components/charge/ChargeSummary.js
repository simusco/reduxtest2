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

const chargeSummaryStyles = StyleSheet.create({
    summary:{
        backgroundColor:'orange',
        flexDirection:'column',
        height:160
    },
    total:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    h1:{
        fontSize:24,
        color:'#ffffff'
    },
    pay:{
        flex:1,
        justifyContent:'center',
        flexDirection:'row'
    },
    payL:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    payR:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    charge:{
        flex:1,
        flexDirection:'row'
    },
    chargeL:{
        flex:1
    },
    chargeR:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    h3:{
        fontSize:16,
        color:'#fff'
    }
});

const ChargeSummary = ({charges})=>{
    let totalPrice = 0;
    let wxPrice = 0;
    let aliPrice = 0;
    let totalNum = charges.length;
    let iosNum = 0;
    let iosWxPrice = 0;
    let iosAliPrice = 0;

    charges.forEach(function (rec) {
        totalPrice += rec.price;
        if(rec.payType === 'WEIXIN'){
            wxPrice += rec.price;
        }else{
            aliPrice += rec.price;
        }

        if(rec.userAgent === 'ios'){
            ++iosNum;
            if(rec.payType === 'WEIXIN'){
                iosWxPrice += rec.price;
            }else{
                iosAliPrice += rec.price;
            }
        }
    });

    return (
        <View style={chargeSummaryStyles.summary}>
            <View style={chargeSummaryStyles.total}>
                <Text style={chargeSummaryStyles.h1}>今日总收益{totalPrice}元</Text>
            </View>
            <View style={chargeSummaryStyles.pay}>
                <View style={chargeSummaryStyles.payL}>
                    <Text style={chargeSummaryStyles.h3}>微信合计{wxPrice}元</Text>
                </View>
                <View style={chargeSummaryStyles.payR}>
                    <Text style={chargeSummaryStyles.h3}>阿里合计{aliPrice}元</Text>
                </View>
            </View>
            <View style={chargeSummaryStyles.pay}>
                <View style={chargeSummaryStyles.payL}>
                    <Text style={chargeSummaryStyles.h3}>IOS微信{iosWxPrice}元</Text>
                </View>
                <View style={chargeSummaryStyles.payR}>
                    <Text style={chargeSummaryStyles.h3}>IOS阿里{iosAliPrice}元</Text>
                </View>
            </View>
            <View style={chargeSummaryStyles.charge}>
                <View style={chargeSummaryStyles.chargeL}/>
                <View style={chargeSummaryStyles.chargeR}>
                    <Text style={chargeSummaryStyles.h3}>充值人数：{totalNum}</Text>
                </View>
            </View>
        </View>
    );
}


export default ChargeSummary;