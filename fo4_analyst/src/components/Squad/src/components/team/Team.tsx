import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import PlayerView, { Player } from "./player/Player";

import "./Team.scss";


export type Squad = {
    gk?: Player;
    sw?: Player;
    df?: Player[];
    wbdm?: Player[];
    cm?: Player[];
    cam?: Player[];
    wf?: Player[];
    fw?: Player[];
};

export type Team = {
    color?: string;
    squad: Squad;
};

export interface TeamViewProps {
    away?: boolean;
    team: Team;
}

interface TeamViewState {

}

class TeamView extends Component<TeamViewProps, TeamViewState> {

    static teamShape = PropTypes.shape({
        color: PropTypes.string,
        squad: PropTypes.shape({
            gk: PlayerView.playerShape,
            sw: PlayerView.playerShape,
            df: PropTypes.arrayOf(PlayerView.playerShape),
            wbdm: PropTypes.arrayOf(PlayerView.playerShape),
            cm: PropTypes.arrayOf(PlayerView.playerShape),
            cam: PropTypes.arrayOf(PlayerView.playerShape),
            wf: PropTypes.arrayOf(PlayerView.playerShape),
            fw: PropTypes.arrayOf(PlayerView.playerShape)
        }).isRequired
    });

    render() {

        const { away } = this.props;
        const { gk, sw, df, wbdm, cm, cam, wf, fw } = this.props.team.squad;

        console.log(away)

        console.log("df:",df)
        console.log("wbdm:",wbdm)
        console.log("cm:",cm)
        console.log("cam:",cam)
        console.log("wf:",wf)
        console.log("fw:",fw)

        return (
            <div className={ classNames("team", { "away": away }) }>

                { gk && <div className="goalkeeper">

                    <PlayerView player={ gk } />

                </div> }


                <div className="lines">

                    { sw && <div className="line">
                        <PlayerView player={sw}/>
                    </div>}

                    { df && <div className="line">
                        { df.map((df, i) =>
                            df.spPosition === 7 ? <div className = "lb"><PlayerView player={ df } key={ i } /></div> :
                                df.spPosition === 6 ? <div className = "lcb"><PlayerView player={ df } key={ i } /></div> :
                                    df.spPosition === 5 ? <div className = "cb"><PlayerView player={ df } key={ i } /></div> :
                                        df.spPosition === 4 ? <div className = "rcb"><PlayerView player={ df } key={ i } /></div> :
                                            df.spPosition === 3 ? <div className = "rb"><PlayerView player={ df } key={ i } /></div> : null
                        )}


                        {/*{ df.map((df, i) => <PlayerView player={ df } key={ i } />) }*/}

                        {/*<PlayerView player={df[0]}/>*/}



                    </div> }

                    {/*<div className = "lines"/>*/}

                    { wbdm && <div className="line">
                        { wbdm.map((df, i) =>
                            df.spPosition === 8 ? <div className = "lwb"><PlayerView player={ df } key={ i } /></div> :
                                df.spPosition === 9 ? <div className = "rdm"><PlayerView player={ df } key={ i } /></div> :
                                    df.spPosition === 10 ? <div className = "cdm"><PlayerView player={ df } key={ i } /></div> :
                                        df.spPosition === 11 ? <div className = "ldm"><PlayerView player={ df } key={ i } /></div> :
                                            df.spPosition === 2 ? <div className = "rwb"><PlayerView player={ df } key={ i } /></div> : null
                        )}

                        {/*{ wbdm.map((wbdm, i) => <PlayerView player={ wbdm } key={ i } />) }*/}

                    </div> }

                    {/*{ cm && <div className="line">*/}

                    { cm && <div className="line">
                        { cm.map((df, i) =>
                            df.spPosition === 16 ? <div className = "lm"><PlayerView player={ df } key={ i } /></div> :
                                df.spPosition === 15 ? <div className = "lcm"><PlayerView player={ df } key={ i } /></div> :
                                    df.spPosition === 14 ? <div className = "cm"><PlayerView player={ df } key={ i } /></div> :
                                        df.spPosition === 13 ? <div className = "rcm"><PlayerView player={ df } key={ i } /></div> :
                                            df.spPosition === 12 ? <div className = "rm"><PlayerView player={ df } key={ i } /></div> : null
                        )}
                        {/*{ cm.map((cm, i) => <PlayerView player={ cm } key={ i } />) }*/}

                    </div> }

                    { cam && <div className="line">
                        { cam.map((df, i) =>
                            df.spPosition === 19 ? <div className = "lam"><PlayerView player={ df } key={ i } /></div> :
                                df.spPosition === 18 ? <div className = "cam"><PlayerView player={ df } key={ i } /></div> :
                                    df.spPosition === 17 ? <div className = "ram"><PlayerView player={ df } key={ i } /></div> : null
                        )}

                    </div> }


                    { wf && <div className="line">
                        { wf.map((df, i) =>
                            df.spPosition === 27 ? <div className = "lw"><PlayerView player={ df } key={ i } /></div> :
                                df.spPosition === 22 ? <div className = "lf"><PlayerView player={ df } key={ i } /></div> :
                                    df.spPosition === 21 ? <div className = "cf"><PlayerView player={ df } key={ i } /></div> :
                                        df.spPosition === 20 ? <div className = "rf"><PlayerView player={ df } key={ i } /></div> :
                                            df.spPosition === 23 ? <div className = "rw"><PlayerView player={ df } key={ i } /></div> : null
                        )}
                    </div> }

                    { fw && <div className="line">
                        { fw.map((df, i) =>
                            df.spPosition === 26 ? <div className = "ls"><PlayerView player={ df } key={ i } /></div> :
                                df.spPosition === 25 ? <div className = "st"><PlayerView player={ df } key={ i } /></div> :
                                    df.spPosition === 24 ? <div className = "rs"><PlayerView player={ df } key={ i } /></div> : null
                        )}

                    </div> }

                </div>

            </div>
        );
    }
}

export default TeamView;
