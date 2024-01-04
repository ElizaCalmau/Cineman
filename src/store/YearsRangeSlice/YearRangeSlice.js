import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
export const fetchMoviesByRange = createAsyncThunk('fetch-movies-by-range',
    async () =>{
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=499adc143510099427a185e36cd48fb2&primary_release_date.gte=2010-01-01&primary_release_date.lte=2015-12-31');
        if (response.ok){
            const data = await response.json();
            console.log(data)
            return data.results;
        }
        else {
            console.log(response.status, response.statusText)
        }
    }
)

export const YearRangeSlice = createSlice({
    name: 'year_range',
    initialState: {
        moviesRange: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMoviesByRange.fulfilled, (state, action) => {
            state.moviesRange = action.payload
        })
    }
})

export const rangeMovieReducer = YearRangeSlice.reducer;

export const useRangeSelector = () => useSelector((state) => state.yearsRange.moviesRange)