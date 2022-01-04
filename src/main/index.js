import './index.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

function MainPageComponent() {
    const [getData, setDataPuppy] = useState([]);
    useEffect(function () {
        axios
            // .get('https://cc3ab12b-6e66-45c3-8ebd-795669040d5f.mock.pstmn.io/puppies')
            .get('http://localhost:8080/puppies')
            .then((result) => {
                console.log('..... MainpageComponent [result]', result);
                const puppyData = result.data.puppies;
                setDataPuppy(puppyData);
            })
            .catch((err) => {
                console.error(err);
                console.log('[MainPageComponent] 에러가 발생했어요!!');
            });
    }, []);

    return (
        <div>
            <div id="banner">
                <img src="images/banners/banner1.png" alt="banner1" />
            </div>
            <h1>사랑하는 애기들</h1>
            <div id="puppy-list">
                {getData.map((puppy, idx) => {
                    // console.log(puppy, idx);
                    return (
                        <div className="puppy-card">
                            <Link className="puppy-link" to={`/puppies/${puppy.id}`}>
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
                                        <span className="puppy-date">{dayjs(puppy.createdAt).fromNow()}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MainPageComponent;
