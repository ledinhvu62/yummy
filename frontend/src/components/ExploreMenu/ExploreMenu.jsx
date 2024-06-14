import React from 'react'
import './ExploreMenu.css'

import categories from '../../assets/fake-data/category'

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Hôm nay ăn gì cùng Yummy</h1>
            <p className='explore-menu-text'>Ưu đãi bất ngờ cùng ngàn deal hấp dẫn, không lo về giá đến từ Bánh Mì PewPew, TocoToco, Rau Má Mix, Hồng Trà Ngô Gia, Xôi Mềm đang chờ đón bạn trong tháng 6 này</p>
            <div className='explore-menu-list'>
                {categories.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.categorySlug ? 'all' : item.categorySlug)} key={index} className='explore-menu-list-item'>
                            <img className={category === item.categorySlug ? 'active' : ''} src={item.image} alt='' />
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu