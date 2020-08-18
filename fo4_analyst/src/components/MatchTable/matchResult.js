import React from 'react';

function MatchResult(props) {
    return (
        <div style ={{textAlign: 'center'}}>
            {props.matchResult.home} {props.matchResult.homeGoalTotal} : {props.matchResult.awayGoalTotal} {props.matchResult.away}
        </div>
    );
}

export default MatchResult;