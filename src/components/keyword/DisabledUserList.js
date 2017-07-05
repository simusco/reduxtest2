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

const disabledUserListStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    icon:{
        width:30,
        height:30
    }
});

export default class DisabledUserList extends Component {

    componentWillMount(){
        let {navigation:{state:{params}},queryDisabledUsers} = this.props;
        queryDisabledUsers(params.keywordId);
    }

    renderRow = (row) => {
        let {toTest} = this.props;
        return <View><TouchableOpacity onPress={()=>toTest(row)}><Text>{row.nickName}</Text></TouchableOpacity></View>;
    };

    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    render() {
        let {disabledUser} = this.props;
        return (
            <ListView
                enableEmptySections
                style={disabledUserListStyles.container}
                dataSource={this.ds.cloneWithRows(disabledUser.users)}
                renderRow={this.renderRow}
                showsVerticalScrollIndicator={false}
            />
        );
    }
}