import React from 'react';
import { Card, CardTitle, CardText,CardDeck} from 'reactstrap';

// import { Statistic, Card, Row, Col } from 'antd';
// const { Meta } = Card;

function Manager(props) { //  매니저(감독) 기본 정보 : 닉네임, 레벨, 역대 최고 티어 ///////// 평균 점유율, 헤더 시도율, 중거리 시도율


    return (
        <div style ={{textAlign: 'center', margin: '0 auto', width: '75%', position: 'relative', top: '10px'}}>
        {/*<div style ={{margin: '0 auto', width: '75%', position: 'relative', top: '10px', textAlign: 'center'}}>*/}
            {/*<div style ={{ alignItems: 'center', position: 'relative', top: '10px',}}>*/}
            <CardDeck>
                <Card body inverse style={{backgroundColor: '#333', borderColor: '#7EC508', textAlign: 'left'}}>
                    <CardTitle><b><span style = {{color: '#7EC508'}}>감독명 </span>  {props.nickname}</b></CardTitle>
                    <CardText>
                        <b><span style = {{color: '#7EC508'}}>레벨 </span> {props.level}</b>
                    </CardText>
                    <CardText>
                        <b><span style = {{color: '#7EC508'}}>역대 최고 등급 </span>{props.tier}</b>
                    </CardText>
                </Card>

                <Card body inverse style={{backgroundColor: '#333', borderColor: '#7EC508' }}>
                    <CardTitle><b><span style = {{color: '#7EC508'}}>최대 50경기 평균 점유율 </span></b></CardTitle>
                    <h2 style ={{color: 'white'}}><CardText>{props.averagePossession}%</CardText></h2>
                </Card>

                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#7EC508' }}>
                    <CardTitle><b><span style = {{color: '#7EC508'}}>최대 50경기 평균 헤더 비율 </span></b></CardTitle>
                    <h2 style ={{color: 'white'}}><CardText>{props.averageHeader}%</CardText></h2>
                </Card>

                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#7EC508' }}>
                    <CardTitle><b><span style = {{color: '#7EC508'}}>최대 50경기 평균 중거리 슛 비율 </span></b></CardTitle>
                    <h2 style ={{color: 'white'}}><CardText>{props.averageLongShot}%</CardText></h2>
                </Card>

                {/*<Card body inverse style={{ backgroundColor: '#333', borderColor: '#DFDFDF' }}>*/}
                {/*    <CardTitle><b>중거리 슛 비율</b></CardTitle>*/}
                {/*    <h2><CardText>{(this.props.state.OutPenaltyPortion*100).toFixed(2)}%</CardText></h2>*/}
                {/*</Card>*/}
            </CardDeck>
        </div>
        // {/*<div style ={{width: '50%', margin: '0 auto', justifyContent: 'center', textAlign: 'center', alignItems: 'center', fontWeight: 'bold'}}>*/}
        // {/*    <Row style ={{position: 'relative', top: '10px'}} gutter={30}>*/}
        // {/*        <Col span={8}>*/}
        // {/*            <Card title="감독명">*/}
        // {/*                <Card.Grid style={gridStyle}>{props.nickname}</Card.Grid>*/}
        // {/*            </Card>*/}
        // {/*        </Col>*/}
        // {/*        <Col span={8}>*/}
        // {/*            <Card title="감독 레벨" >*/}
        // {/*                <Card.Grid style={gridStyle}>{props.level}</Card.Grid>*/}
        // {/*            </Card>*/}
        // {/*        </Col>*/}
        // {/*        <Col span={8}>*/}
        // {/*            <Card title="역대 최고 티어">*/}
        // {/*                <Card.Grid style={gridStyle}>{props.tier}</Card.Grid>*/}
        // {/*            </Card>*/}
        // {/*        </Col>*/}
        // {/*    </Row>*/}
        // {/*</div>*/}
    );
}

export default Manager;