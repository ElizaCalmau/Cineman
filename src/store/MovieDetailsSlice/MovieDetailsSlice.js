import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";

export const fetchById = createAsyncThunk('fetch-details-by-id', 
    async (id) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=499adc143510099427a185e36cd48fb2`);
        if(response.ok){
            const data = await response.json();
            return data;
        }
        else {
            console.error(response.status)
        }
    })

export const MovieDetailsSlice = createSlice({
    name: 'movie-details',
    initialState: {
        details: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchById.fulfilled, (state, action) => {
            state.details = action.payload;
        })
    }
})

export const detailsReducer = MovieDetailsSlice.reducer;

export const useDetailsSelector = () => useSelector((state) => state.details.details)