import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import './matchTable.css';
import MatchResult from './matchResult'
import MatchDetail from './matchDetail'


function MatchTable(props) {
    let matchResult

    if (props.matchData){
        matchResult = props.matchData.map((match, index) => Object.assign({}, {key:index}, {matchDate: match.matchDate}, {home: match.matchInfo[0].nickname.toLowerCase()}, {away: match.matchInfo[1].nickname.toLowerCase()}, {homeGoalTotal: match.matchInfo[0].shoot.goalTotal}, {awayGoalTotal: match.matchInfo[1].shoot.goalTotal}))
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
        console.log(match)
        console.log(props.nickname)
        const userTeam = Object.keys(match).find(key => match[key] === props.nickname.toLowerCase())

        console.log(userTeam)
        if ( (userTeam === "home" && match.homeGoalTotal > match.awayGoalTotal) || userTeam === "away" && match.homeGoalTotal < match.awayGoalTotal ){
            return 'table-row-win'
        }else if(match.homeGoalTotal === match.awayGoalTotal){
            return 'table-row-draw'
        }else{
            return 'table-row-lose'
        }
    }

    const columns = [{
        title: '경기 일자',
        dataIndex: 'matchDate',
        key: 'matchDate',
        width: '15%',
    },{
        title: '경기 결과',
        dataIndex: 'matchResult',
        key: 'x',

        render: (text, record, index) => <MatchResult matchResult= {matchResult[PageSize * (PageNum-1) + index]} />
    },]
    // <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>


    return (

        <div >
            <Table style ={{position: 'relative', left: '50%', transform: 'translateX(-50%)', width: '75%'}}
                   dataSource={matchResult}
                   columns={columns}
                   expandable={{
                       expandedRowRender: (record, index) => <MatchDetail matchInfo = {props.matchData[PageSize * (PageNum-1) + index].matchInfo}/>,
                   }}
                   bordered
                   pagination={paginationProps}
                   rowClassName={(record, index) => highlightResult(index)}
            />;
        </div>
    );
}

export default MatchTable;

