import React from 'react';
import { Badge } from 'reactstrap';


function MatchResult(props) {
    console.log("MatchResult props:", props)
    return (
        <div style ={{textAlign: 'center'}}>
            {props.matchResult.home} <Badge color ="success"> {props.matchResult.homeGoalTotal} : {props.matchResult.awayGoalTotal} </Badge> {props.matchResult.away}
        </div>
    );
}

export default MatchResult;