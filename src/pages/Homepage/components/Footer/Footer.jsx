import React from 'react'
import "./Footer.style.css"

const Footer = () => {
    return (
        <div className='footer'>
            <ul>
                <li>FAQ</li>
                <li>Help Center</li>
                <li>Account</li>
                <li>Media Center</li>
                <li>Privacy Statement</li>
                <li>Cookie Preferences</li>
                <li>Corporate Information</li>
                <li>Contact us</li>
            </ul>

            <div className="footer-text">
                Github : https://github.com/sinheyy/siya-app
            </div>
            <div className="footer-text">
                * 비상업적 용도로 제작된 개인 프로젝트 웹사이트 입니다. *
            </div>

        </div>
    )
}

export default Footer
