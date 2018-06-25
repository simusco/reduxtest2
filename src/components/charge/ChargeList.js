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
import * as Progress from 'react-native-progress';
import ChargeItem from './ChargeItem';
import ChargeSummary from './ChargeSummary';

const chargeStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    body:{},
    icon:{
        width:30,
        height:30
    },
    progress:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default class ChargeList extends Component {
    static navigationOptions = {
        tabBarLabel: '充值',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../images/icon.png')}
                style={[chargeStyles.icon]}
            />
        ),
        headerTitle:'今日充值',
        headerTitleStyle:{
            alignSelf:'center',
            justifyContent:'center'
        },
        headerLeft:null,
    };

    componentWillMount(){
        this.props.refresh();
    }

    renderHeader = () => <ChargeSummary charges={this.props.charge.charges}/>;
    renderRow = (row) => <ChargeItem charge={row}/>;
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    render() {
        let {charge, refresh} = this.props;
        {
        /*
         if(charge.state === 'doing'){
         return (
         <View style={chargeStyles.progress}>
         <Progress.Circle size={60} indeterminate={true} />
         </View>
         );
         }
         */
        }

        return (
            <ListView
                enableEmptySections
                style={chargeStyles.container}
                dataSource={this.ds.cloneWithRows(charge.charges)}
                renderRow={this.renderRow}
                renderHeader={this.renderHeader}
                refreshControl={
                    <RefreshControl
                        onRefresh={refresh}
                        refreshing={charge.state === 'doing'}
                        tintColor="#ff0000"
                        title="加载中..."
                        colors={['#ff0000','#00ff00','#0000ff']}
                        progressBackgroundColor="#ffff00"/>
                }
                showsVerticalScrollIndicator={false}
            />
        );
    }
}
