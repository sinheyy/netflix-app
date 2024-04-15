import React from 'react'
import "./Footer.style.css"

const Footer = () => {
    return (
        <div className='footer'>
            <ul>
                <li>자주 묻는 질문</li>
                <li>고객 센터</li>
                <li>계정</li>
                <li>미디어 센터</li>
                <li>이용 약관</li>
                <li>개인정보 처리방침</li>
                <li>쿠키 설정</li>
                <li>문의하기</li>
            </ul>

            <div className="footer-text">
                Gitlab : https://gitlab.com/sinheyyy/netflix-app
            </div>
            <div className="footer-text">
                * 비상업적 용도로 제작된 개인 프로젝트 웹사이트 입니다. *
            </div>

        </div>
    )
}

export default Footer
