import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./reducers.js"

const store = configureStore({
	reducer: todoReducer,
})

export default store;