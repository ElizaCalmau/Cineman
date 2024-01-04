import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./MoviesSlice/MoviesSlice";
import { inputReducer } from "./InputSlice/InputSlice";
import { rangeMovieReducer } from './YearsRangeSlice/YearRangeSlice'
import { titleReducer } from "./TitleSlice.jsx/TitleSlice";
export const store = configureStore({
    reducer:{
        films: movieReducer,
        input: inputReducer,
        yearsRange: rangeMovieReducer,
        title: titleReducer,
    }
})