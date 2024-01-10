import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
export const fetchTrailer = createAsyncThunk('fetch-trailer',
    async (id) => {
        const response  = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=499adc143510099427a185e36cd48fb2&append_to_response=videos`)
        if(response.ok){
            const data = await response.json();
            console.log(data)
            return data.videos.results[0];
        }
        else {
            console.error(response.status)
        }
        
    }
)

export const TrailerSlice = createSlice({
    name: 'trailer',
    initialState: {
        trailer: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTrailer.fulfilled, (state, action) => {
            state.trailer = action.payload;
        })
    }

})

export const trailerReducer = TrailerSlice.reducer;

export const useTrailerSlice = () => useSelector((state) => state.trailer.trailer)