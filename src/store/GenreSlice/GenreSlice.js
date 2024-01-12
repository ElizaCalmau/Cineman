import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const GenreSlice = createSlice({
    name: 'genre',
    initialState: {
        genre: []
    },
    reducers: {
        sortGenre: (state, action) => {
            state.genre = action.payload;
        }
    }
})

export const genreReducer = GenreSlice.reducer;
export const { sortGenre } = GenreSlice.actions;
export const useGenreSelector = () => useSelector((state) => state.genre.genre)