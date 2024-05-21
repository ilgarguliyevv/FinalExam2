import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./slice/menuSlice.js"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})