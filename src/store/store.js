import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./MoviesSlice/MoviesSlice";
import { inputReducer } from "./InputSlice/InputSlice";
export const store = configureStore({
    reducer:{
        films: movieReducer,
        input: inputReducer
    }
})