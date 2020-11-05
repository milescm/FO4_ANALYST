import React from 'react';
import SoccerLineUp from '../Squad/src';
import spid from '../../datas/spid.json';
import spposition from '../../datas/spposition.json';

import {Card, CardTitle, CardText, CardDeck} from 'reactstrap';
import image1 from '../../images/309478-P83VSI-858.jpg';
// import image2 from '../../images/audience-1866738_1920.jpg'
// import image3 from '../../images/istockphoto-1168591951-170667a.jpg';
// import image4 from '../../images/soccer-768482_1920.jpg';



function MatchDetail(props) {

    const homeTeam = props.matchInfo[0].player;
    const awayTeam = props.matchInfo[1].player;


    const homeKeyPlayers = homeTeam.filter(function(player){
        return player.spPosition !== 28
    })

    let homeRatings = 0;
    let awayRatings = 0;


    homeKeyPlayers.map((kp) =>
        homeRatings += kp.status.spRating
    )

    homeRatings = ((homeRatings/11).toFixed(2));


    const awayKeyPlayers = awayTeam.filter(function(player){
        return player.spPosition !== 28
    });

    awayKeyPlayers.map((kp) =>
        awayRatings += kp.status.spRating
    )

    awayRatings = ((awayRatings/11).toFixed(2));

    const homeSquad = makeSquad(homeKeyPlayers.sort(function(a,b){
        return b['spPosition'] - a['spPosition'];
    }));

    const awaySquad = makeSquad(awayKeyPlayers.sort(function(a,b){
        return a['spPosition'] - b['spPosition'];
    }));

    function getPlayerName(myPlayer){
        let name = spid.find(player => player.id.toString().substring(3, 9) === myPlayer.spId.toString().substring(3, 9)).name.split(' ')
        return name[name.length-1]
    }

    function getPlayerPosition(myPlayer){
        return spposition.find(player => player.spposition === myPlayer.spPosition).desc
    }

    function getmomRating(homeKeyPlayers, awayKeyPlayers){
        let homeMVP = Math.max.apply(Math, homeKeyPlayers.map(function(keyPlayer) { return keyPlayer.status.spRating; }))
        let awayMVP = Math.max.apply(Math, awayKeyPlayers.map(function(keyPlayer) { return keyPlayer.status.spRating; }))
        return homeMVP > awayMVP ? homeMVP : awayMVP
    }

    function getPlayerImage(spId){
        return "https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p" + parseInt(spId.toString().substring(3, 9), 10) + ".png"
    }

    function makeSquad(keyPlayers){

        var momRating = getmomRating(homeKeyPlayers, awayKeyPlayers)
        let player;
        let gk;
        let sw;
        let df = [];
        let wbdm = [];
        let cm = [];
        let cam = [];
        let wf = [];
        let fw = [];


        for (var keyPlayer of keyPlayers) {
            let color;

            let spPosition = keyPlayer.spPosition;

            let key = spPosition;
            let name = getPlayerName(keyPlayer);
            let stat = keyPlayer.status;
            let position = getPlayerPosition(keyPlayer);
            let assist = stat.assist;
            let block = stat.block;
            let dribble = stat.dribble;
            let effectiveShoot = stat.effectiveShoot;
            let goal = stat.goal;
            let passSuccess = stat.passSuccess;
            let passTry = stat.passTry;
            let shoot = stat.shoot;
            let spRating = stat.spRating;
            let tackle = stat.tackle;
            let ismom = 0;
            let imageSrc = getPlayerImage(keyPlayer.spId)
            if (momRating === spRating){
                ismom = 1;
            }

            if ( 1<= spPosition && spPosition<= 8){
                color = "primary"
            }else if (9 <= spPosition && spPosition<= 19){
                color ="success"
            }else if (20 <= spPosition && spPosition<= 27){
                color = "danger"
            }


            switch(spPosition){

                case 0: //GK
                    gk = {}
                    gk.name = name;
                    gk.key = key;
                    gk.spPosition = spPosition;
                    gk.position = position;
                    gk.assist = assist;
                    gk.block = block;
                    gk.dribble = dribble;
                    gk.effectiveShoot = effectiveShoot;
                    gk.goal = goal;
                    gk.passSuccess = passSuccess;
                    gk.passTry = passTry;
                    gk.shoot = shoot;
                    gk.spRating = spRating;
                    gk.tackle = tackle;
                    gk.ismom = ismom;
                    gk.imageSrc = imageSrc;
                    gk.color = "warning";
                    break;
                case 1: // SW
                    sw = {}
                    sw.name = name;
                    sw.key = key;
                    sw.spPosition = spPosition;
                    sw.position = position;
                    sw.assist = assist;
                    sw.block = block;
                    sw.dribble = dribble;
                    sw.effectiveShoot = effectiveShoot;
                    sw.goal = goal;
                    sw.passSuccess = passSuccess;
                    sw.passTry = passTry;
                    sw.shoot = shoot;
                    sw.spRating = spRating;
                    sw.tackle = tackle;
                    sw.ismom = ismom;
                    sw.imageSrc = imageSrc;
                    sw.color = "primary"
                    break;
                case 2: // RWB
                    player = {name, position, assist, block, dribble, ismom, imageSrc, spPosition,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    wbdm.push(player);
                    break;
                case 3: // RB
                    player = {name, position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    df.push(player);
                    break;
                case 4: // RCB
                    player = {name, position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    df.push(player);
                    break;
                case 5: // CB
                    player = {name, position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    df.push(player);
                    break;
                case 6: // LCB
                    player = {name, position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    df.push(player);
                    break;
                case 7: // LB
                    player = {name, position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    df.push(player);
                    break;
                case 8: // LWB
                    player = {name, position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    wbdm.push(player);
                    break;
                case 9: // RDM
                    player = {name, position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    wbdm.push(player);
                    break;
                case 10: // CDM
                    player = {name, position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    wbdm.push(player);
                    break;
                case 11: // LDM
                    player = {name, position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    wbdm.push(player);
                    break;
                case 12: // RM
                    player = {name, position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    cm.push(player);
                    break;
                case 13: // RCM
                    player = {name, position, assist, block, dribble,ismom, imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    cm.push(player);
                    break;
                case 14: // CM
                    player = {name, position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    cm.push(player);
                    break;
                case 15: // LCM
                    player = {name, position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    cm.push(player);
                    break;
                case 16: // LM
                    player = {name,  position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    cm.push(player);
                    break;
                case 17: // RAM
                    player = {name, position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    cam.push(player);
                    break;
                case 18: // CAM
                    player = {name, position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    cam.push(player);
                    break;
                case 19: // LAM
                    player = {name, position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    cam.push(player);
                    break;
                case 20: // RF
                    player = {name,  position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    wf.push(player);
                    break;
                case 21: // CF
                    player = {name, position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    wf.push(player);
                    break;
                case 22: // LF
                    player = {name,  position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    wf.push(player);
                    break;
                case 23: // RW
                    player = {name,  position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    wf.push(player);
                    break;
                case 24: // RS
                    player = {name,  position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    fw.push(player);
                    break;
                case 25: // ST
                    player = {name,  position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    fw.push(player);
                    break;
                case 26: // LS
                    player = {name,  position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    fw.push(player);
                    break;
                case 27: // LW
                    player = {name, position, assist, block, dribble, ismom,imageSrc,spPosition,key,color,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    wf.push(player);
                    break;
                default:
                    break;
            }
        }
        return {gk, sw, df, wbdm, cm, cam, wf, fw}
    }


    function buildHomeTeam(){
        return {
            // color: 'lightcoral',
            squad: homeSquad
        }
    }

    function buildAwayTeam() {
        return {
            // color: 'lightblue',
            squad: awaySquad
        }
    }

    return (
        <div style ={{display:'flex', justifyContent: 'center', alignItems: 'center',width: '100%', height: '100%', backgroundImage: "url(" + image1 + ")", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', margin: 0 }}>
            <div>
                <SoccerLineUp style ={{display:'flex', justifyContent: 'center', alignItems: 'center'}}
                    size={ "big" }
                    color={ "#33620E" }
                    pattern={ "lines" }
                    homeTeam={ buildHomeTeam(homeTeam) || undefined }
                    awayTeam={ buildAwayTeam(awayTeam) || undefined }
                />

                <div style ={{textAlign: 'center' , position: 'relative', top : '5px'}}>

                    {/*평균 평점, 총 슈팅 수, 점유율, 패스 성공률, 태클 수, 블락 수*/}
                    <CardDeck>
                        <Card body inverse style={{backgroundColor: '#333', borderColor: '#7EC508' }}>
                            <CardTitle><b><span style = {{color: '#7EC508'}}>평균 평점</span></b></CardTitle>
                            <h4 style ={{color: 'white'}}><CardText><span style = {{color: '#EB5B14'}}>{homeRatings}</span> | <span style = {{color: '#008BE0'}}>{awayRatings}</span></CardText></h4>
                        </Card>

                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#7EC508' }}>
                            <CardTitle><b><span style = {{color: '#7EC508'}}>슈팅</span></b></CardTitle>
                            <h4 style ={{color: 'white'}}><CardText><span style = {{color: '#EB5B14'}}>{props.matchInfo[0].shoot.shootTotal}</span> | <span style = {{color: '#008BE0'}}>{props.matchInfo[1].shoot.shootTotal}</span></CardText></h4>
                        </Card>

                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#7EC508' }}>
                            <CardTitle><b><span style = {{color: '#7EC508'}}>점유율(%)</span></b></CardTitle>
                            <h4 style ={{color: 'white'}}><CardText><span style = {{color: '#EB5B14'}}>{props.matchInfo[0].matchDetail.possession}</span> | <span style = {{color: '#008BE0'}}>{props.matchInfo[1].matchDetail.possession}</span></CardText></h4>
                        </Card>

                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#7EC508' }}>
                            <CardTitle><b><span style = {{color: '#7EC508'}}>패스 성공률(%)</span></b></CardTitle>
                            <h4 style ={{color: 'white'}}><CardText><span style = {{color: '#EB5B14'}}>{(props.matchInfo[0].pass.passSuccess/props.matchInfo[0].pass.passTry*100).toFixed(0)}</span> | <span style = {{color: '#008BE0'}}>{(props.matchInfo[1].pass.passSuccess/props.matchInfo[1].pass.passTry*100).toFixed(0)}</span></CardText></h4>
                        </Card>

                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#7EC508' }}>
                            <CardTitle><b><span style = {{color: '#7EC508'}}>태클</span></b></CardTitle>
                            <h4 style ={{color: 'white'}}><CardText><span style = {{color: '#EB5B14'}}>{props.matchInfo[0].defence.tackleSuccess}</span> | <span style = {{color: '#008BE0'}}>{props.matchInfo[1].defence.tackleSuccess}</span></CardText></h4>
                        </Card>

                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#7EC508' }}>
                            <CardTitle><b><span style = {{color: '#7EC508'}}>블락</span></b></CardTitle>
                            <h4 style ={{color: 'white'}}><CardText><span style = {{color: '#EB5B14'}}>{props.matchInfo[0].defence.blockSuccess}</span> | <span style = {{color: '#008BE0'}}>{props.matchInfo[1].defence.blockSuccess}</span></CardText></h4>
                        </Card>
                    </CardDeck>

                </div>
            </div>
        </div>

    );
}

export default MatchDetail;