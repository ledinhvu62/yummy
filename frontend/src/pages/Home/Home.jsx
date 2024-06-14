import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

import menu from '../../assets/fake-data/menu'
import FoodCard from '../../components/FoodCard/FoodCard'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
    const [category, setCategory] = useState('all')

    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <div className='food-display'>
                <h2>Món ngon gần bạn</h2>
                <div className="food-display-list">
                    {menu.map(item => {
                        if (category === 'all' || category === item.categorySlug) {
                            return <FoodCard key={item.id} name={item.name} price={item.price} description={item.description} image={item.image} slug={item.slug} />
                        }
                    })}
                </div>
            </div>
            <AppDownload />
        </div>
    )
}

export default Home