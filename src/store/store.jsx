import { configureStore } from '@reduxjs/toolkit'
import imageSlice from './reducers/imageSlice.jsx'

export const store = configureStore({
  reducer: {
    imageReducer: imageSlice,
    
  },
})