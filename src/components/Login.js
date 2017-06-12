import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';

const loginStyles = StyleSheet.create({
    container: {
        flex:1,
    },
    text1:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    bar:{
        height:44,
        backgroundColor: 'green',
        flexDirection: 'row',
        alignSelf:'flex-end',
    },
    btn:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
    },
    icon:{
        width:22,
        height:22,
    },
    splitLine:{
        borderLeftWidth:1,
        borderLeftColor:'#ccc',
    },
    swiperImg: {
        flexGrow:1,
        flexShrink:0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
});

const Login = ({onClickWXLogin, onClickQQLogin})=>{
    return (
        <View style={loginStyles.container}>
            <View style={{flex:1}}>
                <Swiper showsButtons={true} showsPagination={true} height={Dimensions.get('window').height - 44}>
                    <Image style={loginStyles.swiperImg} source={require('./images/swiper1.jpeg')}/>
                    <Image style={loginStyles.swiperImg} source={require('./images/swiper2.jpeg')}/>
                    <Image style={loginStyles.swiperImg} source={require('./images/swiper3.jpeg')}/>
                </Swiper>
            </View>
            <View style={loginStyles.bar}>
                <TouchableOpacity  onPress={onClickQQLogin} style={loginStyles.btn}>
                    <Image style={loginStyles.icon} source={require('./images/icon.png')}/>
                    <Text style={loginStyles.text1}>QQ登陆</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={onClickWXLogin} style={[loginStyles.btn,loginStyles.splitLine]}>
                    <Image style={loginStyles.icon} source={require('./images/icon.png')}/>
                    <Text style={loginStyles.text1}>微信登陆</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;