import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


export const fetchCategories = createAsyncThunk('fetch-categories', 
    async(value) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${value}?api_key=499adc143510099427a185e36cd48fb2`);
        if(response.ok){
            const data = await response.json();
            return data.results;
        }
        else {
            console.error(response.status)
        }
    })

export const HeroCategoriesSlice = createSlice({
    name: 'hero-categories',
    initialState: {
        categories: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
        })
    } 
})


export const categoriesReducer = HeroCategoriesSlice.reducer;

export const useCategoriesSelector = () => useSelector((state) => state.categories.categories)