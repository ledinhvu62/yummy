import React from 'react'
import { useDispatch } from 'react-redux'
import './FoodCard.css'

import numberWithCommas from '../../utils/numberWithCommas'

import { addItem } from '../../redux/cart/cartItemsSlice'

const FoodCard = ({ name, price, description, image, slug }) => {
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(addItem({
            slug,
            quantity: 1,
            price,
        }))
        alert('Thêm vào giỏ hàng thành công')
    }

    return (
        <div className='food-card'>
            <div className="food-card-img-container">
                <img src={image} alt='' className="food-card-image" />
                <div onClick={() => addToCart()} className='btn-add'><i className='bx bx-plus'></i></div>
            </div>
            <div className="food-card-info">
                <p className='food-card-name'>{name}</p>
                <p className="food-card-desc">{description}</p>
                <p className="food-card-price">{numberWithCommas(price)}đ</p>
            </div>
        </div>
    )
}

export default FoodCard