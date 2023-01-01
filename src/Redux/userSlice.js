import { createSlice } from '@reduxjs/toolkit'

//alertslice
export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
    },
}

})

//exporting reducers from the alertslice
export const { setUser } = userSlice.actions;