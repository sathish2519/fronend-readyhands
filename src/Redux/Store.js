import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { alertsSlice } from './alertsSlice'


const rootReducer = combineReducers({
    alerts: alertsSlice.reducer,

})

export const Store = configureStore({
    reducer: rootReducer,
})

export default Store