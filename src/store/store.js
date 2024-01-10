import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./MoviesSlice/MoviesSlice";
import { inputReducer } from "./InputSlice/InputSlice";
import { rangeMovieReducer } from './YearsRangeSlice/YearRangeSlice'
import { titleReducer } from "./TitleSlice.jsx/TitleSlice";
import { categoriesReducer } from "./HeroCategoriesSlice/HeroCategoriesSlice";
import { detailsReducer } from './MovieDetailsSlice/MovieDetailsSlice'
import { trailerReducer } from "./TrailerSlice/TrailerSlice";

export const store = configureStore({
    reducer:{
        films: movieReducer,
        input: inputReducer,
        yearsRange: rangeMovieReducer,
        title: titleReducer,
        categories: categoriesReducer,
        details: detailsReducer,
        trailer: trailerReducer
    }
})