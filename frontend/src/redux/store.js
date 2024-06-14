import { configureStore } from '@reduxjs/toolkit'

import cartItemsSlice from './cart/cartItemsSlice'

export const store = configureStore({
    reducer: {
        cartItems: cartItemsSlice,
    }
})