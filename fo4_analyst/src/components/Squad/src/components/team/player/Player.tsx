import React, { Component } from "react";
import PropTypes from "prop-types";
import { Avatar, Badge  } from 'antd';
import "./Player.scss";
import {StarTwoTone, ThunderboltFilled} from "@ant-design/icons/lib";
import {useState} from "react";
import { Modal, Button } from 'antd';



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
    ismom?: number
}

interface PlayerViewProps {
    player: Player;
}

interface PlayerViewState {

}

class PlayerView extends Component<PlayerViewProps, PlayerViewState> {

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
        ismom: PropTypes.number
    })

    render() {
        const { player } = this.props;

        return (
            <div>
                {/*<div className="player-view">*/}
                {/*<Avatar size ='large' style={{ backgroundColor: '#ffffff' }}/>*/}
                <div>
                    { player.ismom == 1 && <ThunderboltFilled style ={{color: 'yellow'}}/>}
                    <Badge >
                        <Avatar  className ="player">
                            {/*style={{ color: '#ffffff', backgroundColor: '#EB5B14'}*/}
                            {player.spRating}
                        </Avatar>
                    </Badge>
                    {/*<div className="player">*/}
                    {/*    <div className="number">{ player.number }</div>*/}
                    <div style={{fontSize: '11px', textAlign: "center", width: "auto", fontWeight: "bold", color: "black"}}>{player.name}</div>
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default PlayerView;
