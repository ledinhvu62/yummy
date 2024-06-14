import React from 'react'
import './AppDownload.css'

import logo from '../../assets/google-play-apple-store-logo-icon.png'

const AppDownload = () => {
    return (
        <div className="app-download">
            <p>Trải nghiệm tốt hơn với Yummy App</p>
            <div className="app-download-platforms">
                <img src={logo} alt='' />
            </div>
        </div>
    )
}

export default AppDownload