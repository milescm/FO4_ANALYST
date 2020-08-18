import React from 'react';

import { Statistic, Card, Row, Col } from 'antd';
const { Meta } = Card;

function Manager(props) { //  매니저(감독) 기본 정보 : 닉네임, 레벨, 역대 최고 티어 ///////// 평균 점유율, 헤더 시도율, 중거리 시도율
    const gridStyle = {
        width: '100%',
        textAlign: 'center',
    };

    return (
        <div style ={{width: '50%', margin: '0 auto', justifyContent: 'center', textAlign: 'center', alignItems: 'center', fontWeight: 'bold'}}>
            <br/>
            <Row gutter={30}>
                <Col span={8}>
                    <Card title="감독명">
                        <Card.Grid style={gridStyle}>{props.nickname}</Card.Grid>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="감독 레벨" >
                        <Card.Grid style={gridStyle}>{props.level}</Card.Grid>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="역대 최고 티어">
                        <Card.Grid style={gridStyle}>{props.tier}</Card.Grid>
                    </Card>
                </Col>
            </Row>
        </div>
);
}

export default Manager;