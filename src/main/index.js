import './index.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function MainpageComponent() {
    const [getData, setDataPuppy] = useState([]);
    useEffect(function () {
        axios
            .get('https://71057566-4814-4374-bd4e-c5e359ff7d22.mock.pstmn.io/puppies')
            .then((result) => {
                console.log('..... MainpageComponent [result]', result);
                const puppyData = result.data.puppies;
                setDataPuppy(puppyData);
            })
            .catch((err) => {
                console.error(err);
                console.log('에러가 발생했어요!!');
            });
    }, []);

    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <img src="images/icons/logo.png" alt="logo" />
                </div>
            </div>
            <div id="container">
                <div id="banner">
                    <img src="images/banners/banner1.png" alt="banner1" />
                </div>
                <h1>사랑하는 애기들</h1>
                <div id="puppy-list">
                    {getData.map((puppy, idx) => {
                        // console.log(puppy, idx);
                        return (
                            <div className="puppy-card">
                                <div>
                                    <img className="puppy-img" src={puppy.imageUrl} alt="puppy" />
                                </div>
                                <div className="puppy-cont">
                                    <span className="puppy-name">{puppy.name}</span>
                                    <span className="puppy-status">{puppy.status}</span>
                                    <div className="puppy-footer">
                                        <div className="puppy-seller">
                                            <img className="puppy-avatar" src="images/icons/avatar.png" alt="avatar" />
                                            <span>{puppy.seller}</span>
                                        </div>
                                        <span className="puppy-date">2021-12</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div id="footer"></div>
        </div>
    );
}

export default MainpageComponent;
