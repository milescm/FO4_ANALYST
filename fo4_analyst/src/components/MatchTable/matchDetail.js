import React, {useState} from 'react';
import SoccerLineUp from '../Squad/src';
import spid from '../../datas/spid';
import spposition from '../../datas/spposition';



function MatchDetail(props) {

    const homeTeam = props.matchInfo[0].player;
    const awayTeam = props.matchInfo[1].player;

    const homeKeyPlayers = homeTeam.filter(function(player){
        return player.spPosition !== 28
    })

    const awayKeyPlayers = awayTeam.filter(function(player){
        return player.spPosition !== 28
    })

    const homeSquad = makeSquad(homeKeyPlayers);
    const awaySquad = makeSquad(awayKeyPlayers);

    function getPlayerName(myPlayer){ // 이름
        let name = spid.find(player => player.id === myPlayer.spId).name.split(' ')
        return name[name.length-1]
    }

    function getPlayerPosition(myPlayer){ // 이름
        return spposition.find(player => player.spposition === myPlayer.spPosition).desc
    }


    function getmomRating(homeKeyPlayers, awayKeyPlayers){
        let homeMVP = Math.max.apply(Math, homeKeyPlayers.map(function(keyPlayer) { return keyPlayer.status.spRating; }))
        let awayMVP = Math.max.apply(Math, awayKeyPlayers.map(function(keyPlayer) { return keyPlayer.status.spRating; }))
        return homeMVP > awayMVP ? homeMVP : awayMVP
    }


    // function getPlayerImage(spId){
    //     const imgSrc1 = "https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p" + spId.toString() +".png";
    //     // const imgSrc2 = "https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p" + spId.toString() +".png";
    //     // const imgSrc3 = "https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p" + spId.toString().substring(3, 9) +".png";
    //     // const imgSrc4 = "https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common/players/p" + spId.toString().substring(3, 9) + ".png"
    //     // return imgSrc1
    // }




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
            let spPosition = keyPlayer.spPosition;
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

            if (momRating === spRating){
                ismom = 1;
            }

            // let imageSrc = getPlayerImage(keyPlayer.spId)

            switch(spPosition){

                case 0: //GK
                    gk = {}
                    gk.name = name;
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
                    break;
                case 1: // SW
                    sw = {}
                    sw.name = name;
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
                    // sw.imageSrc = imageSrc;
                    break;
                case 2: // RWB
                    player = {name, position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    wbdm.push(player);
                    break;
                case 3: // RB
                    player = {name, position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    df.push(player);
                    break;
                case 4: // RCB
                    player = {name, position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    df.push(player);
                    break;
                case 5: // CB
                    player = {name, position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    df.push(player);
                    break;
                case 6: // LCB
                    player = {name, position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    df.push(player);
                    break;
                case 7: // LB
                    player = {name, position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    df.push(player);
                    break;
                case 8: // LWB
                    player = {name, position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    wbdm.push(player);
                    break;
                case 9: // RDM
                    player = {name, position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    wbdm.push(player);
                    break;
                case 10: // CDM
                    player = {name, position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    wbdm.push(player);
                    break;
                case 11: // LDM
                    player = {name, position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    wbdm.push(player);
                    break;
                case 12: // RM
                    player = {name, position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    cm.push(player);
                    break;
                case 13: // RCM
                    player = {name, position, assist, block, dribble,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    cm.push(player);
                    break;
                case 14: // CM
                    player = {name, position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    cm.push(player);
                    break;
                case 15: // LCM
                    player = {name, position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    cm.push(player);
                    break;
                case 16: // LM
                    player = {name,  position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    cm.push(player);
                    break;
                case 17: // RAM
                    player = {name, position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    cam.push(player);
                    break;
                case 18: // CAM
                    player = {name, position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    cam.push(player);
                    break;
                case 19: // LAM
                    player = {name, position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    cam.push(player);
                    break;
                case 20: // RF
                    player = {name,  position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    wf.push(player);
                    break;
                case 21: // CF
                    player = {name, position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    wf.push(player);
                    break;
                case 22: // LF
                    player = {name,  position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    wf.push(player);
                    break;
                case 23: // RW
                    player = {name,  position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    wf.push(player);
                    break;
                case 24: // RS
                    player = {name,  position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    fw.push(player);
                    break;
                case 25: // ST
                    player = {name,  position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    fw.push(player);
                    break;
                case 26: // LS
                    player = {name,  position, assist, block, dribble, ismom,
                        effectiveShoot, goal, passSuccess, passTry, shoot, spRating, tackle};
                    fw.push(player);
                    break;
                case 27: // LW
                    player = {name, position, assist, block, dribble, ismom,
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
        <div>
            <SoccerLineUp
                size={ "big" }
                color={ "#33620E" }
                pattern={ "squares" }
                homeTeam={ buildHomeTeam(homeTeam) || undefined }
                awayTeam={ buildAwayTeam(awayTeam) || undefined }
            />
        </div>
    );
}

export default MatchDetail;