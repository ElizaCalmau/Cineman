import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";


// const apiKey = '499adc143510099427a185e36cd48fb2';
export const fetchMovies = createAsyncThunk( 
    'fetch-movies',
    async ({value}) => {
        const id = parseInt(value)
        console.log(typeof id)
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=499adc143510099427a185e36cd48fb2`)
        if(response.ok){
            const data = await response.json();
            console.log(data)
            return data;
        }
        else{
            console.error(response.status, response.statusText)
        }
    }
)

export const MoviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: []
    },
    reducers: {},
    extraReducers: 
        (builder) => {
            builder.addCase(fetchMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
        }
})

export const movieReducer = MoviesSlice.reducer;

export const useMoviesSelector = () => useSelector((state) => state.films.movies)