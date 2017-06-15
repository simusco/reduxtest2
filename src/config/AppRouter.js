import {StyleSheet,View,Text,Image} from 'react-native';
import {StackNavigator, TabNavigator, addNavigationHelpers} from "react-navigation";
import ChargeContainer from '../containers/ChargeContainer';
import MaintainContainer from '../containers/MaintainContainer';
import KeywordContainer from '../containers/KeywordContainer';

const Home = TabNavigator(
    {
        Charge: {
            screen: ChargeContainer,
        },
        Maintain:{
            screen:MaintainContainer,
        },
        Keyword:{
            screen:KeywordContainer,
        }
    },
    {
        animationEnabled: false, // 切换页面时不显示动画
        tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
        swipeEnabled: false, // 禁止左右滑动
        backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
        tabBarOptions: {
            activeTintColor: '#0F9C00',
            inactiveTintColor: '#999',
            showIcon: true,
            indicatorStyle: {height: 0},
            style: {
                backgroundColor: '#fff',
                borderTopWidth:StyleSheet.hairlineWidth,
                borderTopColor:'#ccc'
            }
        },
    }
);

export default StackNavigator(
    {
        Home:{
            screen:Home
        }
    }
);