import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const FavSlice = createSlice({
    name: 'fav',
    initialState: {
        fav: []
    },
    reducers: {
        addToFav: (state, action) => {
            const movieToAdd = action.payload;
            if (!state.fav.some((el) => el.mov.id === movieToAdd.mov.id)) {
                state.fav.push(movieToAdd);
            }
        },
        removeFromFav: (state, action) => {
            state.fav = state.fav.filter((el) => el.mov.id !== action.payload);
        }
    }
})

export const favReducer = FavSlice.reducer;
export const { addToFav, removeFromFav } = FavSlice.actions;
export const useFavSelector = () => useSelector((state) => state.fav.fav)