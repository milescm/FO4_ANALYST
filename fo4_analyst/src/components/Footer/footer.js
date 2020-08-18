import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const {Footer} = Layout;
// style = {{backgroundColor:'white', display:'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold'}}

function MyFooter(props) {
    return (
        <div>
            <Layout>
                <Footer style = {{width: '100%', position: 'absolute', bottom: 0, backgroundColor:'white', display:'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold'}}>
                    Data based on Nexon Developers
                </Footer>
            </Layout>
        </div>
    );
}

export default MyFooter;