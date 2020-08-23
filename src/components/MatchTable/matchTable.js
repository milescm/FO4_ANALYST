import React, { useState} from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import './matchTable.css';
import MatchResult from './matchResult'
import MatchDetail from './matchDetail'

import { Tabs } from 'antd';

function MatchTable(props) {

    const { TabPane } = Tabs;
    // const [matchResult, setMatchResult] = useState(null)


    let matchResult;
    let matchData;


    if (props.matchData){
        matchResult = props.matchData.filter(function(match){
            return (match.matchInfo.length === 2);
        }).map((match, index) => Object.assign({}, {key:index}, {matchDate: match.matchDate}, {home: match.matchInfo[0].nickname.toLowerCase()}, {away: match.matchInfo[1].nickname.toLowerCase()}, {homeGoalTotal: match.matchInfo[0].shoot.goalTotal}, {awayGoalTotal: match.matchInfo[1].shoot.goalTotal}))

        matchData = props.matchData.filter(function(match){
            return (match.matchInfo.length === 2);
        }).map((match, index) => Object.assign({}, {key:index}, {matchInfo: match.matchInfo}))

    }

    const [PageSize, setPageSize] = useState(20)
    const [PageNum, setPageNum] = useState(1)

    const paginationProps = {
        position: [ 'bottomCenter'],
        showSizeChanger: true,
        showQuickJumper: true,
        pageSize: PageSize,
        pageSizeOptions:['10','20','30'],
        current: PageNum,
        onShowSizeChange: (current, pageSize) => changePageSize(pageSize,current),
        onChange: current => onPageChange(current),
    };

    function onPageChange(current){
        setPageNum(current)
    };

    function changePageSize(PageSize, current) {
        setPageSize(PageSize)
    }


    function highlightResult(matchIndex){
        //const allMatches = props.matchData.map((match, index) => Object.assign({}, {key:index}, {matchDate: match.matchDate}, {home: match.matchInfo[0].nickname}, {away: match.matchInfo[1].nickname}, {homeGoalTotal: match.matchInfo[0].shoot.goalTotal}, {awayGoalTotal: match.matchInfo[1].shoot.goalTotal}))

        const match = matchResult[matchIndex]
        // console.log(match)
        // console.log(props.nickname)
        const userTeam = Object.keys(match).find(key => match[key] === props.nickname.toLowerCase())

        // console.log(userTeam)
        if ( (userTeam === "home" && match.homeGoalTotal > match.awayGoalTotal) || (userTeam === "away" && match.homeGoalTotal < match.awayGoalTotal) ){
            return 'table-row-win'
        }else if(match.homeGoalTotal === match.awayGoalTotal){
            return 'table-row-draw'
        }else{
            return 'table-row-lose'
        }
    }

    const columns = [{
        title: <b>경기 일자</b>,
        align: 'center',
        dataIndex: 'matchDate',
        key: 'matchDate',
        width: '15%',
    },{
        title: <b>경기 결과</b>,
        align: 'center',
        dataIndex: 'matchResult',
        key: 'x',


        // render: (text, record, index) => <MatchResult matchResult= {matchResult[PageSize * (PageNum-1) + index]} />
        render: (text, record, index) => <MatchResult matchResult= {matchResult[PageSize * (PageNum-1) + index]} />

    },]

    return (

        <div>
            <Table style ={{position: 'relative', top: '20px', margin: '0 auto', width: '75%'}}
                   dataSource={matchResult}
                   columns={columns}
                   expandable={{
                       // expandedRowRender: (record, index) => <MatchDetail matchInfo = {props.matchData[PageSize * (PageNum-1) + index].matchInfo}/>,
                       expandedRowRender: (record, index) =>
                           <Tabs defaultActiveKey="1">
                               <TabPane style ={{height: '900px', width: '1250px'}} tab="Summary" key="1">
                                   <MatchDetail matchInfo = {matchData[PageSize * (PageNum-1) + index].matchInfo}/>
                               </TabPane>
                               <TabPane tab="Player Statistics" key="2">
                                   준비 중
                               </TabPane>
                           </Tabs>

                   }}
                   bordered
                   pagination={paginationProps}
                   rowClassName={(record, index) => highlightResult(index)}
            />;
        </div>
    );
}

export default MatchTable;

