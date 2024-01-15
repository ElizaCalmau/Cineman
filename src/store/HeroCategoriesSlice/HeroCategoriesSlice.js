import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const fetchCategories = createAsyncThunk(
  "fetch-categories",
  async (value) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${value}?api_key=499adc143510099427a185e36cd48fb2`
    );
    if (response.ok) {
      const data = await response.json();
      return data.results;
    } else {
      console.error(response.status);
    }
  }
);

export const fetchByTitle = createAsyncThunk(
  "fetch-by-title",
  async ({ title, year }) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=499adc143510099427a185e36cd48fb2&query=${title}&year=${year}`
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data.results);
      return data.results;
    } else {
      console.error(response.status, response.statusText);
    }
  }
);

export const fetchByYears = createAsyncThunk(
  "fetch-by-years",
  async ({ start, end }) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=499adc143510099427a185e36cd48fb2&primary_release_date.gte=${start}&primary_release_date.lte=${end}`
    );
    if (response.ok) {
      const data = await response.json();
      return data.results;
    } else {
      console.error(response.status, response.statusText);
    }
  }
);

export const fetchByGenreAndYears = createAsyncThunk(
  "fetch-by-genre-years",
  async ({ start, end, genre }) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=499adc143510099427a185e36cd48fb2&with_genres=${genre}&primary_release_date.gte=${start}&primary_release_date.lte=${end}`
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data.results);
      return data.results;
    } else {
      console.error(response.status, response.statusText);
    }
  }
);

export const HeroCategoriesSlice = createSlice({
  name: "hero-categories",
  initialState: {
    categories: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(fetchByTitle.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(fetchByYears.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(fetchByGenreAndYears.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const categoriesReducer = HeroCategoriesSlice.reducer;

export const useCategoriesSelector = () =>
  useSelector((state) => state.categories.categories);
