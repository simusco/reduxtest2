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
        let {state} = this.props.navigation;
        this.props.queryDisabledUsers(state.params.keywordId);
    }

    renderRow = (row) => {
        return <View><Text>{row.nickName}</Text></View>;
    };

    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    render() {
        let {users} = this.props;
        return (
            <ListView
                enableEmptySections
                style={disabledUserListStyles.container}
                dataSource={this.ds.cloneWithRows(users)}
                renderRow={this.renderRow}
                showsVerticalScrollIndicator={false}
            />

        );
    }
}