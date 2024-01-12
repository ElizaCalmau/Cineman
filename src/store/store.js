import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./HeroCategoriesSlice/HeroCategoriesSlice";
import { detailsReducer } from './MovieDetailsSlice/MovieDetailsSlice'
import { trailerReducer } from "./TrailerSlice/TrailerSlice";
import { genreReducer } from "./GenreSlice/GenreSlice";

export const store = configureStore({
    reducer:{
        categories: categoriesReducer,
        details: detailsReducer,
        trailer: trailerReducer,
        genre: genreReducer
    }
})