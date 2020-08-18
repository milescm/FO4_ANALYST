import React from 'react';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom'

import Footer from '../../Footer/footer'
import Header from '../../Header/header'

import image1 from '../../../images/309478-P83VSI-858.jpg';
import image2 from '../../../images/audience-1866738_1920.jpg'
import image3 from '../../../images/istockphoto-1168591951-170667a.jpg';
import image4 from '../../../images/soccer-768482_1920.jpg';

import { Input } from 'antd';
const { Search } = Input;

function LandingPage(props) {

    const history = useHistory()
    console.log(props)

    const handleSubmit = (nickname) => {
        history.push({
            pathname: `/manager/userName=${nickname}`
        });

    }
    // style={{ backgroundImage:`url(${InnerBgImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}}
    return (
        <div>
            <div style={{position: 'relative' , backgroundImage: "url(" + image1 + ")", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', margin: 0}}>
                <div>
                    <Header/>
                </div>

                <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', height: '83vh', position: 'relative'}}>
                    <Search
                        style={{width: '30%'}}
                        placeholder="감독명 입력"
                        size="large"
                        onSearch={nickname => handleSubmit(nickname)}
                    />
                </div>

            </div>

            <div>
                <Footer/>
            </div>
        </div>


    );
}

export default LandingPage;