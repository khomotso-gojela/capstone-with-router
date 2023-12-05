import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: []
}

const favSlicer = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        changeFav : (state,action) => {state.favorites = action.payload.filter(item => item.fav == true)},       
    }

})

export const { changeFav } = favSlicer.actions

export default favSlicer.reducer