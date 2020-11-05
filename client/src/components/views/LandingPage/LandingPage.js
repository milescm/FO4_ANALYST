import React from 'react';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom'

import Footer from '../../Footer/footer'
import Header from '../../Header/header'
import key from '../../config/key'

import image1 from '../../../images/309478-P83VSI-858.jpg';


import { message } from 'antd';

import { Input } from 'antd';
const { Search } = Input;



function LandingPage(props) {
    const key = key;
    const BaseURL = process.env.NODE_ENV === 'development' ? '' : 'https://api.nexon.co.kr'



    // var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); // 1707
    // var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); // 803
    //
    // alert(w);


    const history = useHistory()

    function getUserInfo(nickname){
        return fetch(BaseURL + '/fifaonline4/v1.0/users?nickname=' + nickname, {
            method: 'get',
            headers: {
                "Authorization": key,
            },
        })
            .then(response => response.json())
            .catch(err => console.log(err))
    }

    function getCareerHighTier(AccessID){
        return fetch(BaseURL + "/fifaonline4/v1.0/users/" + AccessID + "/maxdivision", {
            method: 'get',
            headers: {
                "Authorization": key,
            },
        })
            .then(response => response.json())
            .catch(err => console.log(err))
    }

    async function handleSubmit(nickname){
        const userInfo = await getUserInfo(nickname)
        if (userInfo.message){
            message.info({
                content: '존재하지 않는 유저입니다.',
                style: {
                    marginTop: '35vh',
                },
            });
        }
        else{
            const careerHighTier = await getCareerHighTier(userInfo.accessId)
            if(careerHighTier.length === 0){
                message.info({
                    content: '공식 경기 기록이 없는 유저입니다.',
                    style: {
                        marginTop: '35vh',
                    },
                });
            }
            if(careerHighTier.length !== 0){
                history.push({
                    pathname: `/manager/userName=${nickname}`
                });
            }
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
                    onSearch={nickname => handleSubmit(nickname)}
                />
            </div>

            <div>
                <Footer style ={{position: 'absolute', bottom: 0}}/>
            </div>

        </div>


    );
}

export default LandingPage;