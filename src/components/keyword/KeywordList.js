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

import KeywordItem from './KeywordItem';

const keywordListStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    icon:{
        width:30,
        height:30
    }
});

export default class KeywordList extends Component {
    static navigationOptions = {
        tabBarLabel: '关键字',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../images/icon.png')}
                style={[keywordListStyles.icon]}
            />
        ),
        headerTitle:'关键字管理',
        headerTitleStyle:{
            alignSelf:'center',
            justifyContent:'center'
        },
        headerLeft:null,
    };

    componentWillMount(){
        let {queryKeywords} = this.props;
        //加载关键字
        queryKeywords();
    }

    renderRow = (row) => {
        let {addToBlack, delKeyword, queryDisabledUsers} = this.props;
        return <KeywordItem
            keyword={row}
            addToBlack={addToBlack}
            delKeyword={delKeyword}
            queryDisabledUsers={queryDisabledUsers}/>;
    };

    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    render() {
        let {keyword, queryKeywords} = this.props;
        return (
            <ListView
                enableEmptySections
                style={keywordListStyles.container}
                dataSource={this.ds.cloneWithRows(keyword.keywords)}
                renderRow={this.renderRow}
                refreshControl={
                    <RefreshControl
                        onRefresh={queryKeywords}
                        refreshing={keyword.state === 'loading'}
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