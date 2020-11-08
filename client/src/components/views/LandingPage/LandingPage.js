import React from 'react';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom'

import Footer from '../../Footer/footer'
import Header from '../../Header/header'

import image1 from '../../../images/309478-P83VSI-858.jpg';
import { message } from 'antd';
import { Input } from 'antd';
const { Search } = Input;



function LandingPage(props) {

    const history = useHistory()
    const handleSubmit = (managerName) =>{
        // URL 이동
        if(managerName){
            history.push(`/manager/userName=${managerName}`); // 파라미터
        }else{
            message.info({
                content: '감독명을 입력해주세요',
                style: {
                    marginTop: '35vh',
                },
            });
        }
    }

    return (
        <div style = {{position: 'relative', backgroundImage: "url(" + image1 + ")", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div>
                <Header style ={{position: 'absolute', top: 0}}/>
            </div>

            <div style ={{width: '400px', height: '670px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto'}}>
                <Search
                    placeholder="감독명 입력"
                    size="large"
                    onSearch={managerName => handleSubmit(managerName)}
                />
            </div>

            <div>
                <Footer style ={{position: 'absolute', bottom: 0}}/>
            </div>

        </div>
    );
}

export default LandingPage;