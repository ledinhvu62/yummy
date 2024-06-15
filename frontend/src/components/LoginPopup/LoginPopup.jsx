import React, { useState } from 'react'
import './LoginPopup.css'

const LoginPopup = ({ setShowLogin }) => {
    const [title, setTitle] = useState('Đăng nhập')

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{title}</h2>
                    <i onClick={() => setShowLogin(false)} className='bx bx-x'></i>
                </div>
                <div className="login-popup-inputs">
                    {title === 'Đăng ký' ? <input type='text' placeholder='Tên của bạn' required /> : <></> }
                    <input type='email' placeholder='Email của bạn' required />
                    <input type='password' placeholder='Mật khẩu' required />
                </div>
                <button>{title === 'Đăng ký' ? 'Tạo tài khoản' : 'Đăng nhập'}</button>
                {title === 'Đăng ký'
                    ? <div className="login-popup-condition">
                        <input type='checkbox' required />
                        <p>Tôi đồng ý với các điều khoản sử dụng và chính sách bảo mật của Yummy</p>
                    </div>
                    : <></>
                }
                {title === 'Đăng ký' ? <span onClick={() => setTitle('Đăng nhập')}>Đã có tài khoản?</span> : <span onClick={() => setTitle('Đăng ký')}>Tạo tài khoản?</span>}
            </form>
        </div>
    )
}

export default LoginPopup