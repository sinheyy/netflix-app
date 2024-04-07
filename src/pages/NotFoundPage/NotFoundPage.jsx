import React from 'react'
import './NotFoundPage.style.css';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className='not-found'>
            <div onClick={() => navigate("/")}>
                <img width={200} src="siya_logo.png"></img>
            </div>

            <h1>이 페이지는 존재하지 않습니다. url 확인부탁드립니다. 🥹🐾</h1>
            <h3>📢HOME으로 돌아가려면 위에 로고 또는 아래 이미지를 클릭하세요</h3>
            <img className="image" onClick={() => navigate("/")} src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        </div>
    )
}

export default NotFoundPage
