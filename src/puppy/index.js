import './index.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PuppyPageComponent() {
    const { id } = useParams();
    // console.log('..... PuppyPageComponent [useParams id]', id);
    const [data, setData] = useState(null);

    useEffect(function () {
        axios
            .get(`https://cc3ab12b-6e66-45c3-8ebd-795669040d5f.mock.pstmn.io/puppies/${id}`)
            .then((result) => {
                const puppyPageData = result.data;
                setData(puppyPageData);
            })
            .catch((err) => {
                console.log('[PuppyPageComponent] 에러발생 : ', err);
            });
    }, []);

    if (data === null) {
        return (
            <div>
                <h1 className="tit-loading">퍼피 {id} 페이지 로딩중이에요!</h1>
            </div>
        );
    }

    return (
        <div>
            <h1 className="tit-page">퍼피 페이지 {id} 강아지 소개해요!</h1>
            <div id="image-box">
                <img src={`/${data.imageUrl}`} alt="이미지" />
            </div>
            <div id="profile-box">
                <img src="/images/icons/avatar.png" alt="아바타" />
                <span>{data.seller}</span>
            </div>
            <div id="cont-box">
                <div id="name">{data.name}</div>
                <div id="status">{data.status} 놀아죵놀아죵!!</div>
                <div id="createdAt">2021년 12월 6일</div>
                <div id="description">{data.description}</div>
            </div>
        </div>
    );
}

export default PuppyPageComponent;
