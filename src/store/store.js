import { configureStore } from '@reduxjs/toolkit'
import movieoSlice from './movieoSlice'

export default configureStore({
  reducer: {
    movieoData: movieoSlice
  },
})