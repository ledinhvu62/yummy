import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

    const [menu, setMenu] = useState('home')

    return (
        <div className='navbar'>
            <img src={logo} alt='' className='logo' />
            <ul className="navbar-menu">
                <li onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Trang chủ</li>
                <li onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>Món ăn</li>
                <li onClick={() => setMenu('mobile')} className={menu === 'mobile' ? 'active' : ''}>Mobile app</li>
                <li onClick={() => setMenu('contact')} className={menu === 'contact' ? 'active' : ''}>Liên hệ</li>
            </ul>
            <div className="navbar-right">
                <div className="navbar-right-item">
                    <i className='bx bx-search'></i>
                </div>
                <div className="navbar-right-item">
                    <i className='bx bx-shopping-bag'></i>
                    <div className="dot"></div>
                </div>
                <div className="navbar-right-item">
                    <button>Đăng nhập</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar