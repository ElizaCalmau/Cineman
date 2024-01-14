import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const FavSlice = createSlice({
    name: 'fav',
    initialState: {
        fav: []
    },
    reducers: {
        addToFav: (state, action) => {
            state.fav.push(action.payload);
        },
        removeFromFav: (state, action) => {
            state.fav = state.fav.filter((el) => el.mov.id !== action.payload);
        }
    }
})

export const favReducer = FavSlice.reducer;
export const { addToFav, removeFromFav } = FavSlice.actions;
export const useFavSelector = () => useSelector((state) => state.fav.fav)