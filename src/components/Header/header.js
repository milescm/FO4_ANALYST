import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const {Header} = Layout;
{/*<div style = {{position: 'absolute', top: 0, width: '100%'}}>*/}

function MyHeader(props) {
    return (

            <Layout>
                {/*<Header>*/}
                <Header style = {{backgroundColor: '#262626', display:'flex', justifyContent: 'center', alignItems: 'center', fontSize : '25px', color: 'white',  fontFamily:'sans-serif' }}>
                    FIFA ONLINE 4 ANALYST
                </Header>
            </Layout>

    );
}

export default MyHeader;