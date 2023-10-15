import { configureStore } from '@reduxjs/toolkit'
//importing slice from  SLices
import homeSlice from './homeSlice'


export const store = configureStore({
    reducer: {
        home: homeSlice
    },
})