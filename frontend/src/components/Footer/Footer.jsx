import React from 'react'
import './Footer.css'

import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={logo} alt='' />
                    <p>Thiên đường ẩm thực Yummy</p>
                    <div className="footer-social-icons">
                        <i className='bx bxl-facebook'></i>
                        <i className='bx bxl-instagram'></i>
                        <i className='bx bxl-tiktok'></i>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>YUMMY</h2>
                    <ul>
                        <li>Trang chủ</li>
                        <li>Về chúng tôi</li>
                        <li>Giao hàng</li>
                        <li>Chính sách bảo mật</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Liên lạc</h2>
                    <ul>
                        <li>0123456789</li>
                        <li>contact@yummy.vn</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">© YUMMY - Bản quyền thuộc về Công ty Cổ phần Yummy</p>
        </div>
    )
}

export default Footer