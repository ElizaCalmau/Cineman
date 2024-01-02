import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const InputSlice = createSlice({
    name: 'input',
    initialState: {
        inputValue: ''
    },
    reducers: {
        setInputValue: (state, action) => {
            state.inputValue = action.payload;
        }
    }
})

export const { setInputValue } = InputSlice.actions;
export const inputReducer = InputSlice.reducer;

export const useInputSelector = () => useSelector((state) => state.input.inputValue)
