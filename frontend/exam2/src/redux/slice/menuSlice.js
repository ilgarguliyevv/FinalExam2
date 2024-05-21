import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  favorite: JSON.parse(localStorage.getItem("favorites")) || [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setBasket: (state,action) => {
        let elemIndex = state.basket(elem=> elem.id===action.payload._id)
        if (elemIndex=== -1) {
            state.basket=[...state.basket, {...action.payload, count: 1}]
        } else{
            state.basket[elemIndex].count++
        }
        localStorage.setItem("basket", JSON.stringify([...state.basket]))
    },
    setFavorites: (state,action) => {
        let elemIndex = state.favorite(elem=> elem.id===action.payload._id)
        if (elemIndex === -1) {
            state.favorite=[...state.favorite, {...action.payload}]
        } else{
            state.favorite=state.favorite.filter(el=> el._id !== action.payload._id)
        }
        localStorage.setItem("favorites", JSON.stringify([...state.favorite]))
    },
    decreaseCount: (state,action) => {
        let elemIndex = state.basket.findIndex(elem => elem._id == action.payload._id) 
        state.basket[elemIndex].count--
        if (action.payload.count === -1) {
            state.basket= state.basket.filter(elem =>elem._id !== action.payload._id)
            localStorage.setItem("basket", JSON.stringify([...state.basket]))
        }
        localStorage.setItem("basket", JSON.stringify([...state.basket]))
    },
    removeBasket: (state, action) => {
        state.basket= state.basket.filter(elem => elem._id !== action.payload._id)
        localStorage.setItem("basket", JSON.stringify([...state.basket]))
    },
    removeAllBasket: (state) => {
        state.basket = [],
        localStorage.setItem("basket", JSON.stringify([]))
    }
  },
})

export const { setBasket, setFavorites,decreaseCount,removeBasket,removeAllBasket } = counterSlice.actions

export default counterSlice.reducer