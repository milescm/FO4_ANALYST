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
        //
        // console.log(away)
        //
        // console.log("sw:", sw)
        // console.log("df:",df)
        // console.log("wbdm:",wbdm)
        // console.log("cm:",cm)
        // console.log("cam:",cam)
        // console.log("wf:",wf)
        // console.log("fw:",fw)

        return (
            <div className={ classNames("team", { "away": away }) }>

                { gk && <div className="goalkeeper">

                    <PlayerView player={ gk } key = {gk.spPosition} />

                </div> }


                <div className="lines">

                    <div className = "line"/>

                    { sw && <div className="line">
                        <div className = "sw"><PlayerView player={sw} key = {sw.spPosition}/></div></div>}

                    { df && <div className="line">
                        { df.map((df, i) =>
                            df.spPosition === 7 ? <div key = {i} className = "lb"><PlayerView player={ df }/></div> :
                                df.spPosition === 6 ? <div key = {i} className = "lcb"><PlayerView player={ df }/></div> :
                                    df.spPosition === 5 ? <div key = {i} className = "cb"><PlayerView player={ df }/></div> :
                                        df.spPosition === 4 ? <div key = {i} className = "rcb"><PlayerView player={ df }/></div> :
                                            df.spPosition === 3 ? <div  key = {i} className = "rb"><PlayerView player={ df }/></div> : null
                        )}

                        {/*{df.forEach(df => df.spPosition === 7? <div className = "lb"><PlayerView player={ df } key={ df.spPosition } /></div> :*/}
                        {/*    df.spPosition === 6 ? <div className = "lcb"><PlayerView player={ df } key={ df.spPosition } /></div> :*/}
                        {/*        df.spPosition === 5 ? <div className = "cb"><PlayerView player={ df } key={ df.spPosition } /></div> :*/}
                        {/*            df.spPosition === 4 ? <div className = "rcb"><PlayerView player={ df } key={ df.spPosition } /></div> :*/}
                        {/*                df.spPosition === 3 ? <div className = "rb"><PlayerView player={ df } key={ df.spPosition } /></div> : null)}*/}

                        {/*{ df.map((df, i) => <PlayerView player={ df } key={ df.spPosition } />) }*/}

                    </div> }



                    {/*{ df.map((df, i) => <PlayerView player={ df } key={ i } />) }*/}

                    {/*        /!*<PlayerView player={df[0]}/>*!/*/}


                        <div className = "line"/>
                        <div className = "line"/>

                        { wbdm && <div className="line">
                            { wbdm.map((wbdm, i) =>
                                wbdm.spPosition === 8 ? <div key = {i} className = "lwb"><PlayerView player={ wbdm } key={ wbdm.spPosition } /></div> :
                                    wbdm.spPosition === 9 ? <div key = {i} className = "rdm"><PlayerView player={ wbdm } key={ wbdm.spPosition } /></div> :
                                        wbdm.spPosition === 10 ? <div key = {i} className = "cdm"><PlayerView player={ wbdm } key={ wbdm.spPosition } /></div> :
                                            wbdm.spPosition === 11 ? <div key = {i} className = "ldm"><PlayerView player={ wbdm } key={ wbdm.spPosition } /></div> :
                                                wbdm.spPosition === 2 ? <div key = {i} className = "rwb"><PlayerView player={ wbdm } key={ wbdm.spPosition } /></div> : null
                            )}

                            {/*{ wbdm.map((wbdm, i) => <PlayerView player={ wbdm } key={ i } />) }*/}

                        </div> }
                        <div className = "line"/>


                        <div className = "line"/>

                        {/*{ cm && <div className="line">*/}

                        { cm && <div className="line">
                            { cm.map((cm, i) =>
                                cm.spPosition === 16 ? <div key = {i} className = "lm"><PlayerView player={ cm } key={ cm.spPosition } /></div> :
                                    cm.spPosition === 15 ? <div key = {i} className = "lcm"><PlayerView player={ cm } key={ cm.spPosition } /></div> :
                                        cm.spPosition === 14 ? <div key = {i} className = "cm"><PlayerView player={ cm } key={ cm.spPosition } /></div> :
                                            cm.spPosition === 13 ? <div key = {i} className = "rcm"><PlayerView player={ cm } key={ cm.spPosition } /></div> :
                                                cm.spPosition === 12 ? <div key = {i} className = "rm"><PlayerView player={ cm } key={ cm.spPosition } /></div> : null
                            )}
                            {/*{ cm.map((cm, i) => <PlayerView player={ cm } key={ i } />) }*/}

                        </div> }
                        <div className = "line"/>
                        <div className = "line"/>

                        { cam && <div className="line">

                            { cam.map((cam, i) =>
                                cam.spPosition === 19 ? <div key = {i} className = "lam"><PlayerView player={ cam } key={ cam.spPosition } /></div> :
                                    cam.spPosition === 18 ? <div key = {i} className = "cam"><PlayerView player={ cam } key={ cam.spPosition } /></div> :
                                        cam.spPosition === 17 ? <div key = {i} className = "ram"><PlayerView player={ cam } key={ cam.spPosition } /></div> : null
                            )}

                        </div> }
                        <div className = "line"/>


                        { wf && <div className="line">
                            { wf.map((wf, i) =>
                                wf.spPosition === 27 ? <div key = {i} className = "lw"><PlayerView player={ wf } key={ wf.spPosition } /></div> :
                                    wf.spPosition === 22 ? <div key = {i} className = "lf"><PlayerView player={ wf } key={ wf.spPosition } /></div> :
                                        wf.spPosition === 21 ? <div key = {i}className = "cf"><PlayerView player={ wf } key={ wf.spPosition } /></div> :
                                            wf.spPosition === 20 ? <div key = {i} className = "rf"><PlayerView player={ wf } key={ wf.spPosition } /></div> :
                                                wf.spPosition === 23 ? <div key = {i} className = "rw"><PlayerView player={ wf } key={ wf.spPosition } /></div> : null
                            )}
                        </div> }


                        <div className = "line"/>

                        { fw && <div className="line">
                            { fw.map((fw, i) =>
                                fw.spPosition === 26 ? <div key = {i} className = "ls"><PlayerView player={ fw } key={ fw.spPosition } /></div> :
                                    fw.spPosition === 25 ? <div key = {i} className = "st"><PlayerView player={ fw } key={ fw.spPosition } /></div> :
                                        fw.spPosition === 24 ? <div key = {i} className = "rs"><PlayerView player={ fw } key={ fw.spPosition } /></div> : null
                            )}

                        </div> }

                        <div className = "line"/>

                </div>

            </div>
        );
    }
}

export default TeamView;
