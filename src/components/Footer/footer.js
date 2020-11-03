import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const {Footer} = Layout;
// style = {{backgroundColor:'white', display:'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold'}}

function MyFooter(props) {
    return (

            <Layout>
                {/*<Footer>*/}
                <Footer style ={{textAlign: 'center', fontWeight:'bold'}}>
                    Data based on NEXON DEVELOPERS
                </Footer>
            </Layout>

    );
}

export default MyFooter;