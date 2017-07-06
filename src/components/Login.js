import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    AppState,
    TextInput
} from 'react-native';
import AppNavigator from '../router';
import {addNavigationHelpers} from "react-navigation";
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

const login2Styles = StyleSheet.create({
    container: {
        flex:1,
        paddingLeft:10,
        paddingRight:10,
    },
    title:{
        height:100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText:{
        fontSize:22
    },
    form:{
        height:100,
        marginTop:20,
        marginBottom:20,
    },
    formRow:{
        flex:1,
        flexDirection:'row',
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'#ccc',
    },
    formTitle:{
        width:60,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    formInput:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formInputText:{

    },
    formTitleText:{

    },
    loginBtn:{
        height:36,
        backgroundColor:'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:4,
    },
    loginBtnText:{
        color:'white',
    },
    forgotPwdBtn:{
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotPwdText:{
        fontSize:16,
        color:'blue',
    }
});

const Login = ({onClickWXLogin, onClickQQLogin})=>{
    {/*
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
     */}

    return (
        <View style={login2Styles.container}>
            <View style={login2Styles.title}>
                <Text style={login2Styles.titleText}>使用账号和密码登陆</Text>
            </View>
            <View style={login2Styles.form}>
                <View style={login2Styles.formRow}>
                    <View style={login2Styles.formTitle}><Text style={login2Styles.formTitleText}>账号</Text></View>
                    <View style={login2Styles.formInput}>
                        <TextInput style={login2Styles.formInputText}
                                   underlineColorAndroid={'transparent'} placeholder={'手机号'}/>
                    </View>
                </View>
                <View style={login2Styles.formRow}>
                    <View style={login2Styles.formTitle}><Text style={login2Styles.formTitleText}>密码</Text></View>
                    <View style={login2Styles.formInput}>
                        <TextInput
                            style={login2Styles.formInputText}
                            secureTextEntry={true}
                            underlineColorAndroid={'transparent'}
                            placeholder={'登陆密码'}
                        />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={login2Styles.loginBtn} onPress={()=>{onClickWXLogin()}}>
                <Text style={login2Styles.loginBtnText}>登陆</Text>
            </TouchableOpacity>
            <TouchableOpacity style={login2Styles.forgotPwdBtn}>
                <Text style={login2Styles.forgotPwdText}>忘记了登陆密码？</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Login;