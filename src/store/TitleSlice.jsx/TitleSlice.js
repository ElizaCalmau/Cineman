import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const fetchByTitle = createAsyncThunk( 'fetch-by-title',
    async ({value})=>{
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=499adc143510099427a185e36cd48fb2&query=${value}`)
        if (response.ok) {
            const data = await response.json();
            return data.results;
        }
        else {
            console.error(response.status, response.statusText)
        }
    }
    )

export const TitleSlice = createSlice({
    name: 'title',
    initialState: {
        title: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchByTitle.fulfilled, (state, action) => {
            state.title = action.payload;
        })
    }

})

export const titleReducer = TitleSlice.reducer;

export const useTitleSelector = () => useSelector((state) => state.title.title)