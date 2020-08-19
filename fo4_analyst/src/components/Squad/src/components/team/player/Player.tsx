import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Typography  } from 'antd';
import "./Player.scss";
import {StarTwoTone, ThunderboltFilled} from "@ant-design/icons/lib";
import { Badge } from 'reactstrap';

import { Modal, Card} from 'antd';



export type Player = {
    name?: string;
    position?:string,
    assist?: number,
    block?: number,
    dribble?: number,
    effectiveShoot?: number,
    goal?: number,
    passSuccess?: number,
    passTry?: number,
    shoot?: number,
    spRating?: number,
    tackle?: number,
    ismom?: number,
    imageSrc?: string,
    spPosition?: number,
    color?: string;
}


interface PlayerViewProps {
    player: Player;
}

interface PlayerViewState {
    visible: boolean
}

class PlayerView extends Component<PlayerViewProps, PlayerViewState> {

    state: PlayerViewState = {
        visible:false
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState(
            ({visible}) => ({visible: false})
        );
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };


    static playerShape = PropTypes.shape({
        name: PropTypes.string,
        position: PropTypes.string,
        assist: PropTypes.number,
        block: PropTypes.number,
        dribble: PropTypes.number,
        effectiveShoot: PropTypes.number,
        goal: PropTypes.number,
        passSuccess: PropTypes.number,
        passTry: PropTypes.number,
        shoot: PropTypes.number,
        spRating: PropTypes.number,
        tackle: PropTypes.number,
        ismom: PropTypes.number,
        imageSrc: PropTypes.string,
        spPosition: PropTypes.number,
        color: PropTypes.string
    })

    render() {
        const { player } = this.props;
        console.log(player)
        const { Text, Link } = Typography;
        const {showModal,handleOk, handleCancel} = this;

        return (
            <div>
                <div className="player-view">
                    <div style ={{cursor: 'pointer'}} onClick = {showModal}>
                        { player.ismom == 1 && <ThunderboltFilled style ={{color: 'yellow'}}/>}
                        <Avatar  size= {45} src= {player.imageSrc} className ="player">{/*style={{ color: '#ffffff', backgroundColor: '#EB5B14'}*/}
                            {player.spRating}
                        </Avatar>
                    </div>
                </div>
                <div style={{fontSize: '11px', textAlign: "center", width: "auto", color: "white"}}> <Badge color={player.color}>{player.position}</Badge> {player.name}</div>





                <Modal
                    title="Player Stat"
                    visible={this.state.visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >

                    <Card hoverable cover={<img style={{ width: 120 }} alt={player.name} src={player.imageSrc} />}>
                        <p>평점: {player.spRating}</p>
                        <p>슈팅 시도: {player.shoot}</p>
                        <p>유효 슈팅: {player.effectiveShoot}</p>
                        <p>골: {player.goal}</p>
                        <p>패스 시도: {player.passTry}</p>
                        <p>패스 성공: {player.passSuccess}</p>
                        <p>어시스트: {player.assist}</p>
                        <p>태클 시도: {player.tackle}</p>
                        <p>차단: {player.block}</p>
                    </Card>

                </Modal>
            </div>

        );
    }
}

export default PlayerView;












{/*<div className="player">*/}
{/*    <div className="number">{ player.number }</div>*/}
{/*<div style={{fontSize: '11px', textAlign: "center", width: "auto", fontWeight: "bold", color: "black"}}>{player.name}</div>*/}
{/*</div>*/}
