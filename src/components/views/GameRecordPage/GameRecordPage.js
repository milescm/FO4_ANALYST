import React, { useState, useEffect } from 'react';
import Header from '../../Header/header'
import Footer from '../../Footer/footer'
import Manager from '../../Manager/manager'
import MatchTable from '../../MatchTable/matchTable';

// import image from '../../../images/istockphoto-1168591951-170667a.jpg'
import image1 from "../../../images/309478-P83VSI-858.jpg";


function GameRecordPage(props) {

    const BaseURL = process.env.NODE_ENV === 'development' ? '' : 'https://api.velog.io/'
    const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiNDUzMTE4OTMyIiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExNDgxIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjIwMDAwOjEwIiwibmJmIjoxNTc3NjIwMDY0LCJleHAiOjE2NDA2OTIwNjQsImlhdCI6MTU3NzYyMDA2NH0.llBkb0hZnFwUy_5LGcTmQc2HQGC-bIpY_5f8Lralqng"

    const nickname = props.match.params.nickname;
    const [UserLevel, setUserLevel] = useState(0)
    const [CareerHighTier, setCareerHighTier] = useState("")
    const [MatchData, setMatchData] =  useState(null)
    const [AveragePossession, setAveragePossession] = useState(0)
    const [AverageHeader, setAverageHeader] = useState(0)
    const [AverageLongShot, setAverageLongShot] = useState(0)

    useEffect(() => {
        async function getUserData() {
        const userInfo = await getUserInfo(nickname)
        setUserLevel(userInfo.level)

        const careerHighTier = await getCareerHighTier(userInfo.accessId)

        setCareerHighTier(getDivision(careerHighTier[0]['division']))

        const matchID = await getMatchID(userInfo.accessId)
        const promises = matchID.map(getMatchData);
        const allMatches = await Promise.all(promises);
        // const matchResult = allMatches.map((match, index) => Object.assign({}, {key:index}, {matchDate: match.matchDate}, {home: match.matchInfo[0].nickname}, {away: match.matchInfo[1].nickname}, {homeGoalTotal: match.matchInfo[0].shoot.goalTotal}, {awayGoalTotal: match.matchInfo[1].shoot.goalTotal}))
        // console.log(allMatches)
        setMatchData(allMatches)


        let possession = 0;
        let shootTotal = 0;
        let shootHeading = 0;
        let shootOutPenalty = 0;

        for (let i = 0; i < allMatches.length; i++){
            if(allMatches[i].matchInfo.length === 2){
                if(allMatches[i]['matchInfo'][0]["nickname"] === nickname){
                    possession += allMatches[i]['matchInfo'][0]['matchDetail']['possession'];
                    shootTotal += allMatches[i]['matchInfo'][0]['shoot']['shootTotal'];
                    shootHeading += allMatches[i]['matchInfo'][0]['shoot']['shootHeading'];
                    shootOutPenalty += allMatches[i]['matchInfo'][0]['shoot']['shootOutPenalty'];
                }else {
                    possession += allMatches[i]['matchInfo'][1]['matchDetail']['possession'];
                    shootTotal += allMatches[i]['matchInfo'][1]['shoot']['shootTotal'];
                    shootHeading += allMatches[i]['matchInfo'][1]['shoot']['shootHeading'];
                    shootOutPenalty += allMatches[i]['matchInfo'][1]['shoot']['shootOutPenalty'];
                }
            }
        }

        setAveragePossession((possession/allMatches.length).toFixed(2));
        setAverageHeader((shootHeading/shootTotal*100).toFixed(2));
        setAverageLongShot((shootOutPenalty/shootTotal*100).toFixed(2));
    };
        getUserData()// 컴포넌트가 마운트 되고 getData함수를실행합니다.
    }, [nickname]); //<--- 두번째 인자로 빈 배열 넣어주기 ==> 첫 실행시에만 getData() 실행함




    function getUserInfo(nickname){
        return fetch(BaseURL + '/fifaonline4/v1.0/users?nickname=' + nickname, {
            method: 'get',
            headers: {
                "Authorization": key,
            },
        })
            .then(response => response.json())
            .catch(err => console.log(err))
    }

    function getCareerHighTier(AccessID){
        return fetch(BaseURL + "/fifaonline4/v1.0/users/" + AccessID + "/maxdivision", {
            method: 'get',
            headers: {
                "Authorization": key,
            },
        })
            .then(response => response.json())
            .catch(err => console.log(err))
    }

    function getMatchID (AccessID){ // 고유 경기 ID들
        return fetch(BaseURL + "/fifaonline4/v1.0/users/" + AccessID + "/matches?matchtype=50&offset=0&limit=50", {
            method: 'get',
            headers: {
                "Authorization": key,
            },
        })
            .then(response => response.json())
            .catch(err => console.log(err))
    }

    function getMatchData(matchID){ // 고유 경기 ID에 대한 경기 상세 정보
        return fetch(BaseURL + "/fifaonline4/v1.0/matches/" + matchID, {
            method: 'get',
            headers: {
                "Authorization": key,
            },
        })
            .then(response => response.json())
            .catch(err => console.log(err))
    }

    function getDivision(careerHighTier){
        switch(careerHighTier){
            case 1100:
                return "챌린지";
            case 2000:
                return "월드클래스 1";
            case 2100:
                return "월드클래스 2";
            case 2200:
                return "월드클래스 3";
            case 2300:
                return "프로 1";
            case 2400:
                return "프로 2";
            case 2500:
                return "프로 3";
            case 2600:
                return "세미프로 1";
            case 2700:
                return "세미프로 2";
            case 2800:
                return "세미프로 3";
            case 2900:
                return "아마추어 1";
            case 3000:
                return "아마추어 2";
            case 3100:
                return "아마추어 3";
            case 800:
                return "슈퍼 챔피언스";
            case 900:
                return "챔피언스";
            default:
                break;
        }
    }

    return (

        <div style={{position: 'relative', backgroundImage: "url(" + image1 + ")", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div>
               <Header style ={{position: 'absolute', top: 0}}/>
            </div>

            <div>
                <Manager nickname = {nickname} level = {UserLevel} tier = {CareerHighTier} averagePossession = {AveragePossession} averageHeader = {AverageHeader} averageLongShot = {AverageLongShot}/>
            </div>

            <div>
                <MatchTable  nickname = {nickname} matchData = {MatchData}/>
            </div>

            <div>
                <Footer style ={{position: 'absolute', bottom: 0}}/>
            </div>

        </div>
    );
}

export default GameRecordPage;
